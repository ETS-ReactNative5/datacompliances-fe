import { createSelector } from 'reselect';

const selectDomain = state => state.get('news');

const makeSelectSuccess = () =>
  createSelector(
    selectDomain,
    state => state.get('success'),
  );
const makeSelectResponse = () =>
  createSelector(
    selectDomain,
    state => state.get('response'),
  );
const makeSelectError = () =>
  createSelector(
    selectDomain,
    state => state.get('error'),
  );
const makeSelectRequesting = () =>
  createSelector(
    selectDomain,
    state => state.get('requesting'),
  );
const makeGetNotice = () =>
  createSelector(
    selectDomain,
    state => state.get('getNewsSuccessResponse'),
  );

const makeSelectEachNotice = () =>
  createSelector(
    selectDomain,
    state => state.get('eachNews'),
  );

export {
  makeSelectSuccess,
  makeSelectResponse,
  makeSelectError,
  makeSelectRequesting,
  makeGetNotice,
  makeSelectEachNotice,
};
