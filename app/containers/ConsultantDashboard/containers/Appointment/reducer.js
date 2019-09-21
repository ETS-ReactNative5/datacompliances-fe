import { fromJS } from 'immutable';
import * as types from './constants';
import { LOGOUT_SUCCESS } from 'containers/Login/constants';

const initialState = fromJS({
  loading: false,
  requesting: false,
  response: '',
  reportList: '',
  error: '',
  public_url: ''
});

function agentSettings(state = initialState, action) {
  switch (action.type) {
    case types.GET_TimeSlot_REQUEST:
      return state.merge({
        requesting: true,
        error: null,
        response: null,
        success: false,
      });

      case types.GET_TimeSlot_SUCCESS:
        return state.merge({
          requesting: false,
          response: action.response.message,
          error: null,
          success: true,
        });

    case types.GET_TimeSlot_FAILURE:
      return state.merge({
        requesting: false,
        response: null,
        error: action.error.message,
        success: false,
      });    

    case LOGOUT_SUCCESS:
      return initialState;
    default:
      return state;
  }
}

export default agentSettings;
