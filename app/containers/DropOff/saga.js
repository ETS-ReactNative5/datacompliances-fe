import { take, takeLatest, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE, push } from 'react-router-redux';
import * as types from './constants';
import * as actions from './actions';
import Api from 'utils/apiHelper';

function* redirectOnSuccess() {
  const action = yield take(types.LOAD_DONATION_DROPOFF_SUCCESS);
}

function* loadDropOffRequest(action) {
  const token = localStorage.getItem('token');
  const { perPage, page, query } = action;
  const successWatcher = yield fork(redirectOnSuccess);
  yield fork(
    Api.get(
      `donation-drop/list?page=1&perpage=12`,
      actions.loadDropOffSuccess,
      actions.loadDropOffFailure,
      '',
    ),
  );
  yield take([LOCATION_CHANGE, types.LOAD_DONATION_DROPOFF_FAILURE]);
  yield cancel(successWatcher);
}

function* loadDropOffBySlugRequest(action) {
  yield fork(
    Api.get(
      `donation-drop/detail/${action.slug}`,
      actions.loadDropOffBySlugSuccess,
      actions.loadDropOffBySlugFailure,
      '',
    ),
  );
}

export default function* homePageSaga() {
  yield takeLatest(types.LOAD_DONATION_DROPOFF_REQUEST, loadDropOffRequest);
  yield takeLatest(
    types.LOAD_DONATION_DROPOFF_BY_SLUG_REQUEST,
    loadDropOffBySlugRequest,
  );
}
