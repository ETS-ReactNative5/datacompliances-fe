/**
 *
 * AboutUs
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
import { loadAllTagsRequest } from './actions'
import {
  makeSelectSuccess,
  makeSelectResponse,
  makeSelectError,
  makeSelectRequesting,
  makeSelectData,
} from './selectors';
import { Link } from 'react-router-dom';

import { DOCUMENT_URL } from 'containers/App/constants';

export class Tags extends React.PureComponent {
  state = {
    data: {},
  }
  componentDidMount() {
    this.props.fetchTags()
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.setState({ data: nextProps.data && nextProps.data.toJS() })
    }
  }

  render() {
    const { data } = this.state
    return (
      <div>
        <Helmet>
          <title>Team Member</title>
          <meta name="team-member" content="Team Member" />
        </Helmet>
        <div>
          <h1>Tags</h1>
          <ul>
            {data && data.length > 0 && data.map((tags, idx) => (
              <li key={`list${idx}`}><Link to={`/blog/tags/${tags}`} >{tags}</Link></li>
            ))}
          </ul>

        </div>
      </div>

    );
  }
}

Tags.propTypes = {
  fetchTags: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  isSuccess: makeSelectSuccess(),
  isRequesting: makeSelectRequesting(),
  successResponse: makeSelectResponse(),
  errorResponse: makeSelectError(),
  data: makeSelectData(),
});

const mapDispatchToProps = dispatch => ({
  fetchTags: () => dispatch(loadAllTagsRequest())
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'tags', reducer });
const withSaga = injectSaga({ key: 'tags', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Tags);
