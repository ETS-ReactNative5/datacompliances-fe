import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './assets/HomePage.scss';
import animate from './assets/animated__banner2.svg';
import client1 from './assets/client/client1.png';
import client2 from './assets/client/client2.png';
import client3 from './assets/client/client3.png';
import client4 from './assets/client/client4.png';
import client5 from './assets/client/client5.png';
import client6 from './assets/client/client6.png';
import team1 from './assets/team/t1.png';
import team2 from './assets/team/t2.png';
import team3 from './assets/team/t3.png';
import team4 from './assets/team/t4.png';
import team5 from './assets/team/t5.png';
import team6 from './assets/team/t6.png';
import consult from './assets/consult.svg';
import step1 from './assets/step/step1.svg';
import step2 from './assets/step/step2.svg';
import step3 from './assets/step/step3.svg';
import step4 from './assets/step/step4.svg';
import video from './assets/pc.png';
import cross from './assets/cross.svg';
import check from './assets/check.svg';
import banner from './assets/banner.png';
import report from './assets/report2.svg';
import secure from './assets/secure.svg';
import design from './assets/design.svg';

import Slider from 'react-slick/lib';

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import Slider from 'react-slick';
var settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
      speed: 500,
      autoplaySpeed: 2000,
      cssEase: "ease-in",
      centerPadding: 30
};

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
class HomePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>PCSC</title>
          <meta name="description" content="The Giving Brick" />
        </Helmet>
        <div className="banner">
          {/* <div className="d-flex align-items-end">
            <div className="img__holder">
              <img className="animate" src={animate} alt="" />
            </div>
            <div className="img__holder">
              <img className="video" src={video} alt="" />
            </div>
          </div> */}
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

        <div className="consultant">
          <div className="container">
            <h4 className="mb-5 title__heading">Our Consultants</h4>
            <div className="row align-items-center">
              <div className="col-lg-4">
                <h5 className="blue">Ravi Dhungel</h5>
                <p className="dark__grey">Principal Cyber Security Engineer</p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Similique mollitia culpa quas quidem ab ex praesentium dicta
                  ipsam asperiores. Vero vitae adipisci tempora saepe earum!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  ducimus reiciendis repudiandae.
                </p>
              </div>
              <div className="col-lg-8">
                <div className="row ">
                  <div className="col-md-6 mb-4">
                    <div className="media align-items-center">
                      <img
                        className="mb-2 img-fluid team__img active"
                        src={team1}
                        alt=""
                      />
                      <div className="media-body pl-3">
                        <h5>Ravi Dhungel </h5>
                        <p>Principal Cyber Security Engineer</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6  mb-4">
                    <div className="media align-items-center">
                      <img
                        className="mb-2 img-fluid team__img"
                        src={team2}
                        alt=""
                      />
                      <div className="media-body pl-3">
                        <h5>David Vesey</h5>
                        <p>Principal Software Engineer - HIPPA</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="media align-items-center">
                      <img
                        className="mb-2 img-fluid team__img"
                        src={team5}
                        alt=""
                      />
                      <div className="media-body pl-3">
                        <h5>David Vesey</h5>
                        <p>Principal Software Engineer - HIPPA</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6  mb-4">
                    <div className="media align-items-center">
                      <img
                        className="mb-2 img-fluid team__img"
                        src={team6}
                        alt=""
                      />
                      <div className="media-body pl-3">
                        <h5>David Vesey</h5>
                        <p>Principal Software Engineer - HIPPA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                  <button className="primary__button">Go to Dashboard</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="product">
          <div className="container">
            <div className="mb-4 text-center">
              <h4 className="title__heading d-inline-block">
                Make smarter decisions using better insights
              </h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="row  justify-content-center">
              <div className="col-md-4 ">
                <div className="product__card card ">
                  <img className="product__image" src={secure} alt="" />
                  <div className="top__block">
                    <h5>Cyber Security on Demand</h5>
                    <p>
                      <small>$</small>500
                    </p>
                  </div>
                  <ul>
                    <li>
                      <img className="pr-1" src={check} alt="check" /> Cyber
                      Privacy
                    </li>
                    <li>
                      <img className="pr-1" src={check} alt="check" /> Cyber
                      Compliance
                    </li>
                    <li>
                      <img className="pr-1" src={check} alt="check" /> Cyber
                      Assessment
                    </li>
                    <li>
                      <img className="pr-1" src={check} alt="check" /> Cyber TM
                    </li>
                  </ul>
                  <button className="primary__button">View Detail</button>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="product__card card ">
                  <img className="product__image" src={design} alt="" />
                  <div className="top__block">
                    <h5>Adhoc Consulting and design enhancements</h5>
                    <p>
                      <small>$</small>1500
                    </p>
                  </div>
                  <ul>
                    <li>
                      <img className="pr-1" src={check} alt="check" /> Cyber
                      Privacy
                    </li>
                    <li>
                      <img className="pr-1" src={check} alt="check" /> Cyber
                      Compliance
                    </li>
                    <li>
                      <img className="pr-1" src={cross} alt="check" /> Cyber
                      Assessment
                    </li>
                    <li>
                      <img className="pr-1" src={cross} alt="check" /> Cyber TM
                    </li>
                  </ul>
                  <button className="primary__button">View Detail</button>
                </div>
              </div>
              {/* <div className="col-md-5 ml-auto">
                <img className="payment__img" src={report} alt="" />
              </div> */}
            {/* </div>
          </div>
        </div> */} 
        <div className="container">
        <Slider classnName="products-slider" {...settings}>
             <div className="product-wrap">
                <div className="product__card card ">
                  <img className="product__image" src={secure} alt="" />
                  <div className="top__block">
                    <h5>Cyber Security on Demand</h5>
                    <p>
                      <small>$</small>500
                    </p>
                  </div>
                  <ul>
                    <li>
                      <img className="pr-1" src={check} alt="check" /> Cyber
                      Privacy
                    </li>
                    <li>
                      <img className="pr-1" src={check} alt="check" /> Cyber
                      Compliance
                    </li>
                    <li>
                      <img className="pr-1" src={check} alt="check" /> Cyber
                      Assessment
                    </li>
                    <li>
                      <img className="pr-1" src={check} alt="check" /> Cyber TM
                    </li>
                  </ul>
                  <button className="primary__button">View Detail</button>
                </div>
              </div>
              <div className="product-wrap">
                <div className="product__card card ">
                  <img className="product__image" src={secure} alt="" />
                  <div className="top__block">
                    <h5>Cyber Security on Demand</h5>
                    <p>
                      <small>$</small>500
                    </p>
                  </div>
                  <ul>
                    <li>
                      <img className="pr-1" src={check} alt="check" /> Cyber
                      Privacy
                    </li>
                    <li>
                      <img className="pr-1" src={check} alt="check" /> Cyber
                      Compliance
                    </li>
                    <li>
                      <img className="pr-1" src={check} alt="check" /> Cyber
                      Assessment
                    </li>
                    <li>
                      <img className="pr-1" src={check} alt="check" /> Cyber TM
                    </li>
                  </ul>
                  <button className="primary__button">View Detail</button>
                </div>
              </div>
              <div className="product-wrap">
                <div className="product__card card ">
                  <img className="product__image" src={design} alt="" />
                  <div className="top__block">
                    <h5>Adhoc Consulting and design enhancements</h5>
                    <p>
                      <small>$</small>1500
                    </p>
                  </div>
                  <ul>
                    <li>
                      <img className="pr-1" src={check} alt="check" /> Cyber
                      Privacy
                    </li>
                    <li>
                      <img className="pr-1" src={check} alt="check" /> Cyber
                      Compliance
                    </li>
                    <li>
                      <img className="pr-1" src={cross} alt="check" /> Cyber
                      Assessment
                    </li>
                    <li>
                      <img className="pr-1" src={cross} alt="check" /> Cyber TM
                    </li>
                  </ul>
                  <button className="primary__button">View Detail</button>
                </div>
              </div>
              <div className="product-wrap">
                <div className="product__card card ">
                  <img className="product__image" src={design} alt="" />
                  <div className="top__block">
                    <h5>Adhoc Consulting and design enhancements</h5>
                    <p>
                      <small>$</small>1500
                    </p>
                  </div>
                  <ul>
                    <li>
                      <img className="pr-1" src={check} alt="check" /> Cyber
                      Privacy
                    </li>
                    <li>
                      <img className="pr-1" src={check} alt="check" /> Cyber
                      Compliance
                    </li>
                    <li>
                      <img className="pr-1" src={cross} alt="check" /> Cyber
                      Assessment
                    </li>
                    <li>
                      <img className="pr-1" src={cross} alt="check" /> Cyber TM
                    </li>
                  </ul>
                  <button className="primary__button">View Detail</button>
                </div>
              </div>
      </Slider>
      </div>
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
export default HomePage;
