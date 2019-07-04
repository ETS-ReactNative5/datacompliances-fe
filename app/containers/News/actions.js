import action from 'utils/action';
import * as types from './constants';

export const getNewsRequest = action(
  types.GET_NEWS_REQUEST,
  'page',
  'perPage',
  'query',
);
export const getNewsSuccess = action(types.GET_NEWS_SUCCESS, 'response');
export const getNewsFailure = action(types.GET_NEWS_FAILURE, 'error');

export const getNewsByIdRequest = action(
  types.GET_NEWS_BY_ID_REQUEST,
  'newsId',
);
export const getNewsByIdSuccess = action(
  types.GET_NEWS_BY_ID_SUCCESS,
  'response',
);
export const getNewsByIdFailure = action(types.GET_NEWS_BY_ID_FAILURE, 'error');
