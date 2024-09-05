import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../actions/authActions.js'

const initialState = {
    status: "INITIAL",
    isAuthenticated: false,
    token: null,
    error: null,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                status: "SUCCESS",
                isAuthenticated: true,
                token: action.payload,
                error: null
            }
        case LOGIN_FAIL: {
            return {
                ...state,
                status: "FAIL",
                isAuthenticated: false,
                error: action.payload
            }
        }
        case LOGOUT: {
            return initialState
        }
        default:
            return state
    }
}