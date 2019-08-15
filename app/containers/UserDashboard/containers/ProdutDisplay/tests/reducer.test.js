
import { fromJS } from 'immutable';
import examDisplayReducer from '../reducer';

describe('examDisplayReducer', () => {
  it('returns the initial state', () => {
    expect(examDisplayReducer(undefined, {})).toEqual(fromJS({}));
  });
});
