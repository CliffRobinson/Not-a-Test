import { mapIndexed, isUndefined } from 'ramda-adjunct'

import React from 'react'

export default function App(props) {
  const { handleOnSubmit, latestUser, users, nextUserId } = props
  //console.log(props);
  return (
    <div className="App">
      {isUndefined(latestUser) 
        ? <p> Welcome to the app! No users have registered yet. </p>
        : <p> Welcome to the app! The latest user to register is {latestUser.name}. </p>}
      <form onSubmit={(e) => handleOnSubmit(e, nextUserId)}> 
      {/* I've altered this function to take the nextUserId key I inserted into props, to give a unique ID for deletion. */}
        <input type="text" name="user" />
        <input type="submit" value="Register user" />
      </form>
      <p>See the list below for everyone else who has registered.</p>
      <ul>{/* add the list of users */}</ul>
    </div>
  )
}
