/**
 * Created by Saroj on 2/13/19.
 */
import { take, takeLatest, call, put, select, fork, cancel } from 'redux-saga/effects';
import * as types from './constants';
import * as actions from './actions';
import Api from 'utils/apiHelper';



function* postContactUsRequest(action) {
  const { data } = action;
  yield fork(
    Api.post(
      `contact-us`,
      actions.postContactUsSuccess,
      actions.postContactUsFailure,
      data
    )
  );
}
// Individual exports for testing
export default function* contactUsWatcher() {
  // See example in containers/HomePage/sagas.js
  yield takeLatest(types.POST_CONTACT_US_REQUEST, postContactUsRequest);
}

