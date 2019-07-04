import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { Link } from 'react-router-dom';
import { makeGetNotice } from '../selectors';
import { getNewsRequest } from '../actions';
import reducer from '../reducer';
import saga from '../saga';
import moment from 'moment';
import '../assets/news.scss';
import { DOCUMENT_URL_UPDATE } from 'containers/App/constants';
import calender from '../assets/calender.svg';
export class NewsList extends React.Component {
  state = {
    page: 1,
    perPage: 3,
    query: {},
  };
  componentDidMount() {
    const { page, perPage, query } = this.state;
    this.props.fetchNews(page, perPage, '');
  }
  render() {
    const { news } = this.props;
    let data = news && news.size > 0 ? news.toJS() : '';
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  news: makeGetNotice(),
});

const mapDispatchToProps = dispatch => ({
  fetchNews: (page, perPage, query) =>
    dispatch(getNewsRequest(page, perPage, query)),
});

const withReducer = injectReducer({ key: 'news', reducer });
const withSaga = injectSaga({ key: 'news', saga });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NewsList);
