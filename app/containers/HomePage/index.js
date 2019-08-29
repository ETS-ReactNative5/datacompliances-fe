import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './assets/HomePage.scss';
// import animate from './assets/animated__banner2.svg';
// import client1 from './assets/client/client1.png';
// import client2 from './assets/client/client2.png';
// import client3 from './assets/client/client3.png';
// import client4 from './assets/client/client4.png';
// import client5 from './assets/client/client5.png';
// import client6 from './assets/client/client6.png';
// import team1 from './assets/team/t1.png';
// import team2 from './assets/team/t2.png';
// import team3 from './assets/team/t3.png';
// import team4 from './assets/team/t4.png';
// import team5 from './assets/team/t5.png';
// import team6 from './assets/team/t6.png';
// import consult from './assets/consult.svg';
import step1 from './assets/step/step1.svg';
import step2 from './assets/step/step2.svg';
import step3 from './assets/step/step3.svg';
import step4 from './assets/step/step4.svg';
import video from './assets/pc.png';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './sagas';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Consultants from './Components/Consultants';
import Products from './Components/Products'

import {
 getConsultantsRequests,
 getProductsListRequest
} from './actions';

import {
  makeSelectResponse,
  makeSelectProductResponse,
  makeSelectConsultantsResponse
} from './selectors'

const token = localStorage.getItem('token');

const mapStateToProps = createStructuredSelector({
  // location: makeSelectLocation(),
  consultantsResponse: makeSelectConsultantsResponse(),
  productListResponse:makeSelectProductResponse()
  // errorResponse: makeSelectError(),
  // isRequesting: makeSelectRequesting(),
});

const mapDispatchToProps = dispatch => ({
  getConsultantsRequests: () => dispatch(getConsultantsRequests()),
  getProductsListRequest: () => dispatch(getProductsListRequest())
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
                <h1 className="banner-text">Enabling privacy, cyber security compliance as a platform</h1>
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
        <div className="step">
          <div className="container">
            <div className="text-center">
              <h4 className="title__heading d-inline">Step Flow</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                illum vel? Eligendi.
              </p>
            </div>
            <div className="row step__container">
              <div className="col-md-3">
                <div className="step__holder">
                  <img className="img-fluid" src={step1} alt="step1" />
                </div>
                <h5 className="text-center step__heading">Product</h5>
              </div>
              <div className="col-md-3">
                <div className="step__holder">
                  <img className="img-fluid" src={step2} alt="step1" />
                </div>
                <h5 className="text-center step__heading">Questionaire</h5>
              </div>
              <div className="col-md-3">
                <div className="step__holder">
                  <img className="img-fluid" src={step3} alt="step1" />
                </div>
                <h5 className="text-center step__heading">Report</h5>
              </div>
              <div className="col-md-3">
                <div className="step__holder">
                  <img className="img-fluid" src={step4} alt="step1" />
                </div>
                <h5 className="text-center step__heading">Consultant</h5>
              </div>
              <div className="col-md-12  text-center">
                <div className="step__button">
                  {/* <button className="primary__button">Go to Dashboard</button> */}
                  {token != null ?
                     (
                     <Link
                        to={`/user/dashboard/`}
                        role="button"
                      >
                      Go to Dashboard
                    </Link> 
                       )  : (
                        <Link
                            to={`/login`}
                            role="button"
                          >
                          Go to Dashboard
                        </Link> 
                       )
                       }
                </div>
              </div>
            </div>
          </div>
        </div>
          <Products productList={productList} />
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
