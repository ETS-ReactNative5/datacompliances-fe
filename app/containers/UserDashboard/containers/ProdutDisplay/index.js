/*
 *
 * ExamDisplay
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Toaster from 'components/Toaster';
import {
  Form,
  Grid,
  Card,
  Icon,
  CardContent,
  Radio,
  Button,
} from 'semantic-ui-react';
import moment from 'moment';
import { Link, Push } from 'react-router-dom';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './sagas';
import { compose } from 'redux';
import { DOCUMENT_URL_UPDATE } from 'containers/App/constants';
import mediquiz from 'assets/images/pkg_lst2.jpg';
import {
  makeSelectRequesting,
  makeSelectResponse,
  makeSelectError,
  makeSelectSuccess,
  makeSelectDataObj,
  makeSelectXResponse,
  makeSelectExamDisplay,
  makeSelectExams,
} from './selectors';
import {
  loadAllExamRequest,
  clearMessage,
  loadPackageExamsRequest,
} from './actions';

const mapStateToProps = createStructuredSelector({
  isSuccess: makeSelectSuccess(),
  // isRequesting: makeSelectRequesting(),
  // successResponse: makeSelectResponse(),
  // errorResponse: makeSelectError(),
  // xresponse: makeSelectXResponse(),
  // data: makeSelectDataObj(),
  exams: makeSelectExams(),
});

const mapDispatchToProps = dispatch => ({
  loadAllExamDisplay: (page, perPage, query) =>
    dispatch(loadAllExamRequest(page, perPage, query)),
  clearMessage: () => dispatch(clearMessage()),
  fetchPackageExams: package_id =>
    dispatch(loadPackageExamsRequest(package_id)),
});

class ExamDisplay extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  // static propTypes = {
  //   isSuccess: PropTypes.bool.isRequired,
  //   isRequesting: PropTypes.bool.isRequired,
  //   successResponse: PropTypes.string.isRequired,
  //   errorResponse: PropTypes.string.isRequired,
  // };

  state = {
    page: 1,
    perPage: 10,
    query: {},
    data: {},
  };

  componentDidMount() {
    const { page, perPage, query } = this.state;
    let package_id = this.props.match.params.package_id
      ? this.props.match.params.package_id
      : '';
    this.setState({ package_id });
    let url = window.location.href.split('/');
    this.setState({ url });
    if (package_id) {
      this.props.fetchPackageExams(package_id);
    } else {
      this.props.loadAllExamDisplay(page, perPage, query);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.setState({ data: nextProps.data.toJS() });
    }
    if (nextProps.exams !== this.props.exams) {
      this.setState({ data: nextProps.exams.toJS() }, () => {
        if (this.state.url && this.state.url.includes('trial')) {
          let filter = [];
          filter = this.state.data.filter(trial => {
            return trial.is_available_trial_period == true;
          });
          this.setState({ data: filter });
        }
      });
    }
  }

  componentWillUnmount() {
    this.props.clearMessage();
  }

  onPaginate = (page, perPage) => {
    this.setState({ page, perPage });
    this.props.loadAllExamDisplay(page, perPage, this.state.query);
  };

  handleRadioChange = (e, data, idx) => {
    let newState = JSON.parse(JSON.stringify(this.state.data));
    newState[idx].quiz_type = data.value;
    this.setState({ data: newState });
    if (newState[idx].quiz_type === 'Practice') {
      newState[idx].quizRoute = 'practice-quiz';
    } else if (newState[idx].quiz_type === 'Exam') {
      newState[idx].quizRoute = 'exam-quiz';
    }
    this.setState({ data: newState });
  };

  render() {
    const { page, perPage, data } = this.state;
    let url = window.location.href.split('/');
    const {
      successResponse,
      errorResponse,
      xresponse,
      isRequesting,
      isSuccess,
    } = this.props;

    let message = null;
    // if (successResponse && typeof successResponse == 'string') {
    //   message = <Toaster message={xresponse} timeout={5000} success />;
    // }
    // if (errorResponse && typeof errorResponse == 'string') {
    //   message = <Toaster message={errorResponse} timeout={5000} error />;
    // }
    return (
      <div>
        {message && message}
        <h1 className="main_title">
          {this.props.location && this.props.location.state
            ? this.props.location.state.title
            : ''}
            Product
        </h1>
        <React.Fragment>
          <Grid>
             {data && data.length > 0 ? (
              data.map((exam, idx) => (
                <Grid.Column
                  mobile={16}
                  tablet={8}
                  computer={4}
                  key={`exam_${idx}`}
                >
                  <div className="medi__quiz">
                    {exam.image_name.document_name ? (
                      <img
                        src={`${DOCUMENT_URL_UPDATE}${
                          exam.image_name.document_name
                        }`}
                        alt={exam.title}
                      />
                    ) : (
                      <img src={mediquiz} />
                    )}
                    <div className="quiz__dis">
                      <h3>{exam.title}</h3>
                      {exam.time_limit > 0 && (
                        <div className="time_limit">
                          <span>Complexity Level: {exam.complexity_level}</span>
                          <i className="icon-clock">
                            <span>{`${exam.time_limit}min`}</span>
                          </i>
                        </div>
                      )}

                      {/* <span>2019-01-14 00:18</span> */}
                      <p>Description: {exam.description}</p>
                      <Form>
                        <Form.Field>
                          <label>Select Quiz Type:</label>
                          <Form.Group>
                            <Form.Radio
                              label="Practice"
                              name={`quiz_type_${idx}`}
                              value="Practice"
                              checked={data[idx].quiz_type === 'Practice'}
                              onChange={(e, se) =>
                                this.handleRadioChange(e, se, idx)
                              }
                            />
                            <Form.Radio
                              label="Exam"
                              name={`quiz_type_${idx}`}
                              value="Exam"
                              checked={data[idx].quiz_type === 'Exam'}
                              onChange={(e, se) =>
                                this.handleRadioChange(e, se, idx)
                              }
                            />
                          </Form.Group>
                        </Form.Field>
                      </Form>
                      {Object.keys(this.state.data[idx]).includes(
                        'quiz_type',
                      ) && url.includes('trial') ? (
                        <Link
                          className="ui vertical primary animated button"
                          to={`/user/dashboard/trial/exam-display/${
                            exam.quizRoute
                          }/${exam._id}`}
                          role="button"
                          disabled={Object.keys(this.state.data[idx]).includes(
                            'quiz_type',
                          )}
                        >
                          Start Exam
                        </Link>
                      ) : (
                        Object.keys(this.state.data[idx]).includes(
                          'quiz_type',
                        ) && (
                          <Link
                            className="ui vertical primary animated button"
                            to={{
                              pathname: `/user/dashboard/exam-display/${
                                exam.quizRoute
                              }/${exam._id}`,
                              state: { id: this.state.package_id },
                            }}
                            role="button"
                            disabled={Object.keys(
                              this.state.data[idx],
                            ).includes('quiz_type')}
                          >
                            Start Exam
                          </Link>
                        )
                      )}
                      {/* <Button>Click Here</Button> */}
                    </div>
                  </div>
                </Grid.Column>
              ))
            ) : isRequesting ? (
              <div>Loading.....</div>
            ) : (
              <div>
                {Object.keys(data).length < 1 &&
                  (url.includes('trial') ? (
                    <div>
                      <Card>
                        <CardContent>No Trial Quiz available!</CardContent>
                      </Card>
                    </div>
                  ) : (
                    <div>
                      <Card>
                        <CardContent>No Quiz available!</CardContent>
                      </Card>
                    </div>
                  ))}
              </div>
            )}
          </Grid>
        </React.Fragment>
      </div>
    );
  }
}

const withReducer = injectReducer({ key: 'productDisplay', reducer });
const withSaga = injectSaga({ key: 'productDisplay', saga });
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ExamDisplay);
