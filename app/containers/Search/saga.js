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
  
  function* postSearchRequest(action) {
    const { query } = action;
    yield put(push(`/search/${query}`));
  }
  
  function* redirectOnSearchResultSuccess() {
    const action = yield take(types.LOAD_SEARCH_RESULT_SUCCESS);
  }
  
  function* loadSearchResultsRequest(action) {
    const token = localStorage.getItem('token');
    const { query, page, perpage } = action;
    const successWatcher = yield fork(redirectOnSearchResultSuccess);
    yield fork(
      Agriculture.get(
        `search?title=${query}`,
        actions.loadSearchResultSuccess,
        actions.loadSearchResultFailure,
        '',
      ),
    );
    yield take([LOCATION_CHANGE, types.LOAD_SEARCH_RESULT_FAILURE]);
    yield cancel(successWatcher);
  }
  
  export default function* searchWatcher() {
    yield takeLatest(types.POST_SEARCH_REQUEST, postSearchRequest);
    yield takeLatest(types.LOAD_SEARCH_RESULT_REQUEST, loadSearchResultsRequest);
  }
  