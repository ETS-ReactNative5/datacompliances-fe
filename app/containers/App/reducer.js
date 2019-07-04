/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import { normalize } from 'normalizr';
import * as types from './constants';
import { contentTemplateSchema } from './schemas';

// The initial state of the App
const initialState = fromJS({
  response: '',
  error: '',
  requesting: false,
  success: false,
  orgInfoData: null,
  orgInfoError: '',
  orgInfoRequesting: false,
  contentTemplateNormalized: {},
  contentTemplateData: {
    dataList: [],
    totalItems: 0,
    currentPage: 1,
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_ORGANIZATION_INFO_REQUEST:
      return state.merge({
        orgInfoRequesting: true,
        orgInfoData: '',
        orgInfoError: '',
      });
    case types.LOAD_ORGANIZATION_INFO_SUCCESS:
      return state.merge({
        requesting: false,
        orgInfoData: fromJS(action.response.data),
        orgInfoError: '',
      });
    case types.LOAD_ORGANIZATION_INFO_FAILURE:
      return state.merge({
        requesting: false,
        orgInfoData: '',
        orgInfoError: action.error.message,
      });
    case types.LOAD_CONTENT_TEMPLATE_REQUEST:
      return state.merge({
        requesting: true,
        success: false,
        response: '',
        error: '',
      });

    case types.LOAD_CONTENT_TEMPLATE_SUCCESS:
      return state.merge({
        contentTemplateNormalized: fromJS(
          normalize(action.response.data.dataList, [contentTemplateSchema])
            .entities.contentTemplate || {},
        ),
      });
    // return state.merge({
    //   requesting: false,
    //   success: true,
    //   error: '',
    //   contentTemplateData: fromJS(action.response.data),
    // });
    case types.LOAD_CONTENT_TEMPLATE_FAILURE:
      return state.merge({
        requesting: false,
        success: false,
        error: action.error.message,
        response: '',
      });

    case types.SHOW_DIALOG:
      return state.merge({
        dialog: fromJS(action.payload),
      });

    default:
      return state;
  }
}

export default appReducer;
