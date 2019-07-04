import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectEachNotice } from '../selectors';
import { getNewsByIdRequest } from '../actions';
import reducer from '../reducer';
import saga from '../saga';
import moment from 'moment';
import './assets/style.scss';
import { DOCUMENT_URL_UPDATE } from 'containers/App/constants';
import calender from '../assets/calender.svg';
/* eslint-disable react/prefer-stateless-function */
export class NewsDetail extends React.Component {
  state = {};

  componentDidMount() {
    const newsId = this.props.match.params.newsId
      ? this.props.match.params.newsId
      : null;
    if (newsId) this.props.fetchNoticeDetail(newsId);
  }

  render() {
    const { news } = this.props;

    let data = news.size > 0 ? news.toJS() : '';
    return (
      <React.Fragment>
        <Helmet>
          <title>{data && data.title}</title>
          <meta name="description" content="News" />
        </Helmet>
        <div className="content__wrap">
          <div className="container">
            {data && (
              <div className="news__detail max__width768 mx-auto">
                <h1>{data && data.title}</h1>
                <div className="date">
                  <img src={calender} className="mr-1" alt="calender" />
                  {moment(data.added_on).format('MMM Do YYYY')}
                </div>
                {data && data.image_name && (
                  <div className="img__holder">
                    <img
                      className="img-fluid"
                      src={`${DOCUMENT_URL_UPDATE}${
                        data.image_name.document_name
                      }`}
                      alt={data && data.title}
                    />
                  </div>
                )}
                <div
                  dangerouslySetInnerHTML={{
                    __html: data && data.news_body,
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  news: makeSelectEachNotice(),
});

const mapDispatchToProps = dispatch => ({
  fetchNoticeDetail: newsId => dispatch(getNewsByIdRequest(newsId)),
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
)(NewsDetail);
