/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLoyalty = /* GraphQL */ `
  query GetLoyalty($customer: String) {
    getLoyalty(customer: $customer) {
      points
      level
      remainingPoints
    }
  }
`;
export const getBed = /* GraphQL */ `
  query GetBed($id: ID!) {
    getBed(id: $id) {
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
export const listBeds = /* GraphQL */ `
  query ListBeds(
    $filter: ModelBedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBeds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        bedCode
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBeds = /* GraphQL */ `
  query SyncBeds(
    $filter: ModelBedFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBeds(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        bedCode
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getStay = /* GraphQL */ `
  query GetStay($id: ID!) {
    getStay(id: $id) {
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
export const listStays = /* GraphQL */ `
  query ListStays(
    $filter: ModelStayFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStays(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncStays = /* GraphQL */ `
  query SyncStays(
    $filter: ModelStayFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStays(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getFlight = /* GraphQL */ `
  query GetFlight($id: ID!) {
    getFlight(id: $id) {
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
export const listFlights = /* GraphQL */ `
  query ListFlights(
    $filter: ModelFlightFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFlights(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getFlightBySchedule = /* GraphQL */ `
  query GetFlightBySchedule(
    $departureAirportCode: String
    $arrivalAirportCodeDepartureDate: ModelFlightByDepartureScheduleCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelFlightFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getFlightBySchedule(
      departureAirportCode: $departureAirportCode
      arrivalAirportCodeDepartureDate: $arrivalAirportCodeDepartureDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncFlights = /* GraphQL */ `
  query SyncFlights(
    $filter: ModelFlightFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFlights(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getBooking = /* GraphQL */ `
  query GetBooking($id: ID!) {
    getBooking(id: $id) {
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
export const listBookings = /* GraphQL */ `
  query ListBookings(
    $filter: ModelBookingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getBookingByStatus = /* GraphQL */ `
  query GetBookingByStatus(
    $customer: String
    $status: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBookingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getBookingByStatus(
      customer: $customer
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncBookings = /* GraphQL */ `
  query SyncBookings(
    $filter: ModelBookingFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBookings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
