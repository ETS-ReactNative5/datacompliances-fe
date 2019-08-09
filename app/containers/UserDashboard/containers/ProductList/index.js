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
  loadAllPackageRequest,
  postCartRequest,
  loadAllCartPackageRequest,
  removeCartRequest,
  getQuestionRequest,
} from './actions';
import { Link } from 'react-router-dom';
import { DOCUMENT_URL_UPDATE } from 'containers/App/constants';
import PopularPackage from './Popular_Product/Loadable';

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
import loksewa from 'assets/images/loksewa.jpg';
import pkgimg from 'assets/images/pkg_lst1.jpg';
import pkgimg2 from 'assets/images/pkg_lst2.jpg';

const mapStateToProps = createStructuredSelector({
  packageList: makeSelectDataObj(),
  isSuccess: makeSelectSuccess(),
  errorResponse: makeSelectError(),
  successResponse: makeSelectPackageResponse(),
  isRequesting: makeSelectRequesting(),
  cart_packages: makeSelectCartPackage(),
});

const mapDispatchToProps = dispatch => ({
  getQuestionRequest: (page, perPage, query,) =>
  dispatch(getQuestionRequest(page, perPage, query)),
  fetchPackage: (page, perPage, query) =>
    dispatch(loadAllPackageRequest(page, perPage, query)),
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
    this.props.fetchPackage(page, perPage, query);
    this.props.fetchCartPackage();
    // this.props.getQuestionRequest(page, perPage, '');
  }
  componentWillReceiveProps(nextProps) {
      // this.props.fetchPackage(
      //   this.state.page,
      //   this.state.perPage,
      //   this.state.query,
      // );
    if (this.props.packageList != nextProps.packageList) {
      this.setState({
        data: nextProps.packageList.toJS(),
      });
    }
    if (nextProps.successResponse != this.props.successResponse) {
      this.props.fetchCartPackage();
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
          <div className="packages__listing">
            {/* <PopularPackage handleCartSize={this.props.handleCartSize} /> */}
            <h1 className="main_title">All Products</h1>
            <div className="package__grid">
              {data.length > 0 ? (
                data.map((packageData, idx) =>
                    <div key={`paidList${idx}`} className="package__column">
                      <div className="img__wrap">
                        <figure>
                          {console.log(':::',packageData.image_name)}
                          <img
                            className="img-fluid"
                            src={`${DOCUMENT_URL_UPDATE}${
                              packageData.image_name.document_name
                            }`}
                            alt="a"
                          />
                          <span>NRp.{packageData.price}</span>
                          <div className="hover__cart">
                            {this.state.cartPackages.includes(
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
                            )}
                          </div>
                        </figure>

                        <div className="pkg__wrapper">
                          <h1>{packageData.title}</h1>
                          <Link
                            data-tooltip="Details"
                            className="ui mini icon button blue"
                            to={`/user/dashboard/product/detail/${packageData._id}`}
                            key={`view__1`}
                          >
                          <Icon name="plus" />
                        </Link>
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
