import React from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import Button from 'components/Button';
import { Captcha } from '../../components/Captcha';

const DonationContactForm = props => {
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
      <Form.Group controlId="validationCustom01">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Please tell us your name (First and Last)"
          onChange={handleChange}
          name="name"
          value={data.name || ''}
        />
        {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
      </Form.Group>
      <Form.Group controlId="formHorizontalEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Please Give us your E-mail Address"
          onChange={handleChange}
          name="email"
          value={data.email || ''}
        />
        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
      </Form.Group>
      {props.type === 'LEGO_BRICKS_AND_SET' && (
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Please Select Your address</Form.Label>
          <Form.Control
            as="select"
            onChange={handleChange}
            name="address"
            value={data.address || ''}
          >
            <option
              value=""
              label="We are located near Kansas City, MO. Where are you?"
            />
            <option value="Inside Town">Inside Town</option>
            <option value="Outside Town">Outside Town</option>
          </Form.Control>
          {errors.address && (
            <span style={{ color: 'red' }}>{errors.address}</span>
          )}
        </Form.Group>
      )}

      {props.type === 'VOLUNTEER_OPPORTUNIES' && (
        <Form.Group controlId="formHorizontalMessage">
          <Form.Label>Note</Form.Label>
          <Form.Control
            as="textarea"
            type="text"
            placeholder="Tell us more about your interest in helping"
            rows="4"
            name="note"
            value={data.note || ''}
            onChange={handleChange}
          />
          {errors.note && <span style={{ color: 'red' }}>{errors.note}</span>}
        </Form.Group>
      )}

      <Form.Group className="hasRecaptcha">
        <Captcha onChange={onRecaptchaChange} />
        {errors.reCaptcha && (
          <span style={{ color: 'red' }}>{errors.reCaptcha}</span>
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
export default DonationContactForm;
