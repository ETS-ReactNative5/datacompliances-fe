/*
 *
 * ViewPractice reducer
 *
 */

import { fromJS } from 'immutable';
import * as types from './constants';
import { LOGOUT_SUCCESS } from 'containers/Login/constants';

const initialState = fromJS({
  response: '',
  error: '',
  requesting: false,
  success: false,
  getQuestionnaireSuccess: {},
  getFavoriteQuestionnaireSuccess: [],
  examDisplay: {},
  trialQuestions: {},
  resultResponse: {},
  faverror: '',
  favresponse: '',
  saveAnswerResponse: {}
});

function viewPracticeReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.SAVE_ANSWER_REQUEST:
    case types.LOAD_ALL_QUESTIONNAIRE_REQUEST:
    case types.FAVORITE_QUESTION_REQUEST:
    case types.UNFAVORITE_QUESTION_REQUEST:
    case types.LOAD_EXAM_BY_ID_REQUEST:
    case types.LOAD_ALL_FAVORITE_QUESTIONNAIRE_REQUEST:
    case types.LOAD_TRIAL_QUESTIONNAIRE_REQUEST:
    case types.POST_RESULT_REQUEST:
    case types.POST_QUESTION_SCORE_REQUEST:
      return state.merge({
        requesting: true,
        success: false,
        response: '',
        error: '',
        faverror: '',
        favresponse: '',
        saveAnswerResponse: {}
      });
    case types.POST_QUESTION_SCORE_SUCCESS:
      return state.merge({
        requesting: false,
        success: true,
        response: action.response.message,
        error: '',
      });
    case types.LOAD_ALL_QUESTIONNAIRE_SUCCESS:
      return state.merge({
        requesting: false,
        success: true,
        response: action.response.message,
        getQuestionnaireSuccess: fromJS(action.response.data.dataList),
        error: '',
      });

    case types.LOAD_TRIAL_QUESTIONNAIRE_SUCCESS:
      return state.merge({
        requesting: false,
        success: true,
        response: action.response.message,
        trialQuestions: fromJS(action.response.data),
        error: '',
      });

    case types.LOAD_ALL_FAVORITE_QUESTIONNAIRE_SUCCESS:
      return state.merge({
        requesting: false,
        success: true,
        response: action.response.message,
        getFavoriteQuestionnaireSuccess: fromJS(action.response.data.dataList),
        error: '',
      });

    case types.FAVORITE_QUESTION_SUCCESS:
      return state.merge({
        requesting: false,
        success: true,
        favresponse: action.response.message,
        faverror: '',
      });

    case types.UNFAVORITE_QUESTION_SUCCESS:
      return state.merge({
        requesting: false,
        success: true,
        favresponse: action.response.message,
        faverror: '',
      });

    case types.LOAD_EXAM_BY_ID_SUCCESS:
      return state.merge({
        requesting: false,
        success: true,
        response: action.response.message,
        error: null,
        examDisplay: fromJS(action.response.data),
      });
    case types.POST_RESULT_SUCCESS:
      return state.merge({
        requesting: false,
        success: true,
        response: action.response.message,
        error: null,
        resultResponse: fromJS(action.response.data),
      });

    case types.SAVE_ANSWER_SUCCESS:
    return state.merge({
      requesting: false,
      success: true,
      response: action.response.message,
      error: null,
      saveAnswerResponse: fromJS(action.response.data),
    });  

    case types.FAVORITE_QUESTION_FAILURE:
    case types.UNFAVORITE_QUESTION_FAILURE:
      return state.merge({
        requesting: false,
        success: false,
        favresponse: '',
        faverror: action.error.message,
      });
    
    case types.SAVE_ANSWER_FAILURE:  
    case types.LOAD_ALL_QUESTIONNAIRE_FAILURE:
    case types.LOAD_EXAM_BY_ID_FAILURE:
    case types.LOAD_ALL_FAVORITE_QUESTIONNAIRE_FAILURE:
    case types.LOAD_TRIAL_QUESTIONNAIRE_FAILURE:
    case types.POST_RESULT_FAILURE:
    case types.POST_QUESTION_SCORE_FAILURE:
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
        faverror: '',
        favresponse: '',
      });

    case LOGOUT_SUCCESS:
      return initialState;
    default:
      return state;
  }
}

export default viewPracticeReducer;
