/**
 * Created by lakhe on 7/22/17.
 */
import { fromJS } from 'immutable';

import {
  SUBSCRIPTION_REQUEST,
  SUBSCRIPTION_SUCCESS,
  SUBSCRIPTION_FAILURE,
  CLEAR_STATE
} from './constants';

const initialState = fromJS({
  requesting: false,
  response: null,
  error: null
});

function saveSubscriptionInfo(state = initialState, action) {
  switch (action.type) {
    case SUBSCRIPTION_REQUEST:
      return state.merge({
        requesting: true,
        success: false,
        response: "",
        error: null,
      });

    case SUBSCRIPTION_FAILURE:
      return state.merge({
        requesting: false,
        success: false,
        response: "",
        error: action.error.message,
      });
    case SUBSCRIPTION_SUCCESS:
      return state.merge({
        requesting: false,
        success: true,
        response: action.response.message,
        error: null,
      });
    case CLEAR_STATE:
      return initialState;
    default:
      return state;
  }
}

export default saveSubscriptionInfo;
