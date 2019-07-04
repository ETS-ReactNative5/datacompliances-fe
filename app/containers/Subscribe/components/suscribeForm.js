import React from "react";
// import mail from "assets/img/mail.svg";
import Button from 'components/Button';

const Subscription = ({ subscriptionObj, handleChange, handleSubmit, errormessage, successmessage, clearMessasge }) => {
  return (
    <div className="newsletter-form">
      <p>Signup for latest news and updates from Medicrony.</p>
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <div className="mini icon action input">

            <div className="input__wrap">
              <input type="email" placeholder="Your Email"
                name="subscriber_email"
                value={subscriptionObj.subscriber_email}
                onChange={handleChange} />
              <Button className="icon"
                color='blue'
                disabled={!subscriptionObj.subscriber_email}
                type="submit">
                Enter
            </Button>
            </div>
          </div>
        </div>
        {/* <div className="field">
          {errormessage &&
            <p className="negative message" onClick={clearMessasge}>
              {errormessage}
            </p>}
          {successmessage &&
            <p className="positive message" onClick={clearMessasge}>
              {successmessage}
            </p>}
        </div> */}
      </form>
    </div>
  );
};

export default Subscription;
