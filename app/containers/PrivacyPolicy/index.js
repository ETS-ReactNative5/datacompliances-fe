import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { showDialog } from '../App/actions';

import {
  makeSelectContentTemplate,
  makeSelectOrgInfo,
} from 'containers/App/selectors';
export class PrivacyPolicy extends React.Component {
  state = {
    show: false,
    page: 1,
    perPage: 3,
    query: {},
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { contentTemplate, orgInfo } = this.props;
    const contentTemplateData = contentTemplate?.toJS();
    const orgInfoData = orgInfo && orgInfo?.toJS().dataList[0];
    return (
      <React.Fragment>
        <div className="title__wrap">
          <div className="container">
            <h1>Privacy Policy</h1>
          </div>
        </div>
        <div className="content__wrap">
          <div className="container">
            <div className="row pb-5">
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    contentTemplateData['privacy-policy']?.template_content,
                }}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  contentTemplate: makeSelectContentTemplate(),
  orgInfo: makeSelectOrgInfo(),
});

const mapDispatchToProps = dispatch => ({
  showDialog: dialog => dispatch(showDialog(dialog)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PrivacyPolicy);
