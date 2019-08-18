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
                              <span>Country: {packageData.country}</span>
                            </li>
                            <li>
                                <i className="icon-check"/>
                              <span>Industry: {packageData.industry} </span> 
                            </li>
                            <li>
                                <i className="icon-check"/>
                              <span>Questionnaire: {packageData.questions.length}</span>
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
                  <CardContent>Products Not Found</CardContent>
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
