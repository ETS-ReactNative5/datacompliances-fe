/*
 *
 * Blog actions
 *
 */

import action from 'utils/action';
import * as types from './constants';

export const loadAllBlogsRequest = action(types.LOAD_ALL_BLOGS_REQUEST, "page", "perPage", "query")
export const loadAllBlogsSuccess = action(types.LOAD_ALL_BLOGS_SUCCESS, "response")
export const loadAllBlogsFailure = action(types.LOAD_ALL_BLOGS_FAILURE, "error")
