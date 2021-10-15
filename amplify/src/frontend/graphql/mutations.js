/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const processBooking = /* GraphQL */ `
  mutation ProcessBooking($input: CreateBookingInput!) {
    processBooking(input: $input) {
      id
      status
      paymentToken
      checkedIn
      customer
      createdAt
      BookingReference
      _version
      _deleted
      _lastChangedAt
      updatedAt
      stayBooked {
        id
        checkInDate
        checkOutDate
        stay
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const createBed = /* GraphQL */ `
  mutation CreateBed(
    $input: CreateBedInput!
    $condition: ModelBedConditionInput
  ) {
    createBed(input: $input, condition: $condition) {
      id
      bedCode
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateBed = /* GraphQL */ `
  mutation UpdateBed(
    $input: UpdateBedInput!
    $condition: ModelBedConditionInput
  ) {
    updateBed(input: $input, condition: $condition) {
      id
      bedCode
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteBed = /* GraphQL */ `
  mutation DeleteBed(
    $input: DeleteBedInput!
    $condition: ModelBedConditionInput
  ) {
    deleteBed(input: $input, condition: $condition) {
      id
      bedCode
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createStay = /* GraphQL */ `
  mutation CreateStay(
    $input: CreateStayInput!
    $condition: ModelStayConditionInput
  ) {
    createStay(input: $input, condition: $condition) {
      id
      checkInDate
      checkOutDate
      stay
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateStay = /* GraphQL */ `
  mutation UpdateStay(
    $input: UpdateStayInput!
    $condition: ModelStayConditionInput
  ) {
    updateStay(input: $input, condition: $condition) {
      id
      checkInDate
      checkOutDate
      stay
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteStay = /* GraphQL */ `
  mutation DeleteStay(
    $input: DeleteStayInput!
    $condition: ModelStayConditionInput
  ) {
    deleteStay(input: $input, condition: $condition) {
      id
      checkInDate
      checkOutDate
      stay
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createFlight = /* GraphQL */ `
  mutation CreateFlight(
    $input: CreateFlightInput!
    $condition: ModelFlightConditionInput
  ) {
    createFlight(input: $input, condition: $condition) {
      id
      departureDate
      departureAirportCode
      departureAirportName
      departureCity
      departureLocale
      arrivalDate
      arrivalAirportCode
      arrivalAirportName
      arrivalCity
      arrivalLocale
      ticketPrice
      ticketCurrency
      flightNumber
      seatAllocation
      seatCapacity
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateFlight = /* GraphQL */ `
  mutation UpdateFlight(
    $input: UpdateFlightInput!
    $condition: ModelFlightConditionInput
  ) {
    updateFlight(input: $input, condition: $condition) {
      id
      departureDate
      departureAirportCode
      departureAirportName
      departureCity
      departureLocale
      arrivalDate
      arrivalAirportCode
      arrivalAirportName
      arrivalCity
      arrivalLocale
      ticketPrice
      ticketCurrency
      flightNumber
      seatAllocation
      seatCapacity
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteFlight = /* GraphQL */ `
  mutation DeleteFlight(
    $input: DeleteFlightInput!
    $condition: ModelFlightConditionInput
  ) {
    deleteFlight(input: $input, condition: $condition) {
      id
      departureDate
      departureAirportCode
      departureAirportName
      departureCity
      departureLocale
      arrivalDate
      arrivalAirportCode
      arrivalAirportName
      arrivalCity
      arrivalLocale
      ticketPrice
      ticketCurrency
      flightNumber
      seatAllocation
      seatCapacity
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createBooking = /* GraphQL */ `
  mutation CreateBooking(
    $input: CreateBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    createBooking(input: $input, condition: $condition) {
      id
      status
      paymentToken
      checkedIn
      customer
      createdAt
      BookingReference
      _version
      _deleted
      _lastChangedAt
      updatedAt
      stayBooked {
        id
        checkInDate
        checkOutDate
        stay
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const updateBooking = /* GraphQL */ `
  mutation UpdateBooking(
    $input: UpdateBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    updateBooking(input: $input, condition: $condition) {
      id
      status
      paymentToken
      checkedIn
      customer
      createdAt
      BookingReference
      _version
      _deleted
      _lastChangedAt
      updatedAt
      stayBooked {
        id
        checkInDate
        checkOutDate
        stay
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const deleteBooking = /* GraphQL */ `
  mutation DeleteBooking(
    $input: DeleteBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    deleteBooking(input: $input, condition: $condition) {
      id
      status
      paymentToken
      checkedIn
      customer
      createdAt
      BookingReference
      _version
      _deleted
      _lastChangedAt
      updatedAt
      stayBooked {
        id
        checkInDate
        checkOutDate
        stay
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
