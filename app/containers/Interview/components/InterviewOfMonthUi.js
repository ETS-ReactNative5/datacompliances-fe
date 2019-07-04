import React from 'react';
import { Link } from 'react-router-dom';
import { DOCUMENT_URL } from 'containers/App/constants';

const interviewOfMonthUi = (props) => {
  const { data } = props
  return (
    <div>
      <h1>Interview Of The Month</h1>
      {data &&
        <div><Link to={`/interview/${data._id}`}><h1>{data.full_name}</h1></Link>
          <img src={`${DOCUMENT_URL}${data.image && data.image.document_name}`} style={{ height: "200px" }} />
          <h4>{data.intro_detail}</h4></div>}
      <Link to="/interview">View all</Link>
    </div>
  )
}
export default interviewOfMonthUi