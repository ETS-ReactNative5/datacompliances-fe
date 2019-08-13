/*
 *
 * PackageList actions
 *
 */
import action from 'utils/action';
import * as types from './constants';


export const getQuestionRequest = action(
  types.GET_QUESTION_REQUEST,
  'page',
  'perPage',
  'query',
);
export const getQuestionSuccess = action(
  types.GET_QUESTION_SUCCESS,
  'response',
);
export const getQuestionFailure = action(types.GET_QUESTION_FAILURE, 'error');


export const loadAllProductRequest = action(
  types.LOAD_PRODUCT_REQUEST,
  'page',
  'perPage',
  'query',
);
export const loadAllProductSuccess = action(
  types.LOAD_PRODUCT_SUCCESS,
  'response',
);
export const loadAllProductFailure = action(types.LOAD_PRODUCT_FAILURE, 'error');

export const loadProductByIdRequest = action(
  types.LOAD_PACKGE_BY_ID_REQUEST,
  'id',
);
export const loadProductByIdSuccess = action(
  types.LOAD_PACKGE_BY_ID_SUCCESS,
  'response',
);
export const loadProductByIdFailure = action(
  types.LOAD_PACKGE_BY_ID_FAILURE,
  'error',
);

export const postCartRequest = action(types.POST_CART_REQUEST, 'cart');
export const postCartSuccess = action(types.POST_CART_SUCCESS, 'response');
export const postCartFailure = action(types.POST_CART_FAILURE, 'error');

export const removeCartRequest = action(types.REMOVE_CART_REQUEST, 'cart');
export const removeCartSuccess = action(types.REMOVE_CART_SUCCESS, 'response');
export const removeCartFailure = action(types.REMOVE_CART_FAILURE, 'error');

export const loadAllCartPackageRequest = action(
  types.LOAD_ALL_CART_PACKAGE_REQUEST,
);
export const loadAllCartPackageSuccess = action(
  types.LOAD_ALL_CART_PACKAGE_SUCCESS,
  'response',
);
export const loadAllCartPackageFailure = action(
  types.LOAD_ALL_CART_PACKAGE_FAILURE,
  'error',
);

export const clearMessage = action(types.CLEAR_MESSAGE);
