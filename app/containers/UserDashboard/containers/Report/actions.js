import action from 'utils/action';
import * as types from './constants';

export const loadReferCodeRequest = action(
  types.LOAD_REFER_CODE_REQUEST,
  'userId',
);
export const loadReferCodeSuccess = action(
  types.LOAD_REFER_CODE_SUCCESS,
  'response',
);
export const loadReferCodeFailure = action(
  types.LOAD_REFER_CODE_FAILURE,
  'error',
);

// export const changeReferralRequest = action(types.CHANGE_REFERRAL_REQUEST, 'newReferral');
// export const changeReferralSuccess = action(types.CHANGE_REFERRAL_SUCCESS, 'response');
// export const changeReferralFailure = action(types.CHANGE_REFERRAL_FAILURE, 'error');

export const clearMessage = action(types.CLEAR_MESSAGE);

// export const updateProfile = action(types.UPDATE_PROFILE, 'agentId', 'profile');
// export const profileUpdated = action(types.UPDATE_PROFILE_SUCCESS, 'response');
// export const profileUpdatingFailure = action(types.UPDATE_PROFILE_FAILURE, 'error');
