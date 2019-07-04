/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

// import { LOAD_REPOS, LOAD_REPOS_SUCCESS, LOAD_REPOS_ERROR } from './constants';
import action from 'utils/action';
import * as types from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export const loadRepos = action(types.LOAD_REPOS);
/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export const reposLoaded = action(
  types.LOAD_REPOS_SUCCESS,
  'repos',
  'username',
);
/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export const repoLoadingError = action(types.LOAD_REPOS_ERROR, 'error');
export const loadOrganizationInfoRequest = action(
  types.LOAD_ORGANIZATION_INFO_REQUEST,
);
export const loadOrganizationInfoSuccess = action(
  types.LOAD_ORGANIZATION_INFO_SUCCESS,
  'response',
);
export const loadOrganizationInfoFailure = action(
  types.LOAD_ORGANIZATION_INFO_FAILURE,
  'error',
);

export const loadContentTemplateRequest = action(
  types.LOAD_CONTENT_TEMPLATE_REQUEST,
);

export const loadContentTemplateSuccess = action(
  types.LOAD_CONTENT_TEMPLATE_SUCCESS,
  'response',
);

export const loadContentTemplateFailure = action(
  types.LOAD_CONTENT_TEMPLATE_FAILURE,
  'error',
);

export const showDialog = action(types.SHOW_DIALOG, 'payload');
