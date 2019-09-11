import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { showDialog } from 'containers/App/actions';
// import { makeSelectUserId, makeSelectDialog } from 'containers/App/selectors';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './sagas';
import { compose } from 'redux';
import Toaster from 'components/Toaster';
import noreport from 'assets/images/report.png';
import { Link } from 'react-router-dom'
import './style.scss';
import placeholder from './placeholder.png';
import { DOCUMENT_URL_UPDATE } from '../../../App/constants';

import {
  makeSelectCartProducts
} from './selectors';
// import { makeSelectLocation } from '../../../App/selectors';

import {
  getProductsInCartRequest
} from './actions'


const mapStateToProps = createStructuredSelector({
  // isRequesting: makeSelectLoading(),
  cartProducts:makeSelectCartProducts()
});

const mapDispatchToProps = dispatch => ({
  showDialog: dialog => dispatch(showDialog(dialog)),
  getProductsInCartRequest: () => dispatch(getProductsInCartRequest())
});

class Cart extends React.Component {
  constructor(props) {
    super(props);
      this.state = { 
        data: {}
      };
  }

  componentDidMount() {
    this.props.getProductsInCartRequest()
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.cartProducts != nextProps.cartProducts) {
      this.setState({
        data: nextProps.cartProducts && nextProps.cartProducts.toJS(),
      });
    }
  }

  render() {
    const {  } = this.props;
    const { data } = this.state
    return (
<<<<<<< HEAD
        <div class="cart-grid">
        <div className="">
          <div className="ui top attached header cart-heading">
            <span> My Cart Items (2)</span>
            <span className="right">Total: $666</span>
          </div>

        
          <div className="ui  divided items">
            
            {mockData.data.dataList.map((item, index) => {
=======
          <div className="ui divided items">
            {data && data.dataList && data.dataList.map((item, index) => {
>>>>>>> 25f8ca94b19547949436db0ede1281e8b3efcada
              return (
                <div className="item" key={index}>
              <div className="image">
              <img src={`${DOCUMENT_URL_UPDATE}${item && 
                                 item.product.image_name && 
                                     item.product.image_name.document_name}`} 
                                         alt="product image here" />
              </div>
              <div className="content">
                <p className="header">{item.product.title}</p>
                <div className="meta">
                <span className="price">${item.product.price}</span>
                
                  {/* <span className="tag">Profile Name </span> */}
                </div>
                <div className="description">
                  <p> Profile Name :{item.product.profile_name} </p>
                  <p>{item.product.description}</p> 
                  <br/>  
                </div>
                <button onClick={this.removeCart} className="ui basic red labeled icon button delete-button">
                  <i className="delete icon"></i>
                    Remove from Cart
                </button>
              </div>
            </div>
    )
  })}

</div>
</div> 
<div className="order-detail">
  <div className="ui card">
    <div className="content grey-bg">
      <div className="header">Price Details</div>
    </div>
    <div className="content">
      <div className="pricing-grid">
        <span className="">Order Total</span>
        <span className="right">$666</span>
      </div>
      <div className="pricing-grid">
        <span className="">Tax Payable</span>
        <span className="right">$6</span>
      </div>
      <div className="pricing-grid">
        <span className="">Discount</span>
        <span className="right">N/A</span>
      </div>
      <div className="pricing-grid">
        <span className="">Delivery Charge</span>
        <span className="right">N/A</span>
      </div>
      <div className="pricing-grid total">
        <span className="">Total</span>
        <span className="right">$672</span>
      </div>
    </div>

    <div className="extra content">
      <button className="ui green labeled icon  button"><i className="cart arrow down icon"></i>Place Order</button>
    </div>
  </div>
</div>

</div>
    );
  }
}

const withReducer = injectReducer({ key: 'cartProduct', reducer });
const withSaga = injectSaga({ key: 'cartProduct', saga });
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Cart);
