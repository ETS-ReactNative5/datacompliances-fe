import { take, takeLatest, fork, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE, push } from 'react-router-redux';
import Agriculture from 'utils/apiHelper';
import * as types from './constants';
import * as actions from './actions';

function* redirectOnSuccess() {
  const action = yield take(types.LOAD_ABOUT_SUCCESS);
}

function* loadAboutRequest(action) {
  const token = localStorage.getItem('token');
  const successWatcher = yield fork(redirectOnSuccess);
  yield fork(
    Agriculture.get(
      `about-info`,
      actions.loadAboutSuccess,
      actions.loadAboutFailure,
      token,
    ),
  );
  yield take([LOCATION_CHANGE, types.LOAD_ABOUT_FAILURE]);
  yield cancel(successWatcher);
}

function* loadAboutBySlugRequest(action) {
  const token = localStorage.getItem('token');
  const { slug } = action;
  yield fork(
    Agriculture.get(
      `about-info/detail/${slug}`,
      actions.loadAboutBySlugSuccess,
      actions.loadAboutBySlugFailure,
      token,
    ),
  );
}

export default function* AboutWatcher() {
  yield takeLatest(types.LOAD_ABOUT_REQUEST, loadAboutRequest);
  yield takeLatest(types.LOAD_ABOUT_BY_SLUG_REQUEST, loadAboutBySlugRequest);
}
