import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { postSearchRequest } from './actions';
import saga from './saga';
import reducer from './reducer';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { compose } from 'redux';
import { Form } from 'react-bootstrap';
import { makeSelectRequesting } from './selectors';
import SearchIcon from './assets/search_new.svg';
import './assets/style.scss';

const mapStateToProps = createStructuredSelector({
  requesting: makeSelectRequesting(),
});

const mapDispatchToProps = dispatch => ({
  postSearchQuery: query => dispatch(postSearchRequest(query)),
});
export class Search extends React.Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { query } = this.state;
    this.props.postSearchQuery(query);
  };

  render() {
    return (
      <Form className="main__search" onSubmit={this.handleSubmit}>
        <div className="form-group mb-0">
          <div className="input__wrap">
            <img className="icon__search" src={SearchIcon} alt="Search" />
            <input
              className="form-control form-control-sm"
              type="text"
              name="query"
              placeholder="Search"
              onChange={this.handleChange}
            />
          </div>
        </div>
      </Form>
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
)(Search);
