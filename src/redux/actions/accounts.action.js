import axios from 'axios';
import {
    FETCHING_ACCOUNTS,
    ACCOUNTS_FETCHED,
    ACCOUNT_FETCH_FAILED,
} from './types';

export const fetchUserAccounts = (id) => async dispatch => {
    dispatch({
        type: FETCHING_ACCOUNTS
    })

    try {
        // const res = await axios.get(`http://localhost:5000/api/v1/users/${id}/accounts`);
        const res = await axios.get(`https://bankalite.herokuapp.com/api/v1/users/${id}/accounts`);

        const { accounts } = res.data.data;
        dispatch({
            type: ACCOUNTS_FETCHED,
            payload: accounts
        });

    } catch (error) {
        const { message } = error.response.data;
        console.log(message);
        dispatch({
            type: ACCOUNT_FETCH_FAILED
        });
    }
};
