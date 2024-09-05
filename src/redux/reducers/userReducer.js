import { GET_USER_PROFILE, EDIT_USER_NAME } from "../actions/userActions"

const initialState = {
    status: "INITIAL",
    userData: {},
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_PROFILE:
            return {
                ...state,
                status: "SUCCESS",
                UserData: action.payload,
            }
        case EDIT_USER_NAME: {
            return {
                ...state,
                status: "MODIFIED",
                userData: {
                    ...state.userData,
                    username: action.payload
                }
            }
        }
        default:
            return state
    }
}