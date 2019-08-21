import React from 'react';
import ReactDropzone from 'react-dropzone';
import AvatarEditor from 'react-avatar-editor';
import { Button, Form, Dropdown } from 'semantic-ui-react';
import InputField from 'components/common/Forms/InputField';
import FormField from 'components/common/Forms/FormField';
import DatePicker from 'components/common/DatePicker';
import DefaultAvatar from 'assets/images/avatar.png';
import Countries from 'components/common/countries';
import '../assets/style.scss';
const countries = Countries.map(country => (
  <option key={country.code} value={country.name}>
    {country.name}
  </option>
));

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


const BasicInfoForm = ({
  date,
  focused,
  onDateChange,
  onFocusChange,
  isOutsideRange,
  user,
  avatarImage,
  handleChange,
  handleDropDown,
  handleSubmit,
  handleCheckBox,
  onDrop,
  handleGenderChange,
  isLoading,
  datechange,
  setEditorRef,
  onCrop,
  cropDialog,
  newImage,
  errors
}) => (
  <Form onSubmit={handleSubmit} className="py-2">
    <h2 className="main_title">Basic Info</h2>
    <Form.Field className="img-editor-wrap">
      <ReactDropzone onDrop={onDrop}>
        <img
          className="ui image"
          src={avatarImage || DefaultAvatar}
          alt="profile image"
        />
      </ReactDropzone>
      {cropDialog && newImage && (
        <div className="img-editor " >
          <AvatarEditor
            className="mb-3"
            image={avatarImage}
            width={250}
            height={250}
            borderRadius={5000}
            scale={1.2}
            ref={setEditorRef}
          />
          <br/>
          <Button primary onClick={onCrop}>
            Crop
          </Button>
        </div>
      )}
    </Form.Field>
    <div className="form__elements">
      <Form.Group widths="equal">
          <FormField
            label="First Name"
            placeholder="First Name"
            name="first_name"
            value={user.first_name || ''}
            onChange={handleChange}
            error={errors.first_name}
          />
           <FormField
            label="Middle Name"
            placeholder="Middle Name"
            name="middle_name"
            value={user.middle_name || ''}
            onChange={handleChange}
            error={errors.middle_name}
          />
          <FormField
            label="Last Name"
            placeholder="Last Name"
            name="last_name"
            value={user.last_name || ''}
            onChange={handleChange}
            error={errors.last_name}
          />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Field>
          <label>User Email</label>
          <input
            placeholder="username"
            name="username"
            value={user.username || ''}
            onChange={handleChange}
            disabled
          />
        </Form.Field>
      </Form.Group>
      <FormField
            label="Company"
            placeholder="Company Name"
            name="company_name"
            value={user.company_name || ''}
            onChange={handleChange}
            error={errors.company_name}
          />
        	<Form.Field>
						<label>	Industry *</label>
							
								<Dropdown
									placeholder="Industry"
									className="form-control"
									name="industry"
									search
									selection
									fluid
									options={industryList || []}
									onChange={handleDropDown}
									value={user.industry || ''}
								/>
			
								{errors.industry && (
								<span style={{ color: 'red' }}>{errors.industry}</span>
								)}
						
						</Form.Field>
      <Form.Group widths="equal">
        <Form.Field>
          <label>Country</label>
          <select
            
            style={{ padding: '8px 6px' }}
            className="ui selection dropdown"
            name="address_country"
            onChange={handleChange}
            value={user.address_country || ''}
          >
            {countries}
          </select>
        </Form.Field>
      </Form.Group>
      <Button type="submit" primary loading={isLoading} disabled={isLoading}>
        Save
      </Button>
    </div>
  </Form>
);

export default BasicInfoForm;
