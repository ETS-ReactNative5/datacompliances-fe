import { createSelector } from 'reselect';

export const selectMyProfile = state => state.get('report');

const makeSelectReferCode = () =>
  createSelector(
    selectMyProfile,
    myProfileState => myProfileState.get('referCode'),
  );
const makeSelectResponse = () =>
  createSelector(
    selectMyProfile,
    myProfileState => myProfileState.get('response'),
  );
const makeSelectError = () =>
  createSelector(
    selectMyProfile,
    myProfileState => myProfileState.get('error'),
  );
const makeSelectLoading = () =>
  createSelector(
    selectMyProfile,
    myProfileState => myProfileState.get('loading'),
  );
// const makeSelectRequestingReferralChange = () =>
//   createSelector(selectMyProfile, myProfileState => myProfileState.get('requestingReferralChange'));

export {
  makeSelectReferCode,
  makeSelectResponse,
  makeSelectError,
  makeSelectLoading,
  // makeSelectRequestingReferralChange,
};
