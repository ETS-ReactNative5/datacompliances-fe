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
    const action = yield take(types.LOAD_FINANCIAL_SUCCESS);
  }
  
  function* loadFinancialRequest(action) {
    const token = localStorage.getItem('token');
    const { query, page, perpage } = action;
    const successWatcher = yield fork(redirectOnSuccess);
    yield fork(
      Agriculture.get(
        `financial/list`,
        actions.loadFinancialSuccess,
        actions.loadFinancialFailure,
        '',
      ),
    );
    yield take([LOCATION_CHANGE, types.LOAD_FINANCIAL_FAILURE]);
    yield cancel(successWatcher);
  }
  
  function* loadFinancialByIdRequest(action) {
    const token = localStorage.getItem('token');
    const { slug } = action;
    yield fork(
      Agriculture.get(
        `financial/detail/${slug}`,
        actions.loadFinancialByIdSuccess,
        actions.loadFinancialByIdFailure,
        token,
      ),
    );
  }
  
  export default function* financialWatcher() {
    yield takeLatest(types.LOAD_FINANCIAL_REQUEST, loadFinancialRequest);
    yield takeLatest(types.LOAD_FINANCIAL_BY_ID_REQUEST, loadFinancialByIdRequest);
  }
  