import { fromJS } from 'immutable';
import * as types from './constants';

export const initialState = fromJS({
  requesting: false,
  success: false,
  response: '',
  error: '',
});

function DonationReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_DONATION_CONTACT_CATEGORY_SUCCESS:
      return state.merge({
        requesting: true,
        success: false,
        response: '',
        error: '',
      });
      c;
    case types.LOAD_DONATION_CONTACT_CATEGORY_SUCCESS:
      let response =
        state.get('response') != null ? state.get('response') : null;
      return state.merge({
        requesting: false,
        success: true,
        response: null,
        error: null,
        category: fromJS(action.response.data.dataList),
      });
    case types.LOAD_DONATION_CONTACT_CATEGORY_FAILURE:
      return state.merge({
        requesting: false,
        success: false,
        response: '',
        error: action.error.message,
      });
    case types.CLEAR_MESSAGE:
      return state.merge({
        requesting: false,
        success: false,
        response: '',
        error: '',
      });

    default:
      return state;
  }
}

export default DonationReducer;
