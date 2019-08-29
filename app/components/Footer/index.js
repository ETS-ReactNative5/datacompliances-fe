import React from 'react';
import './assets/footer.scss';
import logo from './assets/logo-alt.png';
import { connect } from 'react-redux';
import message from './assets/message.svg';
import { createStructuredSelector } from 'reselect';
import { makeSelectOrgInfo } from 'containers/App/selectors';
import fb from './assets/facebook.svg';
import tw from './assets/twitter.svg';
import yt from './assets/youtube.svg';
import ig from './assets/instagram.svg';
import { Link } from 'react-router-dom';
import ins from './assets/instagram.svg';

export class Footer extends React.PureComponent {
  render() {
    const { orgInfo } = this.props;
    const orgInfoData =
      orgInfo && orgInfo.size > 0 ? orgInfo.toJS().dataList[0] : {};
    return (
      <React.Fragment>
        <footer id="footer" className="">
          <div className="d-flex justify-content-between">
            <div><a href=" https://www.esrtech.io/" target="_blank">Powered by: ESR LLC</a></div>

            <div>Copyright(2019)</div>

            <div>
              <a href="https://www.esrtech.io/privacy-policy.html" target="_blank"> Privacy </a>/ <a href="https://www.esrtech.io/term-of-use.html" target="_blank"> Terms of use </a>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  // orgInfo: makeSelectOrgInfo(),
});

export default connect(mapStateToProps)(Footer);
