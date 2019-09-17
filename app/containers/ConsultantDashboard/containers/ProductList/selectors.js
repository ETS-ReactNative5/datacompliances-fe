import { createSelector } from 'reselect';

/**
 * Direct selector to the productList state domain
 */

const selectProductListDomain = state => state.productList;

const makeSelectSuccess = () =>
  createSelector(
    selectProductListDomain,
    state => state.get('success'),
  );
const makeSelectPackageResponse = () =>
  createSelector(
    selectProductListDomain,
    state => state.get('response'),
  );
const makeSelectXResponse = () =>
  createSelector(
    selectProductListDomain,
    state => state.get('xresponse'),
  );
const makeSelectError = () =>
  createSelector(
    selectProductListDomain,
    state => state.get('error'),
  );
const makeSelectRequesting = () =>
  createSelector(
    selectProductListDomain,
    state => state.get('requesting'),
  );
const makeSelectDataObj = () =>
  createSelector(
    selectProductListDomain,
    state => state.get('dataObj'),
  );
const makeSelectNewData = () =>
  createSelector(
    selectProductListDomain,
    state => state.get('newData'),
  );
const makeSelectCartPackage = () =>
  createSelector(
    selectProductListDomain,
    state => state.get('packages'),
  );
const makeSelectPopularPackage = () =>
  createSelector(
    selectProductListDomain,
    state => state.get('popularPackage'),
  );

  const makeSelectQuestions = () =>
  createSelector(
    selectProductListDomain,
    state => state.get('questionsSuccess'),
  );

  const makeSelectCartSuccessdata = () =>
  createSelector(
    selectProductListDomain,
    state => state.get('addCartSuccessdata'),
  );

export {
  makeSelectSuccess,
  makeSelectXResponse,
  makeSelectPackageResponse,
  makeSelectError,
  makeSelectRequesting,
  makeSelectDataObj,
  makeSelectNewData,
  makeSelectCartPackage,
  makeSelectPopularPackage,
  makeSelectQuestions,
  makeSelectCartSuccessdata
};
