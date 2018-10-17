import { isNonEmptyString } from 'ramda-adjunct'
import { connect } from 'react-redux'

import App from '../../components/App'
import { userRegistered } from '../../state/actions'
import { getUsers, getLatestUser, getNextUserId } from '../../state/selectors'

function mapStateToProps(state, props) {
  return {
    users: getUsers(state),
    latestUser: getLatestUser(state),
    nextUserId: getNextUserId(state)
  }
}

function mapDispatchToProps(dispatch, props) {
  
  return {
    handleOnSubmit: (e, nextUserId) => { //See the component for notes on why I altered this. 
      e.preventDefault()
      const userInput = e.target.elements['user']
      console.log(props)
      const userObj = {
        name:userInput.value,
        id: nextUserId
      }
      if (isNonEmptyString(userInput.value)) {
        console.log(`Adding:`)
        console.log(userObj)
        dispatch(userRegistered(userObj))
        userInput.value = ''
      }
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
