import {
  take,
  takeLatest,
  fork,
  call,
  put,
  select,
  cancel,
} from 'redux-saga/effects';
import { LOCATION_CHANGE, push } from 'react-router-redux';
import * as types from './constants';
import * as actions from './actions';
import TenderKo from 'utils/apiHelper';

function* redirectOnLoadQuestionnaireSuccess() {
  const action = yield take(types.LOAD_ALL_QUESTIONNAIRE_SUCCESS);
  // executed on successful action
  // yield put(push("/next-route"));
}

function* loadAllQuestionnaireService(action) {
  const token = localStorage.getItem('token');
  const { id, package_id } = action;
  const successWatcher = yield fork(redirectOnLoadQuestionnaireSuccess);
  yield fork(
    TenderKo.get(
      `mcqs-exam/questionaire/${id}?page=1&perpage=100&package_id=${package_id}`,
      actions.loadAllQuestionnaireSuccess,
      actions.loadAllQuestionnaireFailure,
      token,
    ),
  );
  yield take([LOCATION_CHANGE, types.LOAD_ALL_QUESTIONNAIRE_FAILURE]);
  yield cancel(successWatcher);
}

function* redirectOnLoadTrialQuestionnaireSuccess() {
  const action = yield take(types.LOAD_TRIAL_QUESTIONNAIRE_SUCCESS);
  // executed on successful action
  // yield put(push("/next-route"));
}

function* loadTrialQuestionnaireService(action) {
  const token = localStorage.getItem('token');
  const { id } = action;
  const successWatcher = yield fork(redirectOnLoadTrialQuestionnaireSuccess);
  yield fork(
    TenderKo.get(
      `mcqs-exam/trial/${id}`,
      actions.loadTrialQuestionnaireSuccess,
      actions.loadTrialQuestionnaireFailure,
      token,
    ),
  );
  yield take([LOCATION_CHANGE, types.LOAD_TRIAL_QUESTIONNAIRE_FAILURE]);
  yield cancel(successWatcher);
}

function* redirectOnLoadByIdSuccess() {
  const action = yield take(types.LOAD_EXAM_BY_ID_SUCCESS);
  // executed on successful action
  // yield put(push("/next-route"));
}

function* loadExamByIdService(action) {
  const token = localStorage.getItem('token');
  const successWatcher = yield fork(redirectOnLoadByIdSuccess);
  const { exam_id } = action;
  yield fork(
    TenderKo.get(
      `mcqs-exam/${exam_id}`,
      actions.loadExamByIdSuccess,
      actions.loadExamByIdFailure,
      token,
    ),
  );
  yield take([LOCATION_CHANGE, types.LOAD_EXAM_BY_ID_FAILURE]);
  yield cancel(successWatcher);
}
function* redirectOnFavoriteSuccess() {
  const action = yield take(types.FAVORITE_QUESTION_SUCCESS);
  // executed on successful action
  // yield put(push("/next-route"));
}
function* favoriteQuestionRequest(action) {
  const token = localStorage.getItem('token');
  const successWatcher = yield fork(redirectOnFavoriteSuccess);
  const { question_id, package_id } = action;
  yield fork(
    TenderKo.post(
      `mcqs-questionnaires/favourite/${question_id}?package_id=${package_id}`,
      actions.favoriteQuestionSuccess,
      actions.favoriteQuestionFailure,
      {},
      token,
    ),
  );
  yield take([LOCATION_CHANGE, types.FAVORITE_QUESTION_FAILURE]);
  yield cancel(successWatcher);
}
function* redirectOnUnFavoriteSuccess() {
  const action = yield take(types.UNFAVORITE_QUESTION_SUCCESS);
  // executed on successful action
  // yield put(push("/next-route"));
}
function* unfavoriteQuestionRequest(action) {
  const token = localStorage.getItem('token');
  const successWatcher = yield fork(redirectOnUnFavoriteSuccess);
  const { question_id, package_id } = action;
  yield fork(
    TenderKo.post(
      `mcqs-questionnaires/unfavourite/${question_id}?package_id=${package_id}`,
      actions.unfavoriteQuestionSuccess,
      actions.unfavoriteQuestionFailure,
      {},
      token,
    ),
  );
  yield take([LOCATION_CHANGE, types.UNFAVORITE_QUESTION_FAILURE]);
  yield cancel(successWatcher);
}

