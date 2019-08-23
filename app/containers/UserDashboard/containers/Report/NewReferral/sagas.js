import { call, takeLatest } from 'redux-saga/effects';
import * as types from './constants';
import * as actions from './actions';
import XcelTrip from 'utils/apiHelper';
import getToken from 'utils/getToken';
// import jwtDecode from 'jwt-decode';

function* updateReferral(action) {
  const token = getToken();
  // const userId = jwtDecode(token).user._id
  const {
    newReferral: { newCode },
  } = action;
  yield call(
    XcelTrip.post(
      `beneficiary/customize/referral/code`,
      actions.changeReferralSuccess,
      actions.changeReferralFailure,
      { new_referral_code: newCode },
      token,
    ),
  );
}

export default function* agentSettingsWatcher() {
  yield takeLatest(types.CHANGE_REFERRAL_REQUEST, updateReferral);
}
