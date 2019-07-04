/*
 *
 * Tags reducer
 *
 */

import { fromJS } from 'immutable';
import * as types from './constants';

export const initialState = fromJS({
  requesting: false,
  success: false,
  response: "",
  error: "",
  data: {}
});

function TagsReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_ALL_TAGS_REQUEST:
      return state.merge({
        requesting: true,
        success: false,
        response: "",
        error: "",
      });
    case types.LOAD_ALL_TAGS_SUCCESS:
      return state.merge({
        requesting: false,
        success: true,
        response: action.response.message,
        error: "",
        data: fromJS(action.response.data)
      });
    case types.LOAD_ALL_TAGS_FAILURE:
      return state.merge({
        requesting: false,
        success: false,
        response: "",
        error: action.error.message,
      });

    default:
      return state;
  }
}

export default TagsReducer;
