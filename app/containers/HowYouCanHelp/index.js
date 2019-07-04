import React from 'react';
import { Modal } from 'react-bootstrap';
import './assets/style.scss';
import Lego from './assets/lego.svg';
import Dollar from './assets/dollar.svg';
import Hands from './assets/hands.svg';
import Paypal from './assets/paypal.png';
import DropOff from '../DropOff/Loadable';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { showDialog } from '../App/actions';
import DonationContact from '../DonationContact';
import CustomToaster from 'components/CustomToaster';
import {
  makeSelectResponse,
  makeSelectError,
  makeSelectRequesting,
} from '../DonationContact/selectors';
import {
  makeSelectContentTemplate,
  makeSelectOrgInfo,
} from 'containers/App/selectors';
export class HowcanHelp extends React.Component {
  state = {
    show: false,
    page: 1,
    perPage: 3,
    query: {},
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleShow = type => {
    this.setState({ show: true, type });
  };

  handleClose = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const { successResponse, contentTemplate, orgInfo } = this.props;
    const contentTemplateData = contentTemplate?.toJS();
    const orgInfoData = orgInfo && orgInfo?.toJS().dataList[0];
    let message = null;
    if (successResponse) {
      message = (
        <CustomToaster
          message={successResponse}
          timeout={5000}
          type="success"
        />
      );
    }
    return (
      <React.Fragment>
        {successResponse}
        {message && message}
        <div className="title__wrap">
          <div className="container">
            <h1>How can you help</h1>
          </div>
        </div>
        <div className="content__wrap">
          <div className="container">
            <h4>MAKE A DONATION</h4>
            <div className="row pb-5">
              <div className="col-md-4">
                <div className="content__box">
                  <img src={Lego} alt="LEGO PIECES OR SETS" />
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        contentTemplateData['lego-pieces-or-sets']
                          ?.template_content,
                    }}
                  />
                  <span
                    className="link"
                    onClick={() => this.handleShow('LEGO_BRICKS_AND_SET')}
                  >
                    Contact Us for Details.
                  </span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="content__box red">
                  <img src={Dollar} alt="Charitable Contributions" />
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        contentTemplateData['charitable-contributions']
                          ?.template_content,
                    }}
                  />

                  {orgInfoData?.paypal && (
                    <a href={orgInfoData?.paypal} target="_blank">
                      <img src={Paypal} alt="paypal" />
                    </a>
                  )}
                  <span
                    className="link"
                    onClick={() => this.handleShow('CHARITABLE_CONTRIBUTIONS')}
                  >
                    Contact Us for Details.
                  </span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="content__box green">
                  <img src={Hands} alt="Volunteer Opportunities " />
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        contentTemplateData['volunteer-opportunities']
                          ?.template_content,
                    }}
                  />
                  <p>
                    <span
                      className="link"
                      onClick={() => this.handleShow('VOLUNTEER_OPPORTUNIES')}
                    >
                      Contact Us for Details.
                    </span>
                  </p>
                </div>
              </div>
              {this.state.show && (
                <Modal show onHide={this.handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Contact Us</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <DonationContact
                      type={this.state.type}
                      handleClose={this.handleClose}
                      handleMessage={this.handleMessage}
                    />
                  </Modal.Body>
                </Modal>
              )}
            </div>
            <DropOff />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isRequesting: makeSelectRequesting(),
  successResponse: makeSelectResponse(),
  errorResponse: makeSelectError(),
  contentTemplate: makeSelectContentTemplate(),
  orgInfo: makeSelectOrgInfo(),
});

const mapDispatchToProps = dispatch => ({
  showDialog: dialog => dispatch(showDialog(dialog)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HowcanHelp);
