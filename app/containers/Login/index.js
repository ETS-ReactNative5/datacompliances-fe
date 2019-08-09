import React from 'react';
import LoginForm from './LoginForm';
import bitsBeat from '../../assets/images/avatar.png';
import './assets/login.scss';

const Login = props => (
  <div className="login-wrap">
    <div className="login-form">
      <LoginForm {...props} />
    </div>
  </div>
);

export default Login;
