import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectSingleData } from '../selectors';
import { loadFinancialByIdRequest } from '../actions';
import reducer from '../reducer';
import saga from '../saga';
import messages from './messages';
import moment from 'moment';
import { DOCUMENT_URL_UPDATE } from 'containers/App/constants';

/* eslint-disable react/prefer-stateless-function */
export class FinancialDetail extends React.Component {
  state = {};

  componentDidMount() {
    const slug = this.props.match.params.slug
      ? this.props.match.params.slug
      : null;
    this.props.fetchFinanceDetail(slug);
  }

  render() {
    const { finance } = this.props;
    let data = finance.size > 0 ? finance.toJS() : '';
    return (
      <React.Fragment>
        <Helmet>
          <title>Financial Detail</title>
          <meta name="description" content="Description of Finance" />
        </Helmet>
        <div className="title__wrap">
          <div className="container">
            <h1>{data && data.title}</h1>
          </div>
        </div>
        <div className="content__wrap">
          <div className="container">
            <div
              dangerouslySetInnerHTML={{
                __html: data && data.template,
              }}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  finance: makeSelectSingleData(),
});

const mapDispatchToProps = dispatch => ({
  fetchFinanceDetail: slug => dispatch(loadFinancialByIdRequest(slug)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'finance', reducer });
const withSaga = injectSaga({ key: 'finance', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(FinancialDetail);
