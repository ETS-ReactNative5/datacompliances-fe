import action from 'utils/action';
import * as types from './constants';

export const loadDropOffRequest = action(
  types.LOAD_DONATION_DROPOFF_REQUEST,
  'page',
  'perPage',
  'query',
);
export const loadDropOffSuccess = action(
  types.LOAD_DONATION_DROPOFF_SUCCESS,
  'response',
);
export const loadDropOffFailure = action(
  types.LOAD_DONATION_DROPOFF_FAILURE,
  'error',
);

export const loadDropOffBySlugRequest = action(
  types.LOAD_DONATION_DROPOFF_BY_SLUG_REQUEST,
  'slug',
);
export const loadDropOffBySlugSuccess = action(
  types.LOAD_DONATION_DROPOFF_BY_SLUG_SUCCESS,
  'response',
);
export const loadDropOffBySlugFailure = action(
  types.LOAD_DONATION_DROPOFF_BY_SLUG_FAILURE,
  'error',
);
