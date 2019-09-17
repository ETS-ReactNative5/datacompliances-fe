import * as types from './constants';
import action from 'utils/action';

export const resendConfirmationRequest = action(types.RESEND_CONFIRMATION_REQUEST);
export const resendConfirmationSuccess = action(types.RESEND_CONFIRMATION_SUCCESS, 'response');
export const resendConfirmationFailure = action(types.RESEND_CONFIRMATION_FAILURE, 'error');

export const getCartItemsNumberRequest = action(types.GET_CART_ITEMS_NUMBER_REQUEST);
export const getCartItemsNumberSuccess = action(types.GET_CART_ITEMS_NUMBER_SUCCESS, 'response');
export const getCartItemsNumberFailure = action(types.GET_CART_ITEMS_NUMBER_FAILURE, 'error');

export const clearState = action(types.CLEAR_STATE);
