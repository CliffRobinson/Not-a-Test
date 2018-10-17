import {fakeUsers, fakeExtraUser, initialState, USER_REGISTERED} from "../constants"
import rootReducer from "./"


test("Test suite is working", ()=> {
    expect(true).toBeTruthy()
})

test("initial state", ()=> {
    const action = {
        type:"butts lol"
    }

    expect(rootReducer(undefined, action)).toEqual(initialState)
})

test("add user to empty array case", ()=> {
    const action = {
        type: USER_REGISTERED,
        payload: {
            user:fakeExtraUser
        }
    }
    const expectedState = {
        nextUserId:1,
        users:[fakeExtraUser]
    }
    expect(rootReducer(undefined, action)).toEqual(expectedState)
})

test("add user to existing array case", ()=> {
    const action = {
        type: USER_REGISTERED,
        payload: {
            user:fakeExtraUser
        }
    }

    const existingState = {
        nextUserId:3,
        users:fakeUsers
    }

    const expectedState = {
        nextUserId:4,
        users:[...fakeUsers, fakeExtraUser]
    }
    expect(rootReducer(existingState, action)).toEqual(expectedState)
})