import React from 'react';
import './assets/header.scss';
import logo from './assets/logo.png';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { makeSelectOrgInfo } from '../../containers/App/selectors';
import Search from 'containers/Search/Loadable';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

class Header extends React.PureComponent {
  render() {
    const { orgInfo } = this.props;
    const orgInfoData =
      orgInfo && orgInfo.size > 0 ? orgInfo.toJS().dataList[0] : {};

    return (
      <header id="header">
        <Navbar expand="lg">
          <Container>
            <Link className="navbar-brand" to="/">
              {/* <img className="img-fluid" src={logo} alt="" /> */}
              <h1 style={{ color: '#fff' }}>PCSC</h1>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <NavLink exact className="nav-link" to="/">
                  Services
                </NavLink>
                <NavLink exact className="nav-link" to="/about-us">
                  ABOUT US
                </NavLink>
              </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <NavLink exact className="nav-link" to="/">
                  Register
                </NavLink>
                <Button className="btn__primary">Login</Button>
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
