import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Helmet } from 'react-helmet';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeGetNotice } from './selectors';
import { getNewsRequest } from './actions';
import reducer from './reducer';
import saga from './saga';
import { DOCUMENT_URL_UPDATE } from 'containers/App/constants';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './assets/news.scss';
import calender from './assets/calender.svg';

/* eslint-disable react/prefer-stateless-function */
export class News extends React.Component {
  state = {
    page: 1,
    perPage: 10,
    query: {},
  };

  componentDidMount() {
    const { page, perPage, query } = this.state;
    this.props.fetchNewsList(page, perPage, query);
  }
  onPaginate = (page, perPage) => {
    this.setState({ page, perPage });
    this.props.fetchNewsList(page, perPage, this.state.query);
  };

  render() {
    const { news } = this.props;
    let data = news && news.size > 0 ? news.toJS() : '';
    return (
      <React.Fragment>
        <Helmet>
          <title>News</title>
          <meta name="description" content="News" />
        </Helmet>
        <div className="title__wrap">
          <div className="container">
            <h1>News</h1>
          </div>
        </div>
        <div className="content__wrap">
          <div className="container">
            {data && (
              <div className="row">
                {data.dataList.map((eachData, idx) => (
                  <div className="col-md-6 col-lg-4 mb-4 " key={`data-${idx}`}>
                    <div className="news__card">
                      <div className="img__holder">
                        <img
                          className="img-fluid"
                          src={`${DOCUMENT_URL_UPDATE}${
                            eachData.image_name.document_name
                          }`}
                          alt={eachData.title}
                        />
                      </div>
                      <div className="card__content">
                        <div className="date">
                          <span className="text-lg">
                            <i className="icon-calendar mr-1" />
                            {moment(eachData.added_on).format('MMM Do YYYY')}
                          </span>
                        </div>
                        <h3>{eachData.title}</h3>
                        <p>{eachData.excerpt}</p>
                      </div>
                      <div className="link__wrap text-right">
                        <Link to={`/news/detail/${eachData.slug}`}>
                          View Detail >>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  news: makeGetNotice(),
});

const mapDispatchToProps = dispatch => ({
  fetchNewsList: (page, perPage, query) =>
    dispatch(getNewsRequest(page, perPage, query)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'news', reducer });
const withSaga = injectSaga({ key: 'news', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(News);
