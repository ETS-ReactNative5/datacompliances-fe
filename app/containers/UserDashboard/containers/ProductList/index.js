/**
 *
 * ProductList
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
  Segment,
  Placeholder,
  Grid,
} from 'semantic-ui-react';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {
  loadAllProductRequest,
  postCartRequest,
  loadAllCartPackageRequest,
  removeCartRequest,
} from './actions';
import { Link } from 'react-router-dom';
import { DOCUMENT_URL_UPDATE } from 'containers/App/constants';
import '../../assets/card.scss';
import {
  makeSelectSuccess,
  makeSelectPackageResponse,
  makeSelectError,
  makeSelectRequesting,
  makeSelectDataObj,
  makeSelectCartPackage,
} from './selectors';
import noproducts from 'assets/images/product.png';


import { makeSelectLocation } from '../../../App/selectors';


import reducer from './reducer';
import saga from './saga';

const mapStateToProps = createStructuredSelector({
  packageList: makeSelectDataObj(),
  isSuccess: makeSelectSuccess(),
  errorResponse: makeSelectError(),
  successResponse: makeSelectPackageResponse(),
  isRequesting: makeSelectRequesting(),
  cart_packages: makeSelectCartPackage(),
  location: makeSelectLocation(),
});

const mapDispatchToProps = dispatch => ({
  fetchProduct: (page, perPage, query) =>
    dispatch(loadAllProductRequest(page, perPage, query)),
  postCart: cart => dispatch(postCartRequest(cart)),
  removeCart: cart => dispatch(removeCartRequest(cart)),
  fetchCartPackage: () => dispatch(loadAllCartPackageRequest()),
});

/* eslint-disable react/prefer-stateless-function */
export class ProductList extends React.Component {
  state = {
    data: [],
    page: 1,
    perPage: 10,
    query: {},
    cart: [],
    package_title: [],
    cartPackages: [],
  };
  componentWillMount() {}

  componentDidMount() {
    const { page, perPage, query } = this.state;
    this.props.fetchProduct(page, perPage, query);
    // this.props.fetchCartPackage();
  }
  componentWillReceiveProps(nextProps) {

    if (this.props.packageList != nextProps.packageList) {
      this.setState({
        data: nextProps.packageList.toJS(),
      });
    }
    if (nextProps.successResponse != this.props.successResponse) {
      // this.props.fetchCartPackage();
    }
    if (nextProps.cart_packages != this.props.cart_packages) {
      this.setState(
        {
          cartPackages:
            nextProps.cart_packages &&
            nextProps.cart_packages.toJS().dataList &&
            nextProps.cart_packages.toJS().dataList[0]
              ? nextProps.cart_packages.toJS().dataList[0].packages
              : [],
        },
        () => {
          this.props.handleCartSize(this.state.cartPackages.length);
        },
      );
    }
  }

  text_truncate = function(str, length, ending) {
    if (length == null) {
      length = 200;
    }
    if (ending == null) {
      ending = '...';
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  };



  render() {
    const { data } = this.state;
    return (
      <React.Fragment>
          <div className="product-listing">
          {this.props.location.pathname == '/user/dashboard/product' &&
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
              <div className="active section">Products</div>
            </div>
            }
            <h1 className="main_title">Available Products</h1>
            <div className="product-grid">
              {data.length > 0 ? (
                data.map((packageData, idx) =>
                    <div key={`paidList${idx}`} className="product-item">
                      <div className="product-wrap">
                          <p className="product-title">{packageData.title}</p>
                          <p className="product-price"><small>$</small>{packageData.price}</p>
                          <ul className="feature-list">
                           <li>
                            <i className="icon-check"/>
                            <span>Profile Name: {packageData.profile_name}</span> 
                           </li>
                            <li>
                                <i className="icon-check"/>
                              <span>Country: {packageData.country}</span>
                            </li>
                            <li>
                                <i className="icon-check"/>
                              <span>Industry: {packageData.industry} </span> 
                            </li>
                            <li>
                                <i className="icon-info"/>
                              <span>{this.text_truncate(packageData.description)}</span>
                            </li>
                          </ul>
                          <div className="buttons-wrap">
                        <Link
                            className="ui mini icon button detail-btn"
                            to={`/user/dashboard/product/detail/${packageData._id}`}
                            key={`view__1`}
                          >
                          View Detail
                        </Link>
                        </div>
                        {packageData && packageData.OrderInfo.length > 0 && packageData.OrderInfo[0].purchased &&
                         <span className="ribbon">Purchased
                         </span>
                        }
                      </div>
                    </div>
                )
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
    </React.Fragment>
    );
  }
}



const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'productList', reducer });
const withSaga = injectSaga({ key: 'productList', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ProductList);
