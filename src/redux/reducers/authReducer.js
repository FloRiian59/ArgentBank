import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/authActions.js';

const initialState = {
    status: false,
    token: null,
    error: null,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                status: "SUCCEEDED",
                loading: false,
                token: action.payload,
                error: null,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                status: "FAILED",
                loading: false,
                token: null,
                error: action.payload,
            };
        case LOGOUT:
            return initialState
                ;
        default:
            return state;
    }
}