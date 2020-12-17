import React from 'react'
import ReactDOM from 'react-dom'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { MDBTypography, MDBBox } from 'mdbreact';
import { CopyBlock, dracula } from "react-code-blocks";



function Content() {



    return (
    
    <MDBContainer fluid>
        <MDBRow>
            {/* SideBar */}
            <MDBCol className=" aqua-gradient p-0" md="2">
                    
                <ul className="list-group flex-column w-100 h-100 font-weight-bold position-fixed" >
                    <li className="">
                        <a className="deep-purple-text darken-1" href="#end1">Endpoint 1</a>
                    </li>
                    <li>
                        <a className="deep-purple-text darken-1" href="#irs">Endpoint 2</a>
                    </li>
                </ul>
                    
            </MDBCol>

            {/* Content */}
            <MDBCol sm="10" className="border-left border-light" > 
                <MDBRow className="py-5">
                    {/* Endpoint Description */}
                    <MDBCol xs="12" md="7" lg="7" >
                        <h3 className="py-3" id="end1">API Reference The Stripe API</h3>
                        <MDBBox tag='p' mb={0} className='bq-title'>
                            Info notification
                        </MDBBox>
                        
                        <MDBTypography >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
                            quibusdam dignissimos itaque harum illo! Quidem, corporis at quae
                            tempore nisi impedit cupiditate perferendis nesciunt, ex dolores
                            doloremque! Sit, rem, in?
                        </MDBTypography>
                            
                    </MDBCol>
                    
                    {/* Code Example */}
                    <MDBCol xs="12" md="5" lg="5">
                        
                        <h5 className="py-3">Copy code below</h5>
                        <CopyBlock
                            langiage="js"
                            text={`v := Vertex{X: 1, Y: 2}`}
                            codeBlock
                            theme={dracula}
                            showLineNumbers={true}
                        />
                    </MDBCol>
                </MDBRow>



                <MDBRow className="py-5">
                    {/* Endpoint Description */}
                    <MDBCol sm="12" md="7"  >
                        <h3 className="py-3">Expanding Responses</h3>
                        <MDBTypography>
                            Many objects allow you to request additional information as an expanded response by using the expand request parameter. This parameter is available on all API requests, and applies to the response of that request only. Responses can be expanded in two ways.
                            In many cases, an object contains the ID of a related object in its response properties. For example, a Charge may have an associated Customer ID. Those objects can be expanded inline with the expand request parameter. ID fields that can be expanded into objects are noted in this documentation with theexpandable label.     
                        </MDBTypography>
                    </MDBCol>
                    
                    {/* Code Example */}
                    <MDBCol sm="12" md="5">
                        <h5 className="py-3">Copy code below</h5>
                        <CopyBlock
                            langiage="js"
                            text={`v := Vertex{X: 1, Y: 2}`}
                            codeBlock
                            theme={dracula}
                            showLineNumbers={true}
                        />
                    </MDBCol>
                </MDBRow>



                <MDBRow className="">
                    {/* Endpoint Description */}
                    <MDBCol sm="12" md="7"  >
                        <h3 className="py-3">Idempotent Requests</h3>
                        <MDBTypography>All POST requests accept idempotency keys. Sending idempotency keys in GET and 
                        DELETE requests has no effect and should be avoided, as these requests are idempotent by definition. 
                        </MDBTypography>
                    </MDBCol>
                    
                    {/* Code Example */}
                    <MDBCol sm="12" md="5">
                        <h5 className="py-3">Copy code below</h5>
                        <CopyBlock
                            langiage="js"
                            text={`v := Vertex{X: 1, Y: 2}`}
                            codeBlock
                            theme={dracula}
                            showLineNumbers={true}
                        />
                    </MDBCol>
                </MDBRow>



                <MDBRow className="py-5">
                    {/* Endpoint Description */}
                    <MDBCol sm="12" md="7"  >
                        <h3 className="py-3">Idempotent Requests</h3>
                        <MDBTypography>All POST requests accept idempotency keys. Sending idempotency keys in GET and 
                        DELETE requests has no effect and should be avoided, as these requests are idempotent by definition. 
                        </MDBTypography>
                    </MDBCol>
                    
                    {/* Code Example */}
                    <MDBCol sm="12" md="5">
                        <h5 className="py-3">Copy code below</h5>
                        <CopyBlock
                            langiage="js"
                            text={`v := Vertex{X: 1, Y: 2}`}
                            codeBlock
                            theme={dracula}
                            showLineNumbers={true}
                        />
                    </MDBCol>
                </MDBRow>


                <MDBRow className="py-5" id="irs">
                    {/* Endpoint Description */}
                    <MDBCol sm="12" md="7"  >
                        <h3 className="py-3" id="irs">Idempotent Requests</h3>
                        <MDBTypography>All POST requests accept idempotency keys. Sending idempotency keys in GET and 
                        DELETE requests has no effect and should be avoided, as these requests are idempotent by definition. 
                        </MDBTypography>
                    </MDBCol>
                    
                    {/* Code Example */}
                    <MDBCol sm="12" md="5">
                        <h5 className="py-3">Copy code below</h5>
                        <CopyBlock
                            langiage="js"
                            text={`v := Vertex{X: 1, Y: 2}`}
                            codeBlock
                            theme={dracula}
                            showLineNumbers={true}
                        />
                    </MDBCol>
                </MDBRow>

            </MDBCol>



        </MDBRow>

    </MDBContainer>
    );
}

export default Content;
