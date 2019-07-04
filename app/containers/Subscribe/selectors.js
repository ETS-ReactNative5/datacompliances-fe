
import { createSelector } from "reselect";

const selectSubscribe = state => state.get('subscribe');



const makeSelectSuccessResponse = () => createSelector(selectSubscribe, subscribeState => subscribeState.get('response'));
const makeSelectErrorResponse = () => createSelector(selectSubscribe, subscribeState => subscribeState.get('error'));

export { makeSelectSuccessResponse, makeSelectErrorResponse };
