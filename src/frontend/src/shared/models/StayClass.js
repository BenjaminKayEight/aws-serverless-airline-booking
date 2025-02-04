// @ts-ignore
import { date } from 'quasar'
/** Class representing a Flight from Catalog service. All permutations of data from Catalog, a different date format for instance, should happen here. */
export default class Stay {
  /**
   * Creates an instance of Flight.
   * @param {Object} Flight
   * @param {string} [Flight.id] - Flight ID
   * @param {string} Flight.departureCity - Departure City (e.g London)
   * @param {string} Flight.departureDate - Departure Date (e.g 2019-01-16T08:00+0000)
   * @param {string} Flight.departureAirportCode - Airport IATA code (e.g LGW)
   * @param {string} Flight.departureAirportName - Airport known name (e.g London Gatwick)
   * @param {string} Flight.departureLocale - Timezone departure city is (e.g Europe/London)
   * @param {string} Flight.arrivalCity - Arrival City (e.g Madrid)
   * @param {string} Flight.arrivalDate - Arrival Date (e.g 2019-01-16T11:15+1000)
   * @param {string} Flight.arrivalAirportCode - Airport IATA code (e.g MAD)
   * @param {string} Flight.arrivalAirportName - Airport known name (e.g Madrid)
   * @param {string} Flight.arrivalLocale - Timezone arrival city is (e.g Europe/Madrid)
   * @param {number} Flight.ticketPrice - Flight Ticket price
   * @param {string} Flight.ticketCurrency - Monetary currency name for flight ticket (e.g EUR)
   * @param {number} Flight.flightNumber - Flight number
   * @param {string} Flight.seatAllocation - Deprecated: use seatCapacity instead
   * @param {number} Flight.seatCapacity - Flight's passenger capacity (e.g. 200)
  
   * @example
   * let flight = new Flight({
   *    id: "173ec46b-0e12-45fe-9ba1-511abde3d318",
   *    departureDate: "2019-01-16T08:00+0000",
   *    departureAirportCode: "LGW",
   *    departureAirportName: "London Gatwick",
   *    departureCity: "London",
   *    departureLocale: "Europe/London",
   *    arrivalDate: "2019-01-16T10:15+0000",
   *    arrivalAirportCode: "MAD",
   *    arrivalAirportName: "Madrid Barajas",
   *    arrivalCity: "Madrid",
   *    arrivalLocale: "Europe/Madrid",
   *    ticketPrice: 400,
   *    ticketCurrency: "EUR",
   *    flightNumber: 1812
   * })
   */
  constructor({
    id,
    checkInDate,
    checkOutDate,
    stayPrice,
    bedBooked
  }) {
    this.id = id
    this.bedCode= bedCode
    this.checkInDate = new Date(checkInDate)
    this.checkOutDate = new Date(checkOutDate)
    this.stayPrice = stayPrice
    this.bedBooked = bedBooked
  }
  /**
   * Get the flight duration between departure and arrival
   * @type {string}
   * @readonly
   * @return {string} Flight duration (e.g. 2h15m)
   */
  get stayDuration() {
    let unit = 'minutes'
    let timeDiffInMinutes = Math.abs(
      date.getDateDiff(this.checkInDate, this.checkOutDate, unit)
    )

    let hours = Math.floor(timeDiffInMinutes / 60)
    let minutes = timeDiffInMinutes - hours * 60

    return `${hours}h${minutes}m`
  }

  /**
   * Get the departure time formatted in 24h and converted to departure timezone
   * @type {string}
   * @readonly
   * @return {string} Formatted 24h time (e.g 08:00)
   */
  get checkInTime() {
    var options = {
      hour: '2-digit',
      minute: '2-digit'
    }

    let checkInTime = this.checkInDate.toLocaleString('en-GB', options)

    return checkInTime
  }

  /**
   * Get the departure time formatted in 24h and converted to departure timezone
   * @type {string}
   * @readonly
   * @return {string} Formatted 24h time (e.g 08:00)
   */
  get checkOutTime() {
    var options = {
      hour: '2-digit',
      minute: '2-digit'
    }

    let checkOutTime = this.checkOutDate.toLocaleString('en-GB', options)

    return checkOutTime
  }
}
