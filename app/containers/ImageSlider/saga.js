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
    const action = yield take(types.LOAD_IMAGE_SLIDER_SUCCESS);
  }
  
  function* loadImageSliderRequest(action) {
    const token = localStorage.getItem('token');
    const { query, page, perpage } = action;
    const successWatcher = yield fork(redirectOnSuccess);
    yield fork(
      Agriculture.get(
        `banner?page=${page}&perpage=${perpage}`,
        actions.loadImageSliderSuccess,
        actions.loadImageSliderFailure,
        '',
      ),
    );
    yield take([LOCATION_CHANGE, types.LOAD_IMAGE_SLIDER_FAILURE]);
    yield cancel(successWatcher);
  }
  
  function* loadImageSliderByIdRequest(action) {
    const token = localStorage.getItem('token');
    const { id } = action;
    yield fork(
      Agriculture.get(
        `banner/${id}`,
        actions.loadImageSliderByIdSuccess,
        actions.loadImageSliderByIdFailure,
        '',
      ),
    );
  }
  
  export default function* imageSliderWatcher() {
    yield takeLatest(types.LOAD_IMAGE_SLIDER_REQUEST, loadImageSliderRequest);
    yield takeLatest(
      types.LOAD_IMAGE_SLIDER_BY_ID_REQUEST,
      loadImageSliderByIdRequest,
    );
  }
  