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
    const action = yield take(types.LOAD_MEDIA_COVERAGE_SUCCESS);
  }
  
  function* loadMediaCoverageRequest(action) {
    const token = localStorage.getItem('token');
    const { perPage, page, query } = action;
    const successWatcher = yield fork(redirectOnSuccess);
    yield fork(
      Api.get(
        `media-coverage/list?page=1&perpage=5`,
        actions.loadMediaCoverageSuccess,
        actions.loadMediaCoverageFailure,
        '',
      ),
    );
    yield take([LOCATION_CHANGE, types.LOAD_MEDIA_COVERAGE_FAILURE]);
    yield cancel(successWatcher);
  }
  
  function* loadMediaCoverageBySlugRequest(action) {
    yield fork(
      Api.get(
        `media-coverage/detail/${action.slug}`,
        actions.loadMediaCoverageBySlugSuccess,
        actions.loadMediaCoverageBySlugFailure,
        '',
      ),
    );
  }
  
  export default function* homePageSaga() {
    yield takeLatest(types.LOAD_MEDIA_COVERAGE_REQUEST, loadMediaCoverageRequest);
    yield takeLatest(
      types.LOAD_MEDIA_COVERAGE_BY_SLUG_REQUEST,
      loadMediaCoverageBySlugRequest,
    );
  }
  