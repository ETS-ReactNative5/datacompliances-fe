import { call, takeLatest } from 'redux-saga/effects';
import * as types from './constants';
import * as actions from './actions';
import PCSC from 'utils/apiHelper';
import getToken from 'utils/getToken';
// import jwtDecode from 'jwt-decode';

function* getGraphDataRequest(action) {
  const token = getToken();
  yield call(
    PCSC.get(
      `graph`,
      actions.getGraphDataSuccess,
      actions.getGraphDataSuccess,
      token,
    ),
  );
}
// ${action.product_id}
export default function* agentSettingsWatcher() {
  yield takeLatest(types.GET_GRAPH_REQUEST, getGraphDataRequest);
}
