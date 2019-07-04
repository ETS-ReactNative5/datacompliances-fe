import { fromJS } from 'immutable';
import * as types from './constants';

const initialState = fromJS({
  response: '',
  error: '',
  requesting: false,
  success: false,
  partener: {
    dataList: [],
    totalItems: 0,
    currentPage: 1,
  },
  singleData: null,
});

function PartenerReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_PARTENERSHIP_REQUEST:
    case types.LOAD_PARTENERSHIP_BY_SLUG_REQUEST:
      let xresponse =
        state.get('response') != null ? state.get('response') : null;
      return state.merge({
        requesting: true,
        success: false,
        response: xresponse,
        xresponse: null,
        error: null,
      });

    case types.LOAD_PARTENERSHIP_FAILURE:
    case types.LOAD_PARTENERSHIP_BY_SLUG_FAILURE:
      return state.merge({
        requesting: false,
        success: false,
        response: null,
        error: action.error.message,
      });
    case types.LOAD_PARTENERSHIP_SUCCESS:
      return state.merge({
        requesting: false,
        success: true,
        response: action.response.message,
        error: null,
        partener: fromJS(action.response.data),
      });
    case types.LOAD_PARTENERSHIP_BY_SLUG_SUCCESS:
      return state.merge({
        requesting: false,
        success: true,
        response: action.response.message,
        error: null,
        singleData: fromJS(action.response.data),
      });
    default:
      return state;
  }
}

export default PartenerReducer;
