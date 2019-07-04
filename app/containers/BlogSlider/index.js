/**
 *
 * BlogSlider
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import { loadAllBlogsRequest } from './actions'
import {
  makeSelectSuccess,
  makeSelectResponse,
  makeSelectError,
  makeSelectRequesting,
  makeSelectBlog
} from './selectors';
import Carousel from "./components/Carousel"
/* eslint-disable react/prefer-stateless-function */
export class BlogSlider extends React.PureComponent {
  state = {
    page: 1,
    perPage: 10,
    query: {}
  }
  componentDidMount() {
    const { page, perPage, query } = this.state
    this.props.fetchBlog(page, perPage, query)
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.blog !== this.props.blog) {
      this.setState({ blog: nextProps.blog && nextProps.blog.toJS() })
    }
  }
  render() {
    const { blog } = this.state
    return (
      <div>
        <Helmet>
          <title>Blog</title>
          <meta name="description" content="Description of Blog" />
        </Helmet>
        {/* <h1>Blogs Slider</h1> */}
        <Carousel data={blog} />
      </div>
    );
  }
}

BlogSlider.propTypes = {
  fetchBlog: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  blog: makeSelectBlog(),
  isRequesting: makeSelectRequesting(),
  successResponse: makeSelectResponse(),
  errorResponse: makeSelectError(),
});

const mapDispatchToProps = dispatch => ({
  fetchBlog: (page, perPage, query) => dispatch(loadAllBlogsRequest(page, perPage, query))
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'blogSlider', reducer });
const withSaga = injectSaga({ key: 'blogSlider', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(BlogSlider);
