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
import { makeSelectLocation } from '../../../../App/selectors';


import reducer from './reducer';
import saga from './saga';
import noproducts from 'assets/images/product.png';
import nt_fnd_img from 'assets/images/not_found_img.png';
import '../../../assets/card.scss';
import '../../../assets/breadcrumb.scss';

/* eslint-disable react/prefer-stateless-function */
export class SubscribedPackage extends React.Component {
  state = {
    data: [],
    page: 1,
    perPage: 10,
    query: {},
  };

  componentDidMount() {
    this.props.fetchSubscribedProduct();
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
        {this.props.location.pathname == '/user/dashboard/my-products' &&
        <div className="ui breadcrumb">
          <Link 
             className="section"
             to={{
              pathname: `/user/dashboard`,
            }}
          >
            Dashoard
          </Link>
          <div className="divider">/</div>
          <div className="active section">My Products</div>
        </div>
        }
        {/* breadcrumb */}
        <h1 className="main_title">Your Products</h1>
        <div className="product-listing">
          <div className="product-grid">
            {data.length > 0 ? (
                  data.map((packageData, idx) => (
                <div key={`subscribed${idx}`} className="product-item">
                  <div className="product-wrap">
                      <p className="product-title">{packageData.product.title}</p>
                      <ul className="feature-list">
                        
                        <li>
                            <i className="icon-check"/>
                            <span>Profile Name: {packageData.product.profile_name}</span> 
                         </li>
                         <li>
                            <i className="icon-check"/>
                            <span>Country: { packageData.product.country }</span> 
                         </li>
                          <li>
                             <i className="icon-check"/>
                             <span>Industry: { packageData.product.industry }</span> 
                          </li>
                      </ul>
                      <div className="buttons-wrap">
                      <Link 
                        to={{
                          pathname: `/user/dashboard/product-display/${
                            packageData.product._id
                          }`,
                          state: { title: packageData.title },
                        }}
                      >
                        <button className="detail-btn">See Details</button>
                      </Link>
                      </div>
                      <span className="ribbon">Purchased
                     </span>
                    </div>
                  </div>
                // </div>
                  ))
                  ) : this.props.isRequesting ? (
                      <div className="ui segment">
                      <div className="ui active inverted dimmer">
                        <div className="ui small text loader">Loading.....</div>
                      </div>
                      <p></p>
                    </div>
                  ) : (
                    <div className="package_not_found">
                    <div className="no-products">
                      <img src={noproducts}/>
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
  location: makeSelectLocation(),
});

const mapDispatchToProps = dispatch => ({
  fetchSubscribedProduct: () => dispatch(loadSubscribedPackageRequest()),
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
