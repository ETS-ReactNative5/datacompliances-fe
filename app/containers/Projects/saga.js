import {
    take,
    takeLatest,
    fork,
    cancel,
  } from 'redux-saga/effects';
import { LOCATION_CHANGE, push } from 'react-router-redux';
import * as types from './constants';
import * as actions from './action';
import Agriculture from 'utils/apiHelper';

function* redirectOnSuccess(){
    const action = yield take(types.LOAD_PROJECT_SUCCESS);
}

function* loadProjectRequest(action){
    const token = localStorage.getItem('token');
    const {page, perPage, query} = action;
    const successWatcher = yield fork(redirectOnSuccess);
    yield fork(
        Agriculture.get(
         `projects/list?page=${page}&perpage=${perPage}`,
          actions.loadProjectSuccess,
          actions.loadProjectFailure,
          '',
        ),
    );
    yield take([LOCATION_CHANGE, types.LOAD_PROJECT_FAILURE]);
    yield cancel(successWatcher);
}

function* loadProjectByIdRequest(action){
    const token = localStorage.getItem('token');
    const { slug } = action;
    yield fork(
        Agriculture.get(
            `projects/detail/${slug}`,
             actions.loadProjectByIdSuccess,
             actions.loadProjectByIdFailure,
             '',
        ),
    );
}

export default function* PROJECTWatcher(){
    yield takeLatest(types.LOAD_PROJECT_REQUEST, loadProjectRequest);
    yield takeLatest(
        types.LOAD_PROJECT_BY_ID_REQUEST, 
        loadProjectByIdRequest,
    );
}