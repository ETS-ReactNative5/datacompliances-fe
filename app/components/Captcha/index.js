import React from 'react';
import PropTypes from 'prop-types';
import { RECAPTCHA_SITE_KEY } from 'containers/App/constants';
import ReCAPTCHA from './ReCAPTCHA';

export const Captcha = props => {
return(<ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} onChange={props.onChange} />)
}
    
// Captcha.propTypes = {
//   onChange: PropTypes.func.isRequired
// };


