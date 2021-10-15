export const getStayBySchedule = `query GetStayBySchedule(
  $checkInDate: String
  $checkOutDateCheckInDate: ModeStayByCheckInScheduleCompositeKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelStayFilterInput
  $limit: Int
  $nextToken: String
) {
  getStayBySchedule(
    checkOutDateCheckInDate: $checkOutDateCheckInDate
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      checkInDate
      checkOutDate
      stayPrice
      bedCapacity
      bedBooked
    }
    nextToken
  }
}
`

export const getStay = `query GetStay($id: ID!) {
  getStay(id: $id) {
    id
    checkInDate
    checkOutDate
    stayPrice
    bedCapacity
    bedBooked
  }
}
`
