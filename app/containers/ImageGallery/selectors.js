import { createSelector } from 'reselect';

const selectDomain = state => state.get('imageGallery');

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
const makeSelectXResponse = () =>
  createSelector(
    selectDomain,
    state => state.get('xresponse'),
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
const makeSelectData = () =>
  createSelector(
    selectDomain,
    state => state.get('dataObj'),
  );
const makeSelectSingleData = () =>
  createSelector(
    selectDomain,
    state => state.get('singleAlbum'),
  );

export {
  makeSelectSuccess,
  makeSelectResponse,
  makeSelectXResponse,
  makeSelectError,
  makeSelectRequesting,
  makeSelectData,
  makeSelectSingleData,
};
