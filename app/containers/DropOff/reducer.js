import { fromJS } from 'immutable';
import * as types from './constants';

const initialState = fromJS({
    response:'',
    error:'',
    requesting:false,
    success: false,
    donation: {
        dataList: [],
        totalItem: 0,
        curentPage:1,
    },
    singleDonation: null,
});

function DonationReducer(state= initialState, action){
    switch (action.type) {
        case types.LOAD_DONATION_DROPOFF_REQUEST:
        case types.LOAD_DONATION_DROPOFF_BY_SLUG_REQUEST:
          let xresponse =
            state.get('response') != null ? state.get('response') : null;
          return state.merge({
            requesting: true,
            success: false,
            response: xresponse,
            xresponse: null,
            error: null,
          });
    
        case types.LOAD_DONATION_DROPOFF_FAILURE:
        case types.LOAD_DONATION_DROPOFF_BY_SLUG_FAILURE:
          return state.merge({
            requesting: false,
            success: false,
            response: null,
            error: action.error.message,
          });
        case types.LOAD_DONATION_DROPOFF_SUCCESS:
          return state.merge({
            requesting: false,
            success: true,
            response: action.response.message,
            error: null,
            donation: fromJS(action.response.data),
          });
        case types.LOAD_DONATION_DROPOFF_BY_SLUG_SUCCESS:
          return state.merge({
            requesting: false,
            success: true,
            response: action.response.message,
            error: null,
            singleDonation: fromJS(action.response.data),
          });
        default:
          return state;
      }
}

export default DonationReducer;