import { fromJS } from 'immutable';
import packageListReducer from '../reducer';

describe('packageListReducer', () => {
  it('returns the initial state', () => {
    expect(packageListReducer(undefined, {})).toEqual(fromJS({}));
  });
});
