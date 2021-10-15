import json
import os

import boto3
from botocore.exceptions import ClientError

session = boto3.Session()
dynamodb = session.resource('dynamodb')
table = dynamodb.Table(os.environ['STAY_TABLE_NAME'])


class StayReservationException(Exception):
    pass


class StayFullyBookedException(StayReservationException):
    pass


class StayDoesNotExistException(StayReservationException):
    pass


def reserve_bed_on_stay(stay_id):
    try:
        table.update_item(
            Key={"id": stay_id},
            ConditionExpression="id = :idVal AND bedCapacity > zero",
            UpdateExpression="SET bedCapacity = bedCapacity - :dec",
            ExpressionAttributeValues={
                ":idVal": stay_id,
                ":dec": 1,
                ":zero": 0
            },
        )

        return {
            'status': 'SUCCESS'
        }
    except dynamodb.meta.client.exceptions.ConditionalCheckFailedException as e:
        # Due to no specificity from the DDB error, this could also mean the flight
        # doesn't exist, but we should've caught that earlier in the flow.
        # TODO: Fix that. Could either use TransactGetItems, or Get then Update.
        raise StayFullyBookedException(f"Stay with ID: {stay_id} is fully booked.")
    except ClientError as e:
        raise StayReservationException(e.response['Error']['Message'])


def lambda_handler(event, context):
    if 'stayBookedId' not in event:
        raise ValueError('Invalid arguments')

    try:
        ret = reserve_bed_on_stay(event['stayBookedId'])
    except StayReservationException as e:
        raise StayReservationException(e)

    return json.dumps(ret)
