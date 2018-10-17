import { isNonEmptyString } from 'ramda-adjunct'

import { initialState, USER_REGISTERED, USER_DELETED } from '../constants'

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
    default:
      return state
  }
  return state
}
