import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import './assets/contact.scss';
import { Container } from 'react-bootstrap';
import { makeSelectOrgInfo } from '../App/selectors';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import { Link } from 'react-router-dom';
import { postContactUsRequest, clearMessage } from './actions';
import {
  makeSelectSuccess,
  makeSelectResponse,
  makeSelectError,
  makeSelectRequesting,
} from './selectors';
import ContactUsForm from './components/ContactUsForm';
import CustomToaster from 'components/CustomToaster';
import fb from './assets/facebook.svg';
import tw from './assets/twitter.svg';
import yt from './assets/youtube.svg';
import ig from './assets/instagram.svg';

import contact from './assets/contact.svg';
export class ContactUs extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        first_name: null,
        last_name: null,
        message: null,
        value: [],
      },
      errors: {},
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.errorResponse === '' &&
      nextProps.successResponse !== this.props.successResponse
    ) {
      this.setState({
        data: {
          first_name: null,
          last_name: null,
          message: null,
        },
      });
      grecaptcha.reset();
    }
  }
  componentWillUnmount() {
    this.props.clearAllMessage();
  }

  handleChange = e => {
    const { errors } = this.state;
    if (!!errors && errors[e.target.name] !== null)
      delete errors[e.target.name];
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    });
  };

  onRecaptchaChange = e => {
    this.setState(state => ({
      data: { ...state.data, reCaptcha: e },
    }));
  };

  validate = () => {
    let { data, errors } = this.state;
    if (!data.first_name) errors.first_name = 'First Name is Required';
    if (!data.last_name) errors.last_name = 'Last Name is Required';
    if (!data.email) errors.email = 'Email is Required';
    if (data.email && !this.validateEmail(data.email)) {
      errors.email = 'Invalid Email';
    }
    if (!data.message) errors.message = 'Message is Required';

    return errors;
  };

  validateEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  handleSubmit = e => {
    e.preventDefault();
    const { data } = this.state;
    const errors = this.validate();
    this.setState({ errors });
    this.setState({
      data: {
        ...this.state.data,
      },
    });
    if (Object.keys(errors).length === 0) {
      this.props.postContactUs(data);
    }
  };

  render() {
    const { data, errors } = this.state;
    const { successResponse, errorResponse, orgInfo } = this.props;
    const orgInfoData =
      orgInfo && orgInfo.size > 0 ? orgInfo.toJS().dataList[0] : {};
    console.log(orgInfoData);

    let message = null;
    if (successResponse) {
      message = (
        <CustomToaster message={successResponse} timeout={5000} success />
      );
    }
    if (errorResponse) {
      message = <CustomToaster message={errorResponse} timeout={5000} error />;
    }

    return (
      <div className="contact">
        {message && message}
        <Helmet>
          <title>Contact Us</title>
          <meta name="contact-us" content="Contact-Us Form" />
        </Helmet>
        <div className="title__wrap">
          <div className="container">
            <h1>Contact</h1>
          </div>
        </div>
        <Container>
          <div className="content__wrap">
            <div className="row ">
              <div className="col-lg-6">
                {orgInfoData && Object.keys(orgInfoData).length > 0 && (
                  <div className="text-center">
                    {/* <h2 className="mb-3">
                      {orgInfoData.organisation_name}
                    </h2> */}
                    <h2 className="mb-3">Send us a message</h2>
                    <img className="img-fluid" src={contact} alt="" />
                    <p className="mt-3">
                      <b>{orgInfoData?.phone_number}</b>
                    </p>
                    {/* <p>
                      {orgInfoData && orgInfoData.email && (
                        <a href="mailto:{orgInfoData}">{orgInfoData?.email}</a>
                      )}
                    </p> */}
                    {orgInfoData && orgInfoData.facebook && (
                      <a target="_blank" href={orgInfoData?.facebook}>
                        <img src={fb} alt="" />
                      </a>
                    )}
                    {orgInfoData && orgInfoData.instagram && (
                      <a target="_blank" href={orgInfoData?.instagram}>
                        <img src={ig} alt="" />
                      </a>
                    )}
                    {orgInfoData && orgInfoData.twitter && (
                      <a target="_blank" href={orgInfoData?.twitter}>
                        <img src={tw} alt="" />
                      </a>
                    )}
                    {orgInfoData && orgInfoData.youtube && (
                      <a target="_blank" href={orgInfoData?.youtube}>
                        <img src={yt} alt="" />
                      </a>
                    )}
                  </div>
                )}
              </div>
              <div className="col-lg-6 ">
                <ContactUsForm
                  data={data}
                  errors={errors}
                  handleChange={this.handleChange}
                  onRecaptchaChange={this.onRecaptchaChange}
                  handleSubmit={this.handleSubmit}
                  isRequesting={this.props.isRequesting}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isSuccess: makeSelectSuccess(),
  isRequesting: makeSelectRequesting(),
  successResponse: makeSelectResponse(),
  errorResponse: makeSelectError(),
  orgInfo: makeSelectOrgInfo(),
});

const mapDispatchToProps = dispatch => ({
  postContactUs: data => dispatch(postContactUsRequest(data)),
  clearAllMessage: () => dispatch(clearMessage()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'contactUs', reducer });
const withSaga = injectSaga({ key: 'contactUs', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ContactUs);
