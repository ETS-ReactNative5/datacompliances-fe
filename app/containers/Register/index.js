import React from 'react';
import SignupForm from './SignupForm';
import './assets/style.scss';
import '../../assets/base/form-base-style.scss';
import { format } from 'util';

const Register = (props) => (
  <div className="register-wrap">
    <div className="container">
      <SignupForm {...props}/>
    </div>
  </div>
      
     
);

export default Register;
