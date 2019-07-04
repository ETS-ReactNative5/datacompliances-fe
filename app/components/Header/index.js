import React from 'react';
import './assets/header.scss';
import logo from './assets/logo.png';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { makeSelectOrgInfo } from '../../containers/App/selectors';
import Search from 'containers/Search/Loadable';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import fb from './assets/facebook.svg';
import tw from './assets/twitter.svg';
import yt from './assets/youtube.svg';
import ins from './assets/instagram.svg';

class Header extends React.PureComponent {
  render() {
    const { orgInfo } = this.props;
    const orgInfoData =
      orgInfo && orgInfo.size > 0 ? orgInfo.toJS().dataList[0] : {};

    return (
      <header id="header">
        <div className="top__header ">
          <div className="container">
            <div className="d-flex align-items-center">
              <h5>Broadlink</h5>
              <div className="social__menu ml-auto">
                {orgInfoData && orgInfoData.facebook && (
                  <a target="_blank" href={orgInfoData?.facebook}>
                    <img src={fb} alt="" />
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
                {orgInfoData && orgInfoData.instagram && (
                  <a target="_blank" href={orgInfoData?.instagram}>
                    <img src={ins} alt="" />
                  </a>
                )}
                {/* <a
                  target="_blank"
                  href="https://www.instagram.com/thegivingbrick/"
                >
                  <img src={ins} alt="" />
                </a> */}
              </div>
            </div>
          </div>
        </div>
        <Navbar expand="lg">
          <Container>
            <Link className="navbar-brand" to="/">
              <img className="img-fluid" src={logo} alt="" />
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <NavLink exact className="nav-link" to="/">
                  Home
                </NavLink>
                <NavLink exact className="nav-link" to="/about-us">
                  ABOUT US
                </NavLink>
                <NavLink exact className="nav-link" to="/help-us">
                  HELP US
                </NavLink>
                <NavLink exact className="nav-link" to="/contact-us">
                  CONTACT US
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  orgInfo: makeSelectOrgInfo(),
});

export default connect(mapStateToProps)(Header);
