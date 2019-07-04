import { takeLatest, fork, take, cancel } from 'redux-saga/effects';
import * as types from './constants';
import * as actions from './actions';
import Api from 'utils/apiHelper';
import { LOCATION_CHANGE, push } from 'react-router-redux';
function* redirectOnSuccess() {
  yield take(types.POST_DONATION_CONTACT_SUCCESS);
}

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

function* postDonationContactRequest(action) {
  const { data, role } = action;
  const successWatcher = yield fork(redirectOnSuccess);
  yield fork(
    Api.post(
      `how-can-you-help`,
      actions.postDonationContactSuccess,
      actions.postDonationContactFailure,
      data,
      role,
    ),
  );
  yield take([LOCATION_CHANGE, types.POST_DONATION_CONTACT_FAILURE]);
  yield cancel(successWatcher);
}
// Individual exports for testing
export default function* contactWatcher() {
  // See example in containers/HomePage/sagas.js
  yield takeLatest(
    types.POST_DONATION_CONTACT_REQUEST,
    postDonationContactRequest,
  );
  // yield takeLatest(
  //   types.LOAD_DONATION_CONTACT_CATEGORY_REQUEST,
  //   loadDonationCategoryRequest,
  // );
}
