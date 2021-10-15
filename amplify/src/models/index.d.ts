import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum BookingStatus {
  UNCONFIRMED = "UNCONFIRMED",
  CONFIRMED = "CONFIRMED",
  CANCELLED = "CANCELLED"
}

export declare class Loyalty {
  readonly points?: number;
  readonly level?: string;
  readonly remainingPoints?: number;
  constructor(init: ModelInit<Loyalty>);
}

export declare class Booking {
  readonly id: string;
  readonly status?: BookingStatus | keyof typeof BookingStatus;
  readonly paymentToken?: string;
  readonly checkedIn?: boolean;
  readonly customer?: string;
  readonly createdAt?: string;
  readonly BookingReference?: string;
  readonly stayBooked?: Stay;
  constructor(init: ModelInit<Booking>);
  static copyOf(source: Booking, mutator: (draft: MutableModel<Booking>) => MutableModel<Booking> | void): Booking;
}

export declare class Stay {
  readonly id: string;
  readonly checkInDate?: string;
  readonly checkOutDate?: string;
  readonly stayPrice?: number;
  readonly bedBooked?: Bed;
  constructor(init: ModelInit<Stay>);
  static copyOf(source: Stay, mutator: (draft: MutableModel<Stay>) => MutableModel<Stay> | void): Stay;
}

export declare class Bed {
  readonly id: string;
  readonly bedCode: string;
  constructor(init: ModelInit<Bed>);
  static copyOf(source: Bed, mutator: (draft: MutableModel<Bed>) => MutableModel<Bed> | void): Bed;
}