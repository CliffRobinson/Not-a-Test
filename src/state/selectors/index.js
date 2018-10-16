import { head, pipe, reverse } from 'ramda'

export function getUsers({ users }) {
  return users
}

export const getLatestUser = pipe(
  getUsers,
  reverse,
  head
)

export const fakeUsers = [
  {id:0, name:"cliff"},
  {id:1, name:"chas"},
  {id:2, name:"ulli"}
]