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

    case LOGOUT_SUCCESS:
      return initialState;
    default:
      return state;
  }
}

export default agentSettings;
