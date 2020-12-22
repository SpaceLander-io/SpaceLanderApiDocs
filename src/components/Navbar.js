import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBIcon } from 'mdbreact';
import logoImage from '../assets/img/logo.svg'

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
        
          <header>
            <MDBNavbar color="" dark expand="md">
              <MDBNavbarBrand>
              
              <img src={logoImage} alt="spacelander logo"></img>
              
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.onClick} />
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem>
                    {/* <a target="_blank" href="https://www.facebook.com/SpaceLander.io">Main</a> */}
                  </MDBNavItem>
                  <MDBNavItem>
                    {/* <a href="#">Amazon</a> */}
                  </MDBNavItem>
                  <MDBNavItem>
                    {/* <a href="#">Ebay</a> */}
                  </MDBNavItem>
                </MDBNavbarNav>
                            
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <a href="https://www.facebook.com/SpaceLander.io"><MDBIcon fab icon="facebook-f" /></a>
                  </MDBNavItem>
                  <MDBNavItem>
                    <a href="https://twitter.com/spacelander_io"><MDBIcon fab icon="twitter" /></a>
                  </MDBNavItem>
                  <MDBNavItem>
                    <a href="https://www.instagram.com/spacelander.io/"><MDBIcon fab icon="instagram" /></a>
                  </MDBNavItem>
                </MDBNavbarNav>
                
              </MDBCollapse>
            </MDBNavbar>
          </header>
        
        {/* <MDBContainer style={container} className="text-center mt-5">
          <h2>This Navbar isn't fixed</h2>
          <h5>When you scroll down it will disappear</h5>
        </MDBContainer> */}
      </div>
    );
  }
}

export default Navbar;
