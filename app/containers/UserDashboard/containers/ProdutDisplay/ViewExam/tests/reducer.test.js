
import { fromJS } from 'immutable';
import viewExamReducer from '../reducer';

describe('viewExamReducer', () => {
  it('returns the initial state', () => {
    expect(viewExamReducer(undefined, {})).toEqual(fromJS({}));
  });
});
