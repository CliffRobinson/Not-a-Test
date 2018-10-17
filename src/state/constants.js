export const USER_REGISTERED = 'USER_REGISTERED'
export const USER_DELETED = 'USER_DELETED'
export const ALPHA_SORT_TOGGLED = 'ALPHA_SORT_TOGGLED'

export const initialState = {
  users: [],
  nextUserId:0, //Users will have unique IDs to allow easy deletion (and editing in future), and we will determine this by referring to state. 
  alphaSort: false
  //We'll store whether we are alpha sorting in redux, and dispatch true/false to switch between alpha and default (Chronological) sorts. 
}

export const fakeUsers = [
  {id:0, name:"cliff"},
  {id:1, name:"chas"},
  {id:2, name:"ulli"}
]

export const fakeExtraUser = {
  id:3, 
  name:"reuben"
}