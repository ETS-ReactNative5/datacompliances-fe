import { createSelector } from 'reselect'; 
const selectMediaCoverageDomain = state => state.get('media');

const makeSelectSuccess = () =>
  createSelector(
    selectMediaCoverageDomain,
    state => state.get('success'),
  );
const makeSelectResponse = () =>
  createSelector(
    selectMediaCoverageDomain,
    state => state.get('response'),
  );
const makeSelectError = () =>
  createSelector(
    selectMediaCoverageDomain,
    state => state.get('error'),
  );
const makeSelectRequesting = () =>
  createSelector(
    selectMediaCoverageDomain,
    state => state.get('requesting'),
  );
const makeSelectData = () =>
  createSelector(
    selectMediaCoverageDomain,
    state => state.get('dataObj'),
  );
const makeSelectSingleData = () =>
  createSelector(
    selectMediaCoverageDomain,
    state => state.get('singleData'),
  );

export {
  makeSelectData,
  makeSelectError,
  makeSelectRequesting,
  makeSelectResponse,
  makeSelectSingleData,
  makeSelectSuccess,
};
