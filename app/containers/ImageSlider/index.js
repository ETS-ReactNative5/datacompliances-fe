/**
 *
 * ImageSlider
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectData } from './selectors';
import { loadImageSliderRequest } from './actions';
import reducer from './reducer';
import saga from './saga';
import './assets/style.scss';
import Slider from 'react-slick';
import { DOCUMENT_URL_UPDATE } from 'containers/App/constants';

export class ImageSlider extends React.Component {
  state = {
    page: 1,
    perPage: 3,
    query: {},
  };

  componentDidMount() {
    const { page, perPage, query } = this.state;
    this.props.fetchImageSlider(page, perPage, '');
  }

  componentWillReceiveProps(nextProps) {}

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      autoplay: true,
      autoplaySpeed: 20000,
      pauseOnHover: false,
      swipeToSlide: true,
    };
    const { data } = this.props;
    let tempData = data.toJS();
    return (
      <Slider {...settings}>
        {tempData &&
          tempData.dataList.map((image, index) => (
            <div className="web__banner" key={`imageslider${index}`}>
              <div
                className="slider__background"
                style={{
                  backgroundImage: `url(
                  ${DOCUMENT_URL_UPDATE}${image.image_name.document_name}
                )`,
                }}
              />
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <div className="content">
                      <h1>{image.title}</h1>
                      <h2>{image.description}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </Slider>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  data: makeSelectData(),
});

const mapDispatchToProps = dispatch => ({
  fetchImageSlider: (page, perPage, query) =>
    dispatch(loadImageSliderRequest(page, perPage, query)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'homeImageSlider', reducer });
const withSaga = injectSaga({ key: 'homeImageSlider', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ImageSlider);
