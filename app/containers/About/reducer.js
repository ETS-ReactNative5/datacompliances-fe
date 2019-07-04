import { fromJS } from 'immutable';
import * as types from './constants';

const initialState = fromJS({
  response: '',
  error: '',
  requesting: false,
  success: false,
  dataObj: {
    dataList: [],
    totalItems: 0,
    currentPage: 1,
  },
  slugData: null,
});

function aboutReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOAD_ABOUT_REQUEST:
    case types.LOAD_ABOUT_BY_SLUG_REQUEST:
      let xresponse =
        state.get('response') != null ? state.get('response') : null;
      return state.merge({
        requesting: true,
        success: false,
        response: xresponse,
        xresponse: null,
        error: null,
      });
    case types.LOAD_ABOUT_SUCCESS:
      xresponse = state.get('response') != null ? state.get('response') : null;
      return state.merge({
        requesting: false,
        success: true,
        response: null,
        xresponse,
        error: null,
        dataObj: fromJS(action.response.data),
      });

    case types.LOAD_ABOUT_BY_SLUG_SUCCESS:
      return state.merge({
        requesting: false,
        success: true,
        response: action.response.message,
        error: null,
        slugData: fromJS(action.response.data),
      });

    case types.LOAD_ABOUT_FAILURE:
    case types.LOAD_ABOUT_BY_SLUG_FAILURE:
      return state.merge({
        requesting: false,
        success: false,
        response: null,
        error: action.error.message,
      });

    default:
      return state;
  }
}

export default aboutReducer;
