/**
 *
 * Search Results
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { loadSearchResultRequest } from './actions';
import { Link } from 'react-router-dom';
import saga from './saga';
import reducer from './reducer';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { compose } from 'redux';
import { Container } from 'react-bootstrap';
import { makeSelectRequesting, makeSelectData } from './selectors';
import { DOCUMENT_URL_UPDATE } from '../App/constants';

const mapStateToProps = createStructuredSelector({
  requesting: makeSelectRequesting(),
  data: makeSelectData(),
});

const mapDispatchToProps = dispatch => ({
  loadSearchResultRequest: (perPage, page, query) =>
    dispatch(loadSearchResultRequest(perPage, page, query)),
});

/* eslint-disable react/prefer-stateless-function */
export class SearchResult extends React.Component {
  state = {
    page: 1,
    perPage: 10,
    query: '',
  };

  componentDidMount() {
    let search_query = this.props.match.params.query
      ? this.props.match.params.query
      : '';
    const { page, perPage } = this.state;
    if (search_query) {
      this.props.loadSearchResultRequest(page, perPage, search_query);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data != this.props.data && nextProps.data.size > 0) {
      this.setState({
        data: nextProps.data.toJS(),
      });
    }
    if (nextProps.match.params.query !== this.props.match.params.query)
      this.props.loadSearchResultRequest(
        this.state.page,
        this.perPage,
        nextProps.match.params.query,
      );
  }

  render() {
    const { query } = this.state;
    const { requesting, data } = this.props;
    let searchData =
      data && Object.keys(data.toJS()).length > 0 ? data.toJS() : {};
    return (
      <div className="content__wrap">
        <Container>
          {searchData && Object.keys(searchData).length > 0 && (
            <p>
              Search Result for <b>{this.props.match.params.query}</b>
            </p>
          )}
          {Object.keys(searchData).length > 0 ? (
            Object.keys(searchData).map((eachCategory, index) => {
              return (
                <div key={`category-${index}`}>
                  {searchData[eachCategory].length > 0 && (
                    <React.Fragment>
                      {/* <strong className="title">{eachCategory}</strong> */}
                      <ul>
                        {searchData[eachCategory].length > 0 &&
                          searchData[eachCategory].map((eachResult, idx) => (
                            <li key={`result=${idx}`}>
                              {eachResult.image_name && (
                                <img
                                  src={`${DOCUMENT_URL_UPDATE}${
                                    eachResult.image_name.document_name
                                  }`}
                                  alt=""
                                />
                              )}
                              {eachCategory == 'media_coverage' ? (
                                <Link to={'/media-coverage'}>
                                  {eachResult.title}
                                </Link>
                              ) : (
                                <Link
                                  to={`/${eachCategory}/detail/${
                                    eachResult.slug
                                  }`}
                                >
                                  {eachResult.title}
                                </Link>
                              )}
                            </li>
                          ))}
                      </ul>
                    </React.Fragment>
                  )}
                </div>
              );
            })
          ) : (
            <div>
              No results found! <b>{this.props.match.params.query}</b>
            </div>
          )}
        </Container>
      </div>
    );
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'search', reducer });
const withSaga = injectSaga({ key: 'search', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SearchResult);
