import { fromJS } from 'immutable';
import * as types from './constants';
import { LOGOUT_SUCCESS } from 'containers/Login/constants';

const initialState = fromJS({
  loading: false,
  requesting: false,
  response: '',
  cartProductList: '',
  error: '',
  public_url: ''
});

function agentSettings(state = initialState, action) {
  switch (action.type) {
    case types.GET_PRODUCTS_IN_CART_REQUEST:
      return state.merge({
        loading: true,
        response: '',
        cartProductList: '',
        error: '',
      });

      case types.GET_PRODUCTS_IN_CART_SUCCESS:
      return state.merge({
        loading: false,
        response: '',
        cartProductList: fromJS(action.response.data)
      });

      case types.GET_PRODUCTS_IN_CART_FAILURE:
      return state.merge({
        error: action.error.message,
        response: '',
        loading: false,
      });

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
