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

import Report from '../containers/Report/Loadable'
 import ReportDetails from '../containers/Report/Detail'
// import SubscribedProducts from '../containers/ProductList/Cart/SubscribedProduct'

import ProductList from '../containers/ProductList/'
import ProductDetails from '../containers/ProductList/Detail/Loadable'
import SubscribedProducts from '../containers/ProductList/Cart/SubscribedProduct'

import ProductDisplay from '../containers/ProdutDisplay/Loadable';
import ViewQuestions from '../containers/ProdutDisplay/ViewQuestions/Loadable';
import ViewProductQuestions from '../containers/ProdutDisplay/ViewQuestions/Loadable';

// import UserDashboard from '../containers/DashboardView/Loadable'

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
			<Route exact path="/user/dashboard/reports" component={Report} />
			<Route exact path="/user/dashboard/report/detail/:id" component={ReportDetails} />

			<Route exact path="/user/dashboard/package" component={PackageList} />
			<Route exact path="/user/dashboard/package/detail/:id" component={PackageDetails} />
			<Route exact path="/user/dashboard/my-packages" component={MyPackage} />

			<Route exact path="/user/dashboard/product" component={ProductList} />
			<Route exact path="/user/dashboard/product/detail/:id" component={ProductDetails} />
			<Route exact path="/user/dashboard/my-products" component={SubscribedProducts} />

			<Route
        exact
        path="/user/dashboard/product-display"
        component={ProductDisplay}
      />
      {/* <Route
        exact
        path="/user/dashboard/my-packages"
        component={SubscribedPackage}
      /> */}
      <Route
        exact
        path="/user/dashboard/product-display/:package_id"
        component={ProductDisplay}
      />
      <Route
        exact
        path="/user/dashboard/trial/product-display/:package_id"
        component={ProductDisplay}
      />
      <Route
        exact
        path="/user/dashboard/trial/product-display/practice-quiz/:exam_id"
        component={ViewQuestions}
      />
	   <Route
        exact
        path="/user/dashboard/product-display/questions/:product_id"
        component={ViewProductQuestions}
      />
      <Route
        exact
        path="/user/dashboard/product-display/practice-quiz/:exam_id"
        component={ViewQuestions}
      />
	</Switch>
	);
}

const mapStateToProps = createStructuredSelector({
	location: makeSelectLocation(),
	status: makeSelectStatus(),
});

export default connect(mapStateToProps)(UserRoutes);
