export const LOGIN_REQUEST = 'LOGIN_REQUEST';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT = 'LOGOUT';

// Action pour démarrer la connexion
export const loginRequest = () => {
    return {
        type: LOGIN_REQUEST,
    }
}

// Action pour une connexion réussie
export const loginSuccess = (token) => {
    return {
        type: LOGIN_SUCCESS,
        payload: token,
    }
}

// Action pour une connexion échouée
export const loginFailure = (error) => {
    return {
        type: LOGIN_FAILURE,
        payload: error,
    }
}

// Action pour la déconnexion
export const logout = () => {
    return {
        type: LOGOUT,
    }
} 