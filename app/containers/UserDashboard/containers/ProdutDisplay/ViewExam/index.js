/*
 *
 * ViewExam
 *
 */

import React from 'react';
import PropTypes, { object } from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Toaster from 'components/Toaster';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from '../ViewPractice/reducer';
import saga from '../ViewPractice/sagas';
import { compose } from 'redux';
import {
  makeSelectRequesting,
  makeSelectResponse,
  makeSelectError,
  makeSelectSuccess,
  makeSelectGetQuestion,
  makeSelectExamDisplay,
  makeSelectTrialQuestions,
  makeSelectResultResponse,
  makeSelectFavSuccess,
  makeSelectGetFavoriteQuestion,
  makeSelectFavFaliure,
} from '../ViewPractice/selectors';
import {
  loadAllQuestionnaireRequest,
  favoriteQuestionRequest,
  unfavoriteQuestionRequest,
  loadExamByIdRequest,
  loadTrialQuestionnaireRequest,
  clearMessage,
  postResultRequest,
  loadAllFavoriteQuestionnaireRequest,
} from '../ViewPractice/actions';
import ViewExamQuestion from './ViewExamQuestion';

const mapStateToProps = createStructuredSelector({
  isSuccess: makeSelectSuccess(),
  isRequesting: makeSelectRequesting(),
  successResponse: makeSelectResponse(),
  errorResponse: makeSelectError(),
  getQuestionSucces: makeSelectGetQuestion(),
  examData: makeSelectExamDisplay(),
  trialQuestions: makeSelectTrialQuestions(),
  resultResponse: makeSelectResultResponse(),
  favSuccess: makeSelectFavSuccess(),
  favoriteQuestions: makeSelectGetFavoriteQuestion(),
  favFailure: makeSelectFavFaliure(),
});

