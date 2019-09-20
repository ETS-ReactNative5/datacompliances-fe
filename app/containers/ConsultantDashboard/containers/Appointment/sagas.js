import { call, takeLatest, fork } from 'redux-saga/effects';
import * as types from './constants';
import * as actions from './actions';
import PCSC from 'utils/apiHelper';
import getToken from 'utils/getToken';
// import jwtDecode from 'jwt-decode';


function* getTimeSlotRequest(action) {
    const { payload } = action;
    yield fork(
      PCSC.post(
        'consultant',
        actions.postTimeSlotSuccess,
        actions.postTimeSlotFailure,
        payload,
        getToken()
      )
    );
  }


export default function* reportsWatcher() {
    yield takeLatest(types.GET_TimeSlot_REQUEST, getTimeSlotRequest);

}
