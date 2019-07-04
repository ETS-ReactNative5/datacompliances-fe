import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import { loadMediaCoverageRequest } from './actions';
import { DOCUMENT_URL_UPDATE } from 'containers/App/constants';

import {
  makeSelectSuccess,
  makeSelectResponse,
  makeSelectError,
  makeSelectRequesting,
  makeSelectData,
} from './selectors';

export class MediaCoverage extends React.PureComponent {
  state = {
    page: 1,
    perPage: 5,
    query: {},
  };
  componentDidMount() {
    const { page, perPage, query } = this.state;
    this.props.fetchMedia(page, perPage, query);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data && nextProps.data.size > 0) {
      this.setState({
        data: nextProps.data.toJS(),
      });
    }
  }

  render() {
    const { data } = this.state;
    return (
      <React.Fragment>
        <div className="title__wrap">
          <div className="container">
            <h1>MEDIA COVERAGE</h1>
          </div>
        </div>
        <div className="py-4">
          <div className="container">
            <div className="row">
              {data &&
                data.dataList &&
                data.dataList.map((eachdata, idx) => (
                  <div className="col-md-4" key={`cat${idx}`}>
                    <div className="image__holder mb-2">
                      <img
                        className="img-fluid"
                        src={
                          eachdata &&
                          eachdata.image_name &&
                          `${DOCUMENT_URL_UPDATE}${
                            eachdata.image_name.document_name
                          }`
                        }
                        alt={eachdata.title}
                      />
                    </div>
                    <h5>{eachdata.title}</h5>
                    <a href={eachdata.link} target="_blank">
                      View Detail
                    </a>
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
  isSuccess: makeSelectSuccess(),
  isRequesting: makeSelectRequesting(),
  successResponse: makeSelectResponse(),
  errorResponse: makeSelectError(),
  data: makeSelectData(),
});

const mapDispatchToProps = dispatch => ({
  fetchMedia: () => dispatch(loadMediaCoverageRequest()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'media', reducer });
const withSaga = injectSaga({ key: 'media', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MediaCoverage);
