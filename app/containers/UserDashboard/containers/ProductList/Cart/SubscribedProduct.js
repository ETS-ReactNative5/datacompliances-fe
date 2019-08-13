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

const mockData33 = {
  "status": 200,
  "data": {
    "dataList": [
      {
        "_id": "46fec010-b512-11e9-9834-7187f15d43e5",
        "product": {
          "_id": "50637d80-b9fe-11e9-b0d4-1b64d2910f02",
          "added_by": "pcsc",
          "added_on": "2019-08-02T10:42:51.665Z",
          "deleted": false,
          "country": "Afghanistan",
          "industry": "Financial",
          "title": "Product 1",
          "description": "desc",
          "price": 333,
          "product_instructions": "<p>sadsad</p>",
          "category_id": [
            "c9423600-b50e-11e9-9834-7187f15d43e5",
            "dfd5c850-b50e-11e9-9834-7187f15d43e5",
            "d318d3a0-b50e-11e9-9834-7187f15d43e5"
          ],
          "questions": [
            "b87412f0-b51b-11e9-9834-7187f15d43e5",
            "f251f1b0-b73f-11e9-8186-f9e88404f02f",
            "df34b410-b513-11e9-9834-7187f15d43e5"
          ],
          "active": true,
          "image_name": {
            "document_name": ""
          },
          "questionnaire_id": "46fec010-b512-11e9-9834-7187f15d43e5",
          "updated_by": "pcsc",
          "updated_on": "2019-08-05T07:24:30.467Z"
        }
      },
      {
        "_id": "f6a2c300-bd86-11e9-8c01-eb3609621e8e",
        "product": {
          "_id": "93a85da0-b51b-11e9-9834-7187f15d43e5",
          "added_by": "pcsc",
          "added_on": "2019-08-02T11:49:25.754Z",
          "deleted": false,
          "country": "Albania",
          "industry": "Health Care and Biomedical",
          "title": "Product 2",
          "description": "description",
          "price": 33,
          "product_instructions": "<p>instructions</p>",
          "category_id": [
            "c9423600-b50e-11e9-9834-7187f15d43e5",
            "b3197370-b50e-11e9-9834-7187f15d43e5",
            "dfd5c850-b50e-11e9-9834-7187f15d43e5",
            "49755040-b510-11e9-9834-7187f15d43e5"
          ],
          "questions": [
            "50aa87b0-b513-11e9-9834-7187f15d43e5",
            "37fe2780-b513-11e9-9834-7187f15d43e5",
            "df34b410-b513-11e9-9834-7187f15d43e5",
            "24b1a9e0-b513-11e9-9834-7187f15d43e5",
            "678e83f0-b513-11e9-9834-7187f15d43e5",
            "a38bbb10-b749-11e9-8186-f9e88404f02f"
          ],
          "active": true,
          "image_name": {
            "document_name": "mcqExam-1564746563832-02cc1.jpg",
            "document_original_name": "banner.jpg",
            "document_mimetype": "image/jpeg"
          },
          "questionnaire_id": "93a85da0-b51b-11e9-9834-7187f15d43e5",
          "updated_by": "pcsc",
          "updated_on": "2019-08-05T06:25:40.508Z"
        }
      }
    ],
    "totalItems": 2,
    "currentPage": 1
  }
}

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
            {mockData33.data.dataList.length > 0 ? (
              mockData33.data.dataList.map((packageData, idx) => (
                <div key={`subscribed${idx}`} className="package__column">
                  <div className="img__wrap">
                    <img
                      className="img-fluid"
                      src={`${DOCUMENT_URL_UPDATE}${
                           packageData.image_name && packageData.image_name.document_name
                      }`}
                      alt="a"
                    />
                    <div className="pkg__wrapper">
                      <h1>{packageData.product.title}</h1>
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
                            packageData.product._id
                          }`,
                          state: { title: packageData.title },
                        }}
                      >
                        <button>See Details</button>
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
