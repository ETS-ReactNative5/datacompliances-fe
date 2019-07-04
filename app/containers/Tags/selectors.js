import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the Tags state domain
 */

const selectTagsDomain = state => state.get('tags', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Tags
 */


const makeSelectSuccess = () =>
  createSelector(
    selectTagsDomain,
    state => state.get('success'),
  );
const makeSelectResponse = () =>
  createSelector(
    selectTagsDomain,
    state => state.get('response'),
  );
const makeSelectError = () =>
  createSelector(
    selectTagsDomain,
    state => state.get('error'),
  );
const makeSelectRequesting = () =>
  createSelector(
    selectTagsDomain,
    state => state.get('requesting'),
  );

const makeSelectData = () =>
  createSelector(
    selectTagsDomain,
    state => state.get('data'))
export {
  makeSelectSuccess,
  makeSelectResponse,
  makeSelectError,
  makeSelectRequesting,
  makeSelectData,
};
