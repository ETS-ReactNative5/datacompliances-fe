import { call, takeLatest } from 'redux-saga/effects';
import * as types from './constants';
import * as actions from './actions';
import PCSC from 'utils/apiHelper';
import getToken from 'utils/getToken';
// import jwtDecode from 'jwt-decode';


function* getProductsInCartRequest(action) {
  const token = getToken();
  yield call(
    PCSC.get(
      `cart`,
      actions.getProductsInCartSuccess,
      actions.getProductsInCartFailure,
      token,
    ),
  );
}


export default function* reportsWatcher() {
  yield takeLatest(types.GET_PRODUCTS_IN_CART_REQUEST, getProductsInCartRequest);
}
