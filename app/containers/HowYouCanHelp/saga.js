// import {
//   take,
//   takeLatest,
//   fork,
//   call,
//   put,
//   select,
//   cancel,
// } from 'redux-saga/effects';
// import * as types from './constants';
// import { LOCATION_CHANGE, push } from 'react-router-redux';
// import * as actions from './actions';
// import Api from 'utils/apiHelper';

// function* redirectOnSuccess() {
//   const action = yield take(types.LOAD_DONATION_CONTACT_SUCCESS);
// }

// function* loadDonationCategoryRequest(action) {
//   const { query, page, perPage } = action;
//   const successWatcher = yield fork(redirectOnSuccess);

//   yield fork(
//     Api.get(
//       `how-can-you-help?page=1&perpage=3&active=all`,
//       actions.loadDonationCategorySuccess,
//       actions.loadDonationCategoryFailure,
//     ),
//   );
//   yield take([LOCATION_CHANGE, types.LOAD_DONATION_CONTACT_FAILURE]);
//   yield cancel(successWatcher);
// }

// // Individual exports for testing
// export default function* donationWatcher() {
//   // See example in containers/HomePage/sagas.js

//   yield takeLatest(
//     types.LOAD_DONATION_CONTACT_CATEGORY_REQUEST,
//     loadDonationCategoryRequest,
//   );
// }

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
import Agriculture from 'utils/apiHelper';

function* redirectOnSuccess() {
  const action = yield take(types.LOAD_DONATION_CONTACT_CATEGORY_SUCCESS);
}

function* loadDonationCategoryRequest(action) {
  const { query, page, perPage } = action;
  const successWatcher = yield fork(redirectOnSuccess);
  yield fork(
    Agriculture.get(
      `how-can-you-help-category?page=${page}&perpage=${perPage}`,
      actions.loadDonationCategorySuccess,
      actions.loadDonationCategoryFailure,
      '',
    ),
  );
  yield take([LOCATION_CHANGE, types.LOAD_DONATION_CONTACT_CATEGORY_FAILURE]);
  yield cancel(successWatcher);
}

export default function* eventWatcher() {
  yield takeLatest(
    types.LOAD_DONATION_CONTACT_CATEGORY_REQUEST,
    loadDonationCategoryRequest,
  );
}
