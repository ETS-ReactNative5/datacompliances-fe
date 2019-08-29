import React from 'react';
import { LOCATION_CHANGE } from 'react-router-redux';
import { takeLatest, take, fork, cancel, call } from 'redux-saga/effects';
import XcelTrip from 'utils/apiHelper';
import getToken from 'utils/getToken';
import * as types from './constants';
import * as actions from './actions';


function* getConsultantsRequests() {
  yield fork(
    XcelTrip.get(
      `team`,
      actions.getConsultantsSuccess,
      actions.getConsultantsFailure,
      // token
    )
  );
}

function* getProductsRequests() {
  const token = localStorage.getItem('token');
  yield fork(
    XcelTrip.get(
      `product`,
      actions.getProductsListSuccess,
      actions.getProductsListFailure,
      token,
    )
  );
}
export default function* homepageSaga() {
  yield takeLatest(types.GET_CONSULTANTS_REQUEST, getConsultantsRequests);
  yield takeLatest(types.GET_PRODUCTS_REQUEST, getProductsRequests);
}
