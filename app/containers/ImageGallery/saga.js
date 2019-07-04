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
  import XcelTrip from 'utils/apiHelper';
  
  function* redirectOnSuccess() {
    const action = yield take(types.LOAD_IMAGE_GALLERY_SUCCESS);
  }
  
  function* loadImageGalleryRequest(action) {
    const token = localStorage.getItem('token');
    const { query, page, perpage } = action;
    const successWatcher = yield fork(redirectOnSuccess);
    yield fork(
      XcelTrip.get(
        `image-gallery?page=${page}&perpage=${perpage}`,
        actions.loadImageGallerySuccess,
        actions.loadImageGalleryFailure,
        token,
      ),
    );
    yield take([LOCATION_CHANGE, types.LOAD_IMAGE_GALLERY_FAILURE]);
    yield cancel(successWatcher);
  }
  
  function* loadImageGalleryByIdRequest(action) {
    const token = localStorage.getItem('token');
    const { id } = action;
    yield fork(
      XcelTrip.get(
        `image-gallery/${id}`,
        actions.loadImageGalleryByIdSuccess,
        actions.loadImageGalleryByIdFailure,
        '',
      ),
    );
  }
  
  export default function* imageGalleryWatcher() {
    yield takeLatest(types.LOAD_IMAGE_GALLERY_REQUEST, loadImageGalleryRequest);
    yield takeLatest(
      types.LOAD_IMAGE_GALLERY_BY_ID_REQUEST,
      loadImageGalleryByIdRequest,
    );
  }
  
  