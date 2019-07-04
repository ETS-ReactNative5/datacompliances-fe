import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './sagas';
import { compose } from "redux";

import {
  subscriptionRequest
} from './actions';
import {
  makeSelectSuccessResponse,
  makeSelectErrorResponse
} from './selectors';

import SubscriptionForm from './components/suscribeForm';
import Toaster from '../../components/Toaster';


const mapDispatchToProps = (dispatch) => ({
  subscribe: (value) => dispatch(subscriptionRequest(value))
});

const mapStateToProps = createStructuredSelector({
  successResponse: makeSelectSuccessResponse(),
  errorResponse: makeSelectErrorResponse()
});

class SubscriptionPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      subscribe: {
        subscriber_email: '',
      },
      errors: '',
      success: ''
    };
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ success: '' });
    this.setState({ errors: '' });
    const err = nextProps.errorResponse;
    if (err) {
      const error = err.message;
      this.setState({ errors: error || '' });
    }
    const succ = nextProps.successResponse;
    if (succ) {
      const success = succ.message;
      this.setState({ success: success || '' });
    }
  };

  componentWillUnmount() {
    this.setState({
      subscribe: {
        subscriber_email: '',
      },
      errors: '',
      success: ''
    });
  };
  handleMessageClear = () => {
    this.setState({
      errors: '',
      success: ''
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.subscribe(this.state.subscribe)
  };


  handleChange = e => {
    const fieldName = e.target.name;
    const label = e.target.placeholder;
    this.setState(
      {
        subscribe: { ...this.state.subscribe, [e.target.name]: e.target.value }
      }
    );
  };

  render() {
    const { successResponse, errorResponse } = this.props
    return (
      <div>
        {successResponse && <Toaster successMessage={successResponse} type="success" />}
        {errorResponse && <Toaster errorMessage={errorResponse} type="danger" />}
        <SubscriptionForm
          subscriptionObj={this.state.subscribe}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          errormessage={this.state.errors}
          successmessage={this.state.success}
          clearMessasge={this.handleMessageClear}
        />
      </div>
    );
  }
}

const withReducer = injectReducer({ key: 'subscribe', reducer });
const withSaga = injectSaga({ key: 'subscribe', saga });
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SubscriptionPage);

