// @ts-nocheck

import Stay from 'src/shared/models/StayClass'
import { SortPreference } from '../../shared/enums'
import {
  sortByLowestPrice,
  sortByHighestPrice,
  sortByEarliestCheckIn,
  sortByLatestCheckIn
} from '../../shared/sorters'

/**
 *
 * Catalog [Vuex Module Mutation](https://vuex.vuejs.org/guide/mutations.html) - SET_FLIGHT mutates Catalog state with an array of Flights as payload.
 * @param {object} state - Vuex Catalog Module State
 * @param {Flight[]} flights - Array of Flights
 * @see {@link fetchFlights} for more info on action that calls SET_FLIGHTS
 * @see {@link fetchByFlightNumber} for more info on action that calls SET_FLIGHTS
 */
export const SET_STAYS = async (state, stays) => {
  if (state.stays.length === 0) {
    state.stays = stays
  } else {
    // flatten array of flights and remove possible duplicates due to network issues
    let newStays = [...stays, state.stays].flat(5)
    state.stays = [...new Set(newStays)]
  }
}

/**
 *
 * Catalog [Vuex Module Mutation](https://vuex.vuejs.org/guide/mutations.html) - SET_LOADER mutates Catalog state to control content loader when necessary.
 * @param {object} state - Vuex Catalog Module State
 * @param {boolean} isLoading - Boolean that controls whether content loader should be running
 * @see {@link fetchFlights} for more info on action that calls SET_LOADER
 * @see {@link fetchByFlightNumber} for more info on action that calls SET_LOADER
 */
export const SET_LOADER = (state, isLoading) => {
  state.loading = isLoading
}

export const SET_STAY_PAGINATION = (state, paginationToken) => {
  state.paginationToken = paginationToken
}

/**
 * Catalog [Vuex Module Mutation](https://vuex.vuejs.org/guide/mutations.html) - SORT_FLIGHTS mutates Catalog flights state to sort flights with a given preference.
 * @param {object} state - Vuex Catalog Module State
 * @param {Flight[]} state.flights - Array of Flights
 * @param {SortPreference} preference - Sorting preference
 */
export const SORT_STAYS = (state, preference) => {
  switch (preference) {
    case SortPreference.LowestPrice:
      state.stays = sortByLowestPrice(state.stays)
      break

    case SortPreference.HighestPrice:
      state.stays = sortByHighestPrice(state.stays)
      break

    case SortPreference.EarliestCheckIn:
      state.stays = sortByEarliestCheckIn(state.stays)
      break

    case SortPreference.LatestCheckIn:
      state.stays = sortByLatestCheckIn(state.stays)
      break

    default:
      console.warn(`Unknown sorting preference: ${preference}, skipping...`)
      break
  }
}
