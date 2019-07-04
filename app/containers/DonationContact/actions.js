import action from 'utils/action';
import * as types from './constants';

export const postDonationContactRequest = action(
  types.POST_DONATION_CONTACT_REQUEST,
  'data',
  'role',
);
export const postDonationContactSuccess = action(
  types.POST_DONATION_CONTACT_SUCCESS,
  'response',
);
export const postDonationContactFailure = action(
  types.POST_DONATION_CONTACT_FAILURE,
  'error',
);

// export const loadDonationCategoryRequest = action(
//   types.LOAD_DONATION_CONTACT_CATEGORY_REQUEST,
//   'page',
//   'perPage',
//   'query',
// );
// export const loadDonationCategorySuccess = action(
//   types.LOAD_DONATION_CONTACT_CATEGORY_SUCCESS,
//   'response',
// );
// export const loadDonationCategoryFailure = action(
//   types.LOAD_DONATION_CONTACT_CATEGORY_FAILURE,
//   'error',
// );

export const clearMessage = action(types.CLEAR_MESSAGE);
