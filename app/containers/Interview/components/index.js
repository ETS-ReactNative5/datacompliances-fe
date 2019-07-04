import React from 'react';
import { Link } from 'react-router-dom';
const interviewUi = (props) => {
  const { data } = props
  return (
    <div>
      <h1>Interview</h1>
      {data && data.length > 0 && data.map((eachInterview, idx) => (
        <h3 key={`index${idx}`}><Link to={`/interview/${eachInterview._id}`}>{eachInterview.full_name}</Link></h3>
      ))}
    </div>
  )
}
export default interviewUi