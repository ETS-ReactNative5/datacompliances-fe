/*
 *
 * Blog reducer
 *
 */

import { fromJS } from 'immutable';
import * as types from './constants';

export const initialState = fromJS({
  requesting: false,
  success: false,
  response: "",
  error: "",
  blogList: []
});

function blogReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_ALL_BLOGS_REQUEST:
      return state.merge({
        requesting: true,
        success: false,
        response: "",
        error: "",
        blogList: [],
      });
    case types.LOAD_ALL_BLOGS_SUCCESS:
      return state.merge({
        requesting: false,
        success: true,
        response: action.response.message,
        error: "",
        blogList: fromJS(action.response.data.dataList)
      });
    case types.LOAD_ALL_BLOGS_FAILURE:
      return state.merge({
        requesting: false,
        success: false,
        response: "",
        error: action.error.message,
      });

    // case types.CLEAR_MESSAGE:
    //   return state.merge({
    //     requesting: false,
    //     success: false,
    //     response: "",
    //     error: "",
    //     blogList: []
    //   })
    default:
      return state;
  }
}

export default blogReducer;
