import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';

import HomePage from 'containers/HomePage/Loadable';
import ContactUsPage from 'containers/ContactUs/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import HomeLayout from 'containers/HomeLayout';
import AboutDetail from '../About/ViewDetail/Loadable';
// import ImageGallery from '../ImageGallery/Loadable';
import HowCanHelp from '../../containers/HowYouCanHelp';
import Search from '../Search/SearchList';
import { makeSelectLocation } from './selectors';
import PrivacyPolicy from '../PrivacyPolicy';

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
        <Route
          exact
          path="/contact-us"
          render={props => (
            <HomeLayout>
              <ContactUsPage {...props} />
            </HomeLayout>
          )}
        />

        <Route
          path="/about-us"
          render={props => (
            <HomeLayout>
              <AboutDetail {...props} />
            </HomeLayout>
          )}
        />

        {/* <Route
          exact
          path="/image-gallery"
          render={props => (
            <HomeLayout>
              <ImageGallery {...props} />
            </HomeLayout>
          )}
        /> */}
        <Route
          exact
          path="/media-coverage"
          render={props => (
            <HomeLayout>
              <MediaCoverage {...props} />
            </HomeLayout>
          )}
        />
        <Route
          exact
          path="/help-us"
          render={props => (
            <HomeLayout>
              <HowCanHelp {...props} />
            </HomeLayout>
          )}
        />

        <Route
          exact
          path="/privacy-policy"
          render={props => (
            <HomeLayout>
              <PrivacyPolicy {...props} />
            </HomeLayout>
          )}
        />

        <Route
          exact
          path="/search/:query"
          render={props => (
            <HomeLayout>
              <Search {...props} />
            </HomeLayout>
          )}
        />
        <Route
          exact
          path=""
          render={props => (
            <HomeLayout>
              <NotFoundPage />
            </HomeLayout>
          )}
        />
      </Switch>
    );
  }
}

export default connect(mapStateToProps)(Routes);
