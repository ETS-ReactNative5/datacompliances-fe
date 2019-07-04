import action from 'utils/action';
import * as types from './constants';

export const loadTeamMemberRequest = action(
  types.LOAD_TEAM_MEMBER_REQUEST,
  'page',
  'perPage',
  'query',
);
export const loadTeamMemberSuccess = action(
  types.LOAD_TEAM_MEMBER_SUCCESS,
  'response',
);
export const loadTeamMemberFailure = action(
  types.LOAD_TEAM_MEMBER_FAILURE,
  'error',
);

export const loadTeamMemberBySlugRequest = action(
  types.LOAD_TEAM_MEMBER_BY_SLUG_REQUEST,
  'slug',
);
export const loadTeamMemberBySlugSuccess = action(
  types.LOAD_TEAM_MEMBER_BY_SLUG_SUCCESS,
  'response',
);
export const loadTeamMemberBySlugFailure = action(
  types.LOAD_TEAM_MEMBER_BY_SLUG_FAILURE,
  'error',
);
