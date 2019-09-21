import { createSelector } from 'reselect';

export const getMyReports = state => state.setAppointment;

const makeSelectResponse = () =>
  createSelector(
    getMyReports,
    state => state.get('response'),
  );
  const makeSelectReportList = () =>
  createSelector(
    getMyReports,
    state => state.get('reportList'),
  );
const makeSelectError = () =>
  createSelector(
    getMyReports,
    state => state.get('error'),
  );
const makeSelectLoading = () =>
  createSelector(
    getMyReports,
    state => state.get('loading'),
  );

  const makeSelectPublicURL = () =>
  createSelector(
    getMyReports,
    state => state.get('public_url'),
  );


export {
  makeSelectResponse,
  makeSelectError,
  makeSelectLoading,
  makeSelectReportList,
  makeSelectPublicURL
};
