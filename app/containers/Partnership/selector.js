import { createSelector } from 'reselect';

const selectPartnerDomain = state => state.get('partenership');

const makeSelectSuccess = () =>
  createSelector(
    selectPartnerDomain,
    state => state.get('success'),
  );
const makeSelectResponse = () =>
  createSelector(
    selectPartnerDomain,
    state => state.get('response'),
  );
const makeSelectError = () =>
  createSelector(
    selectPartnerDomain,
    state => state.get('error'),
  );
const makeSelectRequesting = () =>
  createSelector(
    selectPartnerDomain,
    state => state.get('requesting'),
  );
const makeSelectData = () =>
  createSelector(
    selectPartnerDomain,
    state => state.get('partener'),
  );
const makeSelectSingleData = () =>
  createSelector(
    selectPartnerDomain,
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
