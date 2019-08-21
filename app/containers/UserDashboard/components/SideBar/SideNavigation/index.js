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
  // {
  //   title: 'Packages',
  //   path: '/',
  //   icon: 'icon-package',
  //   subMenues: [
  //     {
  //       title: 'My-Packages',
  //       path: '/user/dashboard/my-packages',
  //       group_title: 'icon-package',
  //     },
  //     {
  //       title: 'Package List',
  //       path: '/user/dashboard/package',
  //       group_title: 'icon-package',
  //     },
  //   ],
  // },
   {
      title: 'Dashboard',
      path: '/user/dashboard',
      icon: "icon-home",
    },
    {
    title: 'Product',
    path: '/',
    icon: 'icon-package',
    subMenues: [
      {
        title: 'My Product',
        path: '/user/dashboard/my-products',
        group_title: 'my-product',
        icon: "icon-grid",
      },
      {
        title: 'Available Products',
        path: '/user/dashboard/product',
        group_title: 'available-product',
        icon: "icon-shopping-cart",
      },
    ],
  },
];

class SideNavigation extends React.Component {

  constructor(props) {
    super(props);
    // this.componentRef = React.createRef(null);
    }

  state = { activeIndex: 0, submenu_content: 0 };
  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;
    this.setState({ activeIndex: newIndex });
  };

  componentRef = React.createRef(null);

  handleWheel = (e) => {
    e.stopPropagation();
  }

  componentDidMount() {
    if (this.componentRef.current) {
      this.componentRef.current.addEventListener('wheel', this.handleWheel);
    }
  }
  
  componentWillUnmount() {
    if (this.componentRef.current) {
      this.componentRef.current.removeEventListener('wheel', this.handleWheel);
    }
  }
  contentClick = (idx) => {
    this.setState({submenu_content : idx})
  }

  render() {
    const { activeIndex, submenu_content } = this.state;
    return (
      <div className="sidebar-nav"> 
      <Accordion style={{ touchAction: 'none' }} as={Menu} vertical className="">
        {mainMenu &&
          mainMenu.length > 0 &&
          mainMenu.map((main, idx) => {
            if (main.subMenues) {
              return (
                <Menu.Item key={`sub${idx}`}>
                  {main.subMenues.length > 0 && (
                    <div>
                      <Accordion.Title
                        className="dropdown"
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
                        <span className="arrow-wrap"><i className="icon-chevron-right"></i></span>
                      </Accordion.Title>
                      <Accordion.Content active={activeIndex === idx}>
                        {main.subMenues.map((menu, idx) => (
                          <div className={submenu_content === idx ? 'active' : ''} onClick={() => this.contentClick(idx)} key={idx}>
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
           <Menu.Item>
          <Link className="nav__link" to="/user/dashboard/">
            <span className="nav__icon">
              <i className="icon-file" />
            </span>
            <span className="nav__text">Reports</span>
          </Link>
        </Menu.Item>
      </Accordion>
      </div>

    );
  }
}
export default SideNavigation;
