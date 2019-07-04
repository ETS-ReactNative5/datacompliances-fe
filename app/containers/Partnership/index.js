import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Container } from 'react-bootstrap';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import { loadPartenershipRequest } from './actions';
import {
  makeSelectSuccess,
  makeSelectResponse,
  makeSelectError,
  makeSelectRequesting,
  makeSelectData,
} from './selector';
import './assets/style.scss';
import { DOCUMENT_URL } from 'containers/App/constants';

export class Partnership extends React.PureComponent {
  state = {
    page: 1,
    perPage: 5,
    query: {},
  };
  componentDidMount() {
    const { page, perPage, query } = this.state;
    this.props.fetchPartenership(page, perPage, query);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data && nextProps.data.size > 0) {
      this.setState({
        data: nextProps.data.toJS(),
      });
    }
  }

  render() {
    const { data } = this.state;
    return (
      <div className="partnership">
        {data && data.dataList && (
          <div className="container">
            <h5>PARTNERSHIP</h5>
            <ul>
              {data.dataList.map((eachdata, idx) => (
                <li key={`cat${idx}`}>
                  <span className="mr-2 text-uppercase font-weight-bold">
                    {eachdata.company_name}
                  </span>
                  <a href={eachdata.website_link}>Learn More</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isSuccess: makeSelectSuccess(),
  isRequesting: makeSelectRequesting(),
  successResponse: makeSelectResponse(),
  errorResponse: makeSelectError(),
  data: makeSelectData(),
});

const mapDispatchToProps = dispatch => ({
  fetchPartenership: () => dispatch(loadPartenershipRequest()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'partenership', reducer });
const withSaga = injectSaga({ key: 'partenership', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Partnership);
