import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the blog state domain
 */

const selectBlogDomain = state => state.get('contactUs', initialState);

const makeSelectSuccess = () =>
  createSelector(
    selectBlogDomain,
    state => state.get('success'),
  );
const makeSelectResponse = () =>
  createSelector(
    selectBlogDomain,
    state => state.get('response'),
  );
const makeSelectError = () =>
  createSelector(
    selectBlogDomain,
    state => state.get('error'),
  );
const makeSelectRequesting = () =>
  createSelector(
    selectBlogDomain,
    state => state.get('requesting'),
  );

export {
  makeSelectSuccess,
  makeSelectResponse,
  makeSelectError,
  makeSelectRequesting,
};
