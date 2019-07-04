import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { loadImageGalleryRequest } from './actions';
import { Container } from 'react-bootstrap';
import saga from './saga';
import reducer from './reducer';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { compose } from 'redux';
import { makeSelectData } from './selectors';
import Lightbox from 'react-image-lightbox';
import { DOCUMENT_URL_UPDATE } from '../App/constants';
import 'react-image-lightbox/style.css';

export class ImageGallery extends React.Component {
  state = {
    page: 1,
    perPage: 10,
    query: {},
    photoIndex: 0,
    isOpen: false,
    hover: false,
    message: '',
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    const { page, perPage, query } = this.state;
    this.props.fetchImageGallery(page, perPage, query);
  }

  handleLightBoxOpen = (e, album, titleIndex) => {
    let imageArray = [];
    album.images.map(image => {
      imageArray.push(`${DOCUMENT_URL_UPDATE}${image.document_name}`);
    });
    this.setState({
      isOpen: true,
      photoIndex: 0,
      imageArray,
      titleIndex,
    });
  };

  hoverOn = () => {
    this.setState({
      hover: true,
      message: 'click me',
    });
  };
  hoverOff = () => {
    this.setState({
      hover: false,
      message: '',
    });
  };

  render() {
    const { data } = this.props;
    const { photoIndex, isOpen, imageArray, titleIndex } = this.state;
    let albumData = data && data.size > 0 ? data.toJS() : [];
    return (
      <React.Fragment>
        <div className="title__wrap">
          <div className="container">
            <h1>Image Gallery</h1>
          </div>
        </div>
        <div className="content__wrap">
          <div className="container">
            <div className="row">
              {albumData.dataList.map((album, index) => (
                <div className="col-md-4" key={`album${index}`}>
                  <div className="image__wrap">
                    {album.cover_image.map(
                      (image, idx) =>
                        image === 'true' && (
                          <img
                            key={`image-${idx}`}
                            className="img-fluid"
                            src={`${DOCUMENT_URL_UPDATE}${albumData.dataList[
                              index
                            ].images[idx] &&
                              albumData.dataList[index].images[idx]
                                .document_name}`}
                            alt={`gallery-${index}`}
                            onMouseEnter={this.hoverOn}
                            onMouseLeave={this.hoverOff}
                            onClick={e =>
                              this.handleLightBoxOpen(e, album, index)
                            }
                          />
                        ),
                    )}
                    <h4 className="py-2 m-0">{album.title}</h4>
                  </div>
                  {isOpen && (
                    <Lightbox
                      mainSrc={imageArray[photoIndex]}
                      nextSrc={imageArray[(photoIndex + 1) % imageArray.length]}
                      prevSrc={
                        imageArray[
                          (photoIndex + imageArray.length - 1) %
                            imageArray.length
                        ]
                      }
                      onCloseRequest={() =>
                        this.setState({ isOpen: false, photoIndex: 0 })
                      }
                      onMovePrevRequest={() =>
                        this.setState({
                          photoIndex:
                            (photoIndex + imageArray.length - 1) %
                            imageArray.length,
                        })
                      }
                      onMoveNextRequest={() =>
                        this.setState({
                          photoIndex: (photoIndex + 1) % imageArray.length,
                        })
                      }
                      imageTitle={albumData.dataList[titleIndex].title}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  data: makeSelectData(),
});

const mapdispatchToProps = dispatch => ({
  fetchImageGallery: (page, perPage, query) =>
    dispatch(loadImageGalleryRequest(page, perPage, query)),
});

const withConnect = connect(
  mapStateToProps,
  mapdispatchToProps,
);

const withReducer = injectReducer({ key: 'imageGallery', reducer });
const withSaga = injectSaga({ key: 'imageGallery', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ImageGallery);
