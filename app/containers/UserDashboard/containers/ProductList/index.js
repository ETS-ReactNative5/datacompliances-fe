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
import PopularPackage from './Popular_Product/Loadable';
import '../../assets/card.scss';
import {
  makeSelectSuccess,
  makeSelectPackageResponse,
  makeSelectError,
  makeSelectRequesting,
  makeSelectDataObj,
  makeSelectCartPackage,
} from './selectors';

import reducer from './reducer';
import saga from './saga';

const mapStateToProps = createStructuredSelector({
  packageList: makeSelectDataObj(),
  isSuccess: makeSelectSuccess(),
  errorResponse: makeSelectError(),
  successResponse: makeSelectPackageResponse(),
  isRequesting: makeSelectRequesting(),
  cart_packages: makeSelectCartPackage(),
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

  handleRemoveCart = (e, id) => {
    e.preventDefault();
    let cart = {
      packages: id,
    };
    this.props.removeCart(cart);
  };

  handleAddCart = (e, id) => {
    e.preventDefault();
    let cart = {
      packages: id,
    };
    this.props.postCart(cart);
  };

  render() {
    const { data } = this.state;

 
    return (
      <React.Fragment>
          <div className="product-listing">
            <h1 className="main_title">Available Products</h1>
            <div className="product-grid">
              {data.length > 0 ? (
                data.map((packageData, idx) =>
                    <div key={`paidList${idx}`} className="product-item">
                      <div className="product-wrap">
                        
                          <p className="product-title">{packageData.title}</p>
                          <p className="product-price">Rs.{packageData.price}</p>
                          <ul className="feature-list">
                            <li>
                                <i className="icon-check"/>
                              <span>Industry: Finance </span> 
                            </li>
                            <li>
                                <i className="icon-check"/>
                              <span>Country: France</span>
                            </li>
                            <li>
                                <i className="icon-check"/>
                              <span>Questionnaire: 100 Questions</span>
                            </li>
                            <li>
                                <i className="icon-check"/>
                              <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry....</span>
                            </li>
                          </ul>
                          <div className="buttons-wrap">
                          
                            {/* {this.state.cartPackages.includes(
                              packageData._id,
                            ) ? (
                              <button
                                onClick={e =>
                                  this.handleRemoveCart(e, packageData._id)
                                }
                              >
                                <i className="icon-shopping-cart" />
                                Remove From Cart
                              </button>
                            ) : (
                              <button
                                onClick={e =>
                                  this.handleAddCart(e, packageData._id)
                                }
                              >
                                Buy Product
                              </button>
                            )} */}
                          {/* <Link
                            data-tooltip="Buy Product"
                            className="ui mini icon button buy-btn"
                            to={`/user/dashboard/product/detail/${packageData._id}`}
                            key={`view__1`}
                          >
                          Buy Now
                        </Link>                    */}
                        <Link
                            className="ui mini icon button detail-btn"
                            to={`/user/dashboard/product/detail/${packageData._id}`}
                            key={`view__1`}
                          >
                          View Detail
                        </Link>
                        </div>
                          <ul>
                            {packageData &&
                              packageData.included_features &&
                              packageData.included_features.map(
                                (feature, idx) => (
                                  <li key={`feature${idx}`}>
                                    <i className="icon-check" />
                                    {feature.feature}
                                  </li>
                                ),
                              )}
                          </ul>
                          {packageData.trial_period_applicable && (
                            <Link
                              to={{
                                pathname: `/user/dashboard/trial/exam-display/${
                                  packageData._id
                                }`,
                                state: {
                                  title: `Trial ${packageData.title}`,
                                },
                              }}
                            >
                              <button>Start Trial</button>
                            </Link>
                          )}
                        
                      </div>
                    </div>
                )
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
                <Card>
                  <CardContent>Packages Not Found</CardContent>
                </Card>
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
