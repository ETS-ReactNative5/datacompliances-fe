/*
 *
 * ViewPractice actions
 *
 */

import action from 'utils/action';
import * as types from './constants';

export const defaultActionRequest = action(
  types.DEFAULT_ACTION_REQUEST,
  'payload',
);
export const defaultActionSuccess = action(
  types.DEFAULT_ACTION_SUCCESS,
  'response',
);
export const defaultActionFailure = action(
  types.DEFAULT_ACTION_FAILURE,
  'error',
);

export const loadAllQuestionnaireRequest = action(
  types.LOAD_ALL_QUESTIONNAIRE_REQUEST,
  'id',
  'package_id',
);
export const loadAllQuestionnaireSuccess = action(
  types.LOAD_ALL_QUESTIONNAIRE_SUCCESS,
  'response',
);
export const loadAllQuestionnaireFailure = action(
  types.LOAD_ALL_QUESTIONNAIRE_FAILURE,
  'error',
);

export const loadAllFavoriteQuestionnaireRequest = action(
  types.LOAD_ALL_FAVORITE_QUESTIONNAIRE_REQUEST,
  'page',
  'perPage',
  'query',
);
export const loadAllFavoriteQuestionnaireSuccess = action(
  types.LOAD_ALL_FAVORITE_QUESTIONNAIRE_SUCCESS,
  'response',
);
export const loadAllFavoriteQuestionnaireFailure = action(
  types.LOAD_ALL_FAVORITE_QUESTIONNAIRE_FAILURE,
  'error',
);

export const favoriteQuestionRequest = action(
  types.FAVORITE_QUESTION_REQUEST,
  'question_id',
  'package_id',
);
export const favoriteQuestionSuccess = action(
  types.FAVORITE_QUESTION_SUCCESS,
  'response',
);
export const favoriteQuestionFailure = action(
  types.FAVORITE_QUESTION_FAILURE,
  'error',
);

export const unfavoriteQuestionRequest = action(
  types.UNFAVORITE_QUESTION_REQUEST,
  'question_id',
  'package_id',
);
export const unfavoriteQuestionSuccess = action(
  types.UNFAVORITE_QUESTION_SUCCESS,
  'response',
);
export const unfavoriteQuestionFailure = action(
  types.UNFAVORITE_QUESTION_FAILURE,
  'error',
);

export const loadExamByIdRequest = action(
  types.LOAD_EXAM_BY_ID_REQUEST,
  'exam_id',
);
export const loadExamByIdSuccess = action(
  types.LOAD_EXAM_BY_ID_SUCCESS,
  'response',
);
export const loadExamByIdFailure = action(
  types.LOAD_EXAM_BY_ID_FAILURE,
  'error',
);

export const loadTrialQuestionnaireRequest = action(
  types.LOAD_TRIAL_QUESTIONNAIRE_REQUEST,
  'id',
);
export const loadTrialQuestionnaireSuccess = action(
  types.LOAD_TRIAL_QUESTIONNAIRE_SUCCESS,
  'response',
);
export const loadTrialQuestionnaireFailure = action(
  types.LOAD_TRIAL_QUESTIONNAIRE_FAILURE,
  'error',
);

export const postQuestionScoreRequest = action(
  types.POST_QUESTION_SCORE_REQUEST,
  'data',
);
export const postQuestionScoreSuccess = action(
  types.POST_QUESTION_SCORE_SUCCESS,
  'response',
);
export const postQuestionScoreFailure = action(
  types.POST_QUESTION_SCORE_FAILURE,
  'error',
);

export const postResultRequest = action(types.POST_RESULT_REQUEST, 'result');
export const postResultSuccess = action(types.POST_RESULT_SUCCESS, 'response');
export const postResultFailure = action(types.POST_RESULT_FAILURE, 'error');

export const clearMessage = action(types.CLEAR_MESSAGE);
