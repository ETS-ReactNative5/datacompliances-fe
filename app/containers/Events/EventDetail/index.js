/**
 *
 * Event
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Container } from 'react-bootstrap';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectSingleData } from '../selector';
import { loadEventByIdRequest } from '../actions';
import reducer from '../reducer';
import saga from '../saga';
import messages from './messages';
import { Link } from 'react-router-dom';

import moment from 'moment';
import { DOCUMENT_URL_UPDATE } from 'containers/App/constants';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';

/* eslint-disable react/prefer-stateless-function */
export class EventDetail extends React.Component {
  state = {};

  componentDidMount() {
    const slug = this.props.match.params.slug
      ? this.props.match.params.slug
      : null;
    this.props.fetchEventDetail(slug);
  }

  render() {
    const { event } = this.props;
    let eventData = event.size > 0 ? event.toJS() : '';
    return (
      <div>
        <Helmet>
          <title>{eventData && eventData.title}</title>
          <meta name="description" content={eventData && eventData.title} />
        </Helmet>
        <React.Fragment>
          <div className="content__wrap">
            <div className="container max__width768">
              {eventData && (
                <React.Fragment>
                  <div className="meta mb-3">
                    <h1 className="mb-0">{eventData && eventData.title}</h1>
                    <div className="date font-weight-bold">
                      <span className="text-lg">
                        {moment(eventData.start_date).format('D MMM')}
                      </span>
                      <span className="px-1">-</span>
                      <span className="text-lg">
                        {moment(eventData.end_date).format('D MMM')}
                      </span>
                    </div>
                    {eventData && eventData.facebook_link && (
                      <a
                        target="_blank"
                        className="mr-1"
                        href={eventData.facebook_link}
                      >
                        <i className="icon-facebook" />
                      </a>
                    )}
                    {eventData && eventData.twitter_link && (
                      <a
                        target="_blank"
                        className="mr-1"
                        href={eventData.twitter_link}
                      >
                        <i className="icon-twitter" />
                      </a>
                    )}
                    {eventData && eventData.quick_link && (
                      <a
                        target="_blank"
                        className="mr-1"
                        href={eventData.quick_link}
                      >
                        <i className="icon-link" />
                      </a>
                    )}
                  </div>
                  <div className="mb-3">
                    <img
                      className="img-fluid"
                      src={
                        eventData &&
                        eventData.image_name &&
                        `${DOCUMENT_URL_UPDATE}${
                          eventData.image_name.document_name
                        }`
                      }
                    />
                  </div>
                  <div>{eventData && eventData.event_description}</div>
                </React.Fragment>
              )}
            </div>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  event: makeSelectSingleData(),
});

const mapDispatchToProps = dispatch => ({
  fetchEventDetail: id => dispatch(loadEventByIdRequest(id)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'event', reducer });
const withSaga = injectSaga({ key: 'event', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(EventDetail);
