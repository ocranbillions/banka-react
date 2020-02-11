import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_LOADING,
    AUTH_ERROR,
    LOGOUT,
} from '../actions/types';
  
const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    loading: false,
    user: null
};
  
export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case AUTH_LOADING:
            return {
                ...state,
                loading: true,
            }
        case REGISTER_SUCCESS:
            const token = payload;
            localStorage.setItem('token', token);
            return {
                ...state,
                token: token,
                isAuthenticated: true,
                loading: false,
            };
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                user: payload
            };
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null,
            };
        default:
            return state;
    }
}