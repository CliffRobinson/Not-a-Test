export const USER_REGISTERED = 'USER_REGISTERED'

export const initialState = {
  users: [],
  nextUserId:0 //Users will have unique IDs to allow easy deletion (and editing in future), and we will determine this by referring to state. 
}
