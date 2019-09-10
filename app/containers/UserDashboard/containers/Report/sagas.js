import { call, takeLatest } from 'redux-saga/effects';
import * as types from './constants';
import * as actions from './actions';
import XcelTrip from 'utils/apiHelper';
import getToken from 'utils/getToken';
// import jwtDecode from 'jwt-decode';


function* getReportsListingRequest(action) {
  const token = getToken();
  yield call(
    XcelTrip.get(
      `report`,
      actions.getReportsListingSuccess,
      actions.getReportsListingFailure,
      token,
    ),
  );
}

export default function* reportsWatcher() {
  yield takeLatest(types.GET_REPORT_LISTING_REQUEST, getReportsListingRequest);
  // yield takeLatest(types.CHANGE_REFERRAL_REQUEST, updateReferral);
}
