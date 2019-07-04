/**
 *
 * BlogHome
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
import reducer from '../reducer';
import saga from '../saga';
import { loadAllBlogsRequest } from '../actions'
import {
  makeSelectSuccess,
  makeSelectResponse,
  makeSelectError,
  makeSelectRequesting,
  makeSelectBlog
} from '../selectors';
import BlogList from "../components/BlogListUi";
/* eslint-disable react/prefer-stateless-function */
export class BlogHome extends React.PureComponent {
  state = {
    page: 1,
    perPage: 5,
    query: {}
  }
  componentDidMount() {
    const { page, perPage, query } = this.state
    this.props.fetchBlog(page, perPage, query)
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.blog !== this.props.blog) {
      this.setState({ blog: nextProps.blog && nextProps.blog.toJS().dataList, totalItems: nextProps.blog && nextProps.blog.toJS().totalItems })
    }
  }
  // handleLoadMore = () => {
  //   const { page, perPage } = this.state;
  //   this.setState({ perPage: perPage + 2 }, () => {
  //     this.props.fetchBlog(page, this.state.perPage)
  //   })
  // }
  render() {
    const { blog } = this.state
    return (
      <div>
        <Helmet>
          <title>BlogHome</title>
          <meta name="description" content="Description of BlogHome" />
        </Helmet>
        <h1>Blogs</h1>
        <BlogList blogList={blog} />
      </div>
    );
  }
}

BlogHome.propTypes = {
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

const withReducer = injectReducer({ key: 'blog', reducer });
const withSaga = injectSaga({ key: 'blog', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(BlogHome);
