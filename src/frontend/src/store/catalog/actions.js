import Stay from '../../shared/models/FlightClass'
import { SortPreference } from '../../shared/enums'

import { API, graphqlOperation } from '@aws-amplify/api'
import { getStayBySchedule, getStay } from './graphql'

const catalogEndpoint =
  process.env.VUE_APP_CatalogEndpoint || 'no booking endpoint set'

/**
 *
 * Catalog [Vuex Module Action](https://vuex.vuejs.org/guide/actions.html) - fetchFlights retrieves all flights for a given date, departure and arrival from Catalog service.
 *
 * It uses SET_FLIGHTS mutation to update Catalog state with the latest flights.
 *
 * It also controls Flight Loader when fetching data from Catalog service.
 * @param {object} context - Vuex action context (context.commit, context.getters, context.state, context.dispatch)
 * @param {object} obj - Object containing params to filter flights from catalog
 * @param {Date} obj.date - Date in DD-MM-YYYY format
 * @param {string} obj.departure - Airport IATA to be filtered as departure
 * @param {string} obj.arrival - Airport IATA to be filtered as arrival
 * @param {string} obj.paginationToken - pagination token for loading additional flights
 * @returns {promise} - Promise representing whether flights from Catalog have been updated in the store
 * @see {@link SET_FLIGHTS} for more info on mutation
 * @see {@link SET_LOADER} for more info on mutation
 *  * @example
 * // exerpt from src/pages/FlightResults.vue
 * async mounted() {
 * // @ts-ignore
 * if (this.isAuthenticated) {
 *    await this.$store.dispatch("catalog/fetchFlights", {
 *       date: this.date,
 *       departure: this.departure,
 *       arrival: this.arrival
 *    });
 *
 *    this.filteredFlights = this.sortByDeparture(this.flights);
 * }
 */
export async function fetchStays(
  { commit },
  { date, checkIn, checkOut, paginationToken = '' }
) {
  console.group('store/booking/actions/fetchFlights')
  commit('SET_LOADER', true)

  var nextToken = paginationToken || null

  try {
    const stayOpts = {
      checkInDate: checkIn,
      checkOutDateCheckInDateDate: {
        beginsWith: {
          checkOutDate: checkOut,
          checkInDate: checkIn
        }
      },
      filter: { seatCapacity: { gt: 0 } },
      limit: 5,
      nextToken: nextToken
    }

    console.log('Fetching stay data')
    console.log(stayOpts)

    const {
      // @ts-ignore
      data: {
        getStayBySchedule: { items: stayData, nextToken: paginationToken }
      }
    } = await API.graphql(graphqlOperation(getStayBySchedule, stayOpts))

    // data mutations happen within a Flight class
    // here we convert graphQL results into an array of Flights
    // before committing to Vuex State Management
    const stays = stayData.map((stay) => new Stay(stay))

    console.log(stays)
    commit('STAYS', stays)
    commit('SET_STAY_PAGINATION', paginationToken)
    commit('SET_LOADER', false)
    commit('SORT_STAYS', SortPreference.EarliestCheckIn)
    console.groupEnd()
  } catch (error) {
    commit('SET_LOADER', false)
    console.error(error)
    console.groupEnd()
    throw new Error(error)
  }
}

/**
 *
 * Catalog [Vuex Module Action](https://vuex.vuejs.org/guide/actions.html) - fetchByFlightId retrieves a unique flight from Catalog service. Flight Number may be reused but not ID.
 *
 * Similarly to fetchFlights, it also controls Flight Loader when fetching data from Catalog service.
 *
 * **NOTE**: It doesn't mutate the store
 * @param {object} context - Vuex action context (context.commit, context.getters, context.state, context.dispatch)
 * @param {object} obj - Object containing params to filter flights from catalog
 * @param {string} obj.flightId - Flight Unique Identifier
 * @returns {promise} - Promise representing flight from Catalog service.
 * @see {@link SET_LOADER} for more info on mutation
 * @example
 * // excerpt from src/pages/FlightSelection.vue
 * async beforeMount() {
 *    if (this.isAuthenticated) {
 *        if (!this.flight) {
 *            this.selectedFlight = await this.$store.dispatch("catalog/fetchByFlightId", {
 *              flightId: this.flightId
 *            });
 *        }
 *    }
 * },
 */
export async function fetchByStayId({ commit }, { stayId }) {
  console.group('store/booking/actions/fetchByStayId')

  try {
    commit('SET_LOADER', true)
    const {
      // @ts-ignore
      data: { getStay: stayData }
    } = await API.graphql(graphqlOperation(getStay, { id: stayId }))

    const stay = new Stay(stayData)

    console.log(stay)
    commit('SET_LOADER', false)
    console.groupEnd()
    return stay
  } catch (error) {
    console.error(error)
    commit('SET_LOADER', false)
    console.groupEnd()
    throw new Error(error)
  }
}

/**
 *
 * Catalog [Vuex Module Action](https://vuex.vuejs.org/guide/actions.html) - sortFlightsByPreference sorts flights in current state based on SortPreference given.
 *
 * Similarly to fetchFlights, it also controls Flight Loader when fetching data from Catalog service.
 *
 * **NOTE**: It doesn't mutate the store
 * @param {object} context - Vuex action context (context.commit, context.getters, context.state, context.dispatch)
 * @param {SortPreference} preference - Sorting preferences
 * @see {@link SORT_FLIGHTS} for more info on mutation
 */
export function sortStaysByPreference({ commit }, preference) {
  commit('SORT_STAYS', preference)
}
