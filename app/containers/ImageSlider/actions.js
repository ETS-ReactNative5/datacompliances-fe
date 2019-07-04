import action from 'utils/action';
import * as types from './constants';

export const loadImageSliderRequest = action(
  types.LOAD_IMAGE_SLIDER_REQUEST,
  'page',
  'perpage',
  'query',
);
export const loadImageSliderSuccess = action(
  types.LOAD_IMAGE_SLIDER_SUCCESS,
  'response',
);
export const loadImageSliderFailure = action(
  types.LOAD_IMAGE_SLIDER_FAILURE,
  'error',
);

export const loadImageSliderByIdRequest = action(
  types.LOAD_IMAGE_SLIDER_BY_ID_REQUEST,
  'id',
);
export const loadImageSliderByIdSuccess = action(
  types.LOAD_IMAGE_SLIDER_BY_ID_SUCCESS,
  'response',
);
export const loadImageSliderByIdFailure = action(
  types.LOAD_IMAGE_SLIDER_BY_ID_FAILURE,
  'error',
);
