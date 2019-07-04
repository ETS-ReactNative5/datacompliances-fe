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
import reducer from '../reducer';
import saga from '../saga';
import { loadInterviewByIDRequest } from '../actions'
import {
  makeSelectSuccess,
  makeSelectResponse,
  makeSelectError,
  makeSelectRequesting,
  makeSelectSingleData
} from '../selectors';
import { DOCUMENT_URL } from 'containers/App/constants';

export class InterviewDetail extends React.PureComponent {
  state = {
    data: {

    },
  }
  componentDidMount() {
    const id = this.props.match.params.id || null
    this.props.fetchInterviewById(id)
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
          <title>InterView Detail</title>
          <meta name="Interview" content="InterView Detail" />
        </Helmet>
        {data &&
          <div>
            <h1>Interview With{data.full_name}</h1>
            <h4>{data.intro_detail}</h4>
            <img src={`${DOCUMENT_URL}${data.image && data.image.document_name}`} style={{ height: "200px" }} />
            {data.interview_questionnaires && data.interview_questionnaires.length > 0 && data.interview_questionnaires.map((eachQuestion, idx) => (
              <div key={`index${idx}`}><h3>{eachQuestion.question}</h3>
                <h6><div dangerouslySetInnerHTML={{
                  __html: eachQuestion.answer,
                }} ></div></h6></div>
            ))}
          </div>
        }
      </div>

    );
  }
}

InterviewDetail.propTypes = {
  fetchInterviewById: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  isSuccess: makeSelectSuccess(),
  isRequesting: makeSelectRequesting(),
  successResponse: makeSelectResponse(),
  errorResponse: makeSelectError(),
  data: makeSelectSingleData(),
});

const mapDispatchToProps = dispatch => ({
  fetchInterviewById: (id) => dispatch(loadInterviewByIDRequest(id)),
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
)(InterviewDetail);
