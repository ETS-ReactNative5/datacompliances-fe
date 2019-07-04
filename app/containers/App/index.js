/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { loadOrganizationInfoRequest } from './actions';
import Routes from './Routes';
import {
  makeSelectLocation,
  makeSelectError,
  makeSelectLoading,
  makeSelectOrgInfo,
  makeSelectDialog,
} from './selectors';
import { loadContentTemplateRequest } from 'containers/App/actions';

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation(),
  dialog: makeSelectDialog(),
});

const mapDispatchToProps = dispatch => ({
  fetchOrganizationInfo: () => dispatch(loadOrganizationInfoRequest()),
  fetchContentTemplate: () => dispatch(loadContentTemplateRequest()),
});

class App extends React.Component {
  componentDidMount() {
    this.props.fetchOrganizationInfo();
    this.props.fetchContentTemplate();
  }

  render() {
    const { dialog } = this.props;
    return (
      <React.Fragment>
        <Helmet
          titleTemplate="%s - The Giving Brick"
          defaultTitle="The Giving Brick"
        >
          <meta name="description" content="The Giving Brick" />
        </Helmet>
        {dialog && dialog.size > 0 && dialog.toJS()}
        <Routes location={this.props.location} />
      </React.Fragment>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
