import { combineReducers } from 'redux';
import alertReducer from './alert.reducer';
import authReducer from './auth.reducer';
import accountReducer from './accounts.reducer';

export default combineReducers({
    alertReducer,
    authReducer,
    accountReducer,
});