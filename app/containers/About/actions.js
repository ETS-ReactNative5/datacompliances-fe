import action from 'utils/action';
import * as types from './constants';

export const loadAboutRequest = action(types.LOAD_ABOUT_REQUEST);
export const loadAboutSuccess = action(types.LOAD_ABOUT_SUCCESS, 'response');
export const loadAboutFailure = action(types.LOAD_ABOUT_FAILURE, 'error');

export const loadAboutBySlugRequest = action(
  types.LOAD_ABOUT_BY_SLUG_REQUEST,
  'slug',
);
export const loadAboutBySlugSuccess = action(
  types.LOAD_ABOUT_BY_SLUG_SUCCESS,
  'response',
);
export const loadAboutBySlugFailure = action(
  types.LOAD_ABOUT_BY_SLUG_FAILURE,
  'error',
);
