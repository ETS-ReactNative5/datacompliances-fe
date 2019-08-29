import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './assets/HomePage.scss';
// import consult from './assets/consult.svg';
import video from './assets/pc.png';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './sagas';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Consultants from './Components/Consultants';
import Products from './Components/Products';
import StepFlow from './Components/StepFlow';

import {
 getConsultantsRequests,
 getProductsListRequest,
 getProductDetailsRequest
} from './actions';

import {
  makeSelectProductResponse,
  makeSelectConsultantsResponse
} from './selectors'


const mapStateToProps = createStructuredSelector({
  consultantsResponse: makeSelectConsultantsResponse(),
  productListResponse:makeSelectProductResponse()
});

const mapDispatchToProps = dispatch => ({
  getConsultantsRequests: () => dispatch(getConsultantsRequests()),
  getProductsListRequest: () => dispatch(getProductsListRequest()),
  getProductDetailsRequest: () => dispatch(getProductDetailsRequest())
});

class HomePage extends React.Component {

  state ={
    consultants: [],
    consultantId: '',
    productList: []
  }

 componentDidMount() {
    this.props.getProductsListRequest()
    this.props.getConsultantsRequests()
}

componentWillReceiveProps(nextProps) {
  if (this.props.consultantsResponse !== nextProps.consultantsResponse) {
    this.setState({
                   consultants: nextProps.consultantsResponse, 
                   consultantId: nextProps.consultantsResponse && nextProps.consultantsResponse[0]._id
                  })
  }
  if (this.props.productListResponse !== nextProps.productListResponse && nextProps.productListResponse != undefined) {
    this.setState({
                   productList: nextProps.productListResponse, 
                  })
  }
}

  consultantClick = (id) => {
    this.setState({consultantId: id})
  } 

  productDetailsClick = (id) => {
    // this.props.getProductDetailsRequest(id)
  }

  render() {
    const { consultants, consultantId, productList } = this.state;
    return (
      <React.Fragment>
          <Helmet>
            <title>PCSC</title>
            <meta name="description" content="The Giving Brick" />
          </Helmet>
          <div className="banner">
            <div className="container">
              <div className="row justify-content-end banner__row align-items-end ">
                <div className="col-md-8 ">
                  <h1></h1>
                  <div className="video__holder">
                    <img
                      className="video img-fluid"
                      src={video}
                      alt="User Dashboard Image"
                    />
                    {/* <iframe
                      className="video__screen"
                      width="70%"
                      height="82%"
                      src="https://www.youtube.com/embed/jqIXnyL8B1k"
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe> */}
                    {/* <img src={banner} alt="User Dashboard Image" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Consultants 
            consultants={consultants}  
            consultantClick={this.consultantClick}
            consultantId={consultantId}
           />
          {/* <StepFlow />       */}
          <Products productList={productList} productDetailsClick={this.productDetailsClick}/>
        {/* <div className="consult">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="text-center">
                  <h4 className="title__heading mt-4 d-inline">
                    Consult with out team
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <img className="img-fluid" src={consult} alt="consult" />
                  <button className="primary__button large ">
                    Pick a Date
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </React.Fragment>
    );
  }
}

const withReducer = injectReducer({ key: 'homepage', reducer });
const withSaga = injectSaga({ key: 'homepage', saga });
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
