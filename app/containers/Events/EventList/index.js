import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectData } from '../selector';
import { loadEventRequest } from '../actions';
import reducer from '../reducer';
import saga from '../saga';
import moment from 'moment';
import './assets/event.scss';
import { Link } from 'react-router-dom';
import { DOCUMENT_URL_UPDATE } from 'containers/App/constants';
import calender from '../assets/calender.svg';
export class EventList extends React.Component {
  state = {
    page: 1,
    perPage: 3,
    query: {},
  };

  componentDidMount() {
    const { page, perPage, query } = this.state;
    this.props.fetchEvents(page, perPage, '');
  }

  render() {
    const { event } = this.props;
    let data = event.size > 0 ? event.toJS() : '';

    return (
      <div className="event__list">
        <div className="row">
          <div className="col-md-5">
            <div className="media event__media full-width">
              <div className="img__holder">
                <img
                  className="img-fluid"
                  src={`${DOCUMENT_URL_UPDATE}${
                    data?.dataList[0]?.image_name?.document_name
                  }`}
                  alt={data?.dataList[0]?.title}
                />
              </div>
              <div className="media-body mt-2">
                <h3 className="entry__title">{data?.dataList[0]?.title}</h3>
                <div className="date font-weight-bold">
                  <i className="icon-calendar mr-1" />
                  <span className="text-lg">
                    {moment(data?.dataList[0]?.start_date).format('D MMM')}
                  </span>
                  <span className="px-1">-</span>
                  <span className="text-lg">
                    {moment(data?.dataList[0]?.end_date).format('D MMM')}
                  </span>
                </div>
                {data && data?.dataList[0]?.facebook_link && (
                  <a
                    target="_blank"
                    className="mr-1"
                    href={data?.dataList[0]?.facebook_link}
                  >
                    <i className="icon-facebook" />
                  </a>
                )}
                {data && data?.dataList[0]?.twitter_link && (
                  <a
                    target="_blank"
                    className="mr-1"
                    href={data?.dataList[0]?.twitter_link}
                  >
                    <i className="icon-twitter" />
                  </a>
                )}
                {data && data?.dataList[0]?.quick_link && (
                  <a
                    target="_blank"
                    className="mr-1"
                    href={data?.dataList[0]?.quick_link}
                  >
                    <i className="icon-link" />
                  </a>
                )}
                <div className="pt-2">
                  <Link
                    className="btn btn-primary btn-sm text-uppercase font-weight-bold"
                    to={`/events/detail/${data?.dataList[0]?.slug}`}
                  >
                    View Event
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            {data &&
              data?.dataList?.map((eachEvent, index) => {
                if (index !== 0)
                  return (
                    <div
                      className="event__media media mb-4"
                      key={`event-${index}`}
                    >
                      <div className="img__holder mr-2">
                        <img
                          className="img-fluid"
                          src={`${DOCUMENT_URL_UPDATE}${eachEvent.image_name &&
                            eachEvent.image_name.document_name}`}
                          alt={eachEvent.title}
                        />
                      </div>
                      <div className="media-body">
                        <h5 className="entry__title sm__text">
                          {eachEvent.title}
                        </h5>
                        <div className="date font-weight-bold">
                          <i className="icon-calendar mr-1" />
                          <span className="text-lg">
                            {moment(eachEvent?.start_date).format('D MMM')}
                          </span>
                          <span className="px-1">-</span>
                          <span className="text-lg">
                            {moment(eachEvent?.end_date).format('D MMM')}
                          </span>
                        </div>
                        {eachEvent && eachEvent?.facebook_link && (
                          <a
                            target="_blank"
                            className="mr-1"
                            href={eachEvent?.facebook_link}
                          >
                            <i className="icon-facebook" />
                          </a>
                        )}
                        {eachEvent && eachEvent.twitter_link && (
                          <a
                            target="_blank"
                            className="mr-1"
                            href={eachEvent.twitter_link}
                          >
                            <i className="icon-twitter" />
                          </a>
                        )}
                        {eachEvent && eachEvent.quick_link && (
                          <a
                            target="_blank"
                            className="mr-1"
                            href={eachEvent?.quick_link}
                          >
                            <i className="icon-link" />
                          </a>
                        )}
                        <div className="pt-2">
                          <Link
                            className="btn btn-primary btn-sm text-uppercase font-weight-bold"
                            to={`/events/detail/${eachEvent.slug}`}
                          >
                            View Event
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
              })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  event: makeSelectData(),
});

const mapDispatchToProps = dispatch => ({
  fetchEvents: (page, perPage, query) =>
    dispatch(loadEventRequest(page, perPage, query)),
});

const withReducer = injectReducer({ key: 'event', reducer });
const withSaga = injectSaga({ key: 'event', saga });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(EventList);