function* redirectOnResultPostSuccess() {
  const action = yield take(types.POST_RESULT_SUCCESS);
  // executed on successful action
  // yield put(push("/next-route"));
}

function* postResultRequest(action) {
  const token = localStorage.getItem('token');
  const successWatcher = yield fork(redirectOnResultPostSuccess);
  const { result } = action;
  yield fork(
    TenderKo.post(
      'mcqs-exam/score',
      actions.postResultSuccess,
      actions.postResultFailure,
      result,
      token,
    ),
  );
  yield take([LOCATION_CHANGE, types.POST_RESULT_FAILURE]);
  yield cancel(successWatcher);
}

function* redirectOnQuestionScorePostSuccess() {
  const action = yield take(types.POST_QUESTION_SCORE_SUCCESS);
  // executed on successful action
  // yield put(push("/next-route"));
}

function* postQuestionScoreRequest(action) {
  const token = localStorage.getItem('token');
  const successWatcher = yield fork(redirectOnQuestionScorePostSuccess);
  const { data } = action;
  yield fork(
    TenderKo.post(
      'mcqs-exam/record',
      actions.postQuestionScoreSuccess,
      actions.postQuestionScoreFailure,
      data,
      token,
    ),
  );
  yield take([LOCATION_CHANGE, types.POST_QUESTION_SCORE_FAILURE]);
  yield cancel(successWatcher);
}

function* redirectOnLoadSuccess() {
  const action = yield take(types.LOAD_ALL_FAVORITE_QUESTIONNAIRE_SUCCESS);
  // executed on successful action
  // yield put(push("/next-route"));
}

function* loadAllFavoriteQuestion(action) {
  const token = localStorage.getItem('token');
  const successWatcher = yield fork(redirectOnLoadSuccess);
  const { page, perPage, query } = action;
  yield fork(
    TenderKo.get(
      `mcqs-questionnaires/favourite?page=${page}&perpage=${perPage}`,
      actions.loadAllFavoriteQuestionnaireSuccess,
      actions.loadAllFavoriteQuestionnaireFailure,
      token,
    ),
  );
  yield take([LOCATION_CHANGE, types.LOAD_ALL_FAVORITE_QUESTIONNAIRE_FAILURE]);
  yield cancel(successWatcher);
}

// Individual exports for testing
export default function* viewPracticeWatcher() {
  // See example in containers/HomePage/sagas.js
  yield takeLatest(
    types.LOAD_ALL_QUESTIONNAIRE_REQUEST,
    loadAllQuestionnaireService,
  );
  yield takeLatest(types.LOAD_EXAM_BY_ID_REQUEST, loadExamByIdService);
  yield takeLatest(
    types.UNFAVORITE_QUESTION_REQUEST,
    unfavoriteQuestionRequest,
  );
  yield takeLatest(types.FAVORITE_QUESTION_REQUEST, favoriteQuestionRequest);
  yield takeLatest(
    types.LOAD_TRIAL_QUESTIONNAIRE_REQUEST,
    loadTrialQuestionnaireService,
  );
  yield takeLatest(types.POST_RESULT_REQUEST, postResultRequest);
  yield takeLatest(
    types.LOAD_ALL_FAVORITE_QUESTIONNAIRE_REQUEST,
    loadAllFavoriteQuestion,
  );
  yield takeLatest(types.POST_QUESTION_SCORE_REQUEST, postQuestionScoreRequest);
}