const mapDispatchToProps = dispatch => ({
  getQuestionRequest: (page, perPage, query) =>
    dispatch(loadAllQuestionnaireRequest(page, perPage, query)),
  favoriteQuestionRequest: (question_id, package_id) =>
    dispatch(favoriteQuestionRequest(question_id, package_id)),
  unfavoriteQuestionRequest: (question_id, package_id) =>
    dispatch(unfavoriteQuestionRequest(question_id, package_id)),
  examRequest: exam_id => dispatch(loadExamByIdRequest(exam_id)),
  fetchTrialQuestions: exam_id =>
    dispatch(loadTrialQuestionnaireRequest(exam_id)),
  clearMessage: () => dispatch(clearMessage()),
  postResult: result => dispatch(postResultRequest(result)),
  getFavoriteQuestion: (page, perPage, query) =>
    dispatch(loadAllFavoriteQuestionnaireRequest(page, perPage, query)),
});
let score_arr = [];
class ViewExam extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  // static propTypes = {
  //   isSuccess: PropTypes.bool.isRequired,
  //   isRequesting: PropTypes.bool.isRequired,
  //   successResponse: PropTypes.string.isRequired,
  //   errorResponse: PropTypes.string.isRequired,
  // };

  state = {
    page: 1,
    perPage: 1,
    query: {},
    data: {},
    questionIdx: 0,
    score: 0,
    full_score: 0,
    error_msg: '',
    count: 0,
    fav_questions: [],
    show_warning: false,
  };

  componentDidMount() {
    let package_id = this.props.location.state
      ? this.props.location.state.id
      : '';
    if (package_id) {
      this.setState({ package_id });
    }
    const { page, perPage, query } = this.state;
    let exam_id = this.props.match.params.exam_id
      ? this.props.match.params.exam_id
      : null;
    let url = window.location.href.split('/');
    this.setState({ url });
    this.setState({ exam_id });
    this.props.getFavoriteQuestion(1, 1000, '');
    if (exam_id && url.includes('trial')) {
      this.props.fetchTrialQuestions(exam_id);
    }
    if (exam_id && package_id) {
      this.props.getQuestionRequest(exam_id, this.props.location.state.id);
    }
    if (exam_id) {
      this.props.examRequest(exam_id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.getQuestionSucces !== this.props.getQuestionSucces) {
      this.setState(
        {
          data: nextProps.getQuestionSucces.toJS(),
        },
        () => {
          let full_score = 0;
          if (this.state.data && this.state.data.length > 0)
            this.state.data.map((dat, idx) => {
              full_score = full_score + parseInt(dat.point);
              let newData = this.state.data;
              if (dat.multi_answer_applicable) {
                newData[idx].user_answers = [];
                newData[idx].user_answer_numbers = [];
              }
              this.setState({ data: newData });
            });
          this.setState({
            full_score: full_score,
          });
        },
      );
    }
    if (nextProps.trialQuestions !== this.props.trialQuestions) {
      this.setState(
        {
          data: nextProps.trialQuestions.toJS(),
        },
        () => {
          let full_score = 0;
          if (this.state.data && this.state.data.length > 0)
            this.state.data.map((dat, idx) => {
              full_score = full_score + parseInt(dat.point);
              let newData = this.state.data;
              if (dat.multi_answer_applicable) {
                newData[idx].user_answers = [];
                newData[idx].user_answer_numbers = [];
              }
              this.setState({ data: newData });
            });
          this.setState({
            full_score: full_score,
          });
        },
      );
    }
    if (nextProps.examData !== this.props.examData) {
      this.setState({
        examData: nextProps.examData.toJS(),
      });
    }
    if (nextProps.resultResponse != this.props.resultResponse) {
      this.setState({ resultResponse: nextProps.resultResponse.toJS() });
    }
    if (nextProps.favSuccess != this.props.favSuccess) {
      this.props.getFavoriteQuestion(1, 1000, '');
    }
    if (nextProps.favFailure != this.props.favFailure) {
      this.setState({ favFailure: nextProps.favFailure });
    }
    if (nextProps.favoriteQuestions != this.props.favoriteQuestions) {
      this.setState(
        {
          favoriteQuestions: nextProps.favoriteQuestions
            ? nextProps.favoriteQuestions.toJS()
            : [],
        },
        () => {
          let fav_questions = [];
          this.state.favoriteQuestions.map((questions, idx) => {
            fav_questions = fav_questions.concat(questions._id);
          });
          this.setState({ fav_questions });
        },
      );
    }
  }

  componentWillUnmount() {
    this.props.clearMessage();
  }

  handleAnswerChange = (e, event, answerIdx, mainIdx) => {
    let newState = this.state.data;
    newState[mainIdx].user_answer = event.value;
    newState[mainIdx].user_answer_number = answerIdx;
    this.setState({
      data: newState,
      showAnswer: false,
      error_msg: '',
    });
    if (newState[mainIdx].multi_answer_applicable) {
      if (newState[mainIdx].user_answers.includes(event.value)) {
        this.handleAnswer(event.value, newState, mainIdx, answerIdx + 1);
      } else {
        newState[mainIdx].user_answers = [
          ...newState[mainIdx].user_answers,
          event.value,
        ];
        newState[mainIdx].user_answer_numbers = [
          ...newState[mainIdx].user_answer_numbers,
          answerIdx + 1,
        ];
        this.setState({ data: newState });
      }
    }
  };

  handleAnswer = (value, newState, mainIdx, answerIdx) => {
    const filter = newState[mainIdx].user_answers.filter(name => {
      return name !== value;
    });
    const filterAnsIdx = newState[mainIdx].user_answer_numbers.filter(name => {
      return name !== answerIdx;
    });
    let newData = this.state.data;
    newData[mainIdx].user_answers = filter;
    newData[mainIdx].user_answer_numbers = filterAnsIdx;
    this.setState({ data: newData });
  };

  handleNextButton = (event, mainIdx) => {
    let { questionIdx } = this.state;
    questionIdx++;
    this.setState({
      questionIdx: questionIdx,
      showAnswer: false,
      is_radio_disabled: false,
    });
  };

  handleBackButton = (e, questionIdx) => {
    this.setState({
      questionIdx: questionIdx - 1,
    });
  };

  handleViewResultButton = (event, mainIdx, flag) => {
    score_arr = [];
    // if (Object.keys(this.state.data[mainIdx]).includes('user_answer')) {
    let attempted_questions = this.state.data.filter(dat => {
      return Object.keys(dat).includes('user_answer');
    });
    this.setState({ attempted_length: attempted_questions.length }, () => {
      if (this.state.attempted_length < this.state.data.length && !flag) {
        this.setState({ show_warning: true });
      }
    });
    const correctAnswers = [];
    this.state.data.map((data, idx) => {
      data.answers.map(ans => {
        if (ans.is_answer_correct_option) {
          correctAnswers[idx] = ans.answer;
        }
      });
    });
    this.state.data.map((data, idx) => {
      if (data.multi_answer_applicable) {
        correctAnswers[idx].map(correct => {
          if (data.user_answers.includes(correct)) {
            score_arr[idx] = data.point;
          } else {
            score_arr[idx] = 0;
          }
        });
      } else {
        if (correctAnswers[idx] == data.user_answer) {
          score_arr[idx] = data.point;
        } else {
          score_arr[idx] = 0;
        }
      }
    });
    let total_score = null;
    let count = 0;
    score_arr.map(score => {
      total_score = total_score + score;
      if (score != 0) {
        count = count + 1;
      }
    });
    this.setState({ count });
    this.setState({ score: total_score }, () => {
      if (attempted_questions.length === this.state.data.length || flag) {
        this.setState({ show_final_result: true });
        if (this.state.url && !this.state.url.includes('trial')) {
          let result = {
            total_score: this.state.full_score,
            obtained_score: this.state.score,
            exam_id: this.state.exam_id,
          };
          this.props.postResult(result);
        }
      }
    });
  };

  handleFavoriteButton = (event, questionId, mainIdx) => {
    let newData = this.state.data;
    newData[mainIdx].favorite = true;
    this.setState({
      data: newData,
    });
    this.props.favoriteQuestionRequest(questionId, this.state.package_id);
  };

  handleUnfavoriteButton = (event, questionId, mainIdx) => {
    let newData = this.state.data;
    newData[mainIdx].favorite = false;
    this.setState({
      data: newData,
    });
    this.props.unfavoriteQuestionRequest(questionId, this.state.package_id);
  };

  handleTimeOver = (minutes, seconds) => {
    if (minutes == 0 && seconds == 0) {
      this.handleViewResultButton('', this.state.data.length - 1, true);
    }
  };

  handleJump = (e, index) => {
    this.setState({ questionIdx: index });
  };
  handleWarning = (e, res) => {
    if (res == 'yes') {
      this.setState({ show_final_result: true, show_warning: false });
      if (this.state.url && !this.state.url.includes('trial')) {
        let result = {
          total_score: this.state.full_score,
          obtained_score: this.state.score,
          exam_id: this.state.exam_id,
        };
        this.props.postResult(result);
      }
    } else {
      this.setState({ show_final_result: false, show_warning: false });
    }
  };

  render() {
    const {
      page,
      perPage,
      data,
      questionIdx,
      error_msg,
      show_final_result,
      score,
      full_score,
      is_radio_disabled,
      examData,
      resultResponse,
      url,
      fav_questions,
      favFailure,
    } = this.state;
    const { successResponse, errorResponse } = this.props;
    let message;
    // if (successResponse) {
    //   message = <Toaster message={successResponse} timeout={5000} success />;
    // }
    // if (errorResponse) {
    //   message = <Toaster message={errorResponse} timeout={5000} error />;
    // }
    if (favFailure) {
      message = <Toaster message={favFailure} timeout={5000} error />;
    }

    return (
      <div>
        {message && message}
        {!show_final_result && (
          <h1 className="main_title">Exam Questionnaire</h1>
        )}
        <ViewExamQuestion
          data={data}
          page={page}
          perPage={perPage}
          handleAnswerChange={this.handleAnswerChange}
          handleNextButton={this.handleNextButton}
          handleFavoriteButton={this.handleFavoriteButton}
          handleUnfavoriteButton={this.handleUnfavoriteButton}
          questionIdx={questionIdx}
          handleViewResultButton={this.handleViewResultButton}
          error_msg={error_msg}
          show_final_result={show_final_result}
          score={score}
          full_score={full_score}
          is_radio_disabled={is_radio_disabled}
          handleTimeOver={this.handleTimeOver}
          time={examData && examData.time_limit}
          count={this.state.count}
          resultResponse={resultResponse}
          url={url}
          fav_questions={fav_questions}
          handleBackButton={this.handleBackButton}
          handleJump={this.handleJump}
          attempted_length={this.state.attempted_length}
          show_warning={this.state.show_warning}
          handleWarning={this.handleWarning}
        />
      </div>
    );
  }
}

const withReducer = injectReducer({ key: 'viewPractice', reducer });
const withSaga = injectSaga({ key: 'viewPractice', saga });
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ViewExam);
