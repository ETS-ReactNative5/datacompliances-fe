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
import {
  Button,
  Card,
  Image,
  Icon,
  CardContent,
  Grid,
  Segment,
  Placeholder,
} from 'semantic-ui-react';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { loadSubscribedPackageRequest } from './actions';
import { Link } from 'react-router-dom';
import { DOCUMENT_URL_UPDATE } from 'containers/App/constants';

import { makeSelectSubscribedPackage, makeSelectRequesting } from './selectors';

import reducer from './reducer';
import saga from './saga';
import pkgimg from 'assets/images/pkg_lst1.jpg';
import nt_fnd_img from 'assets/images/not_found_img.png';

const mockData = { 
  "status":200,
  "data":{ 
     "dataList":[ 
        { 
           "_id":"50637d80-b9fe-11e9-b0d4-1b64d2910f02",
           "title":"2019 Privacy, Cyber Security and Compliance Queries",
           "description":"On the occasion of new year, medicrony gifts a complete set with rationale consisting of 50 questions based on LookSewa curriculum.",
           "price":50,
           "image_name":{ 
              "document_name":"mcqsPackage-1555165050853-c8b40.png",
              "document_original_name":"surf school (17).png",
              "document_mimetype":"image/png"
           },
           "included_features":[ 
              { 
                 "feature":"Extra Layer Security included ",
                 "highlighted_feature":true
              }
           ]
        }
     ],
     "totalItems":1,
     "currentPage":1
  }
}

/* eslint-disable react/prefer-stateless-function */
export class SubscribedPackage extends React.Component {
  state = {
    data: [],
    page: 1,
    perPage: 10,
    query: {},
  };

  componentDidMount() {
    this.props.fetchSubscribedPackage();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.subscribedPackage != this.props.subscribedPackage) {
      this.setState({ data: nextProps.subscribedPackage.toJS().dataList });
    }
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <h1 className="main_title">Your Purchased Product</h1>
        <div className="packages__listing">
          <div className="package__grid">
            {mockData.data.dataList.length > 0 ? (
              mockData.data.dataList.map((packageData, idx) => (
                <div key={`subscribed${idx}`} className="package__column">
                  <div className="img__wrap">
                    <img
                      className="img-fluid"
                      src={`${DOCUMENT_URL_UPDATE}${
                        packageData.image_name.document_name
                      }`}
                      alt="a"
                    />
                    <div className="pkg__wrapper">
                      <h1>{packageData.title}</h1>
                      <ul>
                        {packageData &&
                          packageData.included_features &&
                          packageData.included_features.map((feature, idx) => (
                            <li key={`feature${idx}`}>
                              <i className="icon-check" />
                              {feature.feature}
                            </li>
                          ))}
                      </ul>
                      <Link
                        to={{
                          pathname: `/user/dashboard/product-display/${
                            packageData._id
                          }`,
                          state: { title: packageData.title },
                        }}
                      >
                        <button>Answer the Questions</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : this.props.isRequesting ? (
              <Grid columns={3} stackable>
                <Grid.Column>
                  <Segment raised>
                    <Placeholder>
                      <Placeholder.Header image>
                        <Placeholder.Line />
                        <Placeholder.Line />
                      </Placeholder.Header>
                      <Placeholder.Paragraph>
                        <Placeholder.Line length="medium" />
                        <Placeholder.Line length="short" />
                      </Placeholder.Paragraph>
                    </Placeholder>
                  </Segment>
                </Grid.Column>
              </Grid>
            ) : (
              <div className="package_not_found">
                <div className="package_not_found_grid">
                  <h1>Oops !</h1>
                  <span>
                    Looks like <br />
                    You haven't purchased any packages
                  </span>
                  <Link to="/user/dashboard">
                    <button>purchase now</button>
                  </Link>
                  <img src={nt_fnd_img} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  subscribedPackage: makeSelectSubscribedPackage(),
  isRequesting: makeSelectRequesting(),
});

const mapDispatchToProps = dispatch => ({
  fetchSubscribedPackage: () => dispatch(loadSubscribedPackageRequest()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'cartList', reducer });
const withSaga = injectSaga({ key: 'cartList', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SubscribedPackage);
