import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import CustomToaster from 'components/CustomToaster';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { compose } from 'redux';
import reducer from './reducer';
import saga from './saga';
import { Link } from 'react-router-dom';
import { postDonationContactRequest, clearMessage } from './actions';
import { makeSelectCategory } from '../HowYouCanHelp/selectors';
import {
  makeSelectSuccess,
  makeSelectResponse,
  makeSelectError,
  makeSelectRequesting,
} from './selectors';
import ContactForm from './Form';

export class DonationContact extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        name: null,
        value: [],
        note: null,
        type: props.type,
      },
      errors: {},
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.successResponse !== this.props.successResponse) {
      this.setState(
        {
          data: {
            name: null,
          },
          type: nextProps.type,
        },
        () => {
          setTimeout(() => {
            nextProps.handleClose();
          }, 1000);
        },
      );
      grecaptcha.reset();
    }
  }

  componentWillUnmount() {
    this.props.clearAllMessage();
  }

  handleChange = e => {
    const { errors } = this.state;
    if (!!errors && errors[e.target.name] !== null)
      delete errors[e.target.name];
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    });
  };

  onRecaptchaChange = e => {
    this.setState(state => ({
      data: { ...this.state.data, reCaptcha: e },
    }));
  };

  validate = () => {
    let { data, errors } = this.state;
    if (!data.name) errors.name = 'Full Name is Required';
    if (!data.email) errors.email = 'Email is Required';

    if (data.email && !this.validateEmail(data.email)) {
      errors.email = 'Invalid Email';
    }
    if (data.type === 'VOLUNTEER_OPPORTUNIES') {
      if (!data.note) errors.note = 'please leave your note';
    }
    if (data.type === 'LEGO_BRICKS_AND_SET') {
      if (!data.address) errors.address = 'please select your location';
    }
    return errors;
  };

  validateEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  onclose = () => {
    this.props.onHide();
  };

  handleSubmit = e => {
    e.preventDefault();
    const { type } = this.props;
    const { data } = this.state;
    const errors = this.validate();
    this.setState({ errors });
    this.setState({
      data: {
        ...this.state.data,
      },
      type,
    });
    if (Object.keys(errors).length === 0) {
      this.props.postContact(data, type);
    }
  };

  render() {
    const { data, errors } = this.state;
    const { successResponse, errorResponse, location, type } = this.props;

    let message = null;

    if (errorResponse) {
      message = (
        <CustomToaster message={errorResponse} timeout={5000} type="error" />
      );
    }
    return (
      <div className="contact__form">
        {message && message}
        <ContactForm
          data={data}
          errors={errors}
          type={type}
          location={location}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          onRecaptchaChange={this.onRecaptchaChange}
          isRequesting={this.props.isRequesting}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isSuccess: makeSelectSuccess(),
  isRequesting: makeSelectRequesting(),
  successResponse: makeSelectResponse(),
  errorResponse: makeSelectError(),
  category: makeSelectCategory(),
});

const mapDispatchToProps = dispatch => ({
  postContact: (data, type) => dispatch(postDonationContactRequest(data, type)),
  clearAllMessage: () => dispatch(clearMessage()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'contact', reducer });
const withSaga = injectSaga({ key: 'contact', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(DonationContact);
