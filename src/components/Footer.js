import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { MDBIcon} from 'mdbreact';

function Footer() {
  return (
    <MDBFooter color="footer" className=" font-small pt-4">
      <MDBContainer fluid className="text-center text-md-left">
{/*//         <MDBRow className="text-center">*/}
{/*//           <MDBCol md="12 border-bottom py-4 mb-4">*/}
        <MDBRow className="text-center">
          <MDBCol md="12">
            <h5 className="title">Dev Support:</h5>
            <p>
              For specific questions contact our team @ <a href="support@spacelanders.io">support@spacelanders.io</a>
            </p>
          </MDBCol>
          <MDBCol md="12 py-4">
            <h5 className="title">SUPPORT US</h5>
            <a href="https://www.facebook.com/SpaceLander.io"><MDBIcon className="p-2" fab icon="facebook-f" /></a>
            <a href="https://www.instagram.com/spacelander.io/"><MDBIcon className="p-2"  fab icon="instagram" /></a>
            <a href="https://twitter.com/spacelander_io"><MDBIcon className="p-2" fab icon="twitter" /></a>  
          </MDBCol>


          <MDBCol className="" sm="12" md="4">
            <div>
              <a href="https://spacelander.io/waitlist">Early Access</a>
            </div>

            <div>
              <a href="https://spacelander.io/blogs">Blogs</a>
            </div>

            <div>
              <a href="https://spacelander.io/support">FAQ</a>
            </div>
            
            {/* <p>
              For specific questions contact out team: support@spacelanders.io
            </p> */}
          </MDBCol>

          <MDBCol sm="12" md="4">

            <div>
              <a href="https://dev.spacelander.io/">DEV</a>
            </div>

            <div>
              <a href="https://spacelander.io/article/contact">Contact</a>
            </div>

            <div>
              <a href="https://spacelander.io/content/career">Career</a>
            </div>

          </MDBCol>

          <MDBCol sm="12" md="4">
            <div>
              <a href="https://spacelander.io/sitemap">Sitemap</a>
            </div>

            <div>
              <a href="https://spacelander.io/content/terms-of-use">Terms of Use</a>
            </div>

            <div>
              <a href="https://spacelander.io/content/privacy-policy">Privacy Policy</a>
            </div>
          </MDBCol>  
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          Copyright  &copy; {new Date().getFullYear()}  <a href="https://www.spacelander.io/"> SpaceLander </a>, LLC. All rights reserved.
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer
