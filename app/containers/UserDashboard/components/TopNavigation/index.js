import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Dropdown, Label } from 'semantic-ui-react';
import Logo from 'assets/images/pcsc.png';
class TopNavigation extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const avatar = <Image src={this.props.profilePic} avatar />;
    return (
      <div className="dashboard__header">
        <div className="toggle_nav">
          <button
            type="button"
            className="navbar-toggle"
            onClick={this.props.handleToggleSidebar}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
        </div>
        <div className="navbar__logo user_desktop">
          <Image src={Logo} size="small" alt="Medicrony" />
        </div>
        <ul className="header__menu">
          {/* <li className="nav__item">
            <div className="nav__link">
              <i onClick={this.props.showSticky} className="icon-bookmark" />
            </div>
          </li> */}
          <li className="nav__item">
            <div className="nav__link">
              <span className="badge__holder">
                <Link to="/user/dashboard/my-cart" data-tooltip="My-Cart">
                  <i
                    style={{ color: 'black' }}
                    className="icon-shopping-cart"
                  />
                  {this.props.cartSize > 0 && (
                    <Label color="red" size="mini" floating circular>
                      {this.props.cartSize}
                    </Label>
                  )}
                </Link>
              </span>
            </div>
          </li>
          <li className="nav__item">
            <Dropdown trigger={avatar} className="nav__link" direction="left">
              <Dropdown.Menu className="basic-nav-menu">
                <Link
                  to="/user/dashboard/profile/basic-info"
                  role="option"
                  className="item"
                >
                  <i className="icon icon-user" />
                  <span className="text">Profile</span>
                </Link>
                <div
                  role="option"
                  className="item"
                  onClick={this.props.handleLogout}
                >
                  <i className="icon icon-log-out" />
                  <span className="text">Log Out</span>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
      </div>
    );
  }
}

export default TopNavigation;
