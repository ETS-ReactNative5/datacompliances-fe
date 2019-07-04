import {
    take,
    takeLatest,
    fork,
    cancel,
  } from 'redux-saga/effects';
  import { LOCATION_CHANGE, push } from 'react-router-redux';
  import * as types from './constants';
  import * as actions from './actions';
  import Api from 'utils/apiHelper';
  
  function* redirectOnSuccess() {
    const action = yield take(types.LOAD_PARTENERSHIP_SUCCESS);
  }
  
  function* loadPartenershipRequest(action) {
    const token = localStorage.getItem('token');
    const { perPage, page, query } = action;
    const successWatcher = yield fork(redirectOnSuccess);
    yield fork(
      Api.get(
        `partnership/list?page=1&perpage=5`,
        actions.loadPartenershipSuccess,
        actions.loadPartenershipFailure,
        '',
      ),
    );
    yield take([LOCATION_CHANGE, types.LOAD_PARTENERSHIP_FAILURE]);
    yield cancel(successWatcher);
  }
  
  function* loadPartenershipBySlugRequest(action) {
    yield fork(
      Api.get(
        `partnership/detail/${action.slug}`,
        actions.loadPartenershipBySlugSuccess,
        actions.loadPartenershipBySlugFailure,
        '',
      ),
    );
  }
  
  export default function* homePageSaga() {
    yield takeLatest(types.LOAD_PARTENERSHIP_REQUEST, loadPartenershipRequest);
    yield takeLatest(
      types.LOAD_PARTENERSHIP_BY_SLUG_REQUEST,
      loadPartenershipBySlugRequest,
    );
  }
  