/*
 *
 * Tags actions
 *
 */

import action from 'utils/action';
import * as types from './constants';

export const loadAllTagsRequest = action(types.LOAD_ALL_TAGS_REQUEST)
export const loadAllTagsSuccess = action(types.LOAD_ALL_TAGS_SUCCESS, 'response')
export const loadAllTagsFailure = action(types.LOAD_ALL_TAGS_FAILURE, 'error')
