/**
 * Created by Saroj on 2/13/19.
 */
import { take, takeLatest, call, put, select, fork, cancel } from 'redux-saga/effects';
import * as types from './constants';
import * as actions from './actions';
import Api from 'utils/apiHelper';



function* loadAllTags() {
  yield fork(
    Api.get(
      `blog/tags`,
      actions.loadAllTagsSuccess,
      actions.loadAllTagsFailure,
    )
  );
}
// Individual exports for testing
export default function* tagsWatcher() {
  // See example in containers/HomePage/sagas.js
  yield takeLatest(types.LOAD_ALL_TAGS_REQUEST, loadAllTags)
}
