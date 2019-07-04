/**
 * Created by Saroj on 2/13/19.
 */
import { take, takeLatest, call, put, select, fork, cancel } from 'redux-saga/effects';
import * as types from './constants';
import * as actions from './actions';
import Api from 'utils/apiHelper';



function* loadBlogsRequest(action) {
  const { query, page, perPage } = action;
  yield call(
    Api.get(
      `blog?page=${page}&perpage=${perPage}&category_id=${query.category_id ? query.category_id : ''}&tags=${query.tags ? query.tags : ''}`,
      actions.loadAllBlogsSuccess,
      actions.loadAllBlogsFailure,
    )
  );
}
function* loadBlogByIdRequest(action) {
  const { blog_id } = action;
  yield fork(Api.get(`blog/slug/${blog_id}`, actions.loadBlogByIdSuccess,
    actions.loadBlogByIdFailure));
}


// Individual exports for testing
export default function* blogsWatcher() {
  // See example in containers/HomePage/sagas.js
  yield takeLatest(types.LOAD_ALL_BLOGS_REQUEST, loadBlogsRequest);
  yield takeLatest(types.LOAD_BLOG_BY_ID_REQUEST, loadBlogByIdRequest);
}

