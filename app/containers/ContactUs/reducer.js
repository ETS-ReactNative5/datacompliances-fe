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
});

function ContactUsReducer(state = initialState, action) {
  switch (action.type) {
    case types.POST_CONTACT_US_REQUEST:
      return state.merge({
        requesting: true,
        success: false,
        response: "",
        error: "",
      });
    case types.POST_CONTACT_US_SUCCESS:
      return state.merge({
        requesting: false,
        success: true,
        response: action.response.message,
        error: "",
      });
    case types.POST_CONTACT_US_FAILURE:
      return state.merge({
        requesting: false,
        success: false,
        response: "",
        error: action.error.message,
      });
    case types.CLEAR_MESSAGE:
      return state.merge({
        requesting: false,
        success: false,
        response: "",
        error: ""
      })

    default:
      return state;
  }
}

export default ContactUsReducer;
