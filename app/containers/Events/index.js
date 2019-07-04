import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectData } from './selector';
import { loadEventRequest } from './actions';
import { DOCUMENT_URL_UPDATE } from '../App/constants';
import reducer from './reducer';
import saga from './saga';
import moment from 'moment';
import './assets/events.scss';
import calender from './assets/calender.svg';
import Pagination from 'components/Pagination';
/* eslint-disable react/prefer-stateless-function */
export class Event extends React.Component {
  state = {
    page: 1,
    perPage: 10,
    query: {},
  };

  componentDidMount() {
    const { page, perPage, query } = this.state;
    this.props.fetchEventList(page, perPage, '');
  }

  onPaginate = (page, perPage) => {
    this.setState({ page, perPage });
    this.props.fetchEventList(page, perPage, this.state.query);
  };

  render() {
    const { event } = this.props;
    const { page, perPage } = this.state;
    const eventData = event.size > 0 ? event.toJS() : '';
    return (
      <React.Fragment>
        <div className="title__wrap">
          <div className="container">
            <h1>Events</h1>
          </div>
        </div>
        <div className="content__wrap list__event">
          <div className="container">
            <div className="row">
              {eventData &&
                eventData.dataList &&
                eventData.dataList.map((eachData, index) => (
                  <div className="col-md-6 pb-3" key={`event${index}`}>
                    <div className="media event__media">
                      <div className="img__holder">
                        <img
                          className="img-fluid"
                          src={`${DOCUMENT_URL_UPDATE}${eachData.image_name &&
                            eachData.image_name.document_name}`}
                          alt={eachData.event_title}
                        />
                      </div>
                      <div className="media__body">
                        <h3 className="mb-0">{eachData && eachData.title}</h3>
                        <div className="date mb-2 font-weight-bold">
                          <span className="text-lg">
                            {moment(eachData.start_date).format('D MMM')}
                          </span>
                          <span className="px-1">-</span>
                          <span className="text-lg">
                            {moment(eachData.end_date).format('D MMM')}
                          </span>
                        </div>
                        {eachData && eachData.facebook_link && (
                          <a
                            target="_blank"
                            className="mr-1"
                            href={eachData.facebook_link}
                          >
                            <i className="icon-facebook" />
                          </a>
                        )}
                        {eachData && eachData.twitter_link && (
                          <a
                            target="_blank"
                            className="mr-1"
                            href={eachData.twitter_link}
                          >
                            <i className="icon-twitter" />
                          </a>
                        )}
                        {eachData && eachData.quick_link && (
                          <a
                            target="_blank"
                            className="mr-1"
                            href={eachData.quick_link}
                          >
                            <i className="icon-link" />
                          </a>
                        )}
                        <div className="text-right">
                          <Link
                            to={`/events/detail/${eachData.slug}`}
                            className="link-sm "
                          >
                            View Detail >>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            {eventData?.totalItems > 10 && (
              <Pagination
                totalItems={eventData?.totalItems}
                perPage={perPage}
                page={page}
                handlePagination={this.onPaginate}
              />
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  event: makeSelectData(),
});

const mapDispatchToProps = dispatch => ({
  fetchEventList: (page, perPage, query) =>
    dispatch(loadEventRequest(page, perPage, query)),
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
)(Event);
