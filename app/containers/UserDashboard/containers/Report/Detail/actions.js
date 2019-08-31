import action from 'utils/action';
import * as types from './constants';

export const changeReferralRequest = action(
  types.CHANGE_REFERRAL_REQUEST,
  'newReferral',
);
export const changeReferralSuccess = action(
  types.CHANGE_REFERRAL_SUCCESS,
  'response',
);
export const changeReferralFailure = action(
  types.CHANGE_REFERRAL_FAILURE,
  'error',
);

export const clearMessage = action(types.CLEAR_MESSAGE);

// export const updateProfile = action(types.UPDATE_PROFILE, 'agentId', 'profile');
// export const profileUpdated = action(types.UPDATE_PROFILE_SUCCESS, 'response');
// export const profileUpdatingFailure = action(types.UPDATE_PROFILE_FAILURE, 'error');
