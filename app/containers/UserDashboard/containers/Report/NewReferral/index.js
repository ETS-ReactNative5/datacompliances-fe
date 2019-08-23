import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Button, Header, Image, Modal, Form, Message } from 'semantic-ui-react';
import ModalWrapper from 'components/common/ModalWrapper';
import FormField from 'components/common/Forms/FormField';
import { changeReferralRequest, clearMessage } from './actions';
import {
  makeSelectRequestingReferralChange,
  makeSelectError,
  makeSelectResponse,
} from './selectors';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './sagas';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
// import ReferShare from '../index';
import Toaster from 'components/Toaster';

class NewReferral extends React.Component {
  state = {
    data: {},
    errors: {},
    close: true,
  };

  componentWillUnmount() {
    this.props.clearMessage();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errorResponse != this.props.errorResponse) {
      this.setState({
        errorResponse: nextProps.errorResponse ? nextProps.errorResponse : '',
      });
    }
    if (nextProps.successResponse != this.props.successResponse) {
      this.setState({
        successResponse: nextProps.successResponse
          ? nextProps.successResponse
          : '',
      });
    }
  }
  handleChange = e => {
    e.persist();
    this.setState(state => ({
      data: {
        ...state.data,
        [e.target.name]: e.target.value,
      },
    }));
  };
  validate = () => {
    const { data } = this.state;
    const errors = {};
    if (!data.newCode) errors.newCode = 'Should be 4 to 20 characters';
    if (data.newCode && !data.newCode.match(/^[A-Za-z0-9]{4,20}$/))
      errors.newCode = 'Can only be 4 to 20 alphanumeric characters';
    return errors;
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.props.setReferral(this.state.data);
    }
  };

  handleClose = () => {
    this.setState({ close: !this.state.close });
  };

  render() {
    const { data, errors } = this.state;
    const { isRequesting, errorResponse, successResponse } = this.props;
    const shareUrl = `${window.location.protocol}//${
      window.location.host
    }/refer/`;

    return (
      <div>
        <Button onClick={this.handleClose} content="Change Link" />
        {this.state.close == false && (
          <ModalWrapper
            style={{ transform: 'translateY(10%)' }}
            size="tiny"
            header="Get Custom Referral Link"
            onClose={this.handleClose}
          >
            {successResponse && (
              <Toaster success message={successResponse} timeout={3000} />
            )}
            {errorResponse && (
              <Toaster error message={errorResponse} timeout={3000} />
            )}
            <Form onSubmit={this.handleSubmit}>
              <FormField
                label="Your customized referral link"
                name="newCode"
                value={data.newCode || ''}
                onChange={this.handleChange}
                error={errors.newCode}
              />
              <em className="wordbreak">
                {shareUrl}
                {data.newCode || ''}
              </em>
              <br />
              <br />
              <Button
                type="submit"
                loading={isRequesting}
                disabled={isRequesting}
              >
                Save
              </Button>
            </Form>
          </ModalWrapper>
        )}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isRequesting: makeSelectRequestingReferralChange(),
  successResponse: makeSelectResponse(),
  errorResponse: makeSelectError(),
});

const mapDispatchToProps = dispatch => ({
  setReferral: data => dispatch(changeReferralRequest(data)),
  clearMessage: () => dispatch(clearMessage()),
});

const withReducer = injectReducer({ key: 'newReferral', reducer });
const withSaga = injectSaga({ key: 'newReferral', saga });
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NewReferral);
