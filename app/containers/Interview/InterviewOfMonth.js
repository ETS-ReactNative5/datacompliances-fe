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
import { loadAllInterviewRequest } from './actions'
import {
  makeSelectSuccess,
  makeSelectResponse,
  makeSelectError,
  makeSelectRequesting,
  makeSelectData,
} from './selectors';
import InterviewUi from './components/InterviewOfMonthUi'
import { DOCUMENT_URL } from 'containers/App/constants';

export class InterviewOfMonth extends React.PureComponent {
  state = {
    data: {

    },
    option: {
      page: 1,
      perPage: 1,
      query: {}
    }
  }
  componentDidMount() {
    this.props.fetchInterview(this.state.option)
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.setState({ data: nextProps.data && nextProps.data.toJS().dataList && nextProps.data.toJS().dataList[0] })
    }
  }

  render() {
    const { data } = this.state
    return (
      <div>
        <Helmet>
          <title>Tip Of Day</title>
          <meta name="Tip_Of_Day" content="Tip Of Day" />
        </Helmet>
        <InterviewUi data={data} />
      </div>

    );
  }
}

InterviewOfMonth.propTypes = {
  fetchInterview: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  isSuccess: makeSelectSuccess(),
  isRequesting: makeSelectRequesting(),
  successResponse: makeSelectResponse(),
  errorResponse: makeSelectError(),
  data: makeSelectData(),
});

const mapDispatchToProps = dispatch => ({
  fetchInterview: (option) => dispatch(loadAllInterviewRequest(option)),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'interview', reducer });
const withSaga = injectSaga({ key: 'interview', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(InterviewOfMonth);
