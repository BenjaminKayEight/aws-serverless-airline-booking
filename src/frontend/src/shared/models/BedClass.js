// @ts-ignore
import { date } from 'quasar'
/** Class representing a Flight from Catalog service. All permutations of data from Catalog, a different date format for instance, should happen here. */
export default class Bed {
  constructor({
    id,
    bedCode
  }) {
    this.id = id
    this.bedCode= bedCode
  }
}
