/*
 *
 * Subscription Container actions
 *
 */

import
  * as types
  from './constants';
import action from 'utils/action';

export const subscriptionRequest = action(types.SUBSCRIPTION_REQUEST, "data")
export const subscriptionSuccess = action(types.SUBSCRIPTION_SUCCESS, "response")
export const subscriptionFailure = action(types.SUBSCRIPTION_FAILURE, "data")



export const clearState = action(types.CLEAR_STATE)
