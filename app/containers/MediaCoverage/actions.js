import action from 'utils/action';
import * as types from './constants';

export const loadMediaCoverageRequest = action(
  types.LOAD_MEDIA_COVERAGE_REQUEST,
  'page',
  'perPage',
  'query',
);
export const loadMediaCoverageSuccess = action(
  types.LOAD_MEDIA_COVERAGE_SUCCESS,
  'response',
);
export const loadMediaCoverageFailure = action(
  types.LOAD_MEDIA_COVERAGE_FAILURE,
  'error',
);

export const loadMediaCoverageBySlugRequest = action(
  types.LOAD_MEDIA_COVERAGE_BY_SLUG_REQUEST,
  'slug',
);
export const loadMediaCoverageBySlugSuccess = action(
  types.LOAD_MEDIA_COVERAGE_BY_SLUG_SUCCESS,
  'response',
);
export const loadMediaCoverageBySlugFailure = action(
  types.LOAD_MEDIA_COVERAGE_BY_SLUG_FAILURE,
  'error',
);
