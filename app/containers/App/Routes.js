import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectLocation } from './selectors';
import HomePage from 'containers/HomePage/Loadable';
import Login from 'containers/Login';
import Register from 'containers/Register';
import NotFoundPage from 'containers/NotFoundPage';
import ConsultantDashboard from 'containers/ConsultantDashboard/Loadable';
import ConsultantDashboardLayout from 'containers/ConsultantDashboard/containers/ConsultantLayout';
import UserDashboard from 'containers/UserDashboard/Loadable';
import UserDashboardLayout from 'containers/UserDashboard/containers/UserLayout';
import HomeLayout from 'containers/HomeLayout';
import PasswordReset from '../Login/password-reset';
import ConfirmUser from '../Register/ConfirmUser/Loadable'

const mapStateToProps = createStructuredSelector({
	location: makeSelectLocation(),
});

class Routes extends React.Component {
	static propTypes = {
		location: PropTypes.shape({
			pathname: PropTypes.string.isRequired,
			search: PropTypes.string,
			hash: PropTypes.string,
			key: PropTypes.string,
		}).isRequired,
	};

	render() {
		return (
			<Switch location={this.props.location}>
					<Route
						exact
						path="/"
						render={props => (
							<HomeLayout>
							<HomePage {...props} />
							</HomeLayout>
						)}
					/>
				{/* <Route exact path="/" render={(props) => <HomePage {...props} />} /> */}
				<Route exact path="/login" component={Login} />
				<Route exact path="/register" component={Register} />

				<Route
					exact
					path="/password-reset/user/:userid"
					render={props => <PasswordReset {...props} />}
				/>

                <Route
					exact
					path="/confirm/user/:userid"
					render={props => <ConfirmUser {...props} />}
				/>
				<Route
					path="/user/dashboard"
					render={(props) => (
						<UserDashboardLayout>
							<UserDashboard {...props} />
						</UserDashboardLayout>
					)}
				/>
				<Route
					path="/consultant/dashboard"
					render={(props) => (
						<ConsultantDashboardLayout>
							<ConsultantDashboard {...props} />
						</ConsultantDashboardLayout>
					)}
				/>
				<Route component={NotFoundPage} />
			</Switch>
		);
	}
}

export default connect(mapStateToProps)(Routes);
