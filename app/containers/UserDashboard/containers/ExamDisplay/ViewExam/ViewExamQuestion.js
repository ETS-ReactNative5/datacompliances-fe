import React from 'react';
import {
  Form,
  Button,
  Radio,
  Checkbox,
  Segment,
  Icon,
  Grid,
  Label,
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
  ResponsiveContainer,
} from 'recharts';
import TimerComponent from '../Timer';
import WarningModal from '../Warning_Modal/warning_modal';

const ViewExamQuestion = props => {
  const {
    data,
    page,
    perPage,
    handleAnswerChange,
    handleNextButton,
    handleViewResultButton,
    questionIdx,
    error_msg,
    show_final_result,
    score,
    full_score,
    is_radio_disabled,
    handleFavoriteButton,
    handleUnfavoriteButton,
    handleTimeOver,
    time,
    count,
    resultResponse,
    url,
    fav_questions,
    handleBackButton,
    handleJump,
    attempted_length,
    show_warning,
    handleWarning,
  } = props;

  const BarGraphData = [
    {
      name: 'Total Average Score',
      score: (resultResponse && resultResponse.averageScore) || 0,
    },
    {
      name: 'Top 5 Average Score',
      score: (resultResponse && resultResponse.averageScoreByHighestScore) || 0,
    },
    {
      name: 'Last 5 Average Score',
      score: (resultResponse && resultResponse.averageScoreByLatestDate) || 0,
    },
    {
      name: 'Your Score',
      score: (resultResponse && resultResponse.currentScore) || 0,
    },
  ];
  const DonutData = [
    {
      name: 'Total Attempted Questions',
      value: attempted_length ? attempted_length : 0,
    },
    { name: 'Total Correct Answers', value: count ? count : 0 },
  ];
  return (
    <React.Fragment>
      {show_warning && (
        <WarningModal
          attempt={attempted_length}
          total={data && data.length}
          handleWarning={handleWarning}
        />
      )}
      <Grid>
        {data.length > 0 && !show_final_result && (
          <Grid.Column largeScreen={16} widescreen={16}>
            <div className="practiceqstn">
              <div className="qstntitle">
                <h4>
                  {questionIdx + 1} / {data.length}
                </h4>
                {time > 0 && (
                  <div className="timer">
                    Time Remaining:
                    <TimerComponent
                      minutes={time}
                      handleTimeOver={handleTimeOver}
                    />
                  </div>
                )}
              </div>
              <div className="addfav">
                <h1>{data[questionIdx].question}</h1>
                {fav_questions &&
                  !fav_questions.includes(data[questionIdx]._id) &&
                  url &&
                  !url.includes('trial') && (
                    <Icon
                      name="heart outline"
                      onClick={e =>
                        handleFavoriteButton(
                          e,
                          data[questionIdx]._id,
                          questionIdx,
                        )
                      }
                    />
                  )}
                {fav_questions &&
                  fav_questions.includes(data[questionIdx]._id) &&
                  url &&
                  !url.includes('trial') && (
                    <i
                      onClick={e =>
                        handleUnfavoriteButton(
                          e,
                          data[questionIdx]._id,
                          questionIdx,
                        )
                      }
                      className="heart icon red"
                    />
                  )}
              </div>
              <Form>
                <Form.Field>
                  {data[questionIdx].answers.length > 0 &&
                    data[questionIdx].answers.map((ans, idx) =>
                      !data[questionIdx].multi_answer_applicable ? (
                        <div key={`ans${idx}`}>
                          <Radio
                            disabled={is_radio_disabled}
                            label={`${ans.answer}`}
                            value={ans.answer}
                            name={`ans${questionIdx}`}
                            checked={
                              data[questionIdx].user_answer === ans.answer
                            }
                            onChange={(e, se) =>
                              handleAnswerChange(e, se, idx, questionIdx)
                            }
                          />
                        </div>
                      ) : (
                        <div key={`ans${idx}`}>
                          <Checkbox
                            disabled={is_radio_disabled}
                            label={`${ans.answer}`}
                            value={ans.answer}
                            name={`ans${questionIdx}`}
                            checked={
                              (data &&
                                data.length > 0 &&
                                data[questionIdx] &&
                                data[questionIdx].user_answers &&
                                data[questionIdx].user_answers.includes(
                                  ans.answer,
                                )) ||
                              false
                            }
                            onChange={(e, se) =>
                              handleAnswerChange(e, se, idx, questionIdx)
                            }
                          />
                        </div>
                      ),
                    )}
                </Form.Field>
              </Form>
              {questionIdx != 0 && (
                <Button onClick={e => handleBackButton(e, questionIdx)}>
                  <i className="icon-arrow-left mr-1" /> Previous
                </Button>
              )}
              {questionIdx < data.length - 1 && (
                <Button onClick={e => handleNextButton(e, questionIdx)}>
                  Next
                  <i className="icon-arrow-right ml-1" />
                </Button>
              )}
              {questionIdx === data.length - 1 && (
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
              )}
              <div className="pagination">
                {data &&
                  data.length > 0 &&
                  data.map((each, idx) => (
                    <Label
                      color={data[idx].user_answer && 'green'}
                      circular
                      key={`list${idx}`}
                      onClick={e => handleJump(e, idx, questionIdx)}
                    >
                      {idx + 1}
                    </Label>
                  ))}
              </div>
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
          {url && !url.includes('trial') && (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                width={800}
                height={300}
                data={BarGraphData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="score" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          )}
          <ResponsiveContainer width="100%" height={300}>
            <PieChart width={800} height={400}>
              <Pie
                data={DonutData}
                cx={500}
                cy={200}
                innerRadius={40}
                outerRadius={80}
                fill="#82ca9d"
                dataKey="value"
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

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
    </React.Fragment>
  );
};

export default ViewExamQuestion;
