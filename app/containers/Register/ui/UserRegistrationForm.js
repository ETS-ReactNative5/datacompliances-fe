/**
 * Created by lakhe on 7/5/17.
 */
import React from 'react';
 import { Dropdown, Form, Button, Checkbox } from 'semantic-ui-react';
// import { Form, Button } from 'react-bootstrap';
import Captcha from 'components/Captcha';
import PasswordInputField from 'components/common/Forms/PasswordInputField';
import FormField from 'components/common/Forms/FormField';
import PasswordIndicator from 'components/PasswordIndicator';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
const industryList = [
    { key: '1', value: 'Financial', text: 'Financial' },
    {
      key: '2',
      value: 'Health Care and Biomedical',
      text: 'Health Care and Biomedical',
    },
    { key: '3', value: 'Technology', text: 'Technology' },
    { key: '4', value: 'Cyber Security', text: 'Cyber Security' },
    { key: '5', value: 'Energy', text: 'Energy' },
    { key: '6', value: 'Insurance', text: 'Insurance' },
    { key: '7', value: 'Education', text: 'Education' },
  ];
const UserRegistrationForm = ({
    handleSubmit,
    handleChange,
    data,
    errors,
    handleCheckbox,
    onRecaptchaChange,
    isRequesting,
    prefixes,
    Country,
    handleCountryChange,
    handleDropDown
}) => {
    return (
        <div className="row">
            <div className="col-md-10 offset-md-1">
        <Form onSubmit={handleSubmit} className="register-form">
            <div className="row">
                <div className="col-md-4">
                    <a href="#" className="pcsc-logo">
                        <img src={logo}/>
                    </a>
                </div>
                <div className="col-md-6 mb-4">
                    <h3>Create your Account</h3>    
                </div>
            </div>
                <div className="row">
                    <div className= "col-md-4 "    >
                        <FormField
                        label="First Name *"
                        name="first_name"
                        value={data.first_name || ''}
                        onChange={handleChange}
                        placeholder="First Name"
                        error={errors.first_name}
                        className="form-control"
                        />
                    </div>
                    <div className="col-md-4">
                        <FormField
                        label="Middle Name"
                        name="middle_name"
                        value={data.middle_name || ''}
                        onChange={handleChange}
                        placeholder="Middle Name"
                        className="form-control"
                        error={errors.middle_name}
                        />
                    </div>
                    <div className="col-md-4">
                        <FormField
                        label="Last Name *"
                        name="last_name"
                        value={data.last_name || ''}
                        onChange={handleChange}
                        placeholder="Last Name"
                        className="form-control"
                        error={errors.last_name}
                    />
                    </div>
                </div>
                <div className="row">
                
                    <div className="col-md-6">
                        <FormField
                            label="Email *"
                            name="email"
                            className="form-control"
                            type="email"
                            value={data.email || ''}
                            onChange={handleChange}
                            placeholder="Email"
                            error={errors.email}
                        />
                    </div>        
                    <div className="col-md-6">
						<Form.Field>
                        <label>
                        Country *
                        </label>
                        <Dropdown
                        placeholder="Country"
                        className="form-control"
                        search
                        selection
                        fluid
                        options={Country || []}
                        onChange={handleCountryChange}
                        value={data.country || ''}
                        error={(errors.country == "Can't be blank") ? true : false}
                        />
                        </Form.Field>
                    </div>        
                
                    
                </div>
                <div className="row">
                <div className="col-md-6">
						      <div className="pos-rel">
                            <PasswordInputField
                                password={data.password || ''}
                                placeholder="Password *"
                                className="form-control"
                                onChange={handleChange}
                                error={errors.password}
                            />
                        <PasswordIndicator password={data.password || ''} />
						</div>
                    </div>
                    
                    <div className="col-md-6">
					<div className="pos-rel">
                            <PasswordInputField
								name="confirmPassword"
								label="Confirm Password"
                                password={data.confirmPassword || ''}
                                placeholder="Confirm Password *"
                                className="form-control"
                                onChange={handleChange}
                                error={errors.confirmPassword}
                            />
						</div>
              
                    </div>
                    
                </div>
                <div className="row">
                
                    <div className="col-md-6">
                        <FormField
                            label="Company *"
                            name="company_name"
                            value={data.company_name || ''}
                            onChange={handleChange}
                            placeholder="Company Name"
                            className="form-control"
                            error={errors.company_name}
                        />
                    </div>
                    <div className="col-md-6">
                        <Form.Field>
                        <label>   Industry *</label>
                                <Dropdown
                                    placeholder="Industry"
                                    className="form-control"
                                    name="industry"
                                    search
                                    selection
                                    fluid
                                    options={industryList || []}
                                    onChange={handleDropDown}
                                    value={data.industry || ''}
                                    error={(errors.industry == "Can't be blank") ? true : false}
                                />
                        
                        </Form.Field>
                    </div>
                    </div>
                
                
                <div className="row">
                    <div className="col-md-6">
                    
                            <div className={`checkbox-inline ${errors.agree_terms_condition == "Can't be blank" ? 'error' : ''}`}>
                            <Checkbox 
                               name="agree_terms_condition"
                               value="active"
                            //    label='I have read and agree to the  Terms of Use and the Privacy Policy.'
                               onChange={handleCheckbox}
                            //    error={(errors.agree_terms_condition == "Can't be blank") ? true : false}
                               />
                                <label>I have read and agree to the <a href="https://www.esrtech.io/term-of-use.html" target="_blank"><b>Terms of Use</b></a> and the  <a href="https://www.esrtech.io/privacy-policy.html" target="_blank"><b>Privacy Policy.</b></a></label>
                            </div>
{/* 
                        <div className="hasCaptcha field" style={{ height: '76px' }}>
                            <Captcha onChange={onRecaptchaChange} />
                            {errors.reCaptcha && (
                                <span data-tooltip={errors.reCaptcha}>
                                    <i className="icon-exclamation-triangle red" />
                                </span>
                            )}
                        </div> */}
                    </div>
                    <div className="col-md-6">
                        <div className="field">
                            <Button className="button primary large full-width" type="submit" loading={isRequesting}>
                                Join Now
                            </Button>
                        </div>
                        {window.location.pathname.split('/')[1] != 'guest-detail' && (
                    <p>
                        Already a Member? <Link to="/login">Login</Link>
                    </p>
                )}
                    </div>
                </div>
                
        </Form>
        </div>
        </div>
    );
};
export default UserRegistrationForm;