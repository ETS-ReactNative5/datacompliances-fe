
import { takeLatest, fork, put, cancel, take, select, call } from 'redux-saga/effects';
import { delay } from "redux-saga";

import {
  subscriptionSuccess,
  clearState,
  subscriptionFailure
} from './actions';

import {
  SUBSCRIPTION_REQUEST,
  SUBSCRIPTION_SUCCESS,
  SUBSCRIPTION_FAILURE
} from './constants';

import Api from 'utils/apiHelper';


function* saveSubscriptionInfo(action) {
  yield call(
    Api.post('newsletter/subscribe', subscriptionSuccess, subscriptionFailure, action.data)
  );
}

export default function* subscriptionLogWatcher() {
  yield takeLatest(SUBSCRIPTION_REQUEST, saveSubscriptionInfo);
}

