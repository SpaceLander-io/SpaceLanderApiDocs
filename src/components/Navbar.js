import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from './../assets/img/logo-invert.png'


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    // const container = { height: 1300 }
    return (
      <div>
        <Router>
          <header>
            <MDBNavbar color="grey darken-1" dark expand="md">
              <MDBNavbarBrand className="pl-xs-0 pl-md-5" href="#irs">
                <img className="logo" src={logo}  alt="Logo"/>
              </MDBNavbarBrand>


              <MDBNavbarToggler onClick={this.onClick} />



              <MDBCollapse className="text-center" isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to="#">Main</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Amazon</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Ebay</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                            
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon fab icon="facebook-f" /></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon fab icon="twitter" /></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#"><MDBIcon fab icon="instagram" /></MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                
              </MDBCollapse>


            </MDBNavbar>
          </header>
        </Router>
        {/* <MDBContainer style={container} className="text-center mt-5">
          <h2>This Navbar isn't fixed</h2>
          <h5>When you scroll down it will disappear</h5>
        </MDBContainer> */}
      </div>
    );
  }
}

export default Navbar;