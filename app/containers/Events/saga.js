import {
  take,
  takeLatest,
  fork,
  call,
  put,
  select,
  cancel,
} from 'redux-saga/effects';
import { LOCATION_CHANGE, push } from 'react-router-redux';
import * as types from './constants';
import * as actions from './actions';
import Agriculture from 'utils/apiHelper';

function* redirectOnSuccess() {
  const action = yield take(types.LOAD_EVENT_SUCCESS);
}

function* loadEventRequest(action) {
  const token = localStorage.getItem('token');
  const { query, page, perpage } = action;
  const successWatcher = yield fork(redirectOnSuccess);
  yield fork(
    Agriculture.get(
      `event/list?page=${page}&perpage=${perpage}`,
      actions.loadEventSuccess,
      actions.loadEventFailure,
      '',
    ),
  );
  yield take([LOCATION_CHANGE, types.LOAD_EVENT_FAILURE]);
  yield cancel(successWatcher);
}

function* loadEventByIdRequest(action) {
  const token = localStorage.getItem('token');
  const { slug } = action;
  yield fork(
    Agriculture.get(
      `event/detail/${slug}`,
      actions.loadEventByIdSuccess,
      actions.loadEventByIdFailure,
      token,
    ),
  );
}

export default function* eventWatcher() {
  yield takeLatest(types.LOAD_EVENT_REQUEST, loadEventRequest);
  yield takeLatest(types.LOAD_EVENT_BY_ID_REQUEST, loadEventByIdRequest);
}
