import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the blog state domain
 */

const selectBlogDomain = state => state.get('blog', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Blog
 */


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
const makeSelectBlog = () =>
  createSelector(
    selectBlogDomain,
    state => state.get('blogList'),
  );
const makeSelectSingleBlog = () => createSelector(selectBlogDomain, state => state.get("singleBlog"))

export {
  makeSelectSuccess,
  makeSelectResponse,
  makeSelectError,
  makeSelectRequesting,
  makeSelectBlog,
  makeSelectSingleBlog
};
