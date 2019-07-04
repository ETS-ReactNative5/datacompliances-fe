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
import reducer from '../reducer';
import saga from '../saga';
import { loadBlogByIdRequest } from '../actions'
import { DOCUMENT_URL } from 'containers/App/constants';
import {
  makeSelectSuccess,
  makeSelectResponse,
  makeSelectError,
  makeSelectRequesting,
  makeSelectSingleBlog
} from '../selectors';
/* eslint-disable react/prefer-stateless-function */
export class BlogDetail extends React.PureComponent {
  state = {
    page: 1,
    perPage: 10,
    query: {}
  }
  componentDidMount() {
    const blog_id = this.props.match.params.blog_id ? this.props.match.params.blog_id : null
    if (blog_id)
      this.props.fetchBlog(blog_id)
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
        {blog && <div>
          <h1>{blog.title}</h1>
          <img src={`${DOCUMENT_URL}${blog.image && blog.image.document_name}`} />

          <div dangerouslySetInnerHTML={{
            __html: blog.description,
          }} />
          <p>{}</p></div>}
      </div>
    );
  }
}

BlogDetail.propTypes = {
  fetchBlog: PropTypes.func.isRequired,
  blog: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

const mapStateToProps = createStructuredSelector({
  blog: makeSelectSingleBlog(),
  isRequesting: makeSelectRequesting(),
  successResponse: makeSelectResponse(),
  errorResponse: makeSelectError(),
});

const mapDispatchToProps = dispatch => ({
  fetchBlog: (blog_id) => dispatch(loadBlogByIdRequest(blog_id))
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
)(BlogDetail);
