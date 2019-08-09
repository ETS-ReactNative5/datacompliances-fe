/**
 * Created by lakhe on 7/5/17.
 */
import React from 'react';
 import { Dropdown, Form, Button, Icon } from 'semantic-ui-react';
// import { Form, Button } from 'react-bootstrap';
import Captcha from 'components/Captcha';
import PasswordInputField from 'components/common/Forms/PasswordInputField';
import FormField from 'components/common/Forms/FormField';
import PasswordIndicator from 'components/PasswordIndicator';


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
		<Form onSubmit={handleSubmit}>
			<Form.Group>
				<FormField
					width={7}
					label="First Name"
					name="first_name"
					value={data.first_name || ''}
					onChange={handleChange}
					placeholder="First Name"
					error={errors.first_name}
				/>
				<FormField
					width={7}
					label="Middle Name"
					name="middle_name"
					value={data.middle_name || ''}
					onChange={handleChange}
					placeholder="Middle Name"
					error={errors.middle_name}
				/>
				<FormField
					width={6}
					label="Last Name"
					name="last_name"
					value={data.last_name || ''}
					onChange={handleChange}
					placeholder="Last Name"
					error={errors.last_name}
				/>
			</Form.Group>
			<FormField
					width={7}
					label="Profession"
					name="profession"
					value={data.profession || ''}
					onChange={handleChange}
					placeholder="Profession"
					error={errors.profession}
				/>
			<div className="two fields">
				{/* <FormField
					label="Country"
					name="country"
					value={data.country || ''}
					onChange={handleChange}
					placeholder="Country"
					error={errors.country}
				/> */}
				   <Form.Field>
					<label>
					<h3>Country</h3> 
					</label>
					<br />
					<Dropdown
					placeholder="Country"
					search
					selection
					fluid
					options={Country || []}
				    onChange={handleCountryChange}
					value={data.country || ''}
					/>
					<br />
					{errors.country && (
					<span style={{ color: 'red' }}>{errors.country}</span>
					)}
					</Form.Field>
			</div>
			<Form.Field>
				<label>
				<h3>Industry</h3> 
				</label>
					<br />
						<Dropdown
							placeholder="Industry"
							name="industry"
							search
							selection
							fluid
							options={industryList || []}
							onChange={handleDropDown}
							value={data.industry || ''}
						/>
						<br />
						{errors.industry && (
						<span style={{ color: 'red' }}>{errors.industry}</span>
						)}
					<br />
				</Form.Field>
			<FormField
				label="Email"
				name="email"
				type="email"
				value={data.email || ''}
				onChange={handleChange}
				placeholder="Email"
				error={errors.email}
			/>

			<div className="pos-rel">
				{/* check error case */}
				<PasswordInputField
					password={data.password || ''}
					placeholder="Password"
					onChange={handleChange}
					error={errors.password}
				/>
			</div>
			<PasswordIndicator password={data.password || ''} />

			<div className="inline field">
				{/* <label className="custom-control custom-checkbox">
          <input
            type="checkbox" className="custom-control-input" name="email_offer_subscription"
            onChange={handleCheckbox} checked={data.email_offer_subscription}
          />
          <div className="custom-control-indicator" />
          <div className="custom-control-description">
            Please send me emails with travel deals, special offers and other information.
          </div>
        </label> */}
				<div className={`field ${errors.agree_terms_condition ? 'error' : ''}`}>
					<label className="custom-control custom-checkbox mt-1">
						<input
							type="checkbox"
							className="custom-control-input"
							name="agree_terms_condition"
							onChange={handleCheckbox}
							checked={data.agree_terms_condition}
						/>
						<div className="custom-control-indicator" />
						<div className="custom-control-description">
							I have read and agree to the Terms and Use and the Privacy Policy.
						</div>
					</label>
				</div>
			</div>
			<div className="hasCaptcha field" style={{ height: '76px' }}>
				<Captcha onChange={onRecaptchaChange} />
				{errors.reCaptcha && (
					<span data-tooltip={errors.reCaptcha}>
						<i className="icon-exclamation-triangle red" />
					</span>
				)}
			</div>
			<div className="field">
				<Button className="button primary large full-width" type="submit" loading={isRequesting}>
					Join Now
				</Button>
			</div>
		</Form>
	);
};

export default UserRegistrationForm;
