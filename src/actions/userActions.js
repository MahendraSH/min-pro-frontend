
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_FAIL,
    USER_LOGIN_SUCCESS,
    USER_REGISTER_REQUEST,
    USER_REGISTER_FAIL,
    USER_REGISTER_SUCCESS,
    LOAD_USER_FAIL,
    LOAD_USER_SUCCESS,
    LOAD_USER_REQUEST,
    LOGOUT_FAIL,
    LOGOUT_SUCCESS,
    CLEAR_ERRORS,
} from '../contains/userContains';
import axios from 'axios';
axios.defaults.withCredentials = true;
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST });

        const config = {
            headers: {
                'Content-Type': 'application/json',
            }, withCredentials: 'include',
        };
        const api = process.env.REACT_APP_API_URL;
        const { data } = await axios.post(api + '/api/user/login',
            { email, password },
            config,


        );

        dispatch({ type: USER_LOGIN_SUCCESS, payload: data.user });
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response.data.message,
        });
    }
}

export const register = (userData) => async (dispatch) => {
    try {
        dispatch({ type: USER_REGISTER_REQUEST });

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            }, withCredentials: 'include',
        };
        const api = process.env.REACT_APP_API_URL;
        const { data } = await axios.post(api + '/api/user/register',
            userData,
            config
        );

        dispatch({ type: USER_REGISTER_SUCCESS, payload: data.user });
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response.data.message,
        });
    }
}


// Load User
export const loadUser = () => async (dispatch) => {
    try {
        dispatch({ type: LOAD_USER_REQUEST });
        const api = process.env.REACT_APP_API_URL;
        const config = {

            withCredentials: 'include',
        };
        const { data } = await axios.get(api + '/api/user/me',config);

        dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
    } catch (error) {
        dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
    }
};


export const logout = () => async (dispatch) => {
    try {
        const api = process.env.REACT_APP_API_URL;
        const config = {
            withCredentials: 'include',
        };
        await axios.get(api + '/api/user/logout', config);

        dispatch({ type: LOGOUT_SUCCESS });
    } catch (error) {
        dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
    }
}


export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
}