import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Link } from 'react-router-dom';

import { prefixes } from '../App/constants';
import UserRegistrationForm from './ui/UserRegistrationForm';
import { signupRequest, clearState, linkFacebookRequest, linkGoogleRequest, getCountryRequest, } from './actions';
import { showDialog } from '../App/actions';
import {
	makeSelectError,
	makeSelectRequesting,
	makeSelectResponse,
	makeSelectSMSRequesting,
	makeSelectSmsSent,
	makeSelectMobileNumberValidated,
	makeSelectSuccess,
	makegetCountryData
} from './selectors';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';

const mapDispatchToProps = (dispatch) => ({
	signupRequest: (data) => dispatch(signupRequest(data)),
	clearState: () => dispatch(clearState()),
	linkFacebookRequest: (token, isImp) => dispatch(linkFacebookRequest(token, isImp)),
	linkGoogleRequest: (token, isImp) => dispatch(linkGoogleRequest(token, isImp)),
	addMobileRequest: (mobileInfo) => dispatch(addMobileRequest(mobileInfo)),
	confirmMobileRequest: (code) => dispatch(confirmMobileRequest(code)),
	showDialog: (dialog) => dispatch(showDialog(dialog)),
	getCountryRequest: () => dispatch(getCountryRequest()),
});

const mapStateToProps = createStructuredSelector({
	successResponse: makeSelectResponse(),
	errorResponse: makeSelectError(),
	isRequesting: makeSelectRequesting(),
	is_sms_Requesting: makeSelectSMSRequesting(),
	success: makeSelectSuccess(),
	sms_sent: makeSelectSmsSent(),
	mobile_number_validated: makeSelectMobileNumberValidated(),
	CountryData: makegetCountryData(),
});

class SignupForm extends React.Component {
	static propTypes = {
		signupRequest: PropTypes.func.isRequired,
		clearState: PropTypes.func.isRequired,
		isRequesting: PropTypes.bool.isRequired,
		addMobileRequest: PropTypes.func,
		confirmMobileRequest: PropTypes.func,
		showDialog: PropTypes.func.isRequired,
	};

	constructor(props) {
		super(props);

		this.state = {
			data: {
				email_offer_subscription: false,
				agree_terms_condition: false,
			},
			errors: {},
		};
	}

	componentDidMount() {
		this.props.getCountryRequest();
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.CountryData != this.props.CountryData) {
			const CountryData = nextProps.CountryData && nextProps.CountryData.toJS();
			let CountryArr = [];
			CountryData.map(cat => {
			  CountryArr.push({
				key: cat._id,
				value: cat.name,
				text: cat.name,
			  });
			});
			this.setState({ countryData: CountryArr });
		  }
	}

	componentWillUnmount() {
		this.props.clearState();
	}

	handleChange = (e, se) => {
		e.persist();
		let errors = this.state.errors;
		if (!!errors[e.target.name] && !!e.target.value)
		  delete errors[e.target.name];
		this.setState((state) => ({
			data: { ...state.data, [e.target.name]: e.target.value },
		}));
	};
	handleCheckbox = (e, se) => {
		if (se.value == 'active') {
			let errors = this.state.errors;
			if (!!errors["agree_terms_condition"])
			delete errors["agree_terms_condition"];
			this.setState(state => ({
			  data: { ...state.data, agree_terms_condition: !state.data.agree_terms_condition },
			}));
		  }
	};
	onRecaptchaChange = (e) => {
		this.setState((state) => ({
			data: { ...state.data, reCaptcha: e },
		}));
	};
	
	handleDropDown = (e, se) => {
		let errors = this.state.errors;
		if (!!errors[se.name] && !!se.value) delete errors[se.name];
		this.setState({ errors });
		this.setState(
		  {
			data: {
			  ...this.state.data,
			  [se.name]: se.value,
			},
		  }
		);
	  };
	

	validate = () => {
		const { data } = this.state;
		const errors = {};
		if (!data.first_name) errors.first_name = "Can't be blank";
		if (data.first_name && data.first_name.length > 26) errors.first_name = "Can't be more than 26 characters";
		if (data.first_name && !/^[a-zA-Z]+$/.test(data.first_name)) errors.first_name = 'Can only contain letters';
		if (data.middle_name && data.middle_name.length > 26) errors.middle_name = "Can't be more than 26 characters";
		if (data.middle_name && !/^[a-zA-Z]+$/.test(data.middle_name)) errors.middle_name = 'Can only contain letters';
		if (!data.last_name) errors.last_name = "Can't be blank";
		if (data.last_name && data.last_name.length > 26) errors.last_name = "Can't be more than 26 characters";
		if (data.last_name && !/^[a-zA-Z]+$/.test(data.last_name)) errors.last_name = 'Can only contain letters';
		if (!data.email) errors.email = "Can't be blank";
		if(data.email && !this.validateEmail(data.email)){
			errors.email = "Invalid email address"
		  }
		if (!data.password) errors.password = 'Password is required';
		// if (!data.phone) errors.phone = "Can't be blank";
		if (!data.company_name) errors.company_name = "Can't be blank";
		if (data.company_name && !/^[a-zA-Z]+$/.test(data.company_name)) errors.company_name = 'Can only contain letters';
		if (data.company_name && data.company_name.length > 26) errors.company_name = "Can't be more than 40 characters";
		if (!data.industry) errors.industry = "Can't be blank";
		if (!data.country) errors.country = "Can't be blank";
		if (!data.agree_terms_condition) errors.agree_terms_condition = "Can't be blank";
		// if (!data.reCaptcha) errors.reCaptcha = 'Please check I am not a Robot checkbox';
		// if (!data.mobile_number) errors.mobile_number = "Please input your mobile number";
		// if (!data.country_code) errors.country_code = "Please select/enter country code of your mobile network";
		return errors;
	};

	validateEmail = email => {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	  };

	handleSubmit = (e) => {
		e.preventDefault();
		const errors = this.validate();
		this.setState({ errors });
		if (Object.keys(errors).length === 0) {
			this.props.signupRequest(this.state.data);
		}
	};

	handleCountryChange = (e, { value }) => {
		let errors = this.state.errors;
		if (!!errors.country)
		  delete errors.country;
		this.setState({
		  data: {
			...this.state.data,
			country: value,
			country_name:e.target.textContent
		  },
		});
	  };

	render() {
		const { data, errors } = this.state;
		const { errorResponse, isRequesting } = this.props;
		return (
			<div>
				{errorResponse && <p className="negative message">{errorResponse}</p>}

				<UserRegistrationForm
					handleSubmit={this.handleSubmit}
					// handleSemanticChange={this.handleSemanticChange}
					handleChange={this.handleChange}
					data={data}
					errors={errors}
					handleCheckbox={this.handleCheckbox}
					onRecaptchaChange={this.onRecaptchaChange}
					isRequesting={isRequesting}
					prefixes={prefixes}
					Country={this.state.countryData}
					handleCountryChange={this.handleCountryChange}
					handleDropDown={this.handleDropDown}

				/>
			
			</div>
		);
	}
}

// export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'register', reducer });
const withSaga = injectSaga({ key: 'register', saga });

export default compose(withReducer, withSaga, withConnect)(SignupForm);
