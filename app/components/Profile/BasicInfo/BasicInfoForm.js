import React from 'react';
import ReactDropzone from 'react-dropzone';
import AvatarEditor from 'react-avatar-editor';
import { Button, Form, Segment, Radio, Input } from 'semantic-ui-react';
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

const BasicInfoForm = ({
  date,
  focused,
  onDateChange,
  onFocusChange,
  isOutsideRange,
  user,
  avatarImage,
  handleChange,
  handleSubmit,
  handleCheckBox,
  onDrop,
  handleGenderChange,
  isLoading,
  datechange,
  setEditorRef,
  onCrop,
  newImage,
  errors
}) => (
  <Form onSubmit={handleSubmit} className="py-2">
    <h2 className="main_title">Basic Info</h2>
    <Form.Field>
      <ReactDropzone onDrop={onDrop}>
        <img
          className="ui image"
          src={avatarImage || DefaultAvatar}
          alt="profile image"
        />
      </ReactDropzone>
      {newImage && (
        <div>
          <AvatarEditor
            image={avatarImage}
            width={250}
            height={250}
            borderRadius={5000}
            scale={1.2}
            ref={setEditorRef}
          />
          <br />
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
            placeholder="first name"
            name="first_name"
            value={user.first_name || ''}
            onChange={handleChange}
            error={errors.first_name}
          />
          <FormField
            label="Last Name"
            placeholder="last name"
            name="last_name"
            value={user.last_name || ''}
            onChange={handleChange}
            error={errors.last_name}
          />
      </Form.Group>
      <Form.Group inline>
        <Form.Field>
          <label style={{ fontWeight: 400 }}>Gender:</label>
        </Form.Field>
        <Form.Field>
          <Radio
            label="Male"
            name="gender"
            value="Male"
            checked={(user.gender || '').toLowerCase() === 'male'}
            onChange={handleGenderChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label="Female"
            name="gender"
            value="Female"
            checked={(user.gender || '').toLowerCase() === 'female'}
            onChange={handleGenderChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label="Other"
            name="gender"
            value="Other"
            checked={(user.gender || '').toLowerCase() === 'other'}
            onChange={handleGenderChange}
          />
        </Form.Field>
      </Form.Group>
      <Form.Field>
        <label>Date of Birth: </label>
        <DatePicker datechange={datechange} date={user.birth_date || null} />
      </Form.Field>
      <Form.Group widths="equal">
        <Form.Field>
          <label>User Name</label>
          <input
            placeholder="username"
            name="username"
            value={user.username || ''}
            onChange={handleChange}
            disabled
          />
        </Form.Field>
      </Form.Group>
      {/* <h3>Address</h3> */}
      <Form.Group widths="equal">
        <InputField
          placeholder="address line 1"
          type="text"
          // label="Address Line 1"
          name="address_address_line_1"
          value={user.address_address_line_1 || ''}
          onChange={handleChange}
        />
        <InputField
          type="text"
          placeholder="address line 2"
          // label="Address Line 2"
          name="address_address_line_2"
          value={user.address_address_line_2 || ''}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group widths="equal">
        <InputField
          type="text"
          placeholder="City"
          name="address_city"
          value={user.address_city || ''}
          onChange={handleChange}
        />
        <InputField
          type="text"
          placeholder="State/Province/Region"
          name="address_state_region_province"
          value={user.address_state_region_province || ''}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Field>
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
        <Form.Field>
          <Input>
            <input
              type="text"
              placeholder="ZIP/Postal Code"
              name="address_zip_postal_code"
              value={user.address_zip_postal_code || ''}
              onChange={handleChange}
            />
          </Input>
        </Form.Field>
      </Form.Group>
      <Button type="submit" primary loading={isLoading} disabled={isLoading}>
        Save
      </Button>
    </div>
  </Form>
);

export default BasicInfoForm;
