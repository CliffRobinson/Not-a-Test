import { USER_REGISTERED, USER_DELETED } from '../constants'

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
