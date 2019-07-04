import action from 'utils/action';
import * as types from './constants';

export const loadPartenershipRequest = action(
  types.LOAD_PARTENERSHIP_REQUEST,
  'page',
  'perPage',
  'query',
);
export const loadPartenershipSuccess = action(
  types.LOAD_PARTENERSHIP_SUCCESS,
  'response',
);
export const loadPartenershipFailure = action(
  types.LOAD_PARTENERSHIP_FAILURE,
  'error',
);

export const loadPartenershipBySlugRequest = action(
  types.LOAD_PARTENERSHIP_BY_SLUG_REQUEST,
  'slug',
);
export const loadPartenershipBySlugSuccess = action(
  types.LOAD_PARTENERSHIP_BY_SLUG_SUCCESS,
  'response',
);
export const loadPartenershipBySlugFailure = action(
  types.LOAD_PARTENERSHIP_BY_SLUG_FAILURE,
  'error',
);
