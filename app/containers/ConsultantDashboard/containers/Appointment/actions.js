import action from 'utils/action';
import * as types from './constants';

export const postTimeSlotRequest = action(
  types.GET_TimeSlot_REQUEST,
  'payload'
);
export const postTimeSlotSuccess = action(
  types.GET_TimeSlot_SUCCESS,
  'response',
);
export const postTimeSlotRequestFailure = action(
  types.GET_TimeSlot_FAILURE,
  'error',
);


export const clearMessage = action(types.CLEAR_MESSAGE);
