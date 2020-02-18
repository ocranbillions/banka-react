import axios from 'axios';
import setAlert from './alert.action';
import setAuthToken from '../utils/setAuthToken';
import jwtDecode from 'jwt-decode';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_LOADING,
  AUTH_ERROR,
  LOGOUT
} from './types';



// Load User
export const loadUser = () => async dispatch => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
  
    try {
        const user = jwtDecode(localStorage.token);

        dispatch({
            type: USER_LOADED,
            payload: user,
        });

    } catch (error) {
        const { message } = error;
        dispatch(setAlert(message, 'danger'));
        dispatch({
            type: AUTH_ERROR
        });
    }
};

// Register user
export const register = (user) => async dispatch => {
    const config = { headers: { 'Content-Type': 'application/json' } };
  
    const body = JSON.stringify(user);
  
    dispatch({
      type: AUTH_LOADING
    })
    try {
        // const res = await axios.post('http://localhost:5000/api/v1/auth/signup', body, config);
        const res = await axios.post('https://bankalite.herokuapp.com/api/v1/auth/signup', body, config);
        const { token } = res.data.data;

        dispatch({
            type: LOGIN_SUCCESS,
            payload: token,
        });

        dispatch(loadUser());

    } catch (error) {
        const { message } = error.response.data;
        dispatch(setAlert(message, 'danger'));
        dispatch({
            type: LOGIN_FAIL
        });
    }
};


// Sign in User
export const signIn = (user) => async dispatch => {
    const config = { headers: { 'Content-Type': 'application/json' } };
  
    const body = JSON.stringify(user);
  
    dispatch({
      type: AUTH_LOADING
    })
    try {
        // const res = await axios.post('http://localhost:5000/api/v1/auth/signin', body, config);
        const res = await axios.post('https://bankalite.herokuapp.com/api/v1/auth/signin', body, config);
        const { token } = res.data.data;

        dispatch({
            type: REGISTER_SUCCESS,
            payload: token,
        });

        dispatch(loadUser());

    } catch (error) {
        const { message } = error.response.data;
        dispatch(setAlert(message, 'danger'));
        dispatch({
            type: REGISTER_FAIL
        });
    }
};


// Logout
export const logout = () => dispatch => {
    dispatch({ type: LOGOUT });
};