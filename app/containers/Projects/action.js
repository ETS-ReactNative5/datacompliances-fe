import action from 'utils/action';
import * as types from './constants';

export const loadProjectRequest = action(
    types.LOAD_PROJECT_REQUEST,
    'page',
    'perPage',
    'query',
);
export const loadProjectSuccess = action(
    types.LOAD_PROJECT_SUCCESS,
    'response',
);
export const loadProjectFailure = action(
    types.LOAD_PROJECT_FAILURE,
    'error',
);
export const loadProjectByIdRequest = action(
    types.LOAD_PROJECT_BY_ID_REQUEST,
    'slug',
);
export const loadProjectByIdSuccess = action(
    types.LOAD_PROJECT_BY_ID_SUCCESS,
    'response',
);
export const loadProjectByIdFailure = action(
    types.LOAD_PROJECT_BY_ID_FAILURE,
    'error',
);