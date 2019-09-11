import action from 'utils/action';
import * as types from './constants';

export const getProductsInCartRequest = action(
  types.GET_PRODUCTS_IN_CART_REQUEST,
);
export const getProductsInCartSuccess = action(
  types.GET_PRODUCTS_IN_CART_SUCCESS,
  'response',
);
export const getProductsInCartFailure = action(
  types.GET_PRODUCTS_IN_CART_FAILURE,
  'error',
);

export const clearMessage = action(types.CLEAR_MESSAGE);
