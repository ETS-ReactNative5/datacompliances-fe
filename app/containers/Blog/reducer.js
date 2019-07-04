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
    case types.LOAD_BLOG_BY_ID_REQUEST:
      return state.merge({
        requesting: true,
        success: false,
        response: "",
        error: "",
        blogList: [],
        singleBlog: {}
      });
    case types.LOAD_ALL_BLOGS_SUCCESS:
      return state.merge({
        requesting: false,
        success: true,
        response: action.response.message,
        error: "",
        blogList: fromJS(action.response.data)
      });
    case types.LOAD_BLOG_BY_ID_SUCCESS:
      return state.merge({
        requesting: false,
        success: true,
        response: action.response.message,
        error: "",
        singleBlog: fromJS(action.response.data)
      })
    case types.LOAD_ALL_BLOGS_FAILURE:
    case types.LOAD_BLOG_BY_ID_FAILURE:
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
