import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Dropdown, Label } from 'semantic-ui-react';
import Logo from 'assets/images/pcsc.png';
import './assets/style.scss';
class TopNavigation extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { cartItems } = this.props;
    const avatar = <div><Image src={this.props.profilePic} avatar />
    <span>{this.props.username}</span>
  </div>;
    return (
      <div className="header-wrap">
        
        <ul className="header-menu">
          <li className="nav__item cart-icon"><Link to="/user/dashboard/cart"><i className="icon icon-shopping-cart"/> </Link> &nbsp;&nbsp;</li>  
          {/* <span className="cart-number">0</span> */}
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
