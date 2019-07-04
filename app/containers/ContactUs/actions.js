/*
 *
 * Blog actions
 *
 */

import action from 'utils/action';
import * as types from './constants';

export const postContactUsRequest = action(types.POST_CONTACT_US_REQUEST, "data")
export const postContactUsSuccess = action(types.POST_CONTACT_US_SUCCESS, "response")
export const postContactUsFailure = action(types.POST_CONTACT_US_FAILURE, "error")

export const clearMessage = action(types.CLEAR_MESSAGE)

