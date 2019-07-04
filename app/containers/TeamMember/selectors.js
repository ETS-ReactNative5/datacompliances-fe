import { createSelector } from 'reselect';

const selectTeamMemberDomain = state => state.get('team');

const makeSelectSuccess = () =>
  createSelector(
    selectTeamMemberDomain,
    state => state.get('success'),
  );
const makeSelectResponse = () =>
  createSelector(
    selectTeamMemberDomain,
    state => state.get('response'),
  );
const makeSelectError = () =>
  createSelector(
    selectTeamMemberDomain,
    state => state.get('error'),
  );
const makeSelectRequesting = () =>
  createSelector(
    selectTeamMemberDomain,
    state => state.get('requesting'),
  );
const makeSelectData = () =>
  createSelector(
    selectTeamMemberDomain,
    state => state.get('teamMember'),
  );
const makeSelectSingleData = () =>
  createSelector(
    selectTeamMemberDomain,
    state => state.get('singleTeamMember'),
  );

export {
  makeSelectData,
  makeSelectError,
  makeSelectRequesting,
  makeSelectResponse,
  makeSelectSingleData,
  makeSelectSuccess,
};
