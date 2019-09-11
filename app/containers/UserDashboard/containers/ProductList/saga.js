import {
  take,
  takeLatest,
  call,
  put,
  select,
  fork,
  cancel,
} from 'redux-saga/effects';
import { LOCATION_CHANGE, push } from 'react-router-redux';
import * as types from './constants';
import * as actions from './actions';
import Api from 'utils/apiHelper';
import { makeSelectToken } from 'containers/App/selectors';

function* redirectOnSuccess() {
  const action = yield take(types.LOAD_PRODUCT_SUCCESS);
}

function* loadAllProduct(action) {
  const token = localStorage.getItem('token');
  if (token) {
    const successWatcher = yield fork(redirectOnSuccess);
    const { page, perPage, query } = action;
    yield fork(
      Api.get(
        `product`,
        actions.loadAllProductSuccess,
        actions.loadAllProductFailure,
        token,
      ),
    );
    yield take([LOCATION_CHANGE, types.LOAD_PRODUCT_FAILURE]);
    yield cancel(successWatcher);
  }
}

function* redirectOnLoadByIdSuccess() {
  const action = yield take(types.LOAD_PACKGE_BY_ID_SUCCESS);
}

function* loadProductByIdRequest(action) {
  const token = localStorage.getItem('token');
  const { id } = action;
  const successWatcher = yield fork(redirectOnLoadByIdSuccess);
  yield fork(
    Api.get(
      `product/info/${id}`,
      actions.loadProductByIdSuccess,
      actions.loadProductByIdFailure,
      token,
    ),
  );
  yield take([LOCATION_CHANGE, types.LOAD_PACKGE_BY_ID_FAILURE]);
  yield cancel(successWatcher);
}

function* loadAllCartPackageRequest() {
  const token = localStorage.getItem('token');
  yield fork(
    Api.get(
      'cart',
      actions.loadAllCartPackageSuccess,
      actions.loadAllCartPackageFailure,
      token,
    ),
  );
}

function* redirectOnPostCartSuccess() {
  const action = yield take(types.POST_CART_SUCCESS);
  yield put(push(`/user/dashboard`));
}
function* postCartRequest(action) {
  const token = localStorage.getItem('token');
  const { cart } = action;
  const successWatcher = yield fork(redirectOnPostCartSuccess);

  yield fork(
    Api.post(
      `cart`,
      actions.postCartSuccess,
      actions.postCartFailure,
      cart,
      token,
    ),
  );
  yield take([LOCATION_CHANGE, types.POST_CART_FAILURE]);
  yield cancel(successWatcher);
}

function* redirectOnDeleteCartSuccess() {
  const action = yield take(types.REMOVE_CART_SUCCESS);
  yield put(push(`/user/dashboard`));
}
function* removeCartRequest(action) {
  const token = localStorage.getItem('token');
  const { cart } = action;
  const successWatcher = yield fork(redirectOnDeleteCartSuccess);
  yield fork(
    Api.patch(
      `cart`,
      actions.removeCartSuccess,
      actions.removeCartFailure,
      cart,
      token,
    ),
  );
  yield take([LOCATION_CHANGE, types.REMOVE_CART_FAILURE]);
  yield cancel(successWatcher);
}

function* getQuestionRequest(action) {
  const { page, perPage, query } = action;
  const token = localStorage.getItem('token');
  yield fork(
    Api.get(
      `product/questionnaires/${action.query}?&page=${page}&perpage=${perPage}&active=all`,
      actions.getQuestionSuccess,
      actions.getQuestionFailure,
      token,
    ),
  );
  yield take([LOCATION_CHANGE, types.GET_QUESTION_FAILURE]);
}

function* redirectOnBuySuccess() {
  const action = yield take(types.ADD_TO_CART_SUCCESS);
  yield put(push(`/user/dashboard/product-display/${action.response.data.product_id}`));
}

function* addToCartRequest(action) {
  const token = localStorage.getItem('token');
  const { payload } = action;
  const successWatcher = yield fork(redirectOnBuySuccess);

  yield fork(
    Api.post(
      `cart`,
      actions.addToCartSuccess,
      actions.addToCartFailure,
      payload,
      token,
    ),
  );
  yield take([LOCATION_CHANGE, types.ADD_TO_CART_FAILURE]);
  yield cancel(successWatcher);
}

export default function* packageWatcher() {
  yield takeLatest(types.ADD_TO_CART_REQUEST, addToCartRequest);
  yield takeLatest(types.LOAD_PRODUCT_REQUEST, loadAllProduct);
  yield takeLatest(types.LOAD_PACKGE_BY_ID_REQUEST, loadProductByIdRequest);
  yield takeLatest(types.POST_CART_REQUEST, postCartRequest);
  yield takeLatest(
    types.LOAD_ALL_CART_PACKAGE_REQUEST,
    loadAllCartPackageRequest,
  );
  yield takeLatest(types.REMOVE_CART_REQUEST, removeCartRequest);
  yield takeLatest(types.GET_QUESTION_REQUEST, getQuestionRequest);

}
