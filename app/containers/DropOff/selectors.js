import { createSelector } from 'reselect'; 
const selectDropOffDomain = state => state.get('dropoff');

const makeSelectSuccess = () =>
  createSelector(
    selectDropOffDomain,
    state => state.get('success'),
  );
const makeSelectResponse = () =>
  createSelector(
    selectDropOffDomain,
    state => state.get('response'),
  );
const makeSelectError = () =>
  createSelector(
    selectDropOffDomain,
    state => state.get('error'),
  );
const makeSelectRequesting = () =>
  createSelector(
    selectDropOffDomain,
    state => state.get('requesting'),
  );
const makeSelectData = () =>
  createSelector(
    selectDropOffDomain,
    state => state.get('donation'),
  );
const makeSelectSingleData = () =>
  createSelector(
    selectDropOffDomain,
    state => state.get('singleDonation'),
  );

export {
  makeSelectData,
  makeSelectError,
  makeSelectRequesting,
  makeSelectResponse,
  makeSelectSingleData,
  makeSelectSuccess,
};
