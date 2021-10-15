export const processBooking = `mutation ProcessBooking($input: CreateBookingInput!) {
  processBooking(input: $input) {
    id
  }
}
`

export const getBookingByStatus = `query GetBookingByStatus(
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
      stay {
        id
        checkInDate
       checkOutDate
        stayPrice
       bedCapacity
       bedBooked
    }
      }
      paymentToken
      checkedIn
      customer
      createdAt
      bookingReference
    }
    nextToken
  }
}
`
