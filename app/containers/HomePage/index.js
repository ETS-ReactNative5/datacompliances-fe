import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import './assets/HomePage.scss';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import Helmet from 'react-helmet';
import { makeSelectContentTemplate } from 'containers/App/selectors';
import saga from './saga';
import reducer from './reducer';
import { loadRepos } from '../App/actions';
import animate from './assets/animated__banner2.svg';
import client1 from './assets/client/client1.png';
import client2 from './assets/client/client2.png';
import client3 from './assets/client/client3.png';
import client4 from './assets/client/client4.png';
import client5 from './assets/client/client5.png';
import client6 from './assets/client/client6.png';
import team1 from './assets/team/team1.png';
import team2 from './assets/team/team2.png';
import team3 from './assets/team/team0.png';
import team4 from './assets/team/team4.png';
import team5 from './assets/team/team5.png';
import team6 from './assets/team/team6.png';

import video from './assets/pc.png';
import Slider from 'react-slick';
import ImageSlider from '../ImageSlider/Loadable';
const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  dots: true,
  arrows: false,
};
export class HomePage extends React.PureComponent {
  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>PCSC</title>
          <meta name="description" content="The Giving Brick" />
        </Helmet>
        <div className="banner">
          <div className="d-flex align-items-end">
            <div className="img__holder">
              <img className="animate" src={animate} alt="" />
            </div>
            <div className="img__holder">
              <img className="video" src={video} alt="" />
            </div>
          </div>
        </div>
        <div className="consultant">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <h4>Our Consultants</h4>
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
                <div className="row">
                  <div className="col-md-4">
                    <img className="mb-1" src={team1} alt="" />
                    <h5>Shahi Dhungel</h5>
                    <p>Chief Executive Officer</p>
                  </div>
                  <div className="col-md-4">
                    <img className="mb-1" src={team2} alt="" />
                    <h5>Shahi Dhungel</h5>
                    <p>Chief Executive Officer</p>
                  </div>
                  <div className="col-md-4">
                    <img className="mb-1" src={team3} alt="" />
                    <h5>Shahi Dhungel</h5>
                    <p>Chief Executive Officer</p>
                  </div>
                  <div className="col-md-4">
                    <img className="mb-1" src={team4} alt="" />
                    <h5>Shahi Dhungel</h5>
                    <p>Chief Executive Officer</p>
                  </div>
                  <div className="col-md-4">
                    <img className="mb-1" src={team5} alt="" />
                    <h5>Shahi Dhungel</h5>
                    <p>Chief Executive Officer</p>
                  </div>{' '}
                  <div className="col-md-4">
                    <img className="mb-1" src={team6} alt="" />
                    <h5>Shahi Dhungel</h5>
                    <p>Chief Executive Officer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product">
          <div className="container">
            <h4>Make smarter decisions using better insights</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="row">
              <div className="col-md-4">
                <div className="product__card card inverse">
                  <div className="top__block">
                    <h5>Cyber Security on Demand</h5>
                    <p>$1500</p>
                  </div>
                  <ul>
                    <li>Cyber Privacy</li>
                    <li>Cyber Compliance</li>
                    <li>Cyber Assessment</li>
                    <li>Cyber TM</li>
                  </ul>
                  <button className="primary__button">View Detail</button>
                </div>
              </div>
              <div className="col-md-4">
                <div className="product__card card ">
                  <div className="top__block">
                    <h5>Adhoc Consulting and design enhancements</h5>
                    <p>$1500</p>
                  </div>
                  <ul>
                    <li>Cyber Privacy</li>
                    <li>Cyber Compliance</li>
                    <li>Cyber Assessment</li>
                    <li>Cyber TM</li>
                  </ul>
                  <button className="primary__button">View Detail</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="customer">
          <div className="container">
            <div className="pipe__wrapper">
              {/* d-flex align-items-center
               */}
              <div className="d-flex align-items-center">
                <h3 className="mr-4">Our Customers</h3>
                <div className="max1110">
                  <Slider {...settings}>
                    <div>
                      <img src={client4} alt="" />
                    </div>
                    <div>
                      <img src={client3} alt="" />
                    </div>
                    <div>
                      <img src={client4} alt="" />
                    </div>
                    <div>
                      <img src={client5} alt="" />
                    </div>
                    <div>
                      <img src={client3} alt="" />
                    </div>
                    <div>
                      <img src={client4} alt="" />
                    </div>
                    <div>
                      <img src={client5} alt="" />
                    </div>
                    <div>
                      <img src="client1" alt="" />
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
};

export function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  contentTemplate: makeSelectContentTemplate(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
