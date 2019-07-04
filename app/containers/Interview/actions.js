/*
 *
 * Interview actions
 *
 */

import action from 'utils/action';
import * as types from './constants';

export const loadAllInterviewRequest = action(types.LOAD_ALL_INTERVIEW_REQUEST, "data")
export const loadAllInterviewSuccess = action(types.LOAD_ALL_INTERVIEW_SUCCESS, "response")
export const loadAllInterviewFailure = action(types.LOAD_ALL_INTERVIEW_FAILURE, "error")

export const loadInterviewByIDRequest = action(types.LOAD_INTERVIEW_BY_ID_REQUEST, "id")
export const loadInterviewByIDSuccess = action(types.LOAD_INTERVIEW_BY_ID_SUCCESS, "response")
export const loadInterviewByIDFailure = action(types.LOAD_INTERVIEW_BY_ID_FAILURE, "error")


