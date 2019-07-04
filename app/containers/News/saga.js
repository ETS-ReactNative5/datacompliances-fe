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
    const action = yield take(types.GET_NEWS_SUCCESS);
  }
  
  function* loadNewsRequest(action) {
    const token = localStorage.getItem('token');
    const { query, page, perPage } = action;
    const successWatcher = yield fork(redirectOnSuccess);
    yield fork(
      Agriculture.get(
        `news?page=${page}&perpage=${perPage}&${query}`,
        actions.getNewsSuccess,
        actions.getNewsFailure,
        '',
      ),
    );
    yield take([LOCATION_CHANGE, types.GET_NEWS_FAILURE]);
    yield cancel(successWatcher);
  }
  
  function* loadNewsByIdRequest(action) {
    const token = localStorage.getItem('token');
    const { newsId } = action;                        //slug
    yield fork(
      Agriculture.get(
        `news/detail/${newsId}`,
        actions.getNewsByIdSuccess,
        actions.getNewsByIdFailure,
        '',
      ),
    );
  }
  
  export default function* newsWatcher() {
    yield takeLatest(types.GET_NEWS_REQUEST, loadNewsRequest);
    yield takeLatest(types.GET_NEWS_BY_ID_REQUEST, loadNewsByIdRequest);
  }
  