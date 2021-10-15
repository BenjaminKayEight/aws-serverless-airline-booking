/**
 * Sort flights by departureDate property - Earliest to latest departure
 *
 * @param {Flights[]} flights - Flights to be sorted
 * @returns {Flights[]} flights - Flights sorted
 * @example
 * // return flights from earliest to latest departure
 * const filteredFlights = sortByEarliestDeparture(flights)
 */
export const sortByEarliestCheckIn = (stays) => {
  return stays.sort((a, b) => {
    const checkInA = new Date(a.checkInDate)
    const checkInB = new Date(b.checkInDate)
    return checkInA.getTime() - checkInB.getTime()
  })
}

/**
 * Sort flights by departureDate property - Latest to earliest departure
 *
 * @param {Flights[]} flights - Flights to be sorted
 * @returns {Flights[]} flights - Flights sorted
 * @example
 * // return flights from earliest to latest departure
 * const filteredFlights = sortByLatestDeparture(flights)
 */
export const sortByLatestCheckIn = (stays) => {
  return stays.sort((a, b) => {
    const checkInA = new Date(a.checkInDate)
    const checkInB = new Date(b.checkInDate)
    return checkInB.getTime() - checkInA.getTime()
  })
}
