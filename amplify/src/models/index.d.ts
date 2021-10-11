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
  readonly status: BookingStatus | keyof typeof BookingStatus;
  readonly outboundFlight: Flight;
  readonly paymentToken: string;
  readonly checkedIn?: boolean;
  readonly customer?: string;
  readonly createdAt?: string;
  readonly bookingReference?: string;
  constructor(init: ModelInit<Booking>);
  static copyOf(source: Booking, mutator: (draft: MutableModel<Booking>) => MutableModel<Booking> | void): Booking;
}

export declare class Flight {
  readonly id: string;
  readonly departureDate: string;
  readonly departureAirportCode: string;
  readonly departureAirportName: string;
  readonly departureCity: string;
  readonly departureLocale: string;
  readonly arrivalDate: string;
  readonly arrivalAirportCode: string;
  readonly arrivalAirportName: string;
  readonly arrivalCity: string;
  readonly arrivalLocale: string;
  readonly ticketPrice: number;
  readonly ticketCurrency: string;
  readonly flightNumber: number;
  readonly seatAllocation?: number;
  readonly seatCapacity: number;
  constructor(init: ModelInit<Flight>);
  static copyOf(source: Flight, mutator: (draft: MutableModel<Flight>) => MutableModel<Flight> | void): Flight;
}