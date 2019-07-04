import React from 'react';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectLocation } from 'containers/App/selectors';
import BlogList from './BlogList';
import BlogDetail from './Detail';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation()
});

function BlogRoutes({ location }) {
  return (
    <Switch location={location}>
      <Route exact path="/blog/:blog_id" render={props => <BlogDetail {...props} />} />
      <Route exact path="/blog" render={props => <BlogList {...props} />} />
      <Route exact path="/blog/category/:category_id" render={props => <BlogList {...props} />} />
      <Route exact path="/blog/tags/:tags" render={props => <BlogList {...props} />} />
      <Route exact path="" component={NotFoundPage} />
    </Switch>
  );
}

export default connect(mapStateToProps)(BlogRoutes);
