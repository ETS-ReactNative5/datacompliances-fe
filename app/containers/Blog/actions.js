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

export const loadBlogByIdRequest = action(types.LOAD_BLOG_BY_ID_REQUEST, "blog_id")
export const loadBlogByIdSuccess = action(types.LOAD_BLOG_BY_ID_SUCCESS, "response")
export const loadBlogByIdFailure = action(types.LOAD_BLOG_BY_ID_FAILURE, "error")

