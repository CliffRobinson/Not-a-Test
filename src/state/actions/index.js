import { USER_REGISTERED, USER_DELETED, ALPHA_SORT_TOGGLED } from '../constants'

export function userRegistered(user) {
  return {
    type: USER_REGISTERED,
    payload: {
      user
    }
  }
}

export function userDeleted(id) {
  return {
    type: USER_DELETED,
    payload: {
      id
    }
  }
}

export function alphaSortToggled() {
  return {
    type: ALPHA_SORT_TOGGLED
  }
}
