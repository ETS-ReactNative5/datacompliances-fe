
import { fromJS } from 'immutable';
import viewPracticeReducer from '../reducer';

describe('viewPracticeReducer', () => {
  it('returns the initial state', () => {
    expect(viewPracticeReducer(undefined, {})).toEqual(fromJS({}));
  });
});
