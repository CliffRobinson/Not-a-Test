import { head, pipe, reverse } from 'ramda'

export function getUsers({ users }) {
  return users
}

export function getNextUserId({nextUserId}) {
  return nextUserId
}

export function getAlphaSort({alphaSort}) {
  return alphaSort
}

export const getLatestUser = pipe(
  getUsers,
  reverse,
  head
)
