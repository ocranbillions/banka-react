import {
    FETCHING_ACCOUNTS,
    ACCOUNTS_FETCHED,
    ACCOUNT_FETCH_FAILED,
    CLEAR_ACCOUNTS
} from '../actions/types';
  
const initialState = {
    accounts: [],
    fetching_accounts: false,
    error: null
};
  
export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case FETCHING_ACCOUNTS:
            return {
                ...state,
                fetching_accounts: true,
            }
        case ACCOUNTS_FETCHED:
            return {
                ...state,
                accounts: [...payload],
                fetching_accounts: false,
            };
        case ACCOUNT_FETCH_FAILED:
        case CLEAR_ACCOUNTS:
            return {
                ...state,
                accounts: [],
                fetching_accounts: false,
                error: null
            };
        default:
            return state;
    }
}