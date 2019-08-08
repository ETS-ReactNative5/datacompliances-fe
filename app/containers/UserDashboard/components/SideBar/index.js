import React from 'react';
import { Image, Icon, Button } from 'semantic-ui-react';
import SideNavigation from './SideNavigation';
import CustomScroll from 'react-custom-scroll';
import Logo from 'assets/images/pcsc.png';
import {Link} from 'react-router-dom';
class SideBar extends React.Component {
  render() {
    return (
      <div
        className={
          this.props.sidebar
            ? 'dashboard__sidebar'
            : 'dashboard__sidebar toggle_collapsed'
        }
      >
        <div className="navbar__logo user_mobile">
          <Image src={Logo} size="small" alt="Medicrony" />
        </div>
        <div className="sidebar__profile">
          <div className="sidebar__avatar">
            <Image
              size="mini"
              avatar
              src={this.props.profilePic}
              alt="User Name"
            />
          </div>
          <div className="profile__info">
            <span className="profile__name">{this.props.username}</span>
            <span className="profile__email">
              <Icon
                className="profile__verification"
                color="green"
                name="check circle"
              />
              {this.props && this.props.email && this.props.email}
            </span>
          </div>
        </div>
        <CustomScroll flex="1">
          <SideNavigation />
        </CustomScroll>
        <div className="sidebar__footer">
          <Button.Group widths="2">
            <Link
              className="ui blue icon button"
              data-tooltip="User Profile"
              to="/user/dashboard/profile/basic-info"
            >
              <Icon name="user" />
            </Link>
            <Button
              onClick={this.props.handleLogout}
              data-tooltip="Log Out"
              color="red"
              icon="power off"
            />
          </Button.Group>
        </div>
      </div>
    );
  }
}

export default SideBar;
