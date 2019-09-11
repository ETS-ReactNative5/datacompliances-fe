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



<div class="ui divided items">
  <div class="item">
    <div class="image">
      <img src={placeholder}/>
    </div>
    <div class="content">
      <p class="header">Product Name</p>
      <div class="meta">
      <span class="price">Price: $1200</span>
       
        {/* <span class="tag">Profile Name </span> */}
      </div>
      <div class="description">
        <p> Profile Name : $333  </p>
        <p>  This is a description</p> 
        <br/>  
      </div>
      <button class="ui basic labeled icon button delete-button">
      <i class="icon trash alternate"></i>
        Remove from Cart
      </button>
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
