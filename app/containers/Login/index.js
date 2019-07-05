/**
 *
 * Login
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Form, Button } from 'react-bootstrap';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLogin from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import './assets/login.scss';
import user from './assets/user.svg';
import users from './assets/uers.svg';
import key from './assets/key.svg';
import eyes from './assets/eyes.svg';

/* eslint-disable react/prefer-stateless-function */
export class Login extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Login</title>
          <meta name="description" content="Description of Login" />
        </Helmet>
        <React.Fragment>
          <div className="login">
            <div className="login__box">
              <h1 className="white">PCSC</h1>
              <img src={users} alt="" />
              <Form className="mt-4">
                <Form.Group className="form__group" controlId="formBasicEmail">
                  <img className="input__img" src={user} alt="" />
                  <Form.Control
                    className="input__login"
                    type="email"
                    placeholder="Enter email"
                  />
                </Form.Group>
                <Form.Group
                  className="form__group"
                  controlId="formBasicPassword"
                >
                  <img className="input__img" src={key} alt="" />

                  <Form.Control
                    className="input__login"
                    type="password"
                    placeholder="Password"
                  />
                  <img className="input__password" src={eyes} alt="" />
                  <div className="text-right">
                    <Link to="#" className="text__login">
                      Forgot Password?
                    </Link>
                  </div>
                </Form.Group>
                <Button className="button__login" type="submit">
                  LOGIN
                </Button>
                <div className="text-center">
                  <Link to="/register" className="text__login">
                    Don't have an account? Sign up
                  </Link>
                </div>
              </Form>
            </div>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'login', reducer });
const withSaga = injectSaga({ key: 'login', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Login);
