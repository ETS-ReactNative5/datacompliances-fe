import {
  take,
  takeLatest,
  fork,
  put,
  cancel,
  select,
  call,
} from 'redux-saga/effects';
import { LOCATION_CHANGE, push } from 'react-router-redux';
import Api from 'utils/apiHelper';
import * as types from './constants';
import * as actions from './actions';

function* redirectOnSuccess() {
  yield take(types.LOAD_ORGANIZATION_INFO_SUCCESS);
}

function* loadOrganizationInfoRequest() {
  const successWatcher = yield fork(redirectOnSuccess);
  yield fork(
    Api.get(
      `organisation-info/client`,
      actions.loadOrganizationInfoSuccess,
      actions.loadOrganizationInfoFailure,
      '',
    ),
  );
  yield take([LOCATION_CHANGE, types.LOAD_ORGANIZATION_INFO_FAILURE]);
  yield cancel(successWatcher);
}

function* redirectOnLoadTemplateSuccess() {
  yield take(types.LOAD_CONTENT_TEMPLATE_SUCCESS);
}

function* loadContentTemplateRequest() {
  const successWatcher = yield fork(redirectOnLoadTemplateSuccess);
  yield fork(
    Api.get(
      `content-template?page=1&perpage=100`,
      actions.loadContentTemplateSuccess,
      actions.loadContentTemplateFailure,
      '',
    ),
  );
  yield take([LOCATION_CHANGE, types.LOAD_CONTENT_TEMPLATE_FAILURE]);
  yield cancel(successWatcher);
}

export default function* appSaga() {
  yield takeLatest(
    types.LOAD_ORGANIZATION_INFO_REQUEST,
    loadOrganizationInfoRequest,
  );
  yield takeLatest(
    types.LOAD_CONTENT_TEMPLATE_REQUEST,
    loadContentTemplateRequest,
  );
}
