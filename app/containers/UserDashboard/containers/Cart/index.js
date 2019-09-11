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

import {
  
} from './selectors';
// import { makeSelectLocation } from '../../../App/selectors';

import {
  getProductsInCartRequest
} from './actions'

const mockData = {
  "status": 200,
  "data": {
    "dataList": [
      {
        "_id": "b7f9bbd0-d475-11e9-9703-878c003ca5c6",
        "product": {
          "_id": "691e8a20-ccca-11e9-be26-e979a8382fa2",
          "added_by": "sareek007@gmail.com",
          "added_on": "2019-09-01T15:08:53.058Z",
          "deleted": false,
          "country": "Nepal",
          "industry": "Financial",
          "title": "PCI DSS",
          "description": "This products contains PCI related questionnaires.",
          "price": 150,
          "product_instructions": "",
          "profile_name": "PCI_DSS_NP",
          "category_id": [
            "5926fff0-c750-11e9-b9fe-e1f61cc86d1e",
            "a41791f0-c750-11e9-b9fe-e1f61cc86d1e",
            "8308a970-c743-11e9-b9fe-e1f61cc86d1e",
            "5febdca0-c743-11e9-b9fe-e1f61cc86d1e"
          ],
          "questions": [
            "23ae56d0-ccd1-11e9-be26-e979a8382fa2",
            "3c4d7090-ccd1-11e9-be26-e979a8382fa2",
            "466d9a50-ccd1-11e9-be26-e979a8382fa2",
            "5221d190-ccd1-11e9-be26-e979a8382fa2",
            "5b8f9b40-ccd1-11e9-be26-e979a8382fa2",
            "650d4370-ccd1-11e9-be26-e979a8382fa2",
            "098ec980-cccf-11e9-be26-e979a8382fa2",
            "0a5bc530-ccc9-11e9-be26-e979a8382fa2",
            "13091650-cccf-11e9-be26-e979a8382fa2",
            "02c9c6c0-ccd1-11e9-be26-e979a8382fa2",
            "0dd2c9e0-ccd1-11e9-be26-e979a8382fa2",
            "1a16e510-ccd1-11e9-be26-e979a8382fa2"
          ],
          "active": true,
          "image_name": {
            "document_name": "mcqExam-1567350532953-e11e0.png",
            "document_original_name": "pcidss.png",
            "document_mimetype": "image/png"
          },
          "questionnaire_id": "691e8a20-ccca-11e9-be26-e979a8382fa2",
          "updated_by": "sareek007@gmail.com",
          "updated_on": "2019-09-10T05:14:02.630Z"
        }
      },
      {
        "_id": "c324e260-d474-11e9-8293-01b9d353aff3",
        "product": {
          "_id": "d73fe490-ced7-11e9-a3dd-312005b9fdc3",
          "added_by": "sareek007@gmail.com",
          "added_on": "2019-09-04T05:50:03.609Z",
          "deleted": false,
          "country": "Algeria",
          "industry": "Health Care and Biomedical",
          "title": "Test Product",
          "description": "test test test",
          "price": 1200,
          "product_instructions": "<p>this is test</p>",
          "profile_name": "Salina",
          "category_id": [
            "a41791f0-c750-11e9-b9fe-e1f61cc86d1e"
          ],
          "questions": [
            "098ec980-cccf-11e9-be26-e979a8382fa2",
            "0a5bc530-ccc9-11e9-be26-e979a8382fa2",
            "13091650-cccf-11e9-be26-e979a8382fa2",
            "1872a490-ccc9-11e9-be26-e979a8382fa2",
            "1b157b40-cccf-11e9-be26-e979a8382fa2",
            "25eb8780-cccf-11e9-be26-e979a8382fa2",
            "2cac6b90-cccd-11e9-be26-e979a8382fa2"
          ],
          "active": true,
          "image_name": {
            "document_name": "mcqExam-1567576201529-deeeb.jpeg",
            "document_original_name": "card.jpeg",
            "document_mimetype": "image/jpeg"
          },
          "questionnaire_id": "d73fe490-ced7-11e9-a3dd-312005b9fdc3",
          "updated_by": "sareek007@gmail.com",
          "updated_on": "2019-09-04T06:11:54.747Z"
        }
      }
    ],
    "totalItems": 2,
    "currentPage": 1
  }
}

const mapStateToProps = createStructuredSelector({
  // isRequesting: makeSelectLoading(),
  
});

const mapDispatchToProps = dispatch => ({
  showDialog: dialog => dispatch(showDialog(dialog)),
  getProductsInCartRequest: () => dispatch(getProductsInCartRequest())
});

class Cart extends React.Component {
  constructor(props) {
    super(props);
      this.state = { 

      };
  }

  componentDidMount() {
    this.props.getProductsInCartRequest()
  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    const {  } = this.props;
    const { } = this.state
    return (
        <div class="cart-grid">
        <div className="">
          <div className="ui top attached header cart-heading">
            <span> My Cart Items (2)</span>
            <span className="right">Total: $666</span>
          </div>

        
          <div className="ui  divided items">
            
            {mockData.data.dataList.map((item, index) => {
              return (
                <div className="item" key={index}>
              <div className="image">
                <img src={placeholder}/>
              </div>
              <div className="content">
                <p className="header">Product Name</p>
                <div className="meta">
                <span className="price">$1200</span>
                
                  {/* <span className="tag">Profile Name </span> */}
                </div>
                <div className="description">
                  <p> Profile Name : $333  </p>
                  <p>  This is a description</p> 
                </div>
                <button className="ui basic labeled icon button delete-button">
                  <i className="trash alternate icon"></i>
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
