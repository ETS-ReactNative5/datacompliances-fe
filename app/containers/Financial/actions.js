import action from 'utils/action';
import * as types from './constants';

export const loadFinancialRequest = action(
  types.LOAD_FINANCIAL_REQUEST,
  'page',
  'perpage',
  'query',
);
export const loadFinancialSuccess = action(types.LOAD_FINANCIAL_SUCCESS, 'response');
export const loadFinancialFailure = action(types.LOAD_FINANCIAL_FAILURE, 'error');

export const loadFinancialByIdRequest = action(
  types.LOAD_FINANCIAL_BY_ID_REQUEST,
  'slug',
);
export const loadFinancialByIdSuccess = action(
  types.LOAD_FINANCIAL_BY_ID_SUCCESS,
  'response',
);
export const loadFinancialByIdFailure = action(
  types.LOAD_FINANCIAL_BY_ID_FAILURE,
  'error',
);
