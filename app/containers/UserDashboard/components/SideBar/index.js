import React from 'react';
import { Image, Icon, Button } from 'semantic-ui-react';
import SideNavigation from './SideNavigation';
import CustomScroll from 'react-custom-scroll';
import Logo from 'assets/images/pcsc.png';
import {Link} from 'react-router-dom';
import './assets/style.scss';
class SideBar extends React.Component {
  render() {
    return (
      <div class="sidebar-wrap"
      >
        <div className=" ">
          <Image src={Logo} size="small" alt="" />
        </div>
        <div className="">
          <div className="">
            <Image
              size="mini"
              avatar
              src={this.props.profilePic}
              alt="User Name"
            />
          </div>
          <div className="">
            <span className="">{this.props.username}</span>
            <span className="">
              <Icon
                className=""
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
