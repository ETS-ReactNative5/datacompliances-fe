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
  singleProject: {},
});

function ProjectReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_PROJECT_REQUEST:
    case types.LOAD_PROJECT_BY_ID_REQUEST:
      let xresponse =
        state.get('response') != null ? state.get('response') : null;
      return state.merge({
        requesting: true,
        success: false,
        response: xresponse,
        xresponse: null,
        error: null,
      });

    case types.LOAD_PROJECT_SUCCESS:
      xresponse = state.get('response') != null ? state.get('response') : null;
      return state.merge({
        requesting: false,
        success: true,
        response: null,
        xresponse: xresponse,
        error: null,
        dataObj: fromJS(action.response.data),
      });

    case types.LOAD_PROJECT_BY_ID_SUCCESS:
      return state.merge({
        requesting: false,
        success: true,
        response: action.response.message,
        error: null,
        singleProject: fromJS(action.response.data),
      });
    
    case types.LOAD_PROJECT_FAILURE:
    case types.LOAD_PROJECT_BY_ID_FAILURE:
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

export default ProjectReducer;