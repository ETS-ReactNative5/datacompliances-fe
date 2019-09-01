import { fromJS } from 'immutable';
import * as types from './constants';
import { LOGOUT_SUCCESS } from 'containers/Login/constants';

const initialState = fromJS({
  loading: false,
  requesting: false,
  referCode: '',
  response: '',
  error: '',
  requestingReferralChange: false,
});

function agentSettings(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_REFER_CODE_REQUEST:
      return state.merge({
        loading: true,
        response: '',
        error: '',
      });
    case types.LOAD_REFER_CODE_SUCCESS:
      return state.merge({
        loading: false,
        referCode:
          action.response.data.refer_code ||
          action.response.data.global_refer_code,
        response: '',
      });
    case types.LOAD_REFER_CODE_FAILURE:
      return state.merge({
        error: action.error.message,
        response: '',
        loading: false,
      });
    // case types.CHANGE_REFERRAL_REQUEST:
    //   return state.merge({
    //     requestingReferralChange: true,
    //   });
    // case types.CHANGE_REFERRAL_SUCCESS:
    //   return state.merge({
    //     response: action.response.message,
    //     error: '',
    //     requestingReferralChange: false,
    //     referCode: action.response.data.refer_code || action.response.data.global_refer_code,
    //   });
    // case types.CHANGE_REFERRAL_FAILURE:
    //   return state.merge({
    //     requestingReferralChange: false,
    //     error: action.error.message,
    //   });
    case types.CLEAR_MESSAGE:
      return state.merge({
        response: '',
        error: '',
      });
    case LOGOUT_SUCCESS:
      return initialState;
    default:
      return state;
  }
}

export default agentSettings;
