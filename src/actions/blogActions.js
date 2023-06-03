import {
    GET_ALL_BLOG_REQUEST,
    GET_ALL_BLOG_SUCCESS,
    GET_ALL_BLOG_FAIL,
    CREATE_BLOG_REQUEST,
    CREATE_BLOG_SUCCESS,
    CREATE_BLOG_FAIL,

    CLEAR_ERRORS,

} from '../contains/blogContains';
import axios from 'axios';
export const createBlog = (blogData) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_BLOG_REQUEST });

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            }, withCredentials: 'include',
        };
        const api = process.env.REACT_APP_API_URL;
        const { data } = await axios.post(api + '/api/post/create',
            blogData,
            config
        );

        dispatch({ type: CREATE_BLOG_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: CREATE_BLOG_FAIL,
            payload: error.response.data.message,
        });
    }
}

export const getAllBlogs = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ALL_BLOG_REQUEST });

        const { data } = await axios.get(process.env.REACT_APP_API_URL + '/api/post/all');

        dispatch({ type: GET_ALL_BLOG_SUCCESS, payload: data.blog });
    } catch (error) {
        dispatch({
            type: GET_ALL_BLOG_FAIL,
            payload: error.response.data.message,
        });
    }
}

export const  clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
}
