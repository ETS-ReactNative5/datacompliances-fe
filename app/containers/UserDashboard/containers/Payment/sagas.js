import { call, takeLatest, fork, put, take, cancel } from 'redux-saga/effects';
import * as types from './constants';
import * as actions from './actions';
import PCSC from 'utils/apiHelper';
import getToken from 'utils/getToken';
import { LOCATION_CHANGE, push } from 'react-router-redux';
// import jwtDecode from 'jwt-decode';

function* updateOrderRequest(action) {
  const token = getToken();
  const { payload } = action;
  console.log(payload,'kkkkkkkkkkkkkk')
  yield call(
    PCSC.put(
      `order/update/${payload.order_id}/${payload.payment_id}`,
      actions.updateOrderSuccess,
      actions.updateOrderFailure,
      payload,
      token,
    ),
  );
}

export default function* reportsWatcher() {
  yield takeLatest(types.UPDATE_ORDER_REQUEST, updateOrderRequest);
}
