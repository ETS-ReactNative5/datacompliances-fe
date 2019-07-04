import action from 'utils/action';
import * as types from './constants';

export const postSearchRequest = action(types.POST_SEARCH_REQUEST, 'query');
export const postSearchSuccess = action(types.POST_SEARCH_SUCCESS, 'response');
export const postSearchFailure = action(types.POST_SEARCH_FAILURE, 'error');

export const loadSearchResultRequest = action(
  types.LOAD_SEARCH_RESULT_REQUEST,
  'perPage',
  'page',
  'query',
);
export const loadSearchResultSuccess = action(
  types.LOAD_SEARCH_RESULT_SUCCESS,
  'response',
);
export const loadSearchResultFailure = action(
  types.LOAD_SEARCH_RESULT_FAILURE,
  'error',
);