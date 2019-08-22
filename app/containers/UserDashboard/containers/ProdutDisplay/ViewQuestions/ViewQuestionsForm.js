import React from 'react';

import {
  Grid,
  Form,
  Button,
  Radio,
  TextArea,
  Popup,
} from 'semantic-ui-react';
import '../assests/style.scss';
import logo_next from '../assests/next.svg';
import logo_previous from '../assests/previous.svg';

// const mockData = {
//   "status": 200,
//   "data": {
//     "_id": "d1519df0-bfdf-11e9-9022-197a96d8b532",
//     "user_id": "dc5275e0-ba5c-11e9-a6c7-31c1c9cd3aec",
//     "product_id": "50637d80-b9fe-11e9-b0d4-1b64d2910f02",
//     "question_answer": {
//       // "317854b0-b907-11e9-910c-5db73aa5a3fa": "Yes",
//       // "19d7d910-be53-11e9-94d7-a5e0e6414811": "Option 4 is this",
//       // "26471ec0-be5a-11e9-94d7-a5e0e6414811": "Sarik"
//     }
//   }
// }

const ViewPracticeQuestion = props => {
  const {
    data,
    productId,
    page,
    perPage,
    handleAnswerChange,
    saveSubjectiveAnswer,
    handleNextButton,
    handleViewResultButton,
    handleSubmitResultButton,
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
    saveAnswerResponse,
    tempValue,
    bit,
    handleRevise
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
            <div className="question-wrap mr-5">
            {/* {questionIdx != 0 && (
                <span 
                   className="logo"
                   onClick={e => handleBackButton(e, questionIdx)}
                   disabled={
                    questionIdx == 0 }
                   >
                <img className="logo__img" src={logo_previous} alt="" />
              </span>
               )} 
             {questionIdx < data.length - 1 && (
              <span
               className="logo"
               onClick={e => handleNextButton(e, questionIdx, data[questionIdx].questionnaire_id)}
               disabled={
                 questionIdx > data.length - 1
                }
               >
                <img className="logo__img" src={logo_next} alt="" />
              </span>
             )} */}
               {questionIdx != 0 && (
                  <Popup content='Previous Question' trigger={
                  <Button 
                    size="mini"
                    icon='left chevron'
                    color="blue"
                    className="buy-btn prev-btn"
                    onClick={e => handleBackButton(e, questionIdx)}
                    disabled={
                      questionIdx == 0 }>
                    <i className="icon-arrow-left mr-1" />
                  </Button> } />

                )} 
               {questionIdx < data.length - 1 && ( 
                  <Popup content='Next Question' trigger={<Button
                    size="mini"
                    icon='right chevron'
                    color="blue"
                    className="buy-btn next-btn"
                    onClick={e => handleNextButton(e, questionIdx, data[questionIdx].questionnaire_id)}
                      disabled={
                        questionIdx > data.length - 1
                    }
                  >
                   
                    <i className="icon-arrow-right ml-1" />
                  </Button> } />
                 
                )} 
                <br />
                <br />
                <h4 className="item">
                  {questionIdx + 1} / {data.length}
                </h4>
             { data[questionIdx] && data[questionIdx].type_of_questions == "Objective" &&
              <Form>
                <div className="wrapper"> <h1 className="question-title">{data[questionIdx].question}</h1><Popup content={data[questionIdx].answer_tip} trigger={<Button className="answer-tip" icon='info' />} /></div>
                <Form.Field>
                  {data[questionIdx].answers.length > 0 &&
                    data[questionIdx].answers.map((ans, idx) =>
                        <div key={`ans${idx}`}>
                          <Radio 
                            disabled={is_radio_disabled}
                            label={`${ans.answer}`}
                            value={ans.answer}
                            name={`ans${questionIdx}`}
                            // mockData.data.product_id == this.props.match.params.product_id &&
                            // checked={ mockData.data.product_id == productId &&
                            //         mockData.data.question_answer.hasOwnProperty(data[questionIdx].questionnaire_id) ? 
                            //       mockData.data.question_answer[data[questionIdx].questionnaire_id] === ans.answer : false
                            // }
                            checked={
                              saveAnswerResponse.question_answer && saveAnswerResponse.question_answer.hasOwnProperty(data[questionIdx].questionnaire_id) ? 
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
                      <div className="wrapper"> <h1 className="question-title">{data[questionIdx].question}</h1><Popup content={data[questionIdx].answer_tip} trigger={<Button className="answer-tip" icon='info' />} /></div>
                   
                      <Form>
                        <Form.Field>
                         { yesno.length > 0 &&
                           yesno.map((ans, idx) => (
                           <div key={`ans${idx}`}>
                           <Radio
                             disabled={is_radio_disabled}
                             label={`${ans.answer}`}
                             value={ans.answer}
                             name={`ans${questionIdx}`}
                              // checked={
                              //   mockData.data.question_answer.hasOwnProperty(data[questionIdx].questionnaire_id) ? 
                              //       mockData.data.question_answer[data[questionIdx].questionnaire_id] === ans.answer : false
                              // }
                              checked={ 
                                saveAnswerResponse.question_answer && saveAnswerResponse.question_answer.hasOwnProperty(data[questionIdx].questionnaire_id) ? 
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
                   <div className="wrapper"> <h1 className="question-title">{data[questionIdx].question}</h1><Popup content={data[questionIdx].answer_tip} trigger={<Button className="answer-tip" icon='info' />} /></div>
                   <Form onSubmit={() =>
                         saveSubjectiveAnswer()}>
                     <Form.Field>
                    <TextArea 
                       placeholder='Tell us more' 
                       cols={100}
                       rows={5}
                        // value ={ mockData.data.question_answer.hasOwnProperty(data[questionIdx].questionnaire_id) ? 
                        //              mockData.data.question_answer[data[questionIdx].questionnaire_id] : ''}
                        value ={!bit && saveAnswerResponse.question_answer.hasOwnProperty(data[questionIdx].questionnaire_id) ? 
                                   saveAnswerResponse.question_answer[data[questionIdx].questionnaire_id] : tempValue }             
                        onChange={(e, se) =>
                          handleAnswerChange(e, se, '', questionIdx, data[questionIdx].questionnaire_id)}
                       />
                       </Form.Field>
                       <Form.Field>
                       <Button color="green" type='submit'>Save Answer</Button>
                       </Form.Field>
                     </Form> 
                    </div>
            
                  }
             
                {questionIdx === data.length - 1 && (
                <Button
                  color="teal"
                  content="View Summary"
                  onClick={e => handleSubmitResultButton(e, questionIdx)}
                />
              )}
            {/*               
              {data && (
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
            <h2 className="main_title">Detail</h2>
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
                      <div>
                        {/* {console.log(question,'>>>', tempValue == '' && saveAnswerResponse.question_answer.hasOwnProperty(data[questionIdx].questionnaire_id) ? 
                                   saveAnswerResponse.question_answer[data[questionIdx].questionnaire_id] : tempValue )} */}
                          <div className="result_listing">
                          <div>
                            <span><b>Q) {indx + 1}</b></span>
                            <h3>{question.question}</h3>
                            <span>
                            {saveAnswerResponse.question_answer.hasOwnProperty(question.questionnaire_id) ? 
                                saveAnswerResponse.question_answer[question.questionnaire_id] : 'Not Answered' }
                            </span>
                            </div>
                          </div>
                      </div>
                  </Grid.Column>
                ))}
                <Button onClick={e => handleRevise()} color="blue">Revise</Button>
                <Button color="green">Confirm Submit</Button>
            </Grid>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewPracticeQuestion;
