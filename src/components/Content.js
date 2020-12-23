import React from 'react'
import {MDBContainer, MDBRow, MDBCol, MDBIcon, MDBNavbarBrand} from "mdbreact";
import { MDBTypography, MDBBox } from 'mdbreact';
import { CopyBlock, dracula, atomOneLight } from "react-code-blocks";
import logoImage from "../assets/img/logo.svg";


function Content() {

    function searchEndpoint() {
        console.log('search')
        let input = document.getElementById('searchbar').value
        input = input.toLowerCase();
        let x = document.getElementsByClassName('endpoint')

        for (var i = 0; i < x.length; i++) {
            if (!x[i].innerHTML.toLocaleLowerCase().includes(input)) {
                x[i].style.display="none"
            }
            else {
                x[i].style.display = "block";
            }
        }
    }

    return (
        <MDBContainer fluid>
            <MDBRow>
                {/* SideBar */}
                <MDBCol className="" md="2">
                    <div class="fixed">
                        <div class="h-75">
                            <div className="inline hidden-sm">
                                <img src={logoImage} className="inverted" alt="SpaceLander logo"></img>
                                <h1 className="my-4 ml-2">DEV</h1>

                            </div>
                        </div>


                        <MDBCol className="p-0 12 text-center mt-5" md="">
                            <p>SL-API | V1.0.0</p>
                            <form className="form-inline mt-4 mb-4">
                                {/*<MDBIcon icon="search" id="myInput" />*/}
                                <input id="searchbar" className="form-control form-control-sm w-100" onKeyUp={searchEndpoint} type="text" placeholder="Search Docs" aria-label="Search Docs" />
                            </form>
                        </MDBCol>

                        <ul className="sidebarUI list-group flex-column w-100 h-100 font-weight-bold" >
                            <li className="endpoint text-center py-2">
                                <a className="black-text darken-1" href="#introduction">Introduction</a>
                            </li>
                            <li className="endpoint text-center py-2">
                                <a className="black-text darken-1" href="#authentication">Authentication</a>
                            </li>
                            <li className="endpoint text-center py-2">
                                <a className="black-text darken-1" href="#errors">Errors</a>
                            </li>
                            <li className="endpoint text-center py-2">
                                <a className="black-text darken-1" href="#introduction">Brainstorm </a>
                            </li>

                            <li className="endpoint text-center py-2">
                                <a className="black-text darken-1" href="#introduction">History</a>
                            </li>
                        </ul>
                    </div>
                </MDBCol>

                {/* Content */}
                <MDBCol sm="10" className="border-left border-light" >
                    <MDBRow className="py-5">
                        {/* Endpoint Description */}
                        <MDBCol xs="12" md="7" lg="7" >
                            <h3 className="py-3" id="introduction">API Reference</h3>
                            <MDBBox tag='p' mb={0} className='bq-title'>
                                <h5>Intro to API</h5>
                            </MDBBox>

                            <MDBTypography >
                                The SpaceLander API is organized around <a href="https://en.wikipedia.org/wiki/Representational_state_transfer" target="_blank">REST</a>. Our API has predictable resource-oriented URLs,
                                accepts <a href="https://en.wikipedia.org/wiki/POST_(HTTP)#Use_for_submitting_web_forms" target="_blank">form-encoded</a> request bodies, returns <a href="https://www.json.org/json-en.html" target="_blank">JSON-encoded</a> responses, and uses standard
                                HTTP response codes, authentication, and verbs.
                            </MDBTypography>
                        </MDBCol>

                        <MDBCol xs="12" md="5" lg="5">
                            <h5 className="py-1">Need an account?</h5>
                            <p className="py-1">Register one <a href="https://spacelander.io/register" target="_blank">here</a></p>

                            <h5 className="pt-3">Base URL:</h5>
                            <CopyBlock
                                langiage="js"
                                text={`https://spacelander.io/api/`}
                                codeBlock
                                theme={dracula}
                                showLineNumbers={false}
                            />
                        </MDBCol>
                    </MDBRow>

                    <MDBCol sm="12" className="border-left border-light" >
                        <hr></hr>
                    </MDBCol>

                    <MDBRow className="py-5">
                        {/* Endpoint Description */}
                        <MDBCol sm="12" md="7"  >

                            <h3 className="py-3" id="authentication">Authentication</h3>
                            <MDBTypography>
                                To auth into the SpaceLander API you must start by making a post request to the login route.
                                This will an bear token
                            </MDBTypography>
                        </MDBCol>

                        {/* Code Example */}
                        <MDBCol sm="12" md="5">
                            <h5 className="pt-3"><span className="badge badge-secondary">POST</span> | Route: </h5>
                            <CopyBlock
                                langiage="js"
                                text={`https://spacelander.io/api/login/`}
                                codeBlock
                                theme={dracula}
                                showLineNumbers={false}
                            />

                            <p className="mt-3">Request: </p>
                            <CopyBlock
                                langiage="js"
                                text=
{`{
    email: "ACCOUNT-EMAIL",
    password: "ACCOUNT-PASSWORD",
}`}
                                codeBlock
                                theme={dracula}
                                showLineNumbers={false}
                            />

                            <p className="mt-3">Response</p>
                            <div className="light">
                                <CopyBlock

                                    langiage="js"
                                    text=
{`{
    "access_token": "YOUR-AUTH-TOKEN",
    "token_type": "bearer",
    "expires_in": 14400
}`}
                                    codeBlock
                                    theme={atomOneLight}
                                    showLineNumbers={false}
                                />
                            </div>
                        </MDBCol>
                    </MDBRow>

                    <MDBCol sm="12" className="border-left border-light" >
                        <hr></hr>
                    </MDBCol>

                    <MDBRow className="py-5">
                        {/* Endpoint Description */}
                        <MDBCol sm="12" md="7"  >
                            <h3 className="py-3" id="errors">Errors</h3>
                            <MDBTypography>
                                SpaceLander uses conventional HTTP response codes to indicate the success or failure of an API
                                request. In general: Codes in the 2xx range indicate success. Codes in the 4xx range indicate
                                an error that failed given the information provided (e.g., a required parameter was omitted,
                                a charge failed, etc.). Codes in the 5xx range indicate an error with SpaceLander's servers
                                (these are rare). Some 4xx errors that could be handled programmatically include an error code
                                that briefly explains the error reported.
                            </MDBTypography>
                        </MDBCol>

                        {/* Code Example */}
                        <MDBCol sm="12" md="5">
                            <h5 className="pt-3">HTTP Status Codes</h5>
                            <CopyBlock
                                langiage="js"

                                title="test"
                                text=
{`200 - OK:\tEverything worked as expected.
400 - Bad Request:\tThe request was unacceptable, often due to missing a required parameter.
401 - Unauthorized:\tNo valid API key provided.
402 - Request Failed:\tThe parameters were valid but the request failed.
403 - Forbidden:\tThe API key doesn't have permissions to perform the request.
404 - Not Found:\tThe requested resource doesn't exist.
409 - Conflict:\tThe request conflicts with another request (perhaps due to using the same idempotent key).
429 - Too Many Requests:\tToo many requests hit the API too quickly. We recommend an exponential backoff of your requests.
500, 502, 503, 504 - Server Errors:\tSomething went wrong on Stripe's end. (These are rare.)
`}
                                codeBlock
                                theme={dracula}
                                showLineNumbers={false}
                            />
                        </MDBCol>
                    </MDBRow>

                    <MDBCol sm="12" className="border-left border-light" >
                        <hr></hr>
                    </MDBCol>

                    <MDBRow className="py-5">
                        {/* Endpoint Description */}
                        <MDBCol sm="12" md="7"  >
                            <h3 className="py-3">BrainStorm</h3>
                            <MDBTypography>
                                All BrainStorm related requests use this route as the base for all requests. All requests
                                must be authorized before being made to make request.
                            </MDBTypography>
                        </MDBCol>

                        {/* Code Example */}
                        <MDBCol sm="12" md="5">
                            <h5 className="pt-3">Base URL:</h5>
                            <CopyBlock
                                langiage="js"
                                text={`https://spacelander.io/api/brainstorm/`}
                                codeBlock
                                theme={dracula}
                                showLineNumbers={false}
                            />
                        </MDBCol>

                        {/* Endpoint Description */}
                        <MDBCol sm="12" md="7"  >
                            <hr></hr>
                            <h3 className="py-3" id="irs">Get Product/Price History</h3>
                            <MDBTypography>

                            </MDBTypography>
                        </MDBCol>

                        {/* Code Example */}
                        <MDBCol sm="12" md="5">
                            <h5 className="pt-3"><span className="badge badge-default">GET</span> | Route: </h5>
                            <CopyBlock
                                langiage="js"
                                text={`https://spacelander.io/api/brainstorm/history/`}
                                codeBlock
                                theme={dracula}
                                showLineNumbers={false}
                            />

                            <p className="mt-3">Request: </p>
                            <CopyBlock
                                langiage="js"
                                text=
                                    {`{
    email: "ACCOUNT-EMAIL",
    password: "ACCOUNT-PASSWORD",
}`}
                                codeBlock
                                theme={dracula}
                                showLineNumbers={false}
                            />

                            <p className="mt-3">Response</p>
                            <div className="light">
                                <CopyBlock

                                    langiage="js"
                                    text=
                                        {`{
    "access_token": "YOUR-AUTH-TOKEN",
    "token_type": "bearer",
    "expires_in": 14400
}`}
                                    codeBlock
                                    theme={atomOneLight}
                                    showLineNumbers={false}
                                />
                            </div>
                        </MDBCol>
                    </MDBRow>

                </MDBCol>

            </MDBRow>
        </MDBContainer>
    );
}

export default Content;
