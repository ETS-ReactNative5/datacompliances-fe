import { createSelector } from 'reselect';

/**
 * Direct selector to the productList state domain
 */

const selectPackageListDomain = state => state.productList;

const makeSelectSuccess = () =>
  createSelector(
    selectPackageListDomain,
    state => state.get('success'),
  );
const makeSelectPackageResponse = () =>
  createSelector(
    selectPackageListDomain,
    state => state.get('response'),
  );
const makeSelectXResponse = () =>
  createSelector(
    selectPackageListDomain,
    state => state.get('xresponse'),
  );
const makeSelectError = () =>
  createSelector(
    selectPackageListDomain,
    state => state.get('error'),
  );
const makeSelectRequesting = () =>
  createSelector(
    selectPackageListDomain,
    state => state.get('requesting'),
  );
const makeSelectDataObj = () =>
  createSelector(
    selectPackageListDomain,
    state => state.get('dataObj'),
  );
const makeSelectNewData = () =>
  createSelector(
    selectPackageListDomain,
    state => state.get('newData'),
  );
const makeSelectCartPackage = () =>
  createSelector(
    selectPackageListDomain,
    state => state.get('packages'),
  );
const makeSelectPopularPackage = () =>
  createSelector(
    selectPackageListDomain,
    state => state.get('popularPackage'),
  );

  const makeSelectQuestions = () =>
  createSelector(
    selectPackageListDomain,
    state => state.get('questionsSuccess'),
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
  makeSelectQuestions
};
