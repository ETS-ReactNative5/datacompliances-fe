import React from 'react';
import { connect } from 'react-redux';
import './assets/style.scss';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import { loadDropOffRequest } from './actions';
import {
  makeSelectSuccess,
  makeSelectResponse,
  makeSelectError,
  makeSelectRequesting,
  makeSelectData,
} from './selectors';

export class DropOff extends React.PureComponent {
  state = {
    page: 1,
    perPage: 12,
    query: {},
  };
  componentDidMount() {
    const { page, perPage, query } = this.state;
    this.props.fetchDropOff(page, perPage, query);
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
      <div className="donation__drop text-center">
        <h4 className="mb-4">DONATION DROP OFF LOCATIONS</h4>
        <div className="row">
          {data &&
            data.dataList &&
            data.dataList.map((eachdata, idx) => (
              <div className="col-sm-6 col-md-4" key={`cat${idx}`}>
                <div className="drop__frame">
                  <h5>{eachdata.location_name}</h5>
                  <p className="mb-0">{eachdata.street_name}</p>
                  <p className="mb-0">
                    {eachdata.city} • {eachdata.postal_code}
                  </p>
                  <p className="mb-0">
                    <a target="_blank" href={eachdata.website_link}>
                      {eachdata.website_link}
                    </a>
                  </p>
                  <p className="mb-0 font-weight-bold">
                    {eachdata.phone_number}
                  </p>
                </div>
              </div>
            ))}
        </div>
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
  fetchDropOff: () => dispatch(loadDropOffRequest()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'dropoff', reducer });
const withSaga = injectSaga({ key: 'dropoff', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(DropOff);
