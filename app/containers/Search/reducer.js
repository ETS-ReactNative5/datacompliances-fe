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
});

function searchReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.POST_SEARCH_REQUEST:
    case types.LOAD_SEARCH_RESULT_REQUEST:
      let xresponse =
        state.get('response') != null ? state.get('response') : null;
      return state.merge({
        requesting: true,
        success: false,
        response: xresponse,
        xresponse: null,
        error: null,
      });
    case types.POST_SEARCH_SUCCESS:
      xresponse = state.get('response') != null ? state.get('response') : null;
      return state.merge({
        requesting: false,
        success: true,
        response: null,
        xresponse: xresponse,
        error: null,
        dataObj: fromJS(action.response.data),
      });

    case types.LOAD_SEARCH_RESULT_SUCCESS:
      xresponse = state.get('response') != null ? state.get('response') : null;
      return state.merge({
        requesting: false,
        success: true,
        response: null,
        xresponse: xresponse,
        error: null,
        dataObj: fromJS(action.response.data),
      });

    case types.POST_SEARCH_FAILURE:
    case types.LOAD_SEARCH_RESULT_FAILURE:
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

export default searchReducer;