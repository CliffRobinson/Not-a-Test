import { isNonEmptyString } from 'ramda-adjunct'

import { initialState, USER_REGISTERED, USER_DELETED, ALPHA_SORT_TOGGLED } from '../constants'

export default function rootReducer(
  state = initialState,
  { type, payload = {} }
) {
  switch (type) {
    case USER_REGISTERED:
      return payload.user && isNonEmptyString(payload.user.name)
        ? {
            ...state,
            users: [...state.users, payload.user],
            nextUserId:(state.nextUserId+1)
          }
        : state
    case USER_DELETED:
      const idToDelete = payload.id
      const newUsers = state.users.slice().filter((user) => user.id != idToDelete);
      return {
        ...state,
        users:newUsers
      }
    case ALPHA_SORT_TOGGLED:
      const newAlphaSort = !state.alphaSort
      return {
        ...state,
        alphaSort:newAlphaSort
      }
    default:
      return state
  }
  return state
}
