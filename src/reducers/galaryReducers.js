import {
  GET_GALARY_REQUEST,
  GET_GALARY_SUCCESS,
  GET_GALARY_FAIL,
  CLEAR_ERRORS,
} from '../contains/galaryContains'


export const galaryReducer = (state = [], action) => {
  switch (action.type) {
    case GET_GALARY_REQUEST:
      return {
        loading: true,
        images: [],
        nextLoad: null
      }
    case GET_GALARY_SUCCESS:
      return {
        loading: false,
        images: action.payload.images,
        nextLoad: action.payload.next_cursor
      }
    case GET_GALARY_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      }
    default:
      return state


  }
}