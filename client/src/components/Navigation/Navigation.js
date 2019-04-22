import React from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem} from 'reactstrap';


  

export default class Navigation extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggleNavbar = this.toggleNavbar.bind(this);
      this.state = {
        collapsed: true
      };
    }
  
    toggleNavbar() {
      this.setState({
        collapsed: !this.state.collapsed
      });
    }
    render() {
      return (
        <div className="navColor">
          <Navbar color="faded" light style={{backgroundColor: '#45a29e', }}>
            <NavbarBrand href="/" className="mr-auto"><NavLink to="/" style={{ color:'#0b0c10', textDecoration:'none', fontFamily: 'Julius Sans One, sans-serif' }}>Christine Photography</NavLink></NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav navbar style={{backgroundColor: '#45a29e', textAlign:'center'}}>
                <NavItem>
                <NavLink to="/about" style={{ color:'#0b0c10', textAlign:'center', textDecoration:'none', fontFamily: 'Julius Sans One, sans-serif' }}>About</NavLink>
                </NavItem>
                <NavItem>
                <NavLink to="/contact" style={{ color:'#0b0c10', textAlign:'center', textDecoration:'none', fontFamily: 'Julius Sans One, sans-serif' }}>Contact</NavLink>
                </NavItem>
                <NavItem>
                <NavLink to="/gallery" style={{ color:'#0b0c10', textAlign:'center', textDecoration:'none', fontFamily: 'Julius Sans One, sans-serif' }}>Gallery</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }



      
      





