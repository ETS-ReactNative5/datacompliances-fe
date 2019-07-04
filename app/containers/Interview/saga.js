/**
 * Created by Saroj on 2/13/19.
 */
import { take, takeLatest, call, put, select, fork, cancel } from 'redux-saga/effects';
import * as types from './constants';
import * as actions from './actions';
import Api from 'utils/apiHelper';



function* loadAllInterview(action) {
  const { data } = action
  yield fork(Api.get(`interview?page=${data.page}&perpage=${data.perPage}`, actions.loadAllInterviewSuccess,
    actions.loadAllInterviewFailure));
}
function* loadInterviewById(action) {
  yield fork(Api.get(`interview/${action.id}`, actions.loadInterviewByIDSuccess,
    actions.loadInterviewByIDFailure));
}
// Individual exports for testing
export default function* interviewWatcher() {
  // See example in containers/HomePage/sagas.js
  yield takeLatest(types.LOAD_ALL_INTERVIEW_REQUEST, loadAllInterview);
  yield takeLatest(types.LOAD_INTERVIEW_BY_ID_REQUEST, loadInterviewById);
}
