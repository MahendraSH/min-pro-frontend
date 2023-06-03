import {
    GET_GALARY_REQUEST,
    GET_GALARY_SUCCESS,
    GET_GALARY_FAIL,
    CLEAR_ERRORS,

} from '../contains/galaryContains';

import axios from 'axios';

export const getGalary = () => async (dispatch) => {
    try {
        dispatch({ type: GET_GALARY_REQUEST });
        const api = process.env.REACT_APP_API_URL +'/api/landing/all'
        const { data } = await axios.get(api);

        dispatch({
            type: GET_GALARY_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: GET_GALARY_FAIL,
            payload: error.response.data.message
        });
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    });
}
