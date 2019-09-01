import { fromJS } from 'immutable';
import * as types from './constants';
import { LOGOUT_SUCCESS } from '../Login/constants';

export const initialState = fromJS({
  response: null,
  error: null,
  requesting: false,
  success: false,
  status: null,
  productsResponse: null,
  consultantsResponse: null
});

function userDashboardReducer(state = initialState, action = {}) {
  switch (action.type) {

  case types.GET_CONSULTANTS_REQUEST:
    return state.merge({
      requesting: true,
      error: null,
      response: null,
      success: false,
      consultantsResponse: null
    });

  case types.GET_PRODUCTS_REQUEST:
      return state.merge({
        requesting: true,
        error: null,
        response: null,
        success: false,
        productsResponse: null,
      });   

  case types.GET_CONSULTANTS_SUCCESS:
    return state.merge({
      requesting: false,
      error: null,
      consultantsResponse: action.response.data.dataList,
      success: true,
    });  

  case types.GET_PRODUCTS_SUCCESS:
      return state.merge({
        requesting: false,
        error: null,
        productsResponse: action.response.data.dataList,
        success: true,
      });   

  case types.GET_CONSULTANTS_FAILURE:
  case types.GET_PRODUCTS_FAILURE:
    return state.merge({
      requesting: false,
        response: null,
        error: action.error.message,
        success: false,
    });   

    default:
      return state;
  }
}

export default userDashboardReducer;
