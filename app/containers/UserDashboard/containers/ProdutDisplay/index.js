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

const mockData1 = { 
  "status":200,
  "data":{ 
     "dataList":[ 
        { 
           "_id":"776231a0-5df7-11e9-aa52-2bb5c8bae8ce",
           "title":"NEW YEAR FREE SET OFFER FOR HA",
           "description":"Complete Loksewa set free for HA students  ,on the occasion of New year , worth Rs. 50",
           "exam_type":"UNLIMITED",
           "time_limit":0,
           "category":"5946c500-2512-11e9-8c86-853685e9f68b",
           "sub_category":"",
           "country_specific":false,
           "country_target":[ 

           ],
           "is_free":true,
           "price_test_exam":0,
           "is_available_trial_period":false,
           "randomize":true,
           "test_instructions":"",
           "image_name":{ 
              "document_name":"mcqExam-1555165305084-f6cd8.png",
              "document_original_name":"surf school (17).png",
              "document_mimetype":"image/png"
           },
           "display_questions_per_page":1,
           "complexity_level":"hard",
           "negative_marking":false,
           "negative_marking_value":1,
           "availability":"available any time",
           "available_from":null,
           "available_to":null,
           "questions":[ 
              "86e274c0-5de6-11e9-aa52-2bb5c8bae8ce",
              "350e4660-5de6-11e9-aa52-2bb5c8bae8ce",
              "a9469560-5de5-11e9-aa52-2bb5c8bae8ce",
              "48ba8cb0-5de5-11e9-aa52-2bb5c8bae8ce",
              "64f00910-5de4-11e9-aa52-2bb5c8bae8ce",
              "dd8bb230-5de3-11e9-aa52-2bb5c8bae8ce",
              "47e20e60-5de2-11e9-aa52-2bb5c8bae8ce",
              "b69e1930-5de1-11e9-aa52-2bb5c8bae8ce",
              "da2cb010-5de0-11e9-aa52-2bb5c8bae8ce",
              "f0316550-5ddf-11e9-aa52-2bb5c8bae8ce",
              "74755440-5dde-11e9-aa52-2bb5c8bae8ce",
              "54525bf0-5ddd-11e9-aa52-2bb5c8bae8ce",
              "15eb0470-5ddd-11e9-aa52-2bb5c8bae8ce",
              "a7f3feb0-5dda-11e9-aa52-2bb5c8bae8ce",
              "e91eb160-5dd9-11e9-aa52-2bb5c8bae8ce",
              "98d39400-5dd9-11e9-aa52-2bb5c8bae8ce",
              "11be6e90-5dd9-11e9-aa52-2bb5c8bae8ce",
              "9f173c50-5dd8-11e9-aa52-2bb5c8bae8ce",
              "4904a0f0-5dd8-11e9-aa52-2bb5c8bae8ce",
              "a0eee9e0-5dd5-11e9-aa52-2bb5c8bae8ce",
              "1946fa50-5dd5-11e9-aa52-2bb5c8bae8ce",
              "c0970ce0-5dd6-11e9-aa52-2bb5c8bae8ce",
              "033537a0-36c4-11e9-8caf-7b9b2cf4c0b8",
              "b58efb80-36c3-11e9-8caf-7b9b2cf4c0b8",
              "ec4b1c70-460f-11e9-a700-b19e86af6bd4",
              "1caa0d60-4569-11e9-a700-b19e86af6bd4",
              "bfc9f5b0-4568-11e9-a700-b19e86af6bd4",
              "f080cc80-4633-11e9-a700-b19e86af6bd4",
              "6f5cb7a0-45e7-11e9-a700-b19e86af6bd4",
              "849c4330-36b3-11e9-8caf-7b9b2cf4c0b8",
              "2ee97b10-36b3-11e9-8caf-7b9b2cf4c0b8",
              "f0255300-36b1-11e9-8caf-7b9b2cf4c0b8",
              "5574b8a0-4633-11e9-a700-b19e86af6bd4",
              "ed458a70-3697-11e9-a8f8-6ba9d4c87974",
              "b3ae7fb0-3697-11e9-a8f8-6ba9d4c87974",
              "a0d52bb0-3696-11e9-be83-9b08ed109de9",
              "371c32e0-3696-11e9-a266-9f2cdf0fc124",
              "e17be150-3695-11e9-8e05-f5cbbe300364",
              "761eae60-3695-11e9-8e05-f5cbbe300364",
              "052d1b60-3695-11e9-93ac-111d4e6b7969",
              "7f896040-3694-11e9-9873-f5fc714518e2",
              "23250840-3694-11e9-9873-f5fc714518e2",
              "d5efa130-34e4-11e9-8b53-0d156f7a68ca",
              "d63d1a60-34e3-11e9-ad49-134d83abc1cd",
              "56b6f120-2a9e-11e9-84d4-6965117be5ff",
              "664f83f0-2a9d-11e9-ad9f-ebc0d8d583f9",
              "f4d24830-2a9b-11e9-ad9f-ebc0d8d583f9",
              "71cb3850-2a98-11e9-a2a2-f187190a1689",
              "76723780-3693-11e9-ad10-33e99a07b79b",
              "981e04a0-3692-11e9-89a4-db9b4d6ac9b0"
           ],
           "active":true,
           "added_by":"medicrony@gmail.com",
           "added_on":"2019-04-13T14:21:45.274Z",
           "deleted":false
        }
     ],
     "totalItems":1,
     "currentPage":1
  }
}

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
      console.log(nextProps.exams,'====',nextProps.exams.toJS())
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
            {mockData1.data.dataList && mockData1.data.dataList.length > 0 ? (
            // {data && data.length > 0 ? (
              mockData1.data.dataList.map((exam, idx) => (
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
                              // checked={data[idx].quiz_type === 'Practice'}
                              onChange={(e, se) =>
                                this.handleRadioChange(e, se, idx)
                              }
                            />
                            <Form.Radio
                              label="Exam"
                              name={`quiz_type_${idx}`}
                              value="Exam"
                              // checked={data[idx].quiz_type === 'Exam'}
                              onChange={(e, se) =>
                                this.handleRadioChange(e, se, idx)
                              }
                            />
                          </Form.Group>
                        </Form.Field>
                      </Form>
                      {/* {Object.keys(this.state.data[idx]).includes(
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
                      )} */}
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
