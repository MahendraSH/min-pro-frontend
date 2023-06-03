import {
    GET_ALL_BLOG_REQUEST,
    GET_ALL_BLOG_SUCCESS,
    GET_ALL_BLOG_FAIL,
    CREATE_BLOG_REQUEST,
    CREATE_BLOG_SUCCESS,
    CREATE_BLOG_FAIL,

    CLEAR_ERRORS,

} from '../contains/blogContains';

export const blogReducer = (state = { blogs: [] }, action) => {
    switch (action.type) {
        case GET_ALL_BLOG_REQUEST:
        case CREATE_BLOG_REQUEST:
            return {
                loading: true,
            }
        case GET_ALL_BLOG_SUCCESS:
        case CREATE_BLOG_SUCCESS:
            return {
                ...state,
                loading: false,
                blogs: action.payload,
                message :  action.payload.message
            }
        case GET_ALL_BLOG_FAIL:
        case CREATE_BLOG_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}