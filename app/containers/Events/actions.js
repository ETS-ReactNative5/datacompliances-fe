import action from 'utils/action';
import * as types from './constants';

export const loadEventRequest = action(
  types.LOAD_EVENT_REQUEST,
  'page',
  'perpage',
  'query',
);
export const loadEventSuccess = action(types.LOAD_EVENT_SUCCESS, 'response');
export const loadEventFailure = action(types.LOAD_EVENT_FAILURE, 'error');

export const loadEventByIdRequest = action(
  types.LOAD_EVENT_BY_ID_REQUEST,
  'slug',
);
export const loadEventByIdSuccess = action(
  types.LOAD_EVENT_BY_ID_SUCCESS,
  'response',
);
export const loadEventByIdFailure = action(
  types.LOAD_EVENT_BY_ID_FAILURE,
  'error',
);
