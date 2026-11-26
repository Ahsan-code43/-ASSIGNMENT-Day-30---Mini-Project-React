import { getData } from './api.js'

export function getMentors() {
  return getData('/users?limit=6')
}