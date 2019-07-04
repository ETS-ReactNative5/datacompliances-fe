/*
 *
 * Interview reducer
 *
 */

import { fromJS } from 'immutable';
import * as types from './constants';

export const initialState = fromJS({
  requesting: false,
  success: false,
  response: "",
  error: "",
  data: {},
  singleData: {}
});

function InterviewReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_ALL_INTERVIEW_REQUEST:
    case types.LOAD_INTERVIEW_BY_ID_REQUEST:
      return state.merge({
        requesting: true,
        success: false,
        response: "",
        error: "",
      });
    case types.LOAD_ALL_INTERVIEW_SUCCESS:
      return state.merge({
        requesting: false,
        success: true,
        response: action.response.message,
        error: "",
        data: fromJS(action.response.data)
      });
    case types.LOAD_INTERVIEW_BY_ID_SUCCESS:
      return state.merge({
        requesting: false,
        success: true,
        response: action.response.message,
        error: "",
        singleData: fromJS(action.response.data)
      });
    case types.LOAD_ALL_INTERVIEW_FAILURE:
    case types.LOAD_INTERVIEW_BY_ID_FAILURE:
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

export default InterviewReducer;
