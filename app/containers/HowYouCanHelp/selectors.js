import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectContactDomain = state => state.get('donation', initialState);

const makeSelectSuccess = () =>
  createSelector(
    selectContactDomain,
    state => state.get('success'),
  );
const makeSelectResponse = () =>
  createSelector(
    selectContactDomain,
    state => state.get('response'),
  );
const makeSelectError = () =>
  createSelector(
    selectContactDomain,
    state => state.get('error'),
  );
const makeSelectRequesting = () =>
  createSelector(
    selectContactDomain,
    state => state.get('requesting'),
  );

const makeSelectCategory = () =>
  createSelector(
    selectContactDomain,
    state => state.get('category'),
  );

export {
  makeSelectSuccess,
  makeSelectResponse,
  makeSelectError,
  makeSelectRequesting,
  makeSelectCategory,
};
