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
import './assets/mysqpaymentform.css'
import placeholder from './placeholder.png';
import { DOCUMENT_URL_UPDATE, API_BASE  } from '../../../App/constants';
import { Redirect } from 'react-router-dom'


import {
  makeSelectCartProducts,
  makeSelectResponse
} from './selectors';
// import { makeSelectLocation } from '../../../App/selectors';

import {
  getProductsInCartRequest,
  removeCartRequest
} from './actions'


var paymentForm

const mapStateToProps = createStructuredSelector({
  // isRequesting: makeSelectLoading(),
  cartProducts:makeSelectCartProducts(),
  response:makeSelectResponse()
});

const mapDispatchToProps = dispatch => ({
  showDialog: dialog => dispatch(showDialog(dialog)),
  getProductsInCartRequest: () => dispatch(getProductsInCartRequest()),
  removeCartRequest: (id) => dispatch(removeCartRequest(id))
});

class Payment extends React.Component {
  constructor(props) {
    super(props);
      this.state = { 
        data: {},
        totalPrice: null,
        redirectToPayment: false
      };
  }


  componentDidMount() {
    this.props.getProductsInCartRequest()
      paymentForm = new SqPaymentForm({
      //TODO: Replace with your sandbox application ID
      applicationId: "sandbox-sq0idb-uMCOPGva0o2SCGWsuBcdkA",
      inputClass: 'sq-input',
      autoBuild: false,
      // Customize the CSS for SqPaymentForm iframe elements
      inputStyles: [{
          fontSize: '16px',
          lineHeight: '24px',
          padding: '16px',
          placeholderColor: '#a0a0a0',
          backgroundColor: 'transparent',
      }],
      // Initialize the credit card placeholders
      cardNumber: {
          elementId: 'sq-card-number',
          placeholder: 'Card Number'
      },
      cvv: {
          elementId: 'sq-cvv',
          placeholder: 'CVV'
      },
      expirationDate: {
          elementId: 'sq-expiration-date',
          placeholder: 'MM/YY'
      },
      postalCode: {
          elementId: 'sq-postal-code',
          placeholder: 'Postal'
      },
      // SqPaymentForm callback functions
      callbacks: {
          /*
          * callback function: cardNonceResponseReceived
          * Triggered when: SqPaymentForm completes a card nonce request
          */
          cardNonceResponseReceived: function (errors, nonce, cardData) {
          if (errors) {
              // Log errors from nonce generation to the browser developer console.
              // console.error('Encountered errors:');
              errors.forEach(function (error) {
                  console.error('  ' + error.message);
              });
              alert('Encountered errors, check browser developer console for more details');
              return;
          }
             alert(`The generated nonce is:\n${nonce}`);
             //TODO: Replace alert with code in step 2.1
                   // alert(`The generated nonce is:\n${nonce}`);
                  const token = localStorage.getItem('token'); 
                  fetch(`${API_BASE}payment`, {
                    method: 'POST',
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      nonce: nonce,
                      token: token,
                      price: 200
                    })
                  })
                  .catch(err => {
                    alert('Network error: ' + err);
                  })
                  .then(response => {
                    if (!response.ok) {
                      return response.text().then(errorInfo => Promise.reject(errorInfo));
                    }
                    return response.text();
                  })
                  .then(data => {
                    // console.log(JSON.stringify(data));
                    // alert('Payment complete successfully!\nCheck browser developer consolf form more details');
                  })
                  .catch(err => {
                    // console.error(err);
                    alert('Payment failed to complete!\nCheck browser developer consolf form more details');
                  });
          }
      }
    });
    paymentForm.build();

  }

  componentWillReceiveProps(nextProps) {
    if (this.props.cartProducts != nextProps.cartProducts) {
      var tot = 0;
      var arrayProductId = new Array();
      nextProps.cartProducts && nextProps.cartProducts.toJS().dataList.map((item, index) => {
         tot = tot + item.product.price
         arrayProductId.push(item.product._id)
        })
      
      this.setState({
        data: nextProps.cartProducts && nextProps.cartProducts.toJS(),
        totalPrice: tot,
        arrayPIds: arrayProductId
      });
    }
    if (this.props.response != nextProps.response) {
      this.setState({
        response_message: nextProps.response && nextProps.response,
      });
    }
  }

  removeCart = (id) => {
    this.props.removeCartRequest(id)
  }
  placeOrder = () => {
    this.setState({redirectToPayment: true})
    // this.props.placeOrderRequest()
  }

  onGetCardNonce = (event) => {
    // Don't submit the form until SqPaymentForm returns with a nonce
    event.preventDefault();
    // Request a nonce from the SqPaymentForm object
    paymentForm.requestCardNonce();
  }

  render() {
    const {  } = this.props;
    const { data, totalPrice, redirectToPayment } = this.state
    return (
      <div className="cart-grid">
        <div><br ></br><br /><br /><br /><br /><br /></div>
            <span className="right">Total: ${totalPrice}</span>
        <div id="form-container">
              <div id="sq-card-number"></div>
              <div className="third" id="sq-expiration-date"></div>
              <div className="third" id="sq-cvv"></div>
              <div className="third" id="sq-postal-code"></div>
              <button id="sq-creditcard" className="button-credit-card" onClick={() => this.onGetCardNonce(event)}>Pay With Card</button>
            </div>
        </div>
    );
  }
}

const withReducer = injectReducer({ key: 'payment', reducer });
const withSaga = injectSaga({ key: 'payment', saga });
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Payment);
