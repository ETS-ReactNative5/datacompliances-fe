import { fromJS } from 'immutable';
import * as types from './constants';
import { LOGOUT_SUCCESS } from '../Login/constants';

const initialState = fromJS({
  response: null,
  error: null,
  requesting: false,
  success: false,
  status: null,
});

function userDashboardReducer(state = initialState, action = {}) {
  switch (action.type) {

    default:
      return state;
  }
}

export default userDashboardReducer;
