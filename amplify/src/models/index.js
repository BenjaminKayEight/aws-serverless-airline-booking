// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const BookingStatus = {
  "UNCONFIRMED": "UNCONFIRMED",
  "CONFIRMED": "CONFIRMED",
  "CANCELLED": "CANCELLED"
};

const { Booking, Flight, Loyalty } = initSchema(schema);

export {
  Booking,
  Flight,
  BookingStatus,
  Loyalty
};