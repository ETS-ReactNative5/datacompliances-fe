import React from 'react';
import LoginForm from './LoginForm';
import bitsBeat from '../../assets/images/avatar.png';

const Login = props => (
  <div className="login">
    <div className="box">
      {/* <div className="img-holder">
        <img src={man} alt="" />
      </div> */}
      <div>
        <div className="img-holder">
          <img className="logo-login" src={bitsBeat} alt="BitsBeat" />
        </div>
        <LoginForm {...props} />
      </div>
    </div>
  </div>
);

export default Login;
