import React from 'react';
import { Link } from 'react-router-dom';
import { Accordion, Menu } from 'semantic-ui-react';

const mainMenu = [
  // {
  //   title: 'My-Packages',
  //   path: '/user/dashboard/my-packages',
  //   icon: 'icon-package',
  // },
  // {
  //   title: 'Package List',
  //   path: '/user/dashboard/package',
  //   icon: 'icon-heart',
  // },
  {
    title: 'Packages',
    path: '/',
    icon: 'icon-package',
    subMenues: [
      {
        title: 'My-Packages',
        path: '/user/dashboard/my-packages',
        group_title: 'icon-package',
      },
      {
        title: 'Package List',
        path: '/user/dashboard/package',
        group_title: 'icon-package',
      },
    ],
  },
    {
    title: 'Product',
    path: '/',
    icon: 'icon-file',
    subMenues: [
      {
        title: 'My Product',
        path: '/user/dashboard/my-products',
        group_title: 'my-product',
      },
      {
        title: 'Available Products',
        path: '/user/dashboard/product',
        group_title: 'available-product',
      },
    ],
  },
];

class SideNavigation extends React.Component {
  state = { activeIndex: 0 };
  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;
    this.setState({ activeIndex: newIndex });
  };
  render() {
    const { activeIndex } = this.state;
    return (
      <Accordion as={Menu} vertical className="dashboard__sidenav">
        <Menu.Item>
          <Link className="nav__link" to="/user/dashboard/">
            <span className="nav__icon">
              <i className="icon-grid" />
            </span>
            <span className="nav__text">Dashboard</span>
          </Link>
        </Menu.Item>
        {mainMenu &&
          mainMenu.length > 0 &&
          mainMenu.map((main, idx) => {
            if (main.subMenues) {
              return (
                <Menu.Item key={`sub${idx}`}>
                  {main.subMenues.length > 0 && (
                    <div>
                      <Accordion.Title
                        active={activeIndex === idx}
                        index={idx}
                        onClick={this.handleClick}
                      >
                        <span className="nav__link">
                          <span className="nav__icon">
                            <i className={main.icon} />
                          </span>
                          <span className="nav__text">{main.title}</span>
                        </span>
                      </Accordion.Title>
                      <Accordion.Content active={activeIndex === idx}>
                        {main.subMenues.map((menu, idx) => (
                          <div key={idx}>
                            <Link className="nav__link" to={menu.path}>
                              <span className="nav__icon">
                                <i className={menu.icon} />
                              </span>
                              <span className="nav__text">{menu.title}</span>
                            </Link>
                          </div>
                        ))}
                      </Accordion.Content>
                    </div>
                  )}
                </Menu.Item>
              );
            } else
              return (
                <Menu.Item key={`main${idx}`}>
                  <Link className="nav__link" to={main.path}>
                    <span className="nav__icon">
                      <i className={main.icon} />
                    </span>
                    <span className="nav__text">{main.title}</span>
                  </Link>
                </Menu.Item>
              );
          })}
      </Accordion>
    );
  }
}
export default SideNavigation;
