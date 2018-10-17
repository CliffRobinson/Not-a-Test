import {USER_REGISTERED, USER_DELETED, ALPHA_SORT_TOGGLED, fakeExtraUser} from "../constants"

import {userRegistered, userDeleted, alphaSortToggled} from "./"

test("userRegistered", ()=> {
    const expected = {
        type: USER_REGISTERED,
        payload: {
            user:fakeExtraUser
        }
    }
    expect(userRegistered(fakeExtraUser)).toEqual(expected)
})

test("userDeleted", ()=> {
    const expected = {
        type: USER_DELETED,
        payload: {
            id:fakeExtraUser.id
        }
    }
    expect(userDeleted(fakeExtraUser.id)).toEqual(expected)
})

test("alphaSortToggled", ()=> {
    const expected = {
        type: ALPHA_SORT_TOGGLED,
    }
    expect(alphaSortToggled()).toEqual(expected)
})