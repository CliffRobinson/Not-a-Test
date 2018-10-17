import { mapIndexed, isUndefined } from 'ramda-adjunct'
import {sort} from 'ramda'
import React from 'react'

function sortByName(objA, objB) {
  if (objA.name < objB.name) {
    return -1
  } else if (objA.name > objB.name) {
    return 1
  } else {
    return 0
  }
}

export default function App(props) {
  const { handleOnSubmit, latestUser, users, nextUserId, alphaSort } = props
  //console.log(props);
  //By doing the destructuring outside of the app function declation, I can see what is actually being fed to props. 
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
      <button onClick={()=> console.log("lol")} >Sort Alphabetically</button>
      <p>See the list below for everyone else who has registered.</p>
      <ul>
        {alphaSort 
          ? users.sort(sortByName).map( (user) => {return (<li>{user.name}</li>)})
          : users.map( (user) => {return (<li>{user.name}</li>)})
        }
      </ul>
    </div>
  )
}
