/**
 * Created by Saroj on 2/13/19.
 */
import { take, takeLatest, call, put, select, fork, cancel } from 'redux-saga/effects';
import * as types from './constants';
import * as actions from './actions';
import Api from 'utils/apiHelper';



function* loadBlogsRequest(action) {
  const { query, page, perPage } = action;
  yield fork(
    Api.get(
      `blog?page=${page}&perpage=${perPage}&featured=true`,
      actions.loadAllBlogsSuccess,
      actions.loadAllBlogsFailure,
    )
  );
}
// Individual exports for testing
export default function* blogsWatcher() {
  // See example in containers/HomePage/sagas.js
  yield takeLatest(types.LOAD_ALL_BLOGS_REQUEST, loadBlogsRequest);
}

