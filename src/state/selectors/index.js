import { head, pipe, reverse } from 'ramda'

export function getUsers({ users }) {
  return users
}

export function getNextUserId({nextUserId}) {
  return nextUserId
}

export const getLatestUser = pipe(
  getUsers,
  reverse,
  head
)
