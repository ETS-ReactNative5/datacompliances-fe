import React from 'react';

import { Progress } from 'semantic-ui-react'

import {
  Grid,
  Form,
  Button,
  Radio,
  Checkbox,
  Icon,
  Segment,
  Label,
  TextArea
} from 'semantic-ui-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import TimerComponent from '../Timer';
import { number } from 'prop-types';

const mockData = {
  "status": 200,
  "data": {
    "_id": "d1519df0-bfdf-11e9-9022-197a96d8b532",
    "user_id": "dc5275e0-ba5c-11e9-a6c7-31c1c9cd3aec",
    "product_id": "50637d80-b9fe-11e9-b0d4-1b64d2910f02",
    "question_answer": {
      // "317854b0-b907-11e9-910c-5db73aa5a3fa": "Yes",
      // "19d7d910-be53-11e9-94d7-a5e0e6414811": "Option 4 is this",
      // "26471ec0-be5a-11e9-94d7-a5e0e6414811": "Sarik"
    }
  }
}

const ViewPracticeQuestion = props => {
  const {
    data,
    productId,
    page,
    perPage,
    handleAnswerChange,
    handleAnswerChangeSubjective,
    saveSubjectiveAnswer,
    handleNextButton,
    handleViewResultButton,
    questionIdx,
    showAnswer,
    error_msg,
    show_final_result,
    score,
    full_score,
    is_radio_disabled,
    time,
    isCorrect,
    count,
    resultResponse,
    url,
    handleBackButton,
    fav_questions,
    handleJump,
    correctAnswers,
    attempted_length,
    saveAnswerResponse
  } = props;

   const yesno = [
           {answer: 'Yes'},
           {answer: 'No'}
   ]

  return (
    
    <div>
      
      <Grid>
        {data.length > 0 && !show_final_result && (
          <Grid.Column largeScreen={16} widescreen={16}>
            <div className="practiceqstn">
              <div className="qstntitle">
                <h4>
                  {questionIdx + 1} / {data.length}
                </h4>
              </div>
              <div className="addfav">
              </div>
             { data[questionIdx] && data[questionIdx].type_of_questions == "Objective" &&
              <Form>
                <h1>{data[questionIdx].question}</h1>
                <Form.Field>
                  {data[questionIdx].answers.length > 0 &&
                    data[questionIdx].answers.map((ans, idx) =>
                        <div key={`ans${idx}`}>
                          {/* {console.log(mockData.data.product_id,'=====',productId)} */}
                          <Radio
                            disabled={is_radio_disabled}
                            label={`${ans.answer}`}
                            value={ans.answer}
                            name={`ans${questionIdx}`}
                            // checked={
                            //   data[questionIdx].user_answer === ans.answer
                            // }
                            // mockData.data.product_id == this.props.match.params.product_id &&
                            // checked={ mockData.data.product_id == productId &&
                            //         mockData.data.question_answer.hasOwnProperty(data[questionIdx].questionnaire_id) ? 
                            //       mockData.data.question_answer[data[questionIdx].questionnaire_id] === ans.answer : false
                            // }
                            checked={ saveAnswerResponse.product_id == productId &&
                              saveAnswerResponse.question_answer.hasOwnProperty(data[questionIdx].questionnaire_id) ? 
                              saveAnswerResponse.question_answer[data[questionIdx].questionnaire_id] === ans.answer : false
                            }
                            onChange={(e, se) =>
                              handleAnswerChange(e, se, idx, questionIdx, data[questionIdx].questionnaire_id)
                            }
                          />
                        </div>
                    )}
                </Form.Field>
              </Form>

             }
                { data[questionIdx] && data[questionIdx].type_of_questions == "Yes/No" &&
                     <div>
                      <h1>{data[questionIdx].question}</h1> 
                   
                      <Form>
                        <Form.Field>
                         { yesno.length > 0 &&
                           yesno.map((ans, idx) => (
                           <div key={`ans${idx}`}>
                             {/* {console.log(ans.answer,'ggghhhjjj', mockData.data.question_answer[data[questionIdx].questionnaire_id])} */}
                           <Radio
                             disabled={is_radio_disabled}
                             label={`${ans.answer}`}
                             value={ans.answer}
                             name={`ans${questionIdx}`}
                            //  checked={
                            //    data[questionIdx].user_answer === ans.answer
                            //  }
                              // checked={
                              //   mockData.data.question_answer.hasOwnProperty(data[questionIdx].questionnaire_id) ? 
                              //       mockData.data.question_answer[data[questionIdx].questionnaire_id] === ans.answer : false
                              // }
                              checked={ saveAnswerResponse.product_id == productId &&
                                saveAnswerResponse.question_answer.hasOwnProperty(data[questionIdx].questionnaire_id) ? 
                                saveAnswerResponse.question_answer[data[questionIdx].questionnaire_id] === ans.answer : false
                              }
                             onChange={(e, se) =>
                               handleAnswerChange(e, se, idx, questionIdx, data[questionIdx].questionnaire_id)
                             }
                           />
                         </div>
                           )
                       )} 
                           </Form.Field>
                         </Form>
                        </div>
                  }
                  {data[questionIdx] && data[questionIdx].type_of_questions == "Subjective" &&
                  <div>
                   <h1>{data[questionIdx].question}</h1> 
                   <Form onSubmit={() =>
                         saveSubjectiveAnswer()}>
                     <Form.Field>
                    <TextArea 
                       placeholder='Tell us more' 
                       cols={100}
                       rows={5}
                      //  value={ans.answer || ''}
                        // value ={ mockData.data.question_answer.hasOwnProperty(data[questionIdx].questionnaire_id) ? 
                        //              mockData.data.question_answer[data[questionIdx].questionnaire_id] : ''}
                        value ={saveAnswerResponse.product_id == productId && saveAnswerResponse.question_answer.hasOwnProperty(data[questionIdx].questionnaire_id) ? 
                                   saveAnswerResponse.question_answer[data[questionIdx].questionnaire_id] : '' }             
                        onChange={(e, se) =>
                           handleAnswerChangeSubjective(e, se, data[questionIdx].questionnaire_id)}
                        // onChange={(e, se) =>
                        //   handleAnswerChange(e, se, '', questionIdx, data[questionIdx].questionnaire_id)}
                       />
                       </Form.Field>
                       <Form.Field>
                       <Button color="yellow" type='submit'>Save Answer</Button>
                       </Form.Field>
                     </Form> 
                    </div>
            
                  }

              {questionIdx != 0 && (
                <Button onClick={e => handleBackButton(e, questionIdx)}>
                  <i className="icon-arrow-left mr-1" /> Previous
                </Button>
              )}
              {/* {console.log(data[questionIdx].questionnaire_id,'test')} */}
              {questionIdx < data.length - 1 && (
                <Button
                  // disabled={
                  //   !data[questionIdx].user_answer ||
                  //   (data[questionIdx] &&
                  //     data[questionIdx].user_answers &&
                  //     data[questionIdx].user_answers.length < 0)
                  // }
                  onClick={e => handleNextButton(e, questionIdx, data[questionIdx].questionnaire_id)}
                >
                  Next
                  <i className="icon-arrow-right ml-1" />
                </Button>
              )}
              {/* {questionIdx === data.length - 1 && (
                <Button
                  color="red"
                  content="View Result"
                  // disabled={
                  //   !data[questionIdx].user_answer ||
                  //   (data[questionIdx] &&
                  //     data[questionIdx].user_answers &&
                  //     data[questionIdx].user_answers.length < 0)
                  // }
                  onClick={e => handleViewResultButton(e, questionIdx)}
                />
              )} */}
              {showAnswer && (
                <div
                  className={
                    isCorrect === 'correct'
                      ? 'result__dis_correct'
                      : 'result__dis'
                  }
                >
                  <h1>
                    You are {isCorrect}
                    <Icon
                      name={isCorrect === 'correct' ? 'check' : 'close'}
                      color={isCorrect === 'correct' ? 'green' : 'red'}
                    />
                  </h1>
                  <p>
                    {/* {data[questionIdx].multi_answer_applicable ? (
                      <span>{data[questionIdx].user_answers} </span>
                    ) : (
                      <span> {data[questionIdx].user_answer} </span>
                    )} */}
                    <span>Correct Answer : {correctAnswers[questionIdx]}</span>
                  </p>
                  {data && data.length > 0 && (
                    <div
                      className="rationale"
                      dangerouslySetInnerHTML={{
                        __html: data[questionIdx].rationale,
                      }}
                    />
                  )}
                </div>
              )}
              {/* {data && (
                <div className="pagination">
                  {data &&
                    data.length > 0 &&
                    data.map((each, idx) => (
                      <Label
                        // color={data[idx].user_answer && 'green'}
                        circular
                        key={`list${idx}`}
                        onClick={e => handleJump(e, idx, questionIdx)}
                      >
                        {idx + 1}
                      </Label>
                    ))}
                </div>
              )} */}
            </div>
          </Grid.Column>
        )}
      </Grid>

      {show_final_result && (
        <div>
          <div className="score_point">
            <h2 className="main_title">Result Detail</h2>
            <h3>
              Your score: <b>{score}</b> out of <strong>{full_score}</strong>
            </h3>
          </div>
          <div className="resultdetail">
            <Grid>
              {data &&
                data.length > 0 &&
                data.map((question, indx) => (
                  <Grid.Column
                    largeScreen={16}
                    widescreen={16}
                    key={`que${indx}`}
                  >
                    {question.multi_answer_applicable ? (
                      question.user_answers.map((answers, idx) => (
                        <div key={`ans${idx}`}>
                          {question.user_answer_numbers ? (
                            question.answers &&
                            question.answers.length > 0 &&
                            question.answers[
                              question.user_answer_numbers[idx] - 1
                            ].is_answer_correct_option ? (
                              <div className="result_listing">
                                <span>question {indx + 1}</span>
                                <h1>{question.question}</h1>
                                <p>
                                  <i
                                    aria-hidden="true"
                                    className="check icon"
                                  />
                                  {answers}
                                </p>
                                <div className="rationable_pt">
                                  <h2>Rationale:</h2>
                                  {data && data.length > 0 && (
                                    <div
                                      className="rationale"
                                      dangerouslySetInnerHTML={{
                                        __html: question.rationale,
                                      }}
                                    />
                                  )}
                                </div>
                              </div>
                            ) : (
                              <div className="result_listing">
                                <span>question {indx + 1}</span>
                                <h1>{question.question}</h1>
                                <p>
                                  <i
                                    aria-hidden="true"
                                    className="times icon"
                                  />
                                  {answers}
                                </p>
                                <div className="rationable_pt">
                                  <h2>Rationale:</h2>
                                  {data && data.length > 0 && (
                                    <div
                                      className="rationale"
                                      dangerouslySetInnerHTML={{
                                        __html: question.rationale,
                                      }}
                                    />
                                  )}
                                </div>
                              </div>
                            )
                          ) : (
                            <div className="result_listing">
                              <span>question {indx + 1}</span>
                              <h1>{question.question}</h1>
                              <p>
                                <i aria-hidden="true" className="times icon" />
                                {answers}
                              </p>
                              <div className="rationable_pt">
                                <h2>Rationale:</h2>
                                {data && data.length > 0 && (
                                  <div
                                    className="rationale"
                                    dangerouslySetInnerHTML={{
                                      __html: question.rationale,
                                    }}
                                  />
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      ))
                    ) : (
                      <div>
                        {question.user_answer_number != null ? (
                          question.answers &&
                          question.answers.length > 0 &&
                          question.answers[
                            question.user_answer_number &&
                              question.user_answer_number
                          ].is_answer_correct_option ? (
                            <div className="result_listing correct">
                              <span>question {indx + 1}</span>
                              <h1>{question.question}</h1>
                              <p>
                                <i aria-hidden="true" className="check icon" />
                                {question.user_answer}
                              </p>
                              <div className="rationable_pt">
                                <h2>Rationale:</h2>
                                {data && data.length > 0 && (
                                  <div
                                    className="rationale"
                                    dangerouslySetInnerHTML={{
                                      __html: question.rationale,
                                    }}
                                  />
                                )}
                              </div>
                            </div>
                          ) : (
                            <div className="result_listing">
                              <span>question {indx + 1}</span>
                              <h1>{question.question}</h1>
                              <p>
                                <i aria-hidden="true" className="times icon" />
                                {question.user_answer}
                              </p>
                              <div className="rationable_pt">
                                <h2>Rationale:</h2>
                                {data && data.length > 0 && (
                                  <div
                                    className="rationale"
                                    dangerouslySetInnerHTML={{
                                      __html: question.rationale,
                                    }}
                                  />
                                )}
                              </div>
                            </div>
                          )
                        ) : (
                          <div className="result_listing">
                            <span>question {indx + 1}</span>
                            <h1>{question.question}</h1>
                            <p>
                              <i aria-hidden="true" className="times icon" />
                              {question.user_answer}
                            </p>
                            <div className="rationable_pt">
                              <h2>Rationale:</h2>
                              {data && data.length > 0 && (
                                <div
                                  className="rationale"
                                  dangerouslySetInnerHTML={{
                                    __html: question.rationale,
                                  }}
                                />
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </Grid.Column>
                ))}
            </Grid>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewPracticeQuestion;