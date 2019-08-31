import { createSelector } from 'reselect';

export const selectMyProfile = state => state.reportDetail;

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

export {
  makeSelectResponse,
  makeSelectError,
  makeSelectLoading,
};
