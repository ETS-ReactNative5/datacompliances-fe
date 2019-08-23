import { createSelector } from 'reselect';

export const selectMyProfile = state => state.get('newReferral');

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
const makeSelectRequestingReferralChange = () =>
  createSelector(
    selectMyProfile,
    myProfileState => myProfileState.get('requestingReferralChange'),
  );

export {
  makeSelectResponse,
  makeSelectError,
  makeSelectLoading,
  makeSelectRequestingReferralChange,
};
