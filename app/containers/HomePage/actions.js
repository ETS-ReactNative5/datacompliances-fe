import * as types from './constants';
import action from 'utils/action';

export const getConsultantsRequests = action(types.GET_CONSULTANTS_REQUEST);
export const getConsultantsSuccess = action(types.GET_CONSULTANTS_SUCCESS, 'response');
export const getConsultantsFailure = action(types.GET_CONSULTANTS_FAILURE, 'error');

export const getProductsListRequest = action(types.GET_PRODUCTS_REQUEST);
export const getProductsListSuccess = action(types.GET_PRODUCTS_SUCCESS, 'response');
export const getProductsListFailure = action(types.GET_PRODUCTS_FAILURE, 'error');

// export const clearState = action(types.CLEAR_STATE);