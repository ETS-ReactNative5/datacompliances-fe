/**
 *
 * Blog
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
import BlogList from "./components/BlogListUi";
/* eslint-disable react/prefer-stateless-function */
export class Blog extends React.PureComponent {
  state = {
    page: 1,
    perPage: 1,
    query: {}
  }
  componentDidMount() {
    const { page, perPage, query } = this.state
    const category_id = this.props.match.params.category_id ? this.props.match.params.category_id : null
    const tags = this.props.match.params.tags ? this.props.match.params.tags : null
    if (category_id) {
      this.setState({
        query: {
          ...this.state.query,
          category_id: category_id
        }
      }, () => {
        this.props.fetchBlog(this.state.page, this.state.perPage, this.state.query)
      })
    }
    else if (tags) {
      this.setState({
        query: {
          ...this.state.query,
          tags: tags
        }
      }, () => {
        this.props.fetchBlog(this.state.page, this.state.perPage, this.state.query)
      })
    }
    else {
      this.props.fetchBlog(page, perPage, query)
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.blog !== this.props.blog) {
      this.setState({ blog: nextProps.blog && nextProps.blog.toJS().dataList, totalItems: nextProps.blog && nextProps.blog.toJS().totalItems })
    }
    if (nextProps.match.params.category_id && this.props.match.params.category_id != nextProps.match.params.category_id) {
      this.setState({
        query: {
          ...this.state.query,
          category_id: nextProps.match.params.category_id
        }
      }, () => {
        this.props.fetchBlog(this.state.page, this.state.perPage, this.state.query)
      })
    }
    if (nextProps.match.params.tags && this.props.match.params.tags != nextProps.match.params.tags) {
      this.setState({
        query: {
          ...this.state.query,
          tags: nextProps.match.params.tags
        }
      }, () => {
        this.props.fetchBlog(this.state.page, this.state.perPage, this.state.query)
      })
    }
  }
  handleLoadMore = () => {
    const { page, perPage, query } = this.state;
    this.setState({ perPage: perPage + 1 }, () => {
      this.props.fetchBlog(page, this.state.perPage, query)
    })
  }
  render() {
    const { blog, totalItems } = this.state
    return (
      <div>
        <Helmet>
          <title>Blog</title>
          <meta name="description" content="Description of Blog" />
        </Helmet>
        <h1>Blogs</h1>
        <BlogList blogList={blog} handleLoadMore={this.handleLoadMore} totalItems={totalItems} isRequesting={this.props.isRequesting} />
      </div>
    );
  }
}

Blog.propTypes = {
  fetchBlog: PropTypes.func.isRequired,
  blog: PropTypes.object.isRequired
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
)(Blog);
