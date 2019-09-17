import { fromJS } from 'immutable';
import * as types from './constants';
import { LOGOUT_SUCCESS } from '../Login/constants';

const initialState = fromJS({
  response: null,
  error: null,
  requesting: false,
  success: false,
  status: null,
  cartTotal: {
    dataList: [],
    totalItems: 0,
    currentPage: 1,
  },
});

function userDashboardReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.RESEND_CONFIRMATION_REQUEST:
      return state.merge({
        requesting: true,
        error: null,
        response: null,
        success: false,
      });
    
    case types.GET_CART_ITEMS_NUMBER_REQUEST:  
    return state.merge({
      requesting: true,
      error: null,
      response: null,
      success: false,
      cartTotal: null
    });   

    case types.RESEND_CONFIRMATION_SUCCESS:
      return state.merge({
        requesting: false,
        response: action.response.message,
        error: null,
        success: true,
      });

         
    case types.GET_CART_ITEMS_NUMBER_SUCCESS:
      console.log(action.response,'pppppppppppppppppp')
        return state.merge({
          requesting: false,
          response: action.response.message,
          error: null,
          success: true,
          cartTotal: action.response.data
        });  
  
    case types.RESEND_CONFIRMATION_FAILURE:
    case types.GET_CART_ITEMS_NUMBER_FAILURE:  
      return state.merge({
        requesting: false,
        response: null,
        error: action.error.message,
        success: false,
      });
    
    case LOGOUT_SUCCESS:
    case types.CLEAR_STATE:
      return initialState;
    default:
      return state;
  }
}

export default userDashboardReducer;
