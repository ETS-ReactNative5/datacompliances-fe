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
import moment from 'moment';


import {
  makeSelectResponse
} from './selectors';

import {
  updateOrderRequest,
  clearCartRequest
} from './actions'


var paymentForm

const mapStateToProps = createStructuredSelector({
  // isRequesting: makeSelectLoading(),
  response:makeSelectResponse()
});

const mapDispatchToProps = dispatch => ({
  showDialog: dialog => dispatch(showDialog(dialog)),
  updateOrderRequest: (payload) => dispatch(updateOrderRequest(payload)),
  clearCartRequest: (payload) => dispatch(clearCartRequest(payload))
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
     if(this.props.location && this.props.location.state != undefined) {
       const payload = {
         product_id: this.props.location.state.productId,
         payment_id: this.props.location.state._id,
         order_id: this.props.location.state.OrderId
       }
        this.props.updateOrderRequest(payload)
        this.props.clearCartRequest(payload)
     }
  }

  componentWillReceiveProps(nextProps) {
    
    if (this.props.response != nextProps.response) {
      this.setState({
        response_message: nextProps.response && nextProps.response,
      });
    }
  }

 

  render() {
    const { location } = this.props;
    const { data, totalPrice, redirectToPayment } = this.state
    return (
      <div className="cart-grid">
        <div><br ></br><br /><br /><br /><br /><br /></div>
        {location && location.state != undefined ?
        <div>
         <div>Payment status: {location.state.status}</div>   
         <div>Amount Paid: ${location.state.total_money.amount}</div>   
         <div>Payment source: {location.state.source_type}</div>   
         <div>Paid Date: {moment(location.state.updated_at, 'YYYY-MM-DD').format('YYYY-MM-DD') }</div>   
         </div>
         :
         <div>
           No Information Available
           </div>
        }
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
