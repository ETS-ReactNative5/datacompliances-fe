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
        <footer id="footer" className="hello">
          <div className="container">
            <div className="row">
              <div className="col-md-4 text-center column__wrap">
                <div className="footer__logo">
                  <Link to="/">
                    <img
                      className="img-fluid"
                      src={logo}
                      alt="The Giving Brick"
                    />
                  </Link>
                </div>
                <p className="mb-0 font-italic">
                  A Kansas City-Based, <br />
                  Non-Profit Organization
                </p>
              </div>
              <div className="col-md-4 text-center column__wrap">
                <h5>Quick Links</h5>
                <ul className="sub__link ">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about-us">About us</Link>
                  </li>
                  <li>
                    <Link to="/help-us">Help Us</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>

              {orgInfoData && Object.keys(orgInfoData).length > 0 && (
                <div className="col-md-4 column__wrap">
                  <h5>Contact</h5>
                  <div className="icon__holder">
                    {/* <img className="img-fluid" src={message} alt="email" /> */}
                    <Link to="/contact-us">Click to Contact</Link>
                  </div>
                  <div className="pt-2">
                    <div className="d-flex align-items-center justify-content-md-center justify-content-lg-start">
                      <span className="mr-2">Follow us:</span>
                      {orgInfoData && orgInfoData.facebook && (
                        <a target="_blank" href={orgInfoData.facebook}>
                          <img className="img-fluid" src={fb} alt="facebook" />
                        </a>
                      )}
                      {orgInfoData && orgInfoData.twitter && (
                        <a target="_blank" href={orgInfoData.twitter}>
                          <img className="img-fluid" src={tw} alt="twitter" />
                        </a>
                      )}
                      {orgInfoData && orgInfoData.youtube && (
                        <a target="_blank" href={orgInfoData.youtube}>
                          <img className="img-fluid" src={yt} alt="youtube" />
                        </a>
                      )}
                      {orgInfoData && orgInfoData.instagram && (
                        <a target="_blank" href={orgInfoData.instagram}>
                          <img
                            className="img-fluid"
                            src={ins}
                            alt="instagram"
                          />
                        </a>
                      )}
                      {/* <a
                        target="_blank"
                        href="https://www.instagram.com/thegivingbrick/"
                      >
                        <img src={ins} alt="" />
                      </a> */}
                    </div>
                    <p>
                      {' '}
                      <br />
                      #buildinghappiness
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="sub__footer col-md-12">
              <p className="m-0 d-flex flex-wrap align-items-center justify-content-center">
                <span>
                  {new Date().getFullYear()} &copy; The Giving Brick, Inc.
                </span>
                <span className="divider" />
                <Link to="/privacy-policy">Privacy Policy</Link>
                <span className="divider" />
                <span>
                  The Giving Brick is a federally recognized 501(c)(3)
                </span>
                <span className="divider" />
                <span>Federal Tax ID number 47-1427892</span>
              </p>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  orgInfo: makeSelectOrgInfo(),
});

export default connect(mapStateToProps)(Footer);
