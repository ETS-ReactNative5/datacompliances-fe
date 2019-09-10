import { createSelector } from 'reselect';

export const getMyReports = state => state.report;

const makeSelectResponse = () =>
  createSelector(
    getMyReports,
    myProfileState => myProfileState.get('response'),
  );
const makeSelectError = () =>
  createSelector(
    getMyReports,
    myProfileState => myProfileState.get('error'),
  );
const makeSelectLoading = () =>
  createSelector(
    getMyReports,
    myProfileState => myProfileState.get('loading'),
  );


export {
  makeSelectResponse,
  makeSelectError,
  makeSelectLoading,
};
