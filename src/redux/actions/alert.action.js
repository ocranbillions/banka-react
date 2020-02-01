import uuid from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

const setAlert = (msg, alertType) => dispatch => {
    const id = uuid.v4();
    dispatch({
        type: SET_ALERT,
        payload: { msg, alertType, id }
    });

    // dispatch remove alert after 3 seconds
    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 3000);
};

export default setAlert;