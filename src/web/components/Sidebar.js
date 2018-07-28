/* global window */
import React from 'react';
import { Col,
  Nav, 
  NavItem,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown, } from 'reactstrap';
import { Link } from 'react-router-dom';


const SidebarNavItems = () => (
  <div>
    <NavItem>
      <Link className={`nav-link ${window.location.pathname === '/' && 'active'}`} to="/">
        <i className="icon-home" /> <span>Dashboard</span>
      </Link>
    </NavItem>
    <NavItem>
      <Link className={`nav-link ${window.location.pathname.startsWith('/housing') && 'active'}`} to="/housing">
        <i className="icon-home" /> <span>Housing</span>
      </Link>
    </NavItem>
    <NavItem>
      <Link className={`nav-link ${window.location.pathname.startsWith('/fungalify') && 'active'}`} to="/fungalify">
        <i className="icon-home" /> <span>Fungalify</span>
      </Link>
    </NavItem>
  </div>
);


class Sidebar extends React.Component {

  static defaultProps = {
    member: {},
  }

  constructor(props) {
    super(props);

    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.state = { isOpen: false };
  }

  onLogout = () => this.props.logout().then(() => this.props.history.push('/login'));
  
  toggleDropDown = () => this.setState({ isOpen: !this.state.isOpen });
  
  render() {
    let {member, loggedIn } = this.props
    return (
      <div>
        <div>
          <Col sm="3" md="2" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}} className="sidebar">
            <Nav vertical>
              {SidebarNavItems()}
            </Nav>
            <div style={{flex: 2}}></div>
            <div>
              <UncontrolledDropdown nav>
                <DropdownToggle nav caret>
                  {loggedIn ? `Hi, ${member.firstName}` : 'My Account'}
                </DropdownToggle>
                <DropdownMenu>
                  {!loggedIn &&
                    <div>
                      <DropdownItem>
                        <Link to="/login">Login</Link>
                      </DropdownItem>
                      <DropdownItem>
                        <Link to="/sign-up">Sign Up</Link>
                      </DropdownItem>
                    </div>
                  }
                  {loggedIn &&
                    <div>
                      <DropdownItem>
                        <Link to="/update-profile">Update Profile</Link>
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        <a onClick={this.onLogout}>Logout</a>
                      </DropdownItem>
                    </div>
                  }
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </Col>
        </div>
      </div>
    )
  }
}

export { Sidebar, SidebarNavItems };
