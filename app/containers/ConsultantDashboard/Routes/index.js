import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectLocation } from 'containers/App/selectors';

import { makeSelectStatus } from '../selectors';
import Profile from 'components/Profile';

import ProductList from '../containers/ProductList/'
import ProductDetails from '../containers/ProductList/Detail/Loadable'
import SubscribedProducts from '../containers/ProductList/Cart/SubscribedProduct'

import ProductDisplay from '../containers/ProdutDisplay/Loadable';


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

function UserRoutes({ location, status }) {
	return (
		<Switch location={location}>
			<Route
				path="/user/dashboard/profile"
				render={(props) => (
					<Profile
						tabs={[
							{ to: '/user/dashboard/profile/basic-info', label: 'Basic Info' },
							{ to: '/user/dashboard/profile/password', label: 'Password' },
							{
								to: '/user/dashboard/profile/multi-factor-auth',
								label: 'Two Factor Auth',
							},
						]}
						{...props}
					/>
				)}
			/>
			<Route
        exact
        path="/user/dashboard/product-display"
        component={ProductDisplay}
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

export default connect(mapStateToProps)(UserRoutes);
