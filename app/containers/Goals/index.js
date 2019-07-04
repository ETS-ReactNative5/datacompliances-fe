import React from 'react';
const GoalsUi = (props) => {
  const { data } = props
  return (
    <div >
      <h1>{data && data.template_name}</h1>
      <div dangerouslySetInnerHTML={{
        __html: data && data.template_content,
      }} />
    </div>

  )
}
export default GoalsUi