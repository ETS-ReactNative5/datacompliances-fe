
import {
  defaultActionRequest,
} from '../actions';
import {
  DEFAULT_ACTION_REQUEST,
} from '../constants';

describe('ViewPractice actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION_REQUEST', () => {
      const expected = {
        type: DEFAULT_ACTION_REQUEST,
      };
      expect(defaultActionRequest()).toEqual(expected);
    });
  });
});