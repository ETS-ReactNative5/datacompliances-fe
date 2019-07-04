import action from 'utils/action';
import * as types from './constants';

export const loadImageGalleryRequest = action(
  types.LOAD_IMAGE_GALLERY_REQUEST,
  'page',
  'perpage',
  'query',
);
export const loadImageGallerySuccess = action(
  types.LOAD_IMAGE_GALLERY_SUCCESS,
  'response',
);
export const loadImageGalleryFailure = action(
  types.LOAD_IMAGE_GALLERY_FAILURE,
  'error',
);

export const loadImageGalleryByIdRequest = action(
  types.LOAD_IMAGE_GALLERY_BY_ID_REQUEST,
  'id',
);
export const loadImageGalleryByIdSuccess = action(
  types.LOAD_IMAGE_GALLERY_BY_ID_SUCCESS,
  'response',
);
export const loadImageGalleryByIdFailure = action(
  types.LOAD_IMAGE_GALLERY_BY_ID_FAILURE,
  'error',
);


