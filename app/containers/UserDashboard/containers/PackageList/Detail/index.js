/**
 *
 * PackageList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Button, Card, Image } from 'semantic-ui-react';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { loadPackageByIdRequest } from '../actions';
import {
  makeSelectError,
  makeSelectRequesting,
  makeSelectPackageResponse,
  makeSelectSuccess,
  makeSelectNewData,
} from '../selectors';

import reducer from '../reducer';
import saga from '../saga';

/* eslint-disable react/prefer-stateless-function */
export class PackageList extends React.Component {
  state = {
    data: {},
    page: 1,
    perPage: 10,
    query: {},
  };
  componentDidMount() {
    let id = this.props.match.params.id ? this.props.match.params.id : null;
    this.props.fetchPackage(id);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.singlePackage != nextProps.singlePackage) {
      this.setState({
        data: nextProps.singlePackage.toJS(),
      });
    }
  }
  render() {
    const { data } = this.state;
    return (
      <div style={{ marginLeft: '200px' }}>
        <Helmet>
          <title>PackageList</title>
          <meta name="description" content="Description of PackageList" />
        </Helmet>
        <h1>{data.title}</h1>
        <span>
          Trial Period Applicable: {data.trial_period_applicable ? 'Yes' : 'NO'}
        </span>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isSuccess: makeSelectSuccess(),
  errorResponse: makeSelectError(),
  successResponse: makeSelectPackageResponse(),
  isRequesting: makeSelectRequesting(),
  singlePackage: makeSelectNewData(),
});

const mapDispatchToProps = dispatch => ({
  fetchPackage: id => dispatch(loadPackageByIdRequest(id)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'packageList', reducer });
const withSaga = injectSaga({ key: 'packageList', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PackageList);
