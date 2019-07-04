import action from 'utils/action';
import * as types from './constants';

export const loadDonationCategoryRequest = action(
  types.LOAD_DONATION_CONTACT_CATEGORY_REQUEST,
  'page',
  'perPage',
  'query',
);
export const loadDonationCategorySuccess = action(
  types.LOAD_DONATION_CONTACT_CATEGORY_SUCCESS,
  'response',
);
export const loadDonationCategoryFailure = action(
  types.LOAD_DONATION_CONTACT_CATEGORY_FAILURE,
  'error',
);
export const clearMessage = action(types.CLEAR_MESSAGE);
