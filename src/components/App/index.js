import { mapIndexed, isUndefined } from 'ramda-adjunct'

import React from 'react'

export default function App({ handleOnSubmit, latestUser, users, nextUserId }) {
  
  return (
    <div className="App">
      {isUndefined(latestUser) 
        ? <p> Welcome to the app! No users have registered yet. </p>
        : <p> Welcome to the app! The latest user to register is ${latestUser.name}. </p>}
        Next user id will be {nextUserId}
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="user" />
        <input type="submit" value="Register user" />
      </form>
      <p>See the list below for everyone else who has registered.</p>
      <ul>{/* add the list of users */}</ul>
    </div>
  )
}
