import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectLocation } from 'containers/App/selectors';

import { makeSelectStatus } from '../selectors';
import Profile from 'components/Profile';
import PackageList from '../containers/PackageList/';
import PackageDetails from '../containers/PackageList/Detail/Loadable'
import MyPackage from '../containers/PackageList/Cart/SubscribedPackage';

import ProductList from '../containers/ProductList/'
import ProductDetails from '../containers/ProductList/Detail/Loadable'
import MyProducts from '../containers/ProductList/Cart/SubscribedProduct'

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
			{/* <Redirect from="**" to="/user/dashboard" /> */}
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
			<Route exact path="/user/dashboard/package" component={PackageList} />
			<Route exact path="/user/dashboard/package/detail/:id" component={PackageDetails} />
			<Route exact path="/user/dashboard/my-packages" component={MyPackage} />

			<Route exact path="/user/dashboard/product" component={ProductList} />
			<Route exact path="/user/dashboard/product/detail/:id" component={ProductDetails} />
			<Route exact path="/user/dashboard/my-products" component={MyProducts} />

		</Switch>
	);
}

const mapStateToProps = createStructuredSelector({
	location: makeSelectLocation(),
	status: makeSelectStatus(),
});

export default connect(mapStateToProps)(UserRoutes);
