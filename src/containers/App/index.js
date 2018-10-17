import { isNonEmptyString } from 'ramda-adjunct'
import { connect } from 'react-redux'

import App from '../../components/App'
import { userRegistered, alphaSortToggled } from '../../state/actions'
import { getUsers, getLatestUser, getNextUserId, getAlphaSort } from '../../state/selectors'

function mapStateToProps(state, props) {
  return {
    users: getUsers(state),
    latestUser: getLatestUser(state),
    nextUserId: getNextUserId(state),
    alphaSort: getAlphaSort(state)
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
    },
    handleClick: (e) => {
      console.log("toggling alpha sort")
      dispatch(alphaSortToggled())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
