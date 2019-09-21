import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectLocation } from 'containers/App/selectors';

import { makeSelectStatus } from '../selectors';
import Profile from 'components/Profile';

import Appointment from '../containers/Appointment/Loadable'


function check(status) {
	let isValid = false,
		expired = true;

	if (status === 200 || status === 404) {
		(isValid = true), (expired = false);
		// return isValid;
	} else if (status === 410) {
		(isValid = false), (expired = true);
		// return expired;
	} else {
		(isValid = false), (expired = true);
		// return null
	}
	let value, v, e;
	value = { isValid: isValid, expired: expired };
	return value;
}

function ConsultantRoutes({ location, status }) {
	return (
		<Switch location={location}>
			<Route
				path="/consultant/dashboard/profile"
				render={(props) => (
					<Profile
						tabs={[
							{ to: '/consultant/dashboard/profile/basic-info', label: 'Basic Info' },
							{ to: '/consultant/dashboard/profile/password', label: 'Password' },
							{
								to: '/consultant/dashboard/profile/multi-factor-auth',
								label: 'Two Factor Auth',
							},
						]}
						{...props}
					/>
				)}
			/>
			
	<Route
        exact
        path="/consultant/dashboard/set-appointment"
        component={Appointment}
      />			

      {/* <Route
        exact
        path="/user/dashboard/product-display/:package_id"
        component={ProductDisplay}
      /> */}
  
	</Switch>
	);
}

const mapStateToProps = createStructuredSelector({
	location: makeSelectLocation(),
	status: makeSelectStatus(),
});

export default connect(mapStateToProps)(ConsultantRoutes);
