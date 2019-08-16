/*
 *
 * ViewPractice
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Toaster from 'components/Toaster';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './sagas';
import { compose } from 'redux';
import {
  makeSelectUser
} from '../../../../App/selectors';
import {
  makeSelectSuccess,
  makeSelectResponse,
  makeSelectError,
  makeSelectRequesting,
  makeSelectGetQuestion,
  makeSelectGetFavoriteQuestion,
  makeSelectExamDisplay,
  makeSelectTrialQuestions,
  makeSelectResultResponse,
  makeSelectFavSuccess,
  makeSelectFavFaliure,
  makeSelectSaveAnswerResponse
} from './selectors';
import {
  loadAllQuestionnaireRequest,
  favoriteQuestionRequest,
  unfavoriteQuestionRequest,
  loadExamByIdRequest,
  clearMessage,
  loadAllFavoriteQuestionnaireRequest,
  loadTrialQuestionnaireRequest,
  postResultRequest,
  postQuestionScoreRequest,
  saveAnswerRequest
} from './actions';
import ViewPracticeQuestion from './ViewPracticeQuestion';

const mapStateToProps = createStructuredSelector({
  isSuccess: makeSelectSuccess(),
  isRequesting: makeSelectRequesting(),
  successResponse: makeSelectResponse(),
  errorResponse: makeSelectError(),
  getQuestionSucces: makeSelectGetQuestion(),
  examData: makeSelectExamDisplay(),
  trialQuestions: makeSelectTrialQuestions(),
  resultResponse: makeSelectResultResponse(),
  favoriteQuestions: makeSelectGetFavoriteQuestion(),
  favSuccess: makeSelectFavSuccess(),
  favFailure: makeSelectFavFaliure(),
  currentUser: makeSelectUser(),
  saveAnswerResponse: makeSelectSaveAnswerResponse()

});

const mapDispatchToProps = dispatch => ({
  getQuestionRequest: (id, package_id) =>
    dispatch(loadAllQuestionnaireRequest(id, package_id)),
  getFavoriteQuestion: (page, perPage, query) =>
    dispatch(loadAllFavoriteQuestionnaireRequest(page, perPage, query)),
  favoriteQuestionRequest: (question_id, package_id) =>
    dispatch(favoriteQuestionRequest(question_id, package_id)),
  unfavoriteQuestionRequest: (question_id, package_id) =>
    dispatch(unfavoriteQuestionRequest(question_id, package_id)),
  examRequest: exam_id => dispatch(loadExamByIdRequest(exam_id)),
  fetchTrialQuestions: exam_id =>
    dispatch(loadTrialQuestionnaireRequest(exam_id)),
  clearMessage: () => dispatch(clearMessage()),
  postResult: result => dispatch(postResultRequest(result)),
  postQuestionScore: score => dispatch(postQuestionScoreRequest(score)),
  saveAnswerRequest: payload => dispatch(saveAnswerRequest(payload))
});
var check = 0;
let score_arr = [];
class ViewPractice extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  // static propTypes = {
  //   isSuccess: PropTypes.bool.isRequired,
  //   isRequesting: PropTypes.bool.isRequired,
  //   successResponse: PropTypes.string.isRequired,
  //   errorResponse: PropTypes.string.isRequired,
  // };

  state = {
    payload:{},
    page: 1,
    perPage: 1,
    query: {},
    data: {},
    questionIdx: 0,
    score: 0,
    full_score: 0,
    error_msg: '',
    correctAnswer: '',
    count: 0,
    fav_questions: [],
    previousUrl: window.location.href,
    saveAnswerResponse:{}
  };

  componentDidMount() {
    this.props.saveAnswerRequest({})
    const { page, perPage, query } = this.state;
    let previousState = JSON.parse(
      localStorage.getItem(`previousState>${this.state.previousUrl}`),
    );
    let package_id = this.props.location.state
      ? this.props.location.state.id
      : '';
    if (package_id) {
      this.setState({ package_id });
    }
    this.props.getFavoriteQuestion(page, 1000, query);
    if (
      window.location.href ===
      (previousState !== null ? previousState.previousUrl : '')
    ) {
      //......................................................
      let exam_id = this.props.match.params.product_id
      ? this.props.match.params.product_id
      : null;
      if (exam_id) {
        this.props.getQuestionRequest(exam_id, '111');
      }
      this.setState(
        JSON.parse(
          localStorage.getItem(`previousState>${this.state.previousUrl}`),
        ),
      );
    } else {
      let exam_id = this.props.match.params.product_id
        ? this.props.match.params.product_id
        : null;
      let url = window.location.href.split('/');
      this.setState({ url });
      this.setState({ exam_id });
      if (exam_id && url.includes('trial')) {
        this.props.fetchTrialQuestions(exam_id);
      }
      if (exam_id) {
        this.props.getQuestionRequest(exam_id, '111');
      }
      if (exam_id) {
        this.props.examRequest(exam_id);
      }
    }
  }

  componentWillReceiveProps(nextProps) {

    if ((nextProps.saveAnswerResponse !== this.props.saveAnswerResponse) && nextProps.saveAnswerResponse.size > 0) {
      // console.log(nextProps.saveAnswerResponse && nextProps.saveAnswerResponse.toJS(),'>>>>>>>>>>>>>',this.props.saveAnswerResponse,'.......',nextProps.saveAnswerResponse == {})
      this.setState({
        saveAnswerResponse: nextProps.saveAnswerResponse && nextProps.saveAnswerResponse.toJS(),
      });
    }

    if (nextProps.getQuestionSucces !== this.props.getQuestionSucces) {
      this.setState(
        {
          data: nextProps.getQuestionSucces.toJS(),
        },
        () => {
          let correctAnswers = [];
          let full_score = 0;
          this.state.data &&
            this.state.data.length > 0 &&
            this.state.data.map((data, idx) => {
              data.answers.map(ans => {
                if (ans.is_answer_correct_option) {
                  correctAnswers[idx] = ans.answer;
                }
              });
            });
          this.setState({ correctAnswers: correctAnswers });
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
          let correctAnswers = [];
          let full_score = 0;
          this.state.data &&
            this.state.data.length > 0 &&
            this.state.data.map((data, idx) => {
              data.answers.map(ans => {
                if (ans.is_answer_correct_option) {
                  correctAnswers[idx] = ans.answer;
                }
              });
            });
          this.setState({ correctAnswers: correctAnswers });
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

  handleAnswerChangeSubjective = (e, event, questionId) => {
    const payload ={
      user_id: this.props.currentUser.toJS()._id,
      product_id: this.props.match.params.product_id,
      question_answer: {
        [questionId]: event.value
      }
    }
    this.setState({saveAnswerResponse: payload})
  }

  saveSubjectiveAnswer = () => {
    // console.log(this.state.subjectiveAnswer)
    this.props.saveAnswerRequest(this.state.subjectiveAnswer)
  }

  handleAnswerChange = (e, event, answerIdx, mainIdx, questionId) => {
    // console.log(answerIdx,'sssss',mainIdx,'sssss>',event.value,'----',questionId,'=>>pro_id==',this.props.match.params.product_id,'...>',this.props.currentUser.toJS()._id)
    // console.log(event,'>><<')
    
    const payload ={
      user_id: this.props.currentUser.toJS()._id,
      product_id: this.props.match.params.product_id,
      question_answer: {
        [questionId]: event.value
      }
    }
    // console.log(payload,'kkkkk')
    this.props.saveAnswerRequest(payload)
    // this.setState({payload: payload})
    let newState = this.state.data;
    newState[mainIdx].user_answer = event.value;
    newState[mainIdx].user_answer_number = answerIdx;
    this.setState(
      {
        data: newState,
        showAnswer: false,
        error_msg: '',
      },
      () => {
        // console.log(payload,'>>>><<<')
        localStorage.setItem(
          `previousState>${this.state.previousUrl}`,
          JSON.stringify(this.state),
        );
      },
    );
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

  handleNextButton = (event, mainIdx, questionId) => {
    let { questionIdx, payload } = this.state;
    // console.log(payload,'kkkk',event)
    // console.log(questionId,'=======',Object.keys(payload.question_answer)[0])
    // if(questionId == Object.keys(payload.question_answer)[0] ) {
    //   console.log(questionId,'.........',payload.question_answer,'ddddd>>',Object.keys(payload.question_answer)[0])
    // }
    questionIdx++;
    this.setState({
      questionIdx: questionIdx,
      showAnswer: false,
      is_radio_disabled: false,
    });
  };

  handleCheckButton = (event, mainIdx) => {
    if (Object.keys(this.state.data[mainIdx]).includes('user_answer')) {
      let correctAnswers = [];
      this.state.data[mainIdx].answers.map(ans => {
        if (ans.is_answer_correct_option) {
          correctAnswers.push(ans.answer);
        }
      });
      if (this.state.data[mainIdx].multi_answer_applicable) {
        if (
          this.state.data[mainIdx].answers.length >
          this.state.data[mainIdx].user_answers.length
        ) {
          check = 0;
          correctAnswers.map(correct => {
            if (this.state.data[mainIdx].user_answers.includes(correct)) {
              this.setState({
                correctAnswer: 'partial correct',
              });
              check += 1;
            } else {
              if (check === 0)
                this.setState({
                  correctAnswer: 'incorrect',
                });
            }
            if (check == correctAnswers.length) {
              this.setState({
                correctAnswer: 'correct',
              });
            }
          });
        } else {
          check = 5;
          this.setState({
            error_msg: "You Can't Select all Answer",
          });
        }
      } else {
        if (correctAnswers.includes(this.state.data[mainIdx].user_answer)) {
          this.setState({
            correctAnswer: 'correct',
          });
        } else {
          this.setState({
            correctAnswer: 'incorrect',
          });
        }
      }
      if (check !== 5) {
        this.setState({ showAnswer: true, is_radio_disabled: true });
      }
    } else {
      this.setState({ error_msg: 'Please choose an option to continue.' });
    }
  };

  handleFavoriteButton = async (event, questionId, mainIdx) => {
    if (questionId)
      await this.props.favoriteQuestionRequest(
        questionId,
        this.state.package_id,
      );
  };

  handleUnfavoriteButton = async (event, questionId, mainIdx) => {
    if (questionId)
      await this.props.unfavoriteQuestionRequest(
        questionId,
        this.state.package_id,
      );
  };

  handleViewResultButton = (event, mainIdx) => {
    score_arr = [];
    let attempted_questions = this.state.data.filter(dat => {
      return Object.keys(dat).includes('user_answer');
    });
    this.setState({ attempted_length: attempted_questions.length });
    const correctAnswers = [];
    this.setState({
      show_final_result: true,
    });
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
      // if (this.state.url && !this.state.url.includes('trial')) {
      //   let result = {
      //     score: this.state.score,
      //     exam_id: this.state.exam_id,
      //   };
      //   this.props.postResult(result);
      // }
    });
    localStorage.removeItem(`previousState>${this.state.previousUrl}`);
  };

  // handleTimeOver = (minutes, seconds) => {
  //   if (minutes == 0 && seconds == 0) {
  //     this.handleViewResultButton('', this.state.data.length - 1);
  //   }
  // };
  handleBackButton = (e, questionIdx) => {
    // console.log('previous',this.state.payload)
    this.setState({
      questionIdx: questionIdx - 1,
      showAnswer: false,
      is_radio_disabled: false,
    });
  };
  handleJump = (e, index, ques_idx) => {
    let id = '';
    if (this.state.data[ques_idx].user_answer) {
      id = this.state.data[ques_idx].answers.filter(answer => {
        return answer.answer == this.state.data[ques_idx].user_answer;
      });
      let score = {
        exam_id: this.state.exam_id,
        questionnaire_id: this.state.data[ques_idx]._id,
        answer_id: id[0].id,
      };
      this.props.postQuestionScore(score);
    }
    this.setState({
      questionIdx: index,
      showAnswer: false,
      is_radio_disabled: false,
    });
  };

  render() {
    const {
      page,
      perPage,
      data,
      questionIdx,
      showAnswer,
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
      saveAnswerResponse
    } = this.state;
    const { successResponse, errorResponse } = this.props;
    let message = null;
    // if (successResponse) {
    //   message = <Toaster message={successResponse} timeout={5000} success />;
    // }
    if (favFailure) {
      message = (
        <Toaster message={favFailure && favFailure} timeout={5000} error />
      );
    }
    // console.log(saveAnswerResponse,'llll')
    return (
      <div>
        {message && message}
        {!show_final_result && (
          <h1 className="main_title">Questionnaire</h1>
        )}
        {/* {console.log(this.state.exam_id,'lll>>>>>>',)} */}
        <ViewPracticeQuestion
          data={data}
          saveAnswerResponse={saveAnswerResponse}
          page={page}
          perPage={perPage}
          productId={this.state.exam_id}
          handleAnswerChangeSubjective={this.handleAnswerChangeSubjective}
          saveSubjectiveAnswer={this.saveSubjectiveAnswer}
          handleAnswerChange={this.handleAnswerChange}
          handleNextButton={this.handleNextButton}
          handleCheckButton={this.handleCheckButton}
          handleFavoriteButton={this.handleFavoriteButton}
          handleUnfavoriteButton={this.handleUnfavoriteButton}
          questionIdx={questionIdx}
          showAnswer={showAnswer}
          handleViewResultButton={this.handleViewResultButton}
          error_msg={error_msg}
          show_final_result={show_final_result}
          score={score}
          full_score={full_score}
          is_radio_disabled={is_radio_disabled}
          // handleTimeOver={this.handleTimeOver}
          time={examData && examData.time_limit}
          isCorrect={this.state.correctAnswer}
          count={this.state.count}
          resultResponse={resultResponse}
          url={url}
          handleBackButton={this.handleBackButton}
          fav_questions={fav_questions}
          handleJump={this.handleJump}
          correctAnswers={this.state.correctAnswers}
          attempted_length={this.state.attempted_length}
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
)(ViewPractice);
