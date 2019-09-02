import action from 'utils/action';
import * as types from './constants';

export const getGraphDataRequest = action(
  types. GET_GRAPH_REQUEST,
  'data',
);
export const getGraphDataSuccess = action(
  types. GET_GRAPH_SUCCESS,
  'response',
);
export const getGraphDataFailure = action(
  types. GET_GRAPH_FAILURE,
  'error',
);




export const clearMessage = action(types.CLEAR_MESSAGE);

// export const updateProfile = action(types.UPDATE_PROFILE, 'agentId', 'profile');
// export const profileUpdated = action(types.UPDATE_PROFILE_SUCCESS, 'response');
// export const profileUpdatingFailure = action(types.UPDATE_PROFILE_FAILURE, 'error');
