// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const BookingStatus = {
  "UNCONFIRMED": "UNCONFIRMED",
  "CONFIRMED": "CONFIRMED",
  "CANCELLED": "CANCELLED"
};

const { Booking, Stay, Bed, Loyalty } = initSchema(schema);

export {
  Booking,
  Stay,
  Bed,
  BookingStatus,
  Loyalty
};