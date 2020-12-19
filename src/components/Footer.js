import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { MDBIcon} from 'mdbreact';

function Footer() {
  return (
    <MDBFooter color="footer" className="font-small pt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            <p>
              For specific questions contact out team: 
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">SUPPORT US</h5>
            <MDBIcon className="p-2" fab icon="facebook-f" />
            <MDBIcon className="p-2" fab icon="instagram" />
            <MDBIcon className="p-2" fab icon="twitter" />
                              
    
            
                    
                    
                    
                      


                                      

                  
                

                      
                  </MDBCol>
                
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.spacelander.io/"> SpaceLander </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer
