export const GET_USER_PROFILE = "GET_USER_PROFILE"

export const EDIT_USER_NAME = "EDIT_USERNAME"

export const userProfile = (userData) => {
    return {
        type: GET_USER_PROFILE,
        payload: userData,
    }
}

export const updateUsername = (username) => {
    return {
        type: EDIT_USER_NAME,
        payload: username,
    }
}