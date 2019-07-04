import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectData } from './selectors';
import { loadFinancialRequest } from './actions';
import reducer from './reducer';
import saga from './saga';

export class Financial extends React.Component {
  state = {
    page: 1,
    perPage: 1,
    query: {},
  };

  componentDidMount() {
    const { page, perPage, query } = this.state;
    this.props.fetchFinancial(page, perPage, query);
  }

  componentWillReceiveProps(nextProps) {}

  render() {
    const { finance } = this.props;
    let data = finance.size > 0 ? finance.toJS() : '';
    return (
      <div className="finance">
        {data &&
          data.dataList &&
          data.dataList.map((eachData, index) => (
            <div key={`finance${index}`}>
              <div>{eachData && eachData.excerpt}</div>
              <Link to={`/finance/detail/${eachData.slug}`}>Read More</Link>
            </div>
          ))}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  finance: makeSelectData(),
});

const mapDispatchToProps = dispatch => ({
  fetchFinancial: (page, perPage, query) =>
    dispatch(loadFinancialRequest(page, perPage, query)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'finance', reducer });
const withSaga = injectSaga({ key: 'finance', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Financial);
