import React from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import Button from 'components/Button';
import { Captcha } from 'components/Captcha';

const ContactUsForm = props => {
  const {
    data,
    errors,
    handleChange,
    handleSubmit,
    isRequesting,
    onRecaptchaChange,
  } = props;

  return (
    <Form>
      <Form.Group controlId="formHorizontalName">
        <label>First Name</label>
        <Form.Control
          type="text"
          placeholder="Please tell us your first name"
          onChange={handleChange}
          name="first_name"
          value={data.first_name || ''}
        />
        {errors.first_name && (
          <span style={{ color: 'red' }}>{errors.first_name}</span>
        )}
      </Form.Group>
      <Form.Group controlId="formHorizontalName">
        <label>Last Name</label>
        <Form.Control
          type="text"
          placeholder="Please tell us your last name"
          onChange={handleChange}
          name="last_name"
          value={data.last_name || ''}
        />
        {errors.last_name && (
          <span style={{ color: 'red' }}>{errors.last_name}</span>
        )}
      </Form.Group>
      <Form.Group controlId="formHorizontalEmail">
        <label>Email</label>
        <Form.Control
          type="email"
          placeholder="Please Give us your E-mail Address"
          onChange={handleChange}
          name="email"
          value={data.email || ''}
        />
        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
      </Form.Group>
      <Form.Group controlId="formHorizontalSubject">
        <label>Message</label>

        <Form.Control
          as="textarea"
          type="text"
          placeholder="Tell us more about your interest in helping."
          name="message"
          value={data.message || ''}
          onChange={handleChange}
        />
        {errors.message && (
          <span style={{ color: 'red' }}>{errors.message} </span>
        )}
      </Form.Group>

      <Form.Group className="hasRecaptcha">
        <Captcha onChange={onRecaptchaChange} />
        {errors.reCaptcha && (
          <span className="form__error">{errors.reCaptcha}</span>
        )}
      </Form.Group>
      <Form.Group>
        <Button
          type="button"
          variant="primary"
          onClick={handleSubmit}
          loading={isRequesting}
        >
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
};
export default ContactUsForm;
