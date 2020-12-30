import React from 'react'
import {MDBContainer, MDBRow, MDBCol} from "mdbreact";
import { MDBTypography, MDBBox } from 'mdbreact';
import { CopyBlock, dracula, atomOneLight } from "react-code-blocks";
import logoImage from "../assets/img/logo.svg";

// import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";


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
                <MDBCol className="hidden-md sidebar" xl="2" lg="2" md="12" sm="12">
                    <div class="fixed">
                        <div class="h-75">
                            <div className="inline hidden-sm pb-4">
                                <a href="https://spacelander.io/"><img src={logoImage} className="inverted" alt="SpaceLander logo"></img></a>
                                <h1 className="my-2 ml-2">DEV</h1>
                            </div>
                        </div>

                        <MDBCol className="p-0 12 text-center mt-1" md="">
                            <p>SL-API | V1.0.0</p>
                            <form className="form-inline mt-4 mb-4">
                                {/*<MDBIcon icon="search" id="myInput" />*/}
                                <input id="searchbar" className="form-control form-control-sm w-100" onKeyUp={searchEndpoint} type="text" placeholder="Search Docs" aria-label="Search Docs" />
                            </form>
                        </MDBCol>

                        <div class="sidebar-list">
                            <ul className="sidebarUI list-group flex-column w-100 h-100 font-weight-bold main-link" >
                                <li className="endpoint py-2">
                                    <a className="black-text darken-1" href="#introduction">Introduction</a>
                                </li>
                                <li className="endpoint py-2">
                                    <a className="black-text darken-1" href="#authentication">Authentication</a>
                                </li>
                                <li className="endpoint py-2">
                                    <a className="black-text darken-1" href="#errors">Errors</a>
                                </li>
                                <li className="endpoint py-2">
                                    <a className="black-text darken-1" href="#brainstorm">Brainstorm</a>
                                    <ul className="pl-2 sidebarUI list-group flex-column w-100 h-100 font-weight-bold minor-link" >
                                        <a className="black-text darken-1" href="#priceHistory">Price History</a>
                                        <a className="black-text darken-1" href="#rankingHistory">Ranking History</a>
                                        <a className="black-text darken-1" href="#history">History</a>
                                    </ul>
                                </li>

                                <li className="endpoint py-2">
                                    <a className="black-text darken-1" href="#amazon">Amazon</a>
                                    <ul className="pl-2 sidebarUI list-group flex-column w-100 h-100 font-weight-bold minor-link" >
                                        <a className="black-text darken-1" href="#AsinCategories">Get Categories</a>
                                        {/*<a className="black-text darken-1" href="#history">Ranking History</a>*/}
                                    </ul>
                                </li>

                            </ul>
                        </div>

                    </div>
                </MDBCol>

                {/* Content */}
                <MDBCol xl="10" lg="10" md="12" sm="12" className="border-left border-light" >

                    {/* Intro */}
                    <MDBRow className="py-5">
                        {/* Endpoint Description */}
                        <MDBCol xs="12" md="7" lg="7" >
                            <h3 className="py-3" id="introduction">API Reference</h3>
                            <MDBBox tag='p' mb={0} className='bq-title'>
                                <h5>Intro to API</h5>
                            </MDBBox>

                            <MDBTypography >
                                The SpaceLander API is organized around <a href="https://en.wikipedia.org/wiki/Representational_state_transfer" target="_blank" rel="noopener noreferrer">REST</a>. Our API has predictable resource-oriented URLs,
                                accepts <a href="https://en.wikipedia.org/wiki/POST_(HTTP)#Use_for_submitting_web_forms" target="_blank" rel="noopener noreferrer">form-encoded</a> request bodies, returns <a href="https://www.json.org/json-en.html" target="_blank" rel="noopener noreferrer">JSON-encoded</a> responses, and uses standard
                                HTTP response codes, authentication, and verbs.
                            </MDBTypography>
                        </MDBCol>

                        <MDBCol xs="12" md="5" lg="5">
                            <h5 className="py-1">Need an account?</h5>
                            <p className="py-1">Register one <a href="https://spacelander.io/register" target="_blank" rel="noopener noreferrer">here</a></p>

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

                    {/* Auth */}
                    <MDBRow className="py-5">
                        {/* Endpoint Description */}
                        <MDBCol sm="12" md="7"  >

                            <h3 className="py-3" id="authentication">Authentication</h3>
                            <MDBTypography>
                                To auth into the SpaceLander API you must start by request a bearer token. Start by making
                                a post request to the login route. This will return a bearer token that is required for all
                                authorized requests to SpaceLander.
                                {/*<hr></hr>*/}
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

                    {/* Errors */}
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

                    <MDBCol sm="12" className="border-left border-light">
                        <hr></hr>
                    </MDBCol>

                    {/* BrainStorm */}
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

                        {/* Get Product/Price History */}
                        <MDBCol sm="12" md="7"  >
                            <hr></hr>
                            <h3 className="py-3" id="priceHistory">Get Product/Price History</h3>
                            <MDBTypography>
                                Returns array of price history for product by <a href="https://www.amazon.com/gp/seller/asin-upc-isbn-info.html" target="_blank" rel="noopener noreferrer">ASIN</a> provided.
                            </MDBTypography>
                        </MDBCol>

                        {/* Code Example */}
                        <MDBCol sm="12" md="5">
                            <h5 className="pt-3"><span className="badge badge-default">GET</span> | Route: </h5>
                            <CopyBlock
                                langiage="js"
                                text={`https://spacelander.io/api/brainstorm/history/{asin}`}
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
   "GetProductCategoriesForASINResult":{
      "Self":[
         {
            "ProductCategoryId":"10671062011",
            "ProductCategoryName":"Electric Mattress Pads",
            "Parent":{
               "ProductCategoryId":"17874224011",
               "ProductCategoryName":"Mattress Pads & Toppers",
               "Parent":{
                  "ProductCategoryId":"1063252",
                  "ProductCategoryName":"Bedding",
                  "Parent":{
                     "ProductCategoryId":"1063498",
                     "ProductCategoryName":"Categories",
                     "Parent":{
                        "ProductCategoryId":"1055398",
                        "ProductCategoryName":"Home & Kitchen"
                     }
                  }
               }
            }
         },
         {
            "ProductCategoryId":"13900811",
            "ProductCategoryName":"Home & Kitchen Features",
            "Parent":{
               "ProductCategoryId":"1055398",
               "ProductCategoryName":"Home & Kitchen"
            }
         },
         {
            "ProductCategoryId":"13900821",
            "ProductCategoryName":"Kitchen & Dining Features",
            "Parent":{
               "ProductCategoryId":"1055398",
               "ProductCategoryName":"Home & Kitchen"
            }
         }
      ]
   },
   "ResponseMetadata":{
      "RequestId":"fd2c4715-b5f8-4925-96da-cdc227055bfb"
   }
}`}
                                    codeBlock
                                    theme={atomOneLight}
                                    showLineNumbers={false}
                                />
                            </div>
                        </MDBCol>

                        {/* Get Product Ranking History */}
                        <MDBCol sm="12" md="7"  >
                            <hr></hr>
                            <h3 className="py-3" id="rankingHistory">Get Product Ranking History</h3>
                            <MDBTypography>
                                Returns array of price history for product ranking history by <a href="https://www.amazon.com/gp/seller/asin-upc-isbn-info.html" target="_blank" rel="noopener noreferrer">ASIN</a> provided.
                            </MDBTypography>
                        </MDBCol>

                        {/* Code Example */}
                        <MDBCol sm="12" md="5">
                            <h5 className="pt-3"><span className="badge badge-default">GET</span> | Route: </h5>
                            <CopyBlock
                                langiage="js"
                                text={`https://spacelander.io/api/brainstorm/ranking/{asin}`}
                                codeBlock
                                theme={dracula}
                                showLineNumbers={false}
                            />

                            <p className="mt-3">Response</p>
                            <div className="light">
                                <CopyBlock

                                    langiage="js"
                                    text=
                                        {``}
                                    codeBlock
                                    theme={atomOneLight}
                                    showLineNumbers={false}
                                />
                            </div>
                        </MDBCol>

                        {/* More */}
                        <MDBCol sm="12" md="7"  >
                            <hr></hr>
                            <h3 className="py-3" id="">More</h3>
                            <MDBTypography>
                                Returns array of price history for product by <a href="https://www.amazon.com/gp/seller/asin-upc-isbn-info.html" target="_blank" rel="noopener noreferrer">ASIN</a> provided.
                            </MDBTypography>
                        </MDBCol>

                        {/* Code Example */}
                        <MDBCol sm="12" md="5">
                            <h5 className="pt-3"><span className="badge badge-default">GET</span> | Route: </h5>
                            <CopyBlock
                                langiage="js"
                                text={`https://spacelander.io/api/brainstorm/history/{asin}`}
                                codeBlock
                                theme={dracula}
                                showLineNumbers={false}
                            />

                            <p className="mt-3">Response</p>
                            <div className="light">
                                <CopyBlock

                                    langiage="js"
                                    text=
                                        {``}
                                    codeBlock
                                    theme={atomOneLight}
                                    showLineNumbers={false}
                                />
                            </div>
                        </MDBCol>

                    </MDBRow>

                    <MDBCol sm="12" className="border-left border-light">
                        <hr></hr>
                    </MDBCol>

                    {/* Amazon */}
                    <MDBRow className="py-5">

                        {/* Amazon */}
                        <MDBCol sm="12" md="7"  >
                            <h3 className="py-3" id="amazon">Amazon</h3>
                            <MDBTypography>
                                All Amazon related requests use this route as the base for all requests. All requests
                                must be authorized before being made to make request..
                            </MDBTypography>
                        </MDBCol>
                        {/* Code Example */}
                        <MDBCol sm="12" md="5">
                            <h5 className="pt-3">Base URL: </h5>
                            <CopyBlock
                                langiage="js"
                                text={`https://spacelander.io/api/amazon/`}
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

                        {/* Get Categories by ASIN */}
                        <MDBCol className="my-2" sm="12" md="7" >
                            <hr class=""></hr>
                            <h3 className="py-3" id="AsinCategories">Get Categories by ASIN</h3>
                            <MDBTypography>
                                Returns the hierarchy of all parent and leaf categories for the ASIN provided
                            </MDBTypography>
                        </MDBCol>
                        {/* Code Example */}
                        <MDBCol sm="12" md="5">
                            <h5 className="pt-3"><span className="badge badge-default">GET</span> | Route: </h5>
                            <CopyBlock
                                langiage="js"
                                text={`https://spacelander.io/api/amazon/get-categories-by-asin/{asin}`}
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
    "GetProductCategoriesForASINResult": {
        "Self": [
            {
                "ProductCategoryId": "10980711",
                "ProductCategoryName": "Dual-Channel Speakers",
                "Parent": {
                    "ProductCategoryId": "898116",
                    "ProductCategoryName": "Amplifiers",
                    "Parent": {
                        "ProductCategoryId": "226184",
                        "ProductCategoryName": "Car Audio",
                        "Parent": {
                            "ProductCategoryId": "1077068",
                            "ProductCategoryName": "Car Electronics",
                            "Parent": {
                                "ProductCategoryId": "3248684011",
                                "ProductCategoryName": "Car & Vehicle Electronics",
                                "Parent": {
                                    "ProductCategoryId": "493964",
                                    "ProductCategoryName": "Categories",
                                    "Parent": {
                                        "ProductCategoryId": "172282",
                                        "ProductCategoryName": "Electronics"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            {
                "ProductCategoryId": "13900851",
                "ProductCategoryName": "Electronics Features",
                "Parent": {
                    "ProductCategoryId": "172282",
                    "ProductCategoryName": "Electronics"
                }
            }
        ]
    },
    "ResponseMetadata": {
        "RequestId": "5f8759d4-8629-4c07-9e6d-04d7d4f508a3"
    }
}`}
                                    codeBlock
                                    theme={atomOneLight}
                                    showLineNumbers={false}
                                />
                            </div>
                        </MDBCol>

                        {/* Get Matching Products */}
                        <MDBCol className="my-2" sm="12" md="7" >
                            <hr class=""></hr>
                            <h3 className="py-3" id="AsinCategories">Get Matching Products</h3>
                            <MDBTypography>
                                Returns the similar products to products provided.
                            </MDBTypography>
                        </MDBCol>
                        {/* Code Example */}
                        <MDBCol sm="12" md="5">
                            <h5 className="pt-3"><span className="badge badge-default">GET</span> | Route: </h5>
                            <CopyBlock
                                langiage="js"
                                text={`https://spacelander.io/api/amazon/matching-products/{query}`}
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
   "ListMatchingProductsResult":{
      "Products":{
         "Product":[
            {
               "Identifiers":{
                  "MarketplaceASIN":{
                     "MarketplaceId":"ATVPDKIKX0DER",
                     "ASIN":"B00YBWOMRA"
                  }
               },
               "AttributeSets":[
                  
               ],
               "Relationships":{
                  "VariationParent":{
                     "Identifiers":{
                        "MarketplaceASIN":{
                           "MarketplaceId":"ATVPDKIKX0DER",
                           "ASIN":"B07ZHWC5T8"
                        }
                     }
                  }
               },
               "SalesRankings":{
                  "SalesRank":[
                     {
                        "ProductCategoryId":"toy_display_on_website",
                        "Rank":"52"
                     },
                     {
                        "ProductCategoryId":"21490696011",
                        "Rank":"1"
                     }
                  ]
               }
            },
            {
               "Identifiers":{
                  "MarketplaceASIN":{
                     "MarketplaceId":"ATVPDKIKX0DER",
                     "ASIN":"B07JKDYWZD"
                  }
               },
               "AttributeSets":[
                  
               ],
               "Relationships":[
                  
               ],
               "SalesRankings":{
                  "SalesRank":[
                     {
                        "ProductCategoryId":"toy_display_on_website",
                        "Rank":"582"
                     },
                     {
                        "ProductCategoryId":"166405011",
                        "Rank":"4"
                     },
                     {
                        "ProductCategoryId":"251942011",
                        "Rank":"8"
                     }
                  ]
               }
            },
            {
               "Identifiers":{
                  "MarketplaceASIN":{
                     "MarketplaceId":"ATVPDKIKX0DER",
                     "ASIN":"B07VFZ72XC"
                  }
               },
               "AttributeSets":[
                  
               ],
               "Relationships":[
                  
               ],
               "SalesRankings":{
                  "SalesRank":[
                     {
                        "ProductCategoryId":"toy_display_on_website",
                        "Rank":"1480"
                     },
                     {
                        "ProductCategoryId":"166405011",
                        "Rank":"9"
                     },
                     {
                        "ProductCategoryId":"251942011",
                        "Rank":"17"
                     }
                  ]
               }
            },
            {
               "Identifiers":{
                  "MarketplaceASIN":{
                     "MarketplaceId":"ATVPDKIKX0DER",
                     "ASIN":"B004FG0ZWI"
                  }
               },
               "AttributeSets":[
                  
               ],
               "Relationships":[
                  
               ],
               "SalesRankings":{
                  "SalesRank":[
                     {
                        "ProductCategoryId":"toy_display_on_website",
                        "Rank":"841"
                     },
                     {
                        "ProductCategoryId":"166405011",
                        "Rank":"5"
                     }
                  ]
               }
            },
            {
               "Identifiers":{
                  "MarketplaceASIN":{
                     "MarketplaceId":"ATVPDKIKX0DER",
                     "ASIN":"B08B66ZFJ3"
                  }
               },
               "AttributeSets":[
                  
               ],
               "Relationships":[
                  
               ],
               "SalesRankings":{
                  "SalesRank":[
                     {
                        "ProductCategoryId":"toy_display_on_website",
                        "Rank":"6191"
                     },
                     {
                        "ProductCategoryId":"274335011",
                        "Rank":"18"
                     },
                     {
                        "ProductCategoryId":"251942011",
                        "Rank":"99"
                     }
                  ]
               }
            },
            {
               "Identifiers":{
                  "MarketplaceASIN":{
                     "MarketplaceId":"ATVPDKIKX0DER",
                     "ASIN":"B08JYVKJTG"
                  }
               },
               "AttributeSets":[
                  
               ],
               "Relationships":[
                  
               ],
               "SalesRankings":{
                  "SalesRank":[
                     {
                        "ProductCategoryId":"boost_display_on_website",
                        "Rank":"709"
                     },
                     {
                        "ProductCategoryId":"274335011",
                        "Rank":"5"
                     },
                     {
                        "ProductCategoryId":"21179677011",
                        "Rank":"108"
                     }
                  ]
               }
            },
            {
               "Identifiers":{
                  "MarketplaceASIN":{
                     "MarketplaceId":"ATVPDKIKX0DER",
                     "ASIN":"B071GV3ZJS"
                  }
               },
               "AttributeSets":[
                  
               ],
               "Relationships":[
                  
               ],
               "SalesRankings":{
                  "SalesRank":[
                     {
                        "ProductCategoryId":"toy_display_on_website",
                        "Rank":"700"
                     },
                     {
                        "ProductCategoryId":"274335011",
                        "Rank":"1"
                     }
                  ]
               }
            },
            {
               "Identifiers":{
                  "MarketplaceASIN":{
                     "MarketplaceId":"ATVPDKIKX0DER",
                     "ASIN":"B08FJ29XCQ"
                  }
               },
               "AttributeSets":[
                  
               ],
               "Relationships":[
                  
               ],
               "SalesRankings":{
                  "SalesRank":[
                     {
                        "ProductCategoryId":"toy_display_on_website",
                        "Rank":"22225"
                     },
                     {
                        "ProductCategoryId":"2491829011",
                        "Rank":"120"
                     }
                  ]
               }
            },
            {
               "Identifiers":{
                  "MarketplaceASIN":{
                     "MarketplaceId":"ATVPDKIKX0DER",
                     "ASIN":"B07W7TGWDR"
                  }
               },
               "AttributeSets":[
                  
               ],
               "Relationships":[
                  
               ],
               "SalesRankings":{
                  "SalesRank":[
                     {
                        "ProductCategoryId":"boost_display_on_website",
                        "Rank":"529"
                     },
                     {
                        "ProductCategoryId":"274335011",
                        "Rank":"3"
                     },
                     {
                        "ProductCategoryId":"21179677011",
                        "Rank":"76"
                     },
                     {
                        "ProductCategoryId":"17863429011",
                        "Rank":"92"
                     }
                  ]
               }
            },
            {
               "Identifiers":{
                  "MarketplaceASIN":{
                     "MarketplaceId":"ATVPDKIKX0DER",
                     "ASIN":"B076KKK73G"
                  }
               },
               "AttributeSets":[
                  
               ],
               "Relationships":[
                  
               ],
               "SalesRankings":{
                  "SalesRank":[
                     {
                        "ProductCategoryId":"toy_display_on_website",
                        "Rank":"3405"
                     },
                     {
                        "ProductCategoryId":"2491829011",
                        "Rank":"8"
                     },
                     {
                        "ProductCategoryId":"166360011",
                        "Rank":"34"
                     },
                     {
                        "ProductCategoryId":"251942011",
                        "Rank":"50"
                     }
                  ]
               }
            }
         ]
      }
   },
   "ResponseMetadata":{
      "RequestId":"f540755f-8b50-4e0f-8432-082af8428a0d"
   }
}`}
                                    codeBlock
                                    theme={atomOneLight}
                                    showLineNumbers={false}
                                />
                            </div>
                        </MDBCol>

                        {/* Get Product Details */}
                        <MDBCol className="my-2" sm="12" md="7" >
                            <hr class=""></hr>
                            <h3 className="py-3" id="AsinCategories">Get Product Details</h3>
                            <MDBTypography>
                                Returns get product details for ASIN provided.
                            </MDBTypography>
                        </MDBCol>
                        {/* Code Example */}
                        <MDBCol sm="12" md="5">
                            <h5 className="pt-3"><span className="badge badge-default">GET</span> | Route: </h5>
                            <CopyBlock
                                langiage="js"
                                text={`https://spacelander.io/api/amazon/product-details/{asin}`}
                                codeBlock
                                theme={dracula}
                                showLineNumbers={false}
                            />

                            <p className="mt-3">Response</p>
                            <div className="light">
                                <CopyBlock

                                    langiage="js"
                                    text=
                                        {``}
                                    codeBlock
                                    theme={atomOneLight}
                                    showLineNumbers={false}
                                />
                            </div>
                        </MDBCol>



                        {/* Find Products */}
                        <MDBCol className="my-2" sm="12" md="7" >
                            <hr class=""></hr>
                            <h3 className="py-3" id="AsinCategories">Get Lowest Offer Listings</h3>
                            <MDBTypography>
                                Finds products listed on Amazon by query provided.
                            </MDBTypography>
                        </MDBCol>

                        {/* Code Example */}
                        <MDBCol sm="12" md="5">
                            <h5 className="pt-3"><span className="badge badge-default">GET</span> | Route: </h5>
                            <CopyBlock
                                langiage="js"
                                text={`https://spacelander.io/api/amazon/lowest-offer-listings/{asin}`}
                                codeBlock
                                theme={dracula}
                                showLineNumbers={false}
                            />

                            <p className="mt-3">Response</p>
                            <div className="light">
                                <CopyBlock

                                    langiage="js"
                                    text=
                                        {`[
   {
      "GetCompetitivePricingForASINResult":{
         "@attributes":{
            "ASIN":"B01C5U4PTY",
            "status":"Success"
         },
         "Product":{
            "Identifiers":{
               "MarketplaceASIN":{
                  "MarketplaceId":"ATVPDKIKX0DER",
                  "ASIN":"B01C5U4PTY"
               }
            },
            "CompetitivePricing":{
               "CompetitivePrices":{
                  "CompetitivePrice":[
                     {
                        "@attributes":{
                           "belongsToRequester":"false",
                           "condition":"Used",
                           "subcondition":"Good"
                        },
                        "CompetitivePriceId":"2",
                        "Price":{
                           "LandedPrice":{
                              "CurrencyCode":"USD",
                              "Amount":"11.96"
                           },
                           "ListingPrice":{
                              "CurrencyCode":"USD",
                              "Amount":"11.96"
                           },
                           "Shipping":{
                              "CurrencyCode":"USD",
                              "Amount":"0.00"
                           }
                        }
                     },
                     {
                        "@attributes":{
                           "belongsToRequester":"false",
                           "condition":"New",
                           "subcondition":"New"
                        },
                        "CompetitivePriceId":"1",
                        "Price":{
                           "LandedPrice":{
                              "CurrencyCode":"USD",
                              "Amount":"13.59"
                           },
                           "ListingPrice":{
                              "CurrencyCode":"USD",
                              "Amount":"13.59"
                           },
                           "Shipping":{
                              "CurrencyCode":"USD",
                              "Amount":"0.00"
                           }
                        }
                     }
                  ]
               },
               "NumberOfOfferListings":{
                  "OfferListingCount":[
                     "42",
                     "4",
                     "46"
                  ]
               }
            },
            "SalesRankings":{
               "SalesRank":[
                  {
                     "ProductCategoryId":"toy_display_on_website",
                     "Rank":"468"
                  },
                  {
                     "ProductCategoryId":"166225011",
                     "Rank":"52"
                  },
                  {
                     "ProductCategoryId":"251910011",
                     "Rank":"190"
                  }
               ]
            }
         }
      },
      "ResponseMetadata":{
         "RequestId":"32795ab5-124f-4b94-9514-feb2d81fd821"
      }
   },
   {
      "GetCompetitivePricingForASINResult":{
         "@attributes":{
            "ASIN":"B00YBWOMRA",
            "status":"Success"
         },
         "Product":{
            "Identifiers":{
               "MarketplaceASIN":{
                  "MarketplaceId":"ATVPDKIKX0DER",
                  "ASIN":"B00YBWOMRA"
               }
            },
            "CompetitivePricing":{
               "CompetitivePrices":{
                  "CompetitivePrice":{
                     "@attributes":{
                        "belongsToRequester":"false",
                        "condition":"New",
                        "subcondition":"New"
                     },
                     "CompetitivePriceId":"1",
                     "Price":{
                        "LandedPrice":{
                           "CurrencyCode":"USD",
                           "Amount":"7.99"
                        },
                        "ListingPrice":{
                           "CurrencyCode":"USD",
                           "Amount":"7.99"
                        },
                        "Shipping":{
                           "CurrencyCode":"USD",
                           "Amount":"0.00"
                        }
                     }
                  }
               },
               "NumberOfOfferListings":{
                  "OfferListingCount":[
                     "1",
                     "1"
                  ]
               }
            },
            "SalesRankings":{
               "SalesRank":[
                  {
                     "ProductCategoryId":"toy_display_on_website",
                     "Rank":"43"
                  },
                  {
                     "ProductCategoryId":"21490696011",
                     "Rank":"1"
                  }
               ]
            }
         }
      },
      "ResponseMetadata":{
         "RequestId":"a4e8294b-b318-4a13-94cd-07d429a62702"
      }
   },
   {
      "GetCompetitivePricingForASINResult":{
         "@attributes":{
            "ASIN":"B08JYVKJTG",
            "status":"Success"
         },
         "Product":{
            "Identifiers":{
               "MarketplaceASIN":{
                  "MarketplaceId":"ATVPDKIKX0DER",
                  "ASIN":"B08JYVKJTG"
               }
            },
            "CompetitivePricing":{
               "CompetitivePrices":{
                  "CompetitivePrice":[
                     {
                        "@attributes":{
                           "belongsToRequester":"false",
                           "condition":"Used",
                           "subcondition":"VeryGood"
                        },
                        "CompetitivePriceId":"2",
                        "Price":{
                           "LandedPrice":{
                              "CurrencyCode":"USD",
                              "Amount":"55.15"
                           },
                           "ListingPrice":{
                              "CurrencyCode":"USD",
                              "Amount":"55.15"
                           },
                           "Shipping":{
                              "CurrencyCode":"USD",
                              "Amount":"0.00"
                           }
                        }
                     },
                     {
                        "@attributes":{
                           "belongsToRequester":"false",
                           "condition":"New",
                           "subcondition":"New"
                        },
                        "CompetitivePriceId":"1",
                        "Price":{
                           "LandedPrice":{
                              "CurrencyCode":"USD",
                              "Amount":"59.95"
                           },
                           "ListingPrice":{
                              "CurrencyCode":"USD",
                              "Amount":"59.95"
                           },
                           "Shipping":{
                              "CurrencyCode":"USD",
                              "Amount":"0.00"
                           }
                        }
                     }
                  ]
               },
               "NumberOfOfferListings":{
                  "OfferListingCount":[
                     "2",
                     "1",
                     "3"
                  ]
               }
            },
            "SalesRankings":{
               "SalesRank":[
                  {
                     "ProductCategoryId":"toy_display_on_website",
                     "Rank":"3076"
                  },
                  {
                     "ProductCategoryId":"274335011",
                     "Rank":"5"
                  },
                  {
                     "ProductCategoryId":"21179677011",
                     "Rank":"98"
                  }
               ]
            }
         }
      },
      "ResponseMetadata":{
         "RequestId":"30d0a58e-f4fe-4d5e-8276-675c8a92499f"
      }
   },
   {
      "GetCompetitivePricingForASINResult":{
         "@attributes":{
            "ASIN":"B004FG0ZWI",
            "status":"Success"
         },
         "Product":{
            "Identifiers":{
               "MarketplaceASIN":{
                  "MarketplaceId":"ATVPDKIKX0DER",
                  "ASIN":"B004FG0ZWI"
               }
            },
            "CompetitivePricing":{
               "CompetitivePrices":{
                  "CompetitivePrice":[
                     {
                        "@attributes":{
                           "belongsToRequester":"false",
                           "condition":"New",
                           "subcondition":"New"
                        },
                        "CompetitivePriceId":"1",
                        "Price":{
                           "LandedPrice":{
                              "CurrencyCode":"USD",
                              "Amount":"12.99"
                           },
                           "ListingPrice":{
                              "CurrencyCode":"USD",
                              "Amount":"12.99"
                           },
                           "Shipping":{
                              "CurrencyCode":"USD",
                              "Amount":"0.00"
                           }
                        }
                     },
                     {
                        "@attributes":{
                           "belongsToRequester":"false",
                           "condition":"Used",
                           "subcondition":"VeryGood"
                        },
                        "CompetitivePriceId":"2",
                        "Price":{
                           "LandedPrice":{
                              "CurrencyCode":"USD",
                              "Amount":"11.95"
                           },
                           "ListingPrice":{
                              "CurrencyCode":"USD",
                              "Amount":"11.95"
                           },
                           "Shipping":{
                              "CurrencyCode":"USD",
                              "Amount":"0.00"
                           }
                        }
                     }
                  ]
               },
               "NumberOfOfferListings":{
                  "OfferListingCount":[
                     "18",
                     "3",
                     "21"
                  ]
               }
            },
            "SalesRankings":{
               "SalesRank":[
                  {
                     "ProductCategoryId":"toy_display_on_website",
                     "Rank":"799"
                  },
                  {
                     "ProductCategoryId":"166405011",
                     "Rank":"6"
                  }
               ]
            }
         }
      },
      "ResponseMetadata":{
         "RequestId":"67d89367-7e89-4778-9bf3-8d6d1cf1ed54"
      }
   },
   {
      "GetCompetitivePricingForASINResult":{
         "@attributes":{
            "ASIN":"B07VFZ72XC",
            "status":"Success"
         },
         "Product":{
            "Identifiers":{
               "MarketplaceASIN":{
                  "MarketplaceId":"ATVPDKIKX0DER",
                  "ASIN":"B07VFZ72XC"
               }
            },
            "CompetitivePricing":{
               "CompetitivePrices":{
                  "CompetitivePrice":{
                     "@attributes":{
                        "belongsToRequester":"false",
                        "condition":"New",
                        "subcondition":"New"
                     },
                     "CompetitivePriceId":"1",
                     "Price":{
                        "LandedPrice":{
                           "CurrencyCode":"USD",
                           "Amount":"24.99"
                        },
                        "ListingPrice":{
                           "CurrencyCode":"USD",
                           "Amount":"24.99"
                        },
                        "Shipping":{
                           "CurrencyCode":"USD",
                           "Amount":"0.00"
                        }
                     }
                  }
               },
               "NumberOfOfferListings":{
                  "OfferListingCount":[
                     "1",
                     "1"
                  ]
               }
            },
            "SalesRankings":{
               "SalesRank":[
                  {
                     "ProductCategoryId":"toy_display_on_website",
                     "Rank":"1480"
                  },
                  {
                     "ProductCategoryId":"166405011",
                     "Rank":"9"
                  },
                  {
                     "ProductCategoryId":"251942011",
                     "Rank":"17"
                  }
               ]
            }
         }
      },
      "ResponseMetadata":{
         "RequestId":"2cc18ed9-1b85-4446-8eb3-d7b03aa3ebec"
      }
   },
   {
      "GetCompetitivePricingForASINResult":{
         "@attributes":{
            "ASIN":"B08K8Q7SV4",
            "status":"Success"
         },
         "Product":{
            "Identifiers":{
               "MarketplaceASIN":{
                  "MarketplaceId":"ATVPDKIKX0DER",
                  "ASIN":"B08K8Q7SV4"
               }
            },
            "CompetitivePricing":{
               "CompetitivePrices":{
                  "CompetitivePrice":{
                     "@attributes":{
                        "belongsToRequester":"false",
                        "condition":"New",
                        "subcondition":"New"
                     },
                     "CompetitivePriceId":"1",
                     "Price":{
                        "LandedPrice":{
                           "CurrencyCode":"USD",
                           "Amount":"9.99"
                        },
                        "ListingPrice":{
                           "CurrencyCode":"USD",
                           "Amount":"9.99"
                        },
                        "Shipping":{
                           "CurrencyCode":"USD",
                           "Amount":"0.00"
                        }
                     }
                  }
               },
               "NumberOfOfferListings":{
                  "OfferListingCount":[
                     "1",
                     "1"
                  ]
               }
            },
            "SalesRankings":{
               "SalesRank":[
                  {
                     "ProductCategoryId":"toy_display_on_website",
                     "Rank":"24853"
                  },
                  {
                     "ProductCategoryId":"274335011",
                     "Rank":"61"
                  }
               ]
            }
         }
      },
      "ResponseMetadata":{
         "RequestId":"de6c97a7-0ce6-4ab3-ab5e-50ac1a4912d6"
      }
   },
   {
      "GetCompetitivePricingForASINResult":{
         "@attributes":{
            "ASIN":"B07Q9VMZK6",
            "status":"Success"
         },
         "Product":{
            "Identifiers":{
               "MarketplaceASIN":{
                  "MarketplaceId":"ATVPDKIKX0DER",
                  "ASIN":"B07Q9VMZK6"
               }
            },
            "CompetitivePricing":{
               "CompetitivePrices":{
                  "CompetitivePrice":{
                     "@attributes":{
                        "belongsToRequester":"false",
                        "condition":"New",
                        "subcondition":"New"
                     },
                     "CompetitivePriceId":"1",
                     "Price":{
                        "LandedPrice":{
                           "CurrencyCode":"USD",
                           "Amount":"19.99"
                        },
                        "ListingPrice":{
                           "CurrencyCode":"USD",
                           "Amount":"19.99"
                        },
                        "Shipping":{
                           "CurrencyCode":"USD",
                           "Amount":"0.00"
                        }
                     }
                  }
               },
               "NumberOfOfferListings":{
                  "OfferListingCount":[
                     "1",
                     "1"
                  ]
               }
            },
            "SalesRankings":{
               "SalesRank":[
                  {
                     "ProductCategoryId":"fashion_display_on_website",
                     "Rank":"477899"
                  },
                  {
                     "ProductCategoryId":"9057038011",
                     "Rank":"13169"
                  },
                  {
                     "ProductCategoryId":"9057092011",
                     "Rank":"14176"
                  },
                  {
                     "ProductCategoryId":"9056987011",
                     "Rank":"31017"
                  }
               ]
            }
         }
      },
      "ResponseMetadata":{
         "RequestId":"1fa0f141-6c5b-4b58-8da9-0f45deae3695"
      }
   },
   {
      "GetCompetitivePricingForASINResult":{
         "@attributes":{
            "ASIN":"B079J1TKTR",
            "status":"Success"
         },
         "Product":{
            "Identifiers":{
               "MarketplaceASIN":{
                  "MarketplaceId":"ATVPDKIKX0DER",
                  "ASIN":"B079J1TKTR"
               }
            },
            "CompetitivePricing":{
               "CompetitivePrices":{
                  "CompetitivePrice":{
                     "@attributes":{
                        "belongsToRequester":"false",
                        "condition":"New",
                        "subcondition":"New"
                     },
                     "CompetitivePriceId":"1",
                     "Price":{
                        "LandedPrice":{
                           "CurrencyCode":"USD",
                           "Amount":"11.88"
                        },
                        "ListingPrice":{
                           "CurrencyCode":"USD",
                           "Amount":"11.88"
                        },
                        "Shipping":{
                           "CurrencyCode":"USD",
                           "Amount":"0.00"
                        }
                     }
                  }
               },
               "NumberOfOfferListings":{
                  "OfferListingCount":[
                     "2",
                     "2"
                  ]
               }
            },
            "SalesRankings":{
               "SalesRank":[
                  {
                     "ProductCategoryId":"toy_display_on_website",
                     "Rank":"8026"
                  },
                  {
                     "ProductCategoryId":"166405011",
                     "Rank":"27"
                  },
                  {
                     "ProductCategoryId":"251942011",
                     "Rank":"132"
                  }
               ]
            }
         }
      },
      "ResponseMetadata":{
         "RequestId":"d724307c-8be6-4b50-8a35-1f9e890ddfd2"
      }
   },
   {
      "GetCompetitivePricingForASINResult":{
         "@attributes":{
            "ASIN":"B076KKK73G",
            "status":"Success"
         },
         "Product":{
            "Identifiers":{
               "MarketplaceASIN":{
                  "MarketplaceId":"ATVPDKIKX0DER",
                  "ASIN":"B076KKK73G"
               }
            },
            "CompetitivePricing":{
               "CompetitivePrices":{
                  "CompetitivePrice":{
                     "@attributes":{
                        "belongsToRequester":"false",
                        "condition":"New",
                        "subcondition":"New"
                     },
                     "CompetitivePriceId":"1",
                     "Price":{
                        "LandedPrice":{
                           "CurrencyCode":"USD",
                           "Amount":"7.99"
                        },
                        "ListingPrice":{
                           "CurrencyCode":"USD",
                           "Amount":"7.99"
                        },
                        "Shipping":{
                           "CurrencyCode":"USD",
                           "Amount":"0.00"
                        }
                     }
                  }
               },
               "NumberOfOfferListings":{
                  "OfferListingCount":[
                     "1",
                     "1"
                  ]
               }
            },
            "SalesRankings":{
               "SalesRank":[
                  {
                     "ProductCategoryId":"toy_display_on_website",
                     "Rank":"3280"
                  },
                  {
                     "ProductCategoryId":"2491829011",
                     "Rank":"8"
                  },
                  {
                     "ProductCategoryId":"166360011",
                     "Rank":"34"
                  },
                  {
                     "ProductCategoryId":"251942011",
                     "Rank":"46"
                  }
               ]
            }
         }
      },
      "ResponseMetadata":{
         "RequestId":"ee7619e5-bd84-4bfa-a921-9d158577ab57"
      }
   },
   {
      "GetCompetitivePricingForASINResult":{
         "@attributes":{
            "ASIN":"B07W7TGWDR",
            "status":"Success"
         },
         "Product":{
            "Identifiers":{
               "MarketplaceASIN":{
                  "MarketplaceId":"ATVPDKIKX0DER",
                  "ASIN":"B07W7TGWDR"
               }
            },
            "CompetitivePricing":{
               "CompetitivePrices":{
                  "CompetitivePrice":{
                     "@attributes":{
                        "belongsToRequester":"false",
                        "condition":"New",
                        "subcondition":"New"
                     },
                     "CompetitivePriceId":"1",
                     "Price":{
                        "LandedPrice":{
                           "CurrencyCode":"USD",
                           "Amount":"79.99"
                        },
                        "ListingPrice":{
                           "CurrencyCode":"USD",
                           "Amount":"79.99"
                        },
                        "Shipping":{
                           "CurrencyCode":"USD",
                           "Amount":"0.00"
                        }
                     }
                  }
               },
               "NumberOfOfferListings":{
                  "OfferListingCount":[
                     "2",
                     "2"
                  ]
               }
            },
            "SalesRankings":{
               "SalesRank":[
                  {
                     "ProductCategoryId":"toy_display_on_website",
                     "Rank":"2060"
                  },
                  {
                     "ProductCategoryId":"274335011",
                     "Rank":"3"
                  },
                  {
                     "ProductCategoryId":"21179677011",
                     "Rank":"76"
                  },
                  {
                     "ProductCategoryId":"17863429011",
                     "Rank":"90"
                  }
               ]
            }
         }
      },
      "ResponseMetadata":{
         "RequestId":"1582c61b-ff4c-4b74-8bca-24fdaefb2f47"
      }
   }
]`}
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
