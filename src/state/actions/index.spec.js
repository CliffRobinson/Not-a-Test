import {USER_REGISTERED, USER_DELETED, fakeExtraUser} from "../constants"

import {userRegistered, userDeleted} from "./"

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