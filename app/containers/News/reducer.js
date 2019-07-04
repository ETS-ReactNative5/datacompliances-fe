import { fromJS } from 'immutable';
import * as types from './constants';

const initialState = fromJS({
  response: '',
  error: '',
  requesting: false,
  success: false,
  notice: null,
  getNewsSuccessResponse: {
    dataList: [],
    totalItems: 0,
    currentPage: 1,
  },
  eachNews: {},
});

function newsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.GET_NEWS_REQUEST:
    case types.GET_NEWS_BY_ID_REQUEST:
      return state.merge({
        requesting: true,
        success: false,
        response: '',
        error: '',
      });

    case types.GET_NEWS_SUCCESS:
      return state.merge({
        requesting: false,
        success: true,
        response: '',
        getNewsSuccessResponse: fromJS(action.response.data),
        error: '',
      });
    case types.GET_NEWS_BY_ID_SUCCESS:
      return state.merge({
        requesting: false,
        success: true,
        response: '',
        eachNews: fromJS(action.response.data),
        error: null,
      });

    case types.GET_NEWS_FAILURE:
    case types.GET_NEWS_BY_ID_FAILURE:
      return state.merge({
        requesting: false,
        success: false,
        response: '',
        error: action.error.message,
      });
    default:
      return state;
  }
}

export default newsReducer;
