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
import Api from 'utils/apiHelper';

function* redirectOnSuccess() {
  const action = yield take(types.LOAD_TEAM_MEMBER_SUCCESS);
}

function* loadTeamMemberRequest(action) {
  const token = localStorage.getItem('token');
  const { perPage, page, query } = action;
  const successWatcher = yield fork(redirectOnSuccess);
  yield fork(
    Api.get(
      `team/list?page=1&perpage=100`,
      actions.loadTeamMemberSuccess,
      actions.loadTeamMemberFailure,
      '',
    ),
  );
  yield take([LOCATION_CHANGE, types.LOAD_TEAM_MEMBER_FAILURE]);
  yield cancel(successWatcher);
}

function* loadTeamMemberBySlugRequest(action) {
  yield fork(
    Api.get(
      `team/detail/${action.slug}`,
      actions.loadTeamMemberBySlugSuccess,
      actions.loadTeamMemberBySlugFailure,
      '',
    ),
  );
}

export default function* homePageSaga() {
  yield takeLatest(types.LOAD_TEAM_MEMBER_REQUEST, loadTeamMemberRequest);
  yield takeLatest(
    types.LOAD_TEAM_MEMBER_BY_SLUG_REQUEST,
    loadTeamMemberBySlugRequest,
  );
}
