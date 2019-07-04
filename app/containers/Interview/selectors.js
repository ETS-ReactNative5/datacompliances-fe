import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the Interview state domain
 */

const selectInterviewDomain = state => state.get('interview', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Interview
 */


const makeSelectSuccess = () =>
  createSelector(
    selectInterviewDomain,
    state => state.get('success'),
  );
const makeSelectResponse = () =>
  createSelector(
    selectInterviewDomain,
    state => state.get('response'),
  );
const makeSelectError = () =>
  createSelector(
    selectInterviewDomain,
    state => state.get('error'),
  );
const makeSelectRequesting = () =>
  createSelector(
    selectInterviewDomain,
    state => state.get('requesting'),
  );

const makeSelectData = () =>
  createSelector(
    selectInterviewDomain,
    state => state.get('data'))
const makeSelectSingleData = () =>
  createSelector(
    selectInterviewDomain,
    state => state.get("singleData"))

export {
  makeSelectSuccess,
  makeSelectResponse,
  makeSelectError,
  makeSelectRequesting,
  makeSelectData,
  makeSelectSingleData
};
