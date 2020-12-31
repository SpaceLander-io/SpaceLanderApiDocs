import React from 'react'
import {MDBContainer, MDBRow, MDBCol} from "mdbreact";
import { MDBTypography, MDBBox } from 'mdbreact';
import { CopyBlock, dracula, atomOneLight } from "react-code-blocks";
import logoImage from "../assets/img/logo.svg";
import { Link, scrollSpy, scroller } from 'react-scroll'

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
                                    <Link activeClass="active" to="introduction" className="black-text darken-1" spy={true} smooth={true} duration={500}>Introduction</Link>
                                </li>
                                <li className="endpoint py-2">
                                    <Link activeClass="active" to="authentication" className="black-text darken-1" spy={true} smooth={true} duration={500}>Authentication</Link>
                                </li>
                                <li className="endpoint py-2">
                                    <Link activeClass="active" to="errors" className="black-text darken-1" spy={true} smooth={true} duration={500}>Errors</Link>
                                </li>
                                <li className="endpoint py-2">
                                    <Link activeClass="active" to="brainstorm" className="black-text darken-1" spy={true} smooth={true} duration={500} >Brainstorm</Link>
                                    <ul className="pl-2 sidebarUI list-group flex-column w-100 h-100 font-weight-bold minor-link" >
                                        <Link activeClass="active" to="priceHistory" className="black-text darken-1" spy={true} smooth={true} duration={500}>Price History</Link>
                                        <Link activeClass="active" to="rankingHistory" className="black-text darken-1" spy={true} smooth={true} duration={500}>Ranking History</Link>
                                        <Link activeClass="active" to="history" className="black-text darken-1" spy={true} smooth={true} duration={500}>History</Link>
                                    </ul>
                                </li>

                                <li className="endpoint py-2">
                                    <Link activeClass="active" to="amazon" className="black-text darken-1" spy={true} smooth={true} duration={500}>Amazon</Link>
                                    <ul className="pl-2 sidebarUI list-group flex-column w-100 h-100 font-weight-bold minor-link" >
                                        <a className="black-text darken-1" href="#AsinCategories">Get Categories</a>
                                        <a className="black-text darken-1" href="#AmazonMatchingProducts">Get Matching Products</a>
                                        <a className="black-text darken-1" href="#AmazonProductDetails">Get Product Details</a>
                                        <a className="black-text darken-1" href="#AmazonLowestOfferListings">Get Lowest Offer Listings</a>
                                        <a className="black-text darken-1" href="#AsinLowestPrice">Get Lowest Price by ASIN</a>
                                        <a className="black-text darken-1" href="#AsinCompetitivePrice">Get Competitive Price By ASIN</a>
                                        <a className="black-text darken-1" href="#AmazonSkuCompetitivePrice">Get Competitive Price By SKU</a>
                                        <a className="black-text darken-1" href="#AsinMyPrice">Get My Price By ASIN</a>
                                        <a className="black-text darken-1" href="#AmazonSkuMyPrice">Get My Price by SKU</a>
                                        {/*<a className="black-text darken-1" href="#history">Ranking History</a>*/}
                                    </ul>
                                </li>

                                <li className="endpoint py-2">
                                    <Link activeClass="active" to="AmazonOrders" className="black-text darken-1" spy={true} smooth={true} duration={500}>Amazon Orders</Link>
                                    <ul className="pl-2 sidebarUI list-group flex-column w-100 h-100 font-weight-bold minor-link" >
                                        <a className="black-text darken-1" href="#AmazonOrderServiceStatus">Get Service Status (Orders)</a>
                                        <a className="black-text darken-1" href="#AmazonOrderList">Get Order List</a>
                                        <a className="black-text darken-1" href="#AmazonTestOrders">Test Orders</a>
                                        <a className="black-text darken-1" href="#AmazonOrderListByNextToken">List Orders By Next Token</a>
                                        <a className="black-text darken-1" href="#AmazonOrder">Get Order</a>
                                        <a className="black-text darken-1" href="#AmazonOrderItemList">Get Order Item List</a>
                                        <a className="black-text darken-1" href="#AmazonOrderItemListByNextToken">List Order Items By Next Token</a>
                                    </ul>
                                </li>

                                <li className="endpoint py-2">
                                    <Link activeClass="active" to="AmazonFulfillment" className="black-text darken-1" spy={true} smooth={true} duration={500}>Amazon Fulfillment</Link>
                                    <ul className="pl-2 sidebarUI list-group flex-column w-100 h-100 font-weight-bold minor-link" >
                                        <a className="black-text darken-1" href="#AmazonMerchantServiceStatus">Get Merchant Service Status</a>
                                        <a className="black-text darken-1" href="#AmazonEligibleShippingServices">Get Eligible Shipping Services</a>
                                        <a className="black-text darken-1" href="#AmazonAdditionalSellerInputs">Get Additional Seller Inputs</a>
                                        <a className="black-text darken-1" href="#AmazonCreateShipment">Create Shipment</a>
                                        <a className="black-text darken-1" href="#AmazonShipment">Get Shipment</a>
                                        <a className="black-text darken-1" href="#AmazonCancelShipment">Cancel Shipment</a>
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
                            <h3 className="py-3" id="AmazonMatchingProducts">Get Matching Products</h3>
                            <MDBTypography>
                                Returns a list of products and their attributes, ordered by relevancy,
                                based on a search query that you specify. Your search query can be a phrase
                                that describes the product, or it can be a product identifier such as a
                                GCID, UPC, EAN, ISBN, or JAN.
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
                            <h3 className="py-3" id="AmazonProductDetails">Get Product Details</h3>
                            <MDBTypography>
                                Returns product details for between 1 and 5 ASIN values provided.
                            </MDBTypography>
                        </MDBCol>
                        {/* Code Example */}
                        <MDBCol sm="12" md="5">
                            <h5 className="pt-3"><span className="badge badge-default">GET</span> | Route: </h5>
                            <CopyBlock
                                langiage="js"
                                text={`https://spacelander.io/api/amazon/product-details/{asin1}/{asin2?}/.../{asin5?}`}
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
   "GetMatchingProductForIdResult": [
      {
         "@attributes": {
            "Id": "9781933988665",
            "IdType": "ISBN",
            "status": "Success"
         },
         "Products": {
            "Product": {
               "Identifiers": {
                  "MarketplaceASIN": {
                     "MarketplaceId": "ATVPDKIKX0DER",
                     "ASIN": "1933988665"
                  }
               },
               "AttributeSets": {
                  "ns2ItemAttributes": {
                     "ns2Author": [
                        "Marmanis, Haralambos",
                        "Babenko, Dmitry"
                     ],
                     "ns2Binding": "Paperback",
                     "ns2Edition": "1",
                     "ns2ItemDimensions": {
                        "ns2Height": "9.17",
                        "ns2Length": "7.36",
                        "ns2Width": "0.75",
                        "ns2Weight": "1.40"
                     },
                     "ns2IsEligibleForTradeIn": "true",
                     "ns2Label": "Manning Publications",
                     "ns2Languages": {
                        "ns2Language": [
                           {
                              "ns2Name": "english",
                              "ns2Type": "Unknown"
                           },
                           {
                              "ns2Name": "english",
                              "ns2Type": "Original Language"
                           },
                           {
                              "ns2Name": "english",
                              "ns2Type": "Published"
                           }
                        ]
                     },
                     "ns2ListPrice": {
                        "ns2Amount": "44.99",
                        "ns2CurrencyCode": "USD"
                     },
                     "ns2Manufacturer": "Manning Publications",
                     "ns2NumberOfItems": "1",
                     "ns2NumberOfPages": "368",
                     "ns2PackageDimensions": {
                        "ns2Height": "0.80",
                        "ns2Length": "9.10",
                        "ns2Width": "7.30",
                        "ns2Weight": "1.35"
                     },
                     "ns2ProductGroup": "Book",
                     "ns2ProductTypeName": "ABIS_BOOK",
                     "ns2PublicationDate": "2009-07-05",
                     "ns2Publisher": "Manning Publications",
                     "ns2SmallImage": {
                        "ns2URL": "http://ecx.images-amazon.com/images/I/51EEz05N2HL._SL75_.jpg",
                        "ns2Height": "75",
                        "ns2Width": "60"
                     },
                     "ns2Studio": "Manning Publications",
                     "ns2Title": "Algorithms of the Intelligent Web"
                  }
               },
               "Relationships": {},
               "SalesRankings": {
                  "SalesRank": [
                     {
                        "ProductCategoryId": "book_display_on_website",
                        "Rank": "59485"
                     },
                     {
                        "ProductCategoryId": "377886011",
                        "Rank": "32"
                     },
                     {
                        "ProductCategoryId": "3887",
                        "Rank": "66"
                     },
                     {
                        "ProductCategoryId": "3870",
                        "Rank": "82"
                     }
                  ]
               }
            }
         }
      },
      {
         "@attributes": {
            "Id": "0439708184",
            "IdType": "ISBN",
            "status": "Success"
         },
         "Products": {
            "Product": [
               {
                  "Identifiers": {
                     "MarketplaceASIN": {
                        "MarketplaceId": "ATVPDKIKX0DER",
                        "ASIN": "059035342X"
                     }
                  },
                  "AttributeSets": {
                     "ns2ItemAttributes": {
                        "ns2Author": "Rowling, J.K.",
                        "ns2Binding": "Paperback",
                        "ns2Brand": "Scholastic Press",
                        "ns2Creator": "GrandPr\u00e9, Mary",
                        "ns2Edition": "1st",
                        "ns2Feature": "Recommended Age: 9 years and up",
                        "ns2ItemDimensions": {
                           "ns2Height": "0.80",
                           "ns2Length": "7.50",
                           "ns2Width": "5.20",
                           "ns2Weight": "0.50"
                        },
                        "ns2IsAutographed": "false",
                        "ns2IsMemorabilia": "false",
                        "ns2Label": "Scholastic Paperbacks",
                        "ns2Languages": {
                           "ns2Language": [
                              {
                                 "ns2Name": "english",
                                 "ns2Type": "Unknown"
                              },
                              {
                                 "ns2Name": "english",
                                 "ns2Type": "Original Language"
                              },
                              {
                                 "ns2Name": "english",
                                 "ns2Type": "Published"
                              }
                           ]
                        },
                        "ns2ListPrice": {
                           "ns2Amount": "10.99",
                           "ns2CurrencyCode": "USD"
                        },
                        "ns2Manufacturer": "Scholastic Paperbacks",
                        "ns2NumberOfItems": "1",
                        "ns2NumberOfPages": "320",
                        "ns2PackageDimensions": {
                           "ns2Height": "1.00",
                           "ns2Length": "7.50",
                           "ns2Width": "5.20",
                           "ns2Weight": "0.50"
                        },
                        "ns2PackageQuantity": "1",
                        "ns2PartNumber": "9780590353427",
                        "ns2ProductGroup": "Book",
                        "ns2ProductTypeName": "ABIS_BOOK",
                        "ns2PublicationDate": "1999-10-01",
                        "ns2Publisher": "Scholastic Paperbacks",
                        "ns2ReleaseDate": "1999-09-08",
                        "ns2SmallImage": {
                           "ns2URL": "http://ecx.images-amazon.com/images/I/51MU5VilKpL._SL75_.jpg",
                           "ns2Height": "75",
                           "ns2Width": "51"
                        },
                        "ns2Studio": "Scholastic Paperbacks",
                        "ns2Title": "Harry Potter and the Sorcerer's Stone (Book 1)"
                     }
                  },
                  "Relationships": {},
                  "SalesRankings": {
                     "SalesRank": [
                        {
                           "ProductCategoryId": "book_display_on_website",
                           "Rank": "362"
                        },
                        {
                           "ProductCategoryId": "15356791",
                           "Rank": "6"
                        },
                        {
                           "ProductCategoryId": "3153",
                           "Rank": "9"
                        },
                        {
                           "ProductCategoryId": "3045",
                           "Rank": "14"
                        }
                     ]
                  }
               },
               {
                  "Identifiers": {
                     "MarketplaceASIN": {
                        "MarketplaceId": "ATVPDKIKX0DER",
                        "ASIN": "0439708184"
                     }
                  },
                  "AttributeSets": {
                     "ns2ItemAttributes": {
                        "ns2Author": "J.K. Rowling, Mary GrandPr\u00e9",
                        "ns2Binding": "Paperback",
                        "ns2Label": "Scholastic Paperbacks",
                        "ns2Languages": {
                           "ns2Language": [
                              {
                                 "ns2Name": "english",
                                 "ns2Type": "Unknown"
                              },
                              {
                                 "ns2Name": "english",
                                 "ns2Type": "Published"
                              }
                           ]
                        },
                        "ns2Manufacturer": "Scholastic Paperbacks",
                        "ns2NumberOfItems": "1",
                        "ns2NumberOfPages": "784",
                        "ns2PackageDimensions": {
                           "ns2Height": "0.73",
                           "ns2Length": "8.43",
                           "ns2Width": "5.85",
                           "ns2Weight": "0.79"
                        },
                        "ns2ProductGroup": "Book",
                        "ns2ProductTypeName": "BOOKS_1973_AND_LATER",
                        "ns2PublicationDate": "1999-09-08",
                        "ns2Publisher": "Scholastic Paperbacks",
                        "ns2SmallImage": {
                           "ns2URL": "http://ecx.images-amazon.com/images/I/51STfI7UiCL._SL75_.jpg",
                           "ns2Height": "75",
                           "ns2Width": "52"
                        },
                        "ns2Studio": "Scholastic Paperbacks",
                        "ns2Title": "Harry Potter and the Sorcerer's Stone"
                     }
                  },
                  "Relationships": {},
                  "SalesRankings": {
                     "SalesRank": {
                        "ProductCategoryId": "book_display_on_website",
                        "Rank": "2091024"
                     }
                  }
               }
            ]
         }
      }
   ],
   "ResponseMetadata": {
      "RequestId": "7ba3245e-a213-430a-bea9-EXAMPLE38d76"
   }
}
`}
                                    codeBlock
                                    theme={atomOneLight}
                                    showLineNumbers={false}
                                />
                            </div>
                        </MDBCol>



                        {/* Get Lowest Offer Listings */}
                        <MDBCol className="my-2" sm="12" md="7" >
                            <hr class=""></hr>
                            <h3 className="py-3" id="AmazonLowestOfferListings">Get Lowest Offer Listings</h3>
                            <MDBTypography>
                                Returns the lowest price offer listings for products in new condition,
                                specified by between 1 and 20 ASIN values provided.
                            </MDBTypography>
                        </MDBCol>

                        {/* Code Example */}
                        <MDBCol sm="12" md="5">
                            <h5 className="pt-3"><span className="badge badge-default">GET</span> | Route: </h5>
                            <CopyBlock
                                langiage="js"
                                text={`https://spacelander.io/api/amazon/lowest-offer-listings/{asin1}/{asin2?}/.../{asin20?}`}
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
    "GetLowestOfferListingsForASINResult": {
        "@attributes": {
            "ASIN": "B00YBWOMRA",
            "status": "Success"
        },
        "AllOfferListingsConsidered": "true",
        "Product": {
            "Identifiers": {
                "MarketplaceASIN": {
                    "MarketplaceId": "ATVPDKIKX0DER",
                    "ASIN": "B00YBWOMRA"
                }
            },
            "LowestOfferListings": {
                "LowestOfferListing": {
                    "Qualifiers": {
                        "ItemCondition": "New",
                        "ItemSubcondition": "New",
                        "FulfillmentChannel": "Amazon",
                        "ShipsDomestically": "True",
                        "ShippingTime": {
                            "Max": "0-2 days"
                        },
                        "SellerPositiveFeedbackRating": "98-100%"
                    },
                    "NumberOfOfferListingsConsidered": "1",
                    "SellerFeedbackCount": "362200",
                    "Price": {
                        "LandedPrice": {
                            "CurrencyCode": "USD",
                            "Amount": "7.99"
                        },
                        "ListingPrice": {
                            "CurrencyCode": "USD",
                            "Amount": "7.99"
                        },
                        "Shipping": {
                            "CurrencyCode": "USD",
                            "Amount": "0.00"
                        }
                    },
                    "MultipleOffersAtLowestPrice": "False"
                }
            }
        }
    },
    "ResponseMetadata": {
        "RequestId": "04185475-893a-4de9-8964-9437e5974b2e"
    }
}`}
                                    codeBlock
                                    theme={atomOneLight}
                                    showLineNumbers={false}
                                />
                            </div>
                        </MDBCol>

                        {/* Get Lowest Price By ASIN */}
                        <MDBCol className="my-2" sm="12" md="7" >
                            <hr class=""></hr>
                            <h3 className="py-3" id="AsinLowestPrice">Get Lowest Price by ASIN</h3>
                            <MDBTypography>
                                Returns the top 20 offers for a given ASIN and item condition that you specify.
                                If itemCondition is specified, it must be one of the following values:
                                all, new, used, collectible, refurbished or club.
                                If itemCondition is not specified, it defaults to all.
                                The top 20 offers are determined by the lowest landed price,
                                which is the price plus shipping minus Amazon Points.
                                If multiple sellers are charging the same landed price,
                                the results will be returned in random order.
                            </MDBTypography>
                        </MDBCol>

                        {/* Code Example */}
                        <MDBCol sm="12" md="5">
                            <h5 className="pt-3"><span className="badge badge-default">GET</span> | Route: </h5>
                            <CopyBlock
                                langiage="js"
                                text={`https://spacelander.io/api/amazon/get-lowest-price-by-asin/{asin}/{itemCondition?}`}
                                codeBlock
                                theme={dracula}
                                showLineNumbers={false}
                            />

                            <p className="mt-3">Response</p>
                            <div className="light">
                                <CopyBlock

                                    langiage="js"
                                    text={`{
   "GetLowestPricedOffersForASINResult": {
      "@attributes": {
         "MarketplaceID": "ATVPDKIKX0DER",
         "ItemCondition": "New",
         "ASIN": "B0002GTTRC",
         "status": "Success"
      },
      "Identifier": {
         "MarketplaceId": "ATVPDKIKX0DER",
         "ASIN": "B0002GTTRC",
         "ItemCondition": "New",
         "TimeOfOfferChange": "2015-07-19T23:15:11.859Z"
      },
      "Summary": {
         "TotalOfferCount": "0",
         "NumberOfOffers": {
            "OfferCount": "1"
         },
         "LowestPrices": {
            "LowestPrice": {
               "@attributes": {
                  "condition": "new",
                  "fulfillmentChannel": "Amazon"
               },
               "LandedPrice": {
                  "CurrencyCode": "USD",
                  "Amount": "32.99"
               },
               "ListingPrice": {
                  "CurrencyCode": "USD",
                  "Amount": "32.99"
               },
               "Shipping": {
                  "CurrencyCode": "USD",
                  "Amount": "0.00"
               }
            }
         },
         "BuyBoxPrices": {
            "BuyBoxPrice": {
               "@attributes": {
                  "condition": "New"
               },
               "LandedPrice": {
                  "CurrencyCode": "USD",
                  "Amount": "32.99"
               },
               "ListingPrice": {
                  "CurrencyCode": "USD",
                  "Amount": "32.99"
               },
               "Shipping": {
                  "CurrencyCode": "USD",
                  "Amount": "0.00"
               }
            }
         },
         "ListPrice": {
            "CurrencyCode": "USD",
            "Amount": "58.34"
         },
         "SuggestedLowerPricePlusShipping": {
            "CurrencyCode": "USD",
            "Amount": "32.99"
         },
         "BuyBoxEligibleOffers": {
            "OfferCount": "1"
         }
      },
      "Offers": {
         "Offer": {
            "SubCondition": "new",
            "SellerFeedbackRating": {
               "SellerPositiveFeedbackRating": "100.0",
               "FeedbackCount": "1"
            },
            "ShippingTime": {
               "@attributes": {
                  "minimumHours": "0",
                  "maximumHours": "0",
                  "availabilityType": "NOW"
               }
            },
            "ListingPrice": {
               "CurrencyCode": "USD",
               "Amount": "32.99"
            },
            "Shipping": {
               "CurrencyCode": "USD",
               "Amount": "0.00"
            },
            "IsFulfilledByAmazon": "true",
            "IsBuyBoxWinner": "true",
            "IsFeaturedMerchant": "true"
         }
      }
   },
   "ResponseMetadata": {
      "RequestId": "21534f03-e7e3-4d9a-9bea-0e15add3326d"
   }
}`}
                                codeBlock
                                theme={atomOneLight}
                                showLineNumbers={false}
                                />
                            </div>
                        </MDBCol>

                        {/* Get Competitive Price By ASIN */}
                        <MDBCol className="my-2" sm="12" md="7" >
                            <hr class=""></hr>
                            <h3 className="py-3" id="AsinCompetitivePrice">Get Competitive Price By ASIN</h3>
                            <MDBTypography>
                                Returns the current competitive pricing of a product,
                                based on a list of between 1 and 20 ASIN values that you specify.
                            </MDBTypography>
                        </MDBCol>

                        {/* Code Example */}
                        <MDBCol sm="12" md="5">
                            <h5 className="pt-3"><span className="badge badge-default">GET</span> | Route: </h5>
                            <CopyBlock
                                langiage="js"
                                text={`https://spacelander.io/api/amazon/get-competitive-price-by-asin/{asin1}/{asin2?}/.../{asin20?}`}
                                codeBlock
                                theme={dracula}
                                showLineNumbers={false}
                            />

                            <p className="mt-3">Response</p>
                            <div className="light">
                                <CopyBlock

                                    langiage="js"
                                    text={`[
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

                        {/* Get Competitive Price By SKU */}
                        <MDBCol className="my-2" sm="12" md="7" >
                            <hr class=""></hr>
                            <h3 className="py-3" id="AmazonSkuCompetitivePrice">Get Competitive Price By SKU</h3>
                            <MDBTypography>
                                Returns the current competitive pricing of a product,
                                based on a list of between 1 and 20 SellerSKU values that you specify.
                            </MDBTypography>
                        </MDBCol>

                        {/* Code Example */}
                        <MDBCol sm="12" md="5">
                            <h5 className="pt-3"><span className="badge badge-default">GET</span> | Route: </h5>
                            <CopyBlock
                                langiage="js"
                                text={`https://spacelander.io/api/amazon/get-competitive-price-by-sku/{sku1}/{sku2?}/.../{sku20?}`}
                                codeBlock
                                theme={dracula}
                                showLineNumbers={false}
                            />

                            <p className="mt-3">Response</p>
                            <div className="light">
                                <CopyBlock

                                    langiage="js"
                                    text={`{
   "GetCompetitivePricingForSKUResult": {
      "@attributes": {
         "SellerSKU": "SKU2468",
         "status": "Success"
      },
      "Product": {
         "Identifiers": {
            "MarketplaceASIN": {
               "MarketplaceId": "ATVPDKIKX0DER",
               "ASIN": "1933890517"
            },
            "SKUIdentifier": {
               "MarketplaceId": "ATVPDKIKX0DER",
               "SellerId": "A1IMEXAMPLEWRC",
               "SellerSKU": "SKU2468"
            }
         },
         "CompetitivePricing": {
            "CompetitivePrices": {
               "CompetitivePrice": [
                  {
                     "@attributes": {
                        "belongsToRequester": "false",
                        "condition": "New",
                        "subcondition": "New"
                     },
                     "CompetitivePriceId": "1",
                     "Price": {
                        "LandedPrice": {
                           "CurrencyCode": "USD",
                           "Amount": "40.03"
                        },
                        "ListingPrice": {
                           "CurrencyCode": "USD",
                           "Amount": "40.03"
                        },
                        "Shipping": {
                           "CurrencyCode": "USD",
                           "Amount": "0.00"
                        }
                     }
                  },
                  {
                     "@attributes": {
                        "belongsToRequester": "false",
                        "condition": "Used",
                        "subcondition": "Good"
                     },
                     "CompetitivePriceId": "2",
                     "Price": {
                        "LandedPrice": {
                           "CurrencyCode": "USD",
                           "Amount": "30.50"
                        },
                        "ListingPrice": {
                           "CurrencyCode": "USD",
                           "Amount": "30.50"
                        },
                        "Shipping": {
                           "CurrencyCode": "USD",
                           "Amount": "0.00"
                        }
                     }
                  }
               ]
            },
            "NumberOfOfferListings": {
               "OfferListingCount": [
                  "296",
                  "145",
                  "151"
               ]
            },
            "TradeInValue": {
               "CurrencyCode": "USD",
               "Amount": "17.05"
            }
         },
         "SalesRankings": {
            "SalesRank": [
               {
                  "ProductCategoryId": "book_display_on_website",
                  "Rank": "900"
               },
               {
                  "ProductCategoryId": "271578011",
                  "Rank": "1"
               },
               {
                  "ProductCategoryId": "355562011",
                  "Rank": "8"
               },
               {
                  "ProductCategoryId": "173516",
                  "Rank": "25"
               }
            ]
         }
      }
   },
   "ResponseMetadata": {
      "RequestId": "003fc73e-bf70-4e55-8db8-EXAMPLEce417"
   }
}`}
                                    codeBlock
                                    theme={atomOneLight}
                                    showLineNumbers={false}
                                />
                            </div>
                        </MDBCol>

                        {/* Get My Price By ASIN */}
                        <MDBCol className="my-2" sm="12" md="7" >
                            <hr class=""></hr>
                            <h3 className="py-3" id="AsinMyPrice">Get My Price By ASIN</h3>
                            <MDBTypography>
                                Returns pricing information for your own active offer listings in new condition,
                                based on the list of between 1 and 20 ASIN values that you specify.
                            </MDBTypography>
                        </MDBCol>

                        {/* Code Example */}
                        <MDBCol sm="12" md="5">
                            <h5 className="pt-3"><span className="badge badge-default">GET</span> | Route: </h5>
                            <CopyBlock
                                langiage="js"
                                text={`https://spacelander.io/api/amazon/get-my-price-for-asin/{asin1}/{asin2?}/.../{asin20?}`}
                                codeBlock
                                theme={dracula}
                                showLineNumbers={false}
                            />

                            <p className="mt-3">Response</p>
                            <div className="light">
                                <CopyBlock

                                    langiage="js"
                                    text={`{
   "GetMyPriceForASINResult": {
      "@attributes": {
         "ASIN": "1933890517",
         "status": "Success"
      },
      "Product": {
         "Identifiers": {
            "MarketplaceASIN": {
               "MarketplaceId": "ATVPDKIKX0DER",
               "ASIN": "1933890517"
            }
         },
         "Offers": {
            "Offer": {
               "BuyingPrice": {
                  "LandedPrice": {
                     "CurrencyCode": "USD",
                     "Amount": "303.99"
                  },
                  "ListingPrice": {
                     "CurrencyCode": "USD",
                     "Amount": "300.00"
                  },
                  "Shipping": {
                     "CurrencyCode": "USD",
                     "Amount": "3.99"
                  }
               },
               "RegularPrice": {
                  "CurrencyCode": "USD",
                  "Amount": "300.00"
               },
               "FulfillmentChannel": "MERCHANT",
               "ItemCondition": "Used",
               "ItemSubCondition": "Acceptable",
               "SellerId": "A1IMEXAMPLEWRC",
               "SellerSKU": "SKU2468"
            }
         }
      }
   },
   "ResponseMetadata": {
      "RequestId": "a3381684-87bd-416e-9b95-EXAMPLE9c236"
   }
}`}
                                    codeBlock
                                    theme={atomOneLight}
                                    showLineNumbers={false}
                                />
                            </div>
                        </MDBCol>

                        {/* Get My Price By SKU */}
                        <MDBCol className="my-2" sm="12" md="7" >
                            <hr class=""></hr>
                            <h3 className="py-3" id="AmazonSkuMyPrice">Get My Price by SKU</h3>
                            <MDBTypography>
                                Returns pricing information for your own active offer listings,
                                based on the ASIN values mapped to the list of
                                between 1 and 20 SellerSKU values that you specify.
                                itemCondition must be one of the following values:
                                all, new, used, collectible, refurbished or club.
                            </MDBTypography>
                        </MDBCol>

                        {/* Code Example */}
                        <MDBCol sm="12" md="5">
                            <h5 className="pt-3"><span className="badge badge-default">GET</span> | Route: </h5>
                            <CopyBlock
                                langiage="js"
                                text={`https://spacelander.io/api/amazon/get-my-price-for-sku/{itemCondition}/{sku1}/{sku2?}/.../{sku20?}`}
                                codeBlock
                                theme={dracula}
                                showLineNumbers={false}
                            />

                            <p className="mt-3">Response</p>
                            <div className="light">
                                <CopyBlock

                                    langiage="js"
                                    text={`{
   "GetMyPriceForSKUResult": {
      "@attributes": {
         "SellerSKU": "SKU2468",
         "status": "Success"
      },
      "Product": {
         "Identifiers": {
            "MarketplaceASIN": {
               "MarketplaceId": "ATVPDKIKX0DER",
               "ASIN": "1933890517"
            },
            "SKUIdentifier": {
               "MarketplaceId": "ATVPDKIKX0DER",
               "SellerId": "A1IMEXAMPLEWRC",
               "SellerSKU": "SKU2468"
            }
         },
         "Offers": {
            "Offer": {
               "BuyingPrice": {
                  "LandedPrice": {
                     "CurrencyCode": "USD",
                     "Amount": "303.99"
                  },
                  "ListingPrice": {
                     "CurrencyCode": "USD",
                     "Amount": "300.00"
                  },
                  "Shipping": {
                     "CurrencyCode": "USD",
                     "Amount": "3.99"
                  }
               },
               "RegularPrice": {
                  "CurrencyCode": "USD",
                  "Amount": "300.00"
               },
               "FulfillmentChannel": "MERCHANT",
               "ItemCondition": "Used",
               "ItemSubCondition": "Acceptable",
               "SellerId": "A1IMEXAMPLEWRC",
               "SellerSKU": "SKU2468"
            }
         }
      }
   },
   "ResponseMetadata": {
      "RequestId": "bc6e4601-3d74-4612-adcf-EXAMPLEf1796"
   }
}`}
                                    codeBlock
                                    theme={atomOneLight}
                                    showLineNumbers={false}
                                />
                            </div>
                        </MDBCol>

                        {/* Amazon Orders */}
                        <MDBCol sm="12" md="7"  >
                            <h3 className="py-3" id="AmazonOrders">Amazon Orders</h3>
                            <MDBTypography>
                                3-7-7 format means 3 digits, followed by a dash, followed by 7 more digits,
                                followed by another dash, followed by yet another 7 digits.
                            </MDBTypography>
                        </MDBCol>
                        {/* Code Example */}
                        <MDBCol sm="12" md="5">
                            <h5 className="pt-3">Base URL: </h5>
                            <CopyBlock
                                langiage="js"
                                text={`https://spacelander.io/api/amazon/orders/`}
                                codeBlock
                                theme={dracula}
                                showLineNumbers={false}
                            />
                        </MDBCol>

                        {/* Get Service Status (Orders) */}
                        <MDBCol className="my-2" sm="12" md="7" >
                            <hr class=""></hr>
                            <h3 className="py-3" id="AmazonOrderServiceStatus">Get Service Status (Orders)</h3>
                            <MDBTypography>
                                Returns the operational status of the Orders API section of
                                Amazon Marketplace Web Service. Status values are GREEN, YELLOW, and RED.
                            </MDBTypography>
                        </MDBCol>

                        {/* Code Example */}
                        <MDBCol sm="12" md="5">
                            <h5 className="pt-3"><span className="badge badge-default">GET</span> | Route: </h5>
                            <CopyBlock
                                langiage="js"
                                text={`https://spacelander.io/api/amazon/orders/service-status`}
                                codeBlock
                                theme={dracula}
                                showLineNumbers={false}
                            />

                            <p className="mt-3">Response</p>
                            <div className="light">
                                <CopyBlock

                                    langiage="js"
                                    text={`{
    "GetServiceStatusResult": {
        "Status": "GREEN",
        "Timestamp": "2020-12-30T23:08:15.602Z"
    },
    "ResponseMetadata": {
        "RequestId": "c056d6dd-a2bf-4dcf-8807-d9882dbca49f"
    }
}`}
                                    codeBlock
                                    theme={atomOneLight}
                                    showLineNumbers={false}
                                />
                            </div>
                        </MDBCol>

                        {/* Get Order List */}
                        <MDBCol className="my-2" sm="12" md="7" >
                            <hr class=""></hr>
                            <h3 className="py-3" id="AmazonOrderList">Get Order List</h3>
                            <MDBTypography>
                                Returns a list of orders created after May 1, 2020.
                            </MDBTypography>
                        </MDBCol>

                        {/* Code Example */}
                        <MDBCol sm="12" md="5">
                            <h5 className="pt-3"><span className="badge badge-default">GET</span> | Route: </h5>
                            <CopyBlock
                                langiage="js"
                                text={`https://spacelander.io/api/amazon/orders/list`}
                                codeBlock
                                theme={dracula}
                                showLineNumbers={false}
                            />

                            <p className="mt-3">Response</p>
                            <div className="light">
                                <CopyBlock

                                    langiage="js"
                                    text={`See Test Orders below`}
                                    codeBlock
                                    theme={atomOneLight}
                                    showLineNumbers={false}
                                />
                            </div>
                        </MDBCol>

                        {/* Test Orders */}
                        <MDBCol className="my-2" sm="12" md="7" >
                            <hr class=""></hr>
                            <h3 className="py-3" id="AmazonTestOrders">Test Orders</h3>
                            <MDBTypography>
                                Allows debuggers to see an example of what getOrderList might return,
                                without creating fake orders or fake user accounts.
                                Also changes the date range from created after May 1, 2020,
                                to last updated before February 25, 2017, 6:10 PM.
                            </MDBTypography>
                        </MDBCol>

                        {/* Code Example */}
                        <MDBCol sm="12" md="5">
                            <h5 className="pt-3"><span className="badge badge-default">GET</span> | Route: </h5>
                            <CopyBlock
                                langiage="js"
                                text={`https://spacelander.io/api/amazon/orders/test`}
                                codeBlock
                                theme={dracula}
                                showLineNumbers={false}
                            />

                            <p className="mt-3">Response</p>
                            <div className="light">
                                <CopyBlock

                                    langiage="js"
                                    text={`{
   "ListOrdersResult": {
      "NextToken": "2YgYW55IGNhcm5hbCBwbGVhc3VyZS4=",
      "LastUpdatedBefore": "2017-02-25T18%3A10%3A21.687Z",
      "Orders": {
         "Order": [
            {
               "AmazonOrderId": "902-3159896-1390916",
               "PurchaseDate": "2017-02-20T19:49:35Z",
               "LastUpdateDate": "2017-02-20T19:49:35Z",
               "OrderStatus": "Unshipped",
               "FulfillmentChannel": "MFN",
               "SalesChannel": "Amazon.com",
               "ShippingAddress": {
                  "Name": "Buyer name",
                  "AddressLine1": "1234 Any St.",
                  "City": "Seattle",
                  "StateOrRegion": "WA",
                  "PostalCode": "98103",
                  "CountryCode": "US",
                  "AddressType": "Commercial"
               },
               "DefaultShipFromLocationAddress": {
                  "Name": "Seller name",
                  "AddressLine1": "15606 NE Any street",
                  "AddressLine2": "Suite 2",
                  "City": "Redmond",
                  "StateOrRegion": "WA",
                  "PostalCode": "98052",
                  "CountryCode": "US",
                  "Phone": "555 555-5555",
                  "isAddressSharingConfidential": "false"
               },
               "OrderTotal": {
                  "CurrencyCode": "USD",
                  "Amount": "25.00"
               },
               "NumberOfItemsShipped": "0",
               "NumberOfItemsUnshipped": "1",
               "PaymentMethod": "Other",
               "PaymentMethodDetails": {
                  "PaymentMethodDetail": "CreditCard"
               },
               "MarketplaceId": "ATVPDKIKX0DER",
               "BuyerEmail": "5vlhEXAMPLEh9h5@marketplace.amazon.com",
               "BuyerName": "Buyer name",
               "BuyerTaxInfo": {
                  "CompanyLegalName": "Company Name",
                  "TaxingRegion": "US",
                  "TaxClassifications": {
                     "TaxClassification": {
                        "Name": "VATNumber",
                        "Value": "XXX123"
                     }
                  }
               },
               "OrderType": "StandardOrder",
               "EarliestShipDate": "2017-02-20T19:51:16Z",
               "LatestShipDate": "2017-02-25T19:49:35Z",
               "IsBusinessOrder": "true",
               "PurchaseOrderNumber": "PO12345678",
               "IsPrime": "false",
               "IsPremiumOrder": "false",
               "IsGlobalExpressEnabled": "false"
            },
            {
               "AmazonOrderId": "483-3488972-0896720",
               "PurchaseDate": "20178-02-20T19:49:35Z",
               "LastUpdateDate": "2017-02-20T19:49:35Z",
               "OrderStatus": "Unshipped",
               "FulfillmentChannel": "MFN",
               "ShippingAddress": {
                  "Name": "Buyer name",
                  "AddressLine1": "1234 Avenida Qualquer",
                  "City": "Sao Paulo",
                  "PostalCode": "08474-130",
                  "CountryCode": "BR",
                  "AddressType": "Residential"
               },
               "OrderTotal": {
                  "CurrencyCode": "BRL",
                  "Amount": "100.00"
               },
               "NumberOfItemsShipped": "0",
               "NumberOfItemsUnshipped": "1",
               "PaymentMethod": "Other",
               "PaymentMethodDetails": {
                  "PaymentMethodDetail": "CreditCard"
               },
               "MarketplaceId": "A2Q3Y263D00KWC",
               "BuyerEmail": "5vlhEXAMPLEh9h5@marketplace.amazon.com.br",
               "BuyerName": "John Jones",
               "BuyerCounty": "Vila Olimpia",
               "BuyerTaxInfo": {
                  "TaxingRegion": "BR",
                  "TaxClassifications": {
                     "TaxClassification": {
                        "Name": "CSTNumber",
                        "Value": "XXX123"
                     }
                  }
               },
               "EarliestShipDate": "2017-02-20T19:51:16Z",
               "LatestShipDate": "2017-02-25T19:49:35Z",
               "IsBusinessOrder": "false",
               "IsPrime": "false",
               "IsPremiumOrder": "false",
               "IsGlobalExpressEnabled": "false"
            },
            {
               "AmazonOrderId": "058-1233752-8214740",
               "PurchaseDate": "2017-02-05T00%3A06%3A07.000Z",
               "LastUpdateDate": "2017-02-07T12%3A43%3A16.000Z",
               "OrderStatus": "Unshipped",
               "FulfillmentChannel": "MFN",
               "ShipServiceLevel": "Std JP Kanto8",
               "ShippingAddress": {
                  "Name": "Jane Smith",
                  "AddressLine1": "1-2-10 Akasaka",
                  "City": "Tokyo",
                  "PostalCode": "107-0053",
                  "CountryCode": "JP"
               },
               "OrderTotal": {
                  "CurrencyCode": "JPY",
                  "Amount": "1507.00"
               },
               "NumberOfItemsShipped": "0",
               "NumberOfItemsUnshipped": "1",
               "PaymentExecutionDetail": {
                  "PaymentExecutionDetailItem": [
                     {
                        "Payment": {
                           "Amount": "10.00",
                           "CurrencyCode": "JPY"
                        },
                        "PaymentMethod": "PointsAccount"
                     },
                     {
                        "Payment": {
                           "Amount": "317.00",
                           "CurrencyCode": "JPY"
                        },
                        "PaymentMethod": "GC"
                     },
                     {
                        "Payment": {
                           "Amount": "1180.00",
                           "CurrencyCode": "JPY"
                        },
                        "PaymentMethod": "COD"
                     }
                  ]
               },
               "PaymentMethod": "COD",
               "PaymentMethodDetails": {
                  "PaymentMethodDetail": "COD"
               },
               "MarketplaceId": "A1VC38T7YXB528",
               "BuyerEmail": "5vlhEXAMPLEh9h5@marketplace.amazon.co.jp",
               "BuyerName": "Jane Smith",
               "ShipmentServiceLevelCategory": "Standard ",
               "OrderType": "SourcingOnDemandOrder",
               "IsBusinessOrder": "false",
               "IsPrime": "false",
               "IsPremiumOrder": "false",
               "IsGlobalExpressEnabled": "false",
               "PromiseResponseDueDate": "2017-08-31T23:58:44Z",
               "IsEstimatedShipDateSet": "true"
            }
         ]
      }
   },
   "ResponseMetadata": {
      "RequestId": "88faca76-b600-46d2-b53c-0c8c4533e43a"
   }
}`}
                                    codeBlock
                                    theme={atomOneLight}
                                    showLineNumbers={false}
                                />
                            </div>
                        </MDBCol>

                        {/* List Orders By Next Token */}
                        <MDBCol className="my-2" sm="12" md="7" >
                            <hr class=""></hr>
                            <h3 className="py-3" id="AmazonOrderListByNextToken">List Orders By Next Token</h3>
                            <MDBTypography>
                                Returns the next page of orders using the nextToken parameter.
                            </MDBTypography>
                        </MDBCol>

                        {/* Code Example */}
                        <MDBCol sm="12" md="5">
                            <h5 className="pt-3"><span className="badge badge-default">GET</span> | Route: </h5>
                            <CopyBlock
                                langiage="js"
                                text={`https://spacelander.io/api/amazon/orders/list-by-next-token/{nextToken}`}
                                codeBlock
                                theme={dracula}
                                showLineNumbers={false}
                            />

                            <p className="mt-3">Response</p>
                            <div className="light">
                                <CopyBlock

                                    langiage="js"
                                    text={`{
   "ListOrdersByNextTokenResult": {
      "Orders": {
         "Order": {
            "AmazonOrderId": "902-3159896-1390916",
            "PurchaseDate": "2017-01-20T19:49:35Z",
            "LastUpdateDate": "2017-01-20T19:49:35Z",
            "OrderStatus": "Pending",
            "FulfillmentChannel": "MFN",
            "NumberOfItemsShipped": "0",
            "NumberOfItemsUnshipped": "0",
            "PaymentMethod": "Other",
            "PaymentMethodDetails": {
               "PaymentMethodDetail": [
                  "CreditCard",
                  "GiftCerificate"
               ]
            },
            "MarketplaceId": "A21TJRUUN4KGV",
            "ShipmentServiceLevelCategory": "Standard\\n            ",
            "OrderType": "StandardOrder",
            "EarliestShipDate": "2017-01-20T19:51:16Z",
            "LatestShipDate": "2017-01-25T19:49:35Z",
            "IsBusinessOrder": "false",
            "IsPrime": "false",
            "IsPremiumOrder": "false"
         }
      }
   },
   "ResponseMetadata": {
      "RequestId": "88faca76-b600-46d2-b53c-0c8c4533e43a"
   }
}`}
                                    codeBlock
                                    theme={atomOneLight}
                                    showLineNumbers={false}
                                />
                            </div>
                        </MDBCol>

                        {/* Get Order */}
                        <MDBCol className="my-2" sm="12" md="7" >
                            <hr class=""></hr>
                            <h3 className="py-3" id="AmazonOrder">Get Order</h3>
                            <MDBTypography>
                                Returns an order for each AmazonOrderId that you specify, up to a maximum of 50.
                                Each orderId must be in 3-7-7 format.
                            </MDBTypography>
                        </MDBCol>

                        {/* Code Example */}
                        <MDBCol sm="12" md="5">
                            <h5 className="pt-3"><span className="badge badge-default">GET</span> | Route: </h5>
                            <CopyBlock
                                langiage="js"
                                text={`https://spacelander.io/api/amazon/orders/{orderId1}/{orderId2?}/.../{orderId50?}`}
                                codeBlock
                                theme={dracula}
                                showLineNumbers={false}
                            />

                            <p className="mt-3">Response</p>
                            <div className="light">
                                <CopyBlock

                                    langiage="js"
                                    text={`{
   "GetOrderResult": {
      "Orders": {
         "Order": {
            "AmazonOrderId": "902-3159896-1390916",
            "PurchaseDate": "2017-01-20T19:49:35Z",
            "LastUpdateDate": "2017-01-20T19:49:35Z",
            "OrderStatus": "Pending",
            "FulfillmentChannel": "MFN",
            "NumberOfItemsShipped": "0",
            "NumberOfItemsUnshipped": "0",
            "PaymentMethod": "Other",
            "PaymentMethodDetails": {
               "PaymentMethodDetail": [
                  "CreditCard",
                  "GiftCerificate"
               ]
            },
            "MarketplaceId": "ATVPDKIKX0DER",
            "ShipmentServiceLevelCategory": "Standard\\n            ",
            "OrderType": "StandardOrder",
            "EarliestShipDate": "2017-01-20T19:51:16Z",
            "LatestShipDate": "2017-01-25T19:49:35Z",
            "IsBusinessOrder": "false",
            "IsPrime": "false",
            "IsPremiumOrder": "false",
            "IsGlobalExpressEnabled": "false"
         }
      }
   },
   "ResponseMetadata": {
      "RequestId": "88faca76-b600-46d2-b53c-0c8c4533e43a"
   }
}`}
                                    codeBlock
                                    theme={atomOneLight}
                                    showLineNumbers={false}
                                />
                            </div>
                        </MDBCol>

                        {/* Get Order Item List */}
                        <MDBCol className="my-2" sm="12" md="7" >
                            <hr class=""></hr>
                            <h3 className="py-3" id="AmazonOrderItemList">Get Order Item List</h3>
                            <MDBTypography>
                                Returns order items based on the amazonOrderId that you specify.
                                The amazonOrderId must be in 3-7-7 format.
                                The order item information includes Title, ASIN, SellerSKU, ItemPrice,
                                ShippingPrice, as well as tax and promotion information.
                            </MDBTypography>
                        </MDBCol>

                        {/* Code Example */}
                        <MDBCol sm="12" md="5">
                            <h5 className="pt-3"><span className="badge badge-default">GET</span> | Route: </h5>
                            <CopyBlock
                                langiage="js"
                                text={`https://spacelander.io/api/amazon/orders/list-items/{amazonOrderId}`}
                                codeBlock
                                theme={dracula}
                                showLineNumbers={false}
                            />

                            <p className="mt-3">Response</p>
                            <div className="light">
                                <CopyBlock

                                    langiage="js"
                                    text={`{
   "ListOrderItemsResult": {
      "NextToken": "MRgZW55IGNhcm5hbCBwbGVhc3VyZS6=",
      "AmazonOrderId": "058-1233752-8214740",
      "OrderItems": {
         "OrderItem": [
            {
               "ASIN": "BT0093TELA",
               "OrderItemId": "68828574383266",
               "BuyerCustomizedInfo": {
                  "CustomizedURL": "https:\\/\\/zme-caps.amazon.com\\/t\\/bR6qHkzSOxuB\\/J8nbWhze0Bd3DkajkOdY-XQbWkFralegp2sr_QZiKEE\\/1"
               },
               "SellerSKU": "CBA_OTF_1",
               "Title": "Example item name",
               "QuantityOrdered": "1",
               "QuantityShipped": "1",
               "ProductInfo": {
                  "NumberOfItems": "12"
               },
               "PointsGranted": {
                  "PointsNumber": "10",
                  "PointsMonetaryValue": {
                     "CurrencyCode": "JPY",
                     "Amount": "10.00"
                  }
               },
               "ItemPrice": {
                  "CurrencyCode": "JPY",
                  "Amount": "25.99"
               },
               "ShippingPrice": {
                  "CurrencyCode": "JPY",
                  "Amount": "1.26"
               },
               "ScheduledDeliveryEndDate": "2013-09-09T01:30:00.000-06:00",
               "ScheduledDeliveryStartDate": "2013-09-071T02:00:00.000-06:00",
               "CODFee": {
                  "CurrencyCode": "JPY",
                  "Amount": "10.00"
               },
               "CODFeeDiscount": {
                  "CurrencyCode": "JPY",
                  "Amount": "1.00"
               },
               "IsGift": "false",
               "IsTransparency": "true",
               "GiftMessageText": "For you!",
               "GiftWrapPrice": {
                  "CurrencyCode": "JPY",
                  "Amount": "1.99"
               },
               "GiftWrapLevel": "Classic",
               "PriceDesignation": "BusinessPrice"
            },
            {
               "ASIN": "BCTU1104UEFB",
               "OrderItemId": "79039765272157",
               "SellerSKU": "CBA_OTF_5",
               "Title": "Example item name",
               "QuantityOrdered": "2",
               "ItemPrice": {
                  "CurrencyCode": "JPY",
                  "Amount": "17.95"
               },
               "PromotionIds": {
                  "PromotionId": "FREESHIP"
               },
               "ConditionId": "Used",
               "ConditionSubtypeId": "Mint",
               "ConditionNote": "Example ConditionNote",
               "IsGift": "false",
               "IsTransparency": "false",
               "PriceDesignation": "BusinessPrice",
               "TaxCollection": {
                  "Model": "MarketplaceFacilitator",
                  "ResponsibleParty": "Amazon Services, Inc."
               }
            }
         ]
      }
   },
   "ResponseMetadata": {
      "RequestId": "88faca76-b600-46d2-b53c-0c8c4533e43a"
   }
}`}
                                    codeBlock
                                    theme={atomOneLight}
                                    showLineNumbers={false}
                                />
                            </div>
                        </MDBCol>

                        {/* List Order Items By Next Token */}
                        <MDBCol className="my-2" sm="12" md="7" >
                            <hr class=""></hr>
                            <h3 className="py-3" id="AmazonOrderItemListByNextToken">List Order Items By Next Token</h3>
                            <MDBTypography>
                                Returns the next page of order items using the NextToken parameter.
                            </MDBTypography>
                        </MDBCol>

                        {/* Code Example */}
                        <MDBCol sm="12" md="5">
                            <h5 className="pt-3"><span className="badge badge-default">GET</span> | Route: </h5>
                            <CopyBlock
                                langiage="js"
                                text={`https://spacelander.io/api/amazon/orders/list-items-by-next-token/{nextToken}`}
                                codeBlock
                                theme={dracula}
                                showLineNumbers={false}
                            />

                            <p className="mt-3">Response</p>
                            <div className="light">
                                <CopyBlock

                                    langiage="js"
                                    text={`{
   "ListOrderItemsByNextTokenResult": {
      "NextToken": "MRgZW55IGNhcm5hbCBwbGVhc3VyZS6=",
      "AmazonOrderId": "058-1233752-8214740",
      "OrderItems": {
         "OrderItem": [
            {
               "ASIN": "BT0093TELA",
               "OrderItemId": "68828574383266",
               "SellerSKU": "CBA_OTF_1",
               "Title": "Example item name",
               "QuantityOrdered": "1",
               "QuantityShipped": "1",
               "ItemPrice": {
                  "CurrencyCode": "USD",
                  "Amount": "25.99"
               },
               "ShippingPrice": {
                  "CurrencyCode": "USD",
                  "Amount": "1.26"
               },
               "ScheduledDeliveryEndDate": "2013-09-091T01:30:00.000-06:00",
               "ScheduledDeliveryStartDate": "2013-09-06T02:00:00.000-06:00",
               "CODFee": {
                  "CurrencyCode": "USD",
                  "Amount": "10.00"
               },
               "CODFeeDiscount": {
                  "CurrencyCode": "USD",
                  "Amount": "1.00"
               },
               "IsGift": "false",
               "GiftMessageText": "For you!",
               "GiftWrapPrice": {
                  "CurrencyCode": "USD",
                  "Amount": "1.99"
               },
               "GiftWrapLevel": "Classic",
               "PriceDesignation": "BusinessPrice"
            },
            {
               "ASIN": "BCTU1104UEFB",
               "OrderItemId": "79039765272157",
               "SellerSKU": "CBA_OTF_5",
               "Title": "Example item name",
               "QuantityOrdered": "2",
               "ItemPrice": {
                  "CurrencyCode": "USD",
                  "Amount": "17.95"
               },
               "PromotionIds": {
                  "PromotionId": "FREESHIP"
               },
               "ConditionId": "Used",
               "ConditionSubtypeId": "Mint",
               "ConditionNote": "Example ConditionNote",
               "IsGift": "false",
               "IsTransparency": "true",
               "PriceDesignation": "BusinessPrice"
            }
         ]
      }
   },
   "ResponseMetadata": {
      "RequestId": "88faca76-b600-46d2-b53c-0c8c4533e43a"
   }
}`}
                                    codeBlock
                                    theme={atomOneLight}
                                    showLineNumbers={false}
                                />
                            </div>
                        </MDBCol>

                        {/* Amazon Fulfillment */}
                        <MDBCol sm="12" md="7"  >
                            <h3 className="py-3" id="AmazonFulfillment">Amazon Fulfillment</h3>
                            <MDBTypography>
                                The Amazon Fulfillment API is a bit more complicated than the above endpoints.
                            </MDBTypography>
                        </MDBCol>
                        {/* Code Example */}
                        <MDBCol sm="12" md="5">
                            <h5 className="pt-3">Base URL: </h5>
                            <CopyBlock
                                langiage="js"
                                text={`https://spacelander.io/api/amazon/fulfillment/`}
                                codeBlock
                                theme={dracula}
                                showLineNumbers={false}
                            />
                        </MDBCol>

                        {/* Get Merchant Service Status */}
                        <MDBCol className="my-2" sm="12" md="7" >
                            <hr class=""></hr>
                            <h3 className="py-3" id="AmazonMerchantServiceStatus">Get Merchant Service Status</h3>
                            <MDBTypography>
                                Returns the operational status of the Orders API section of
                                Amazon Marketplace Web Service. Status values are GREEN, YELLOW, and RED.
                            </MDBTypography>
                        </MDBCol>

                        {/* Code Example */}
                        <MDBCol sm="12" md="5">
                            <h5 className="pt-3"><span className="badge badge-default">GET</span> | Route: </h5>
                            <CopyBlock
                                langiage="js"
                                text={`https://spacelander.io/api/amazon/fulfillment/merchant-service-status`}
                                codeBlock
                                theme={dracula}
                                showLineNumbers={false}
                            />

                            <p className="mt-3">Response</p>
                            <div className="light">
                                <CopyBlock

                                    langiage="js"
                                    text={`{
    "GetServiceStatusResult": {
        "Status": "GREEN",
        "Timestamp": "2020-12-30T23:08:15.602Z"
    },
    "ResponseMetadata": {
        "RequestId": "c056d6dd-a2bf-4dcf-8807-d9882dbca49f"
    }
}`}
                                    codeBlock
                                    theme={atomOneLight}
                                    showLineNumbers={false}
                                />
                            </div>
                        </MDBCol>

                        {/* Get Eligible Shipping Services */}
                        <MDBCol sm="12" md="7"  >

                            <h3 className="py-3" id="AmazonEligibleShippingServices">Get Eligible Shipping Services</h3>
                            <MDBTypography>
                                Returns a list of shipping service offers that satisfy the
                                shipment request details that you specify.
                            </MDBTypography>
                        </MDBCol>

                        {/* Code Example */}
                        <MDBCol sm="12" md="5">
                            <h5 className="pt-3"><span className="badge badge-secondary">POST</span> | Route: </h5>
                            <CopyBlock
                                langiage="js"
                                text={`https://spacelander.io/api/amazon/fulfillment/get-eligible-shipping-services`}
                                codeBlock
                                theme={dracula}
                                showLineNumbers={false}
                            />

                            <p className="mt-3">Request: </p>
                            <CopyBlock
                                langiage="js"
                                text=
                                    {`{
  "ShipmentRequestDetails": {
    "AmazonOrderId": "903-9939455-1336669",
    "MustArriveByDate": "2015-09-28T07:00:00Z",
    "PackageDimensions": {
      "Length": 5,
      "Width": 5,
      "Height": 5,
      "Unit": "inches"
    },
    "Weight": {
      "Value": 10,
      "Unit": "ounces"
    },
    "ShipDate": "2015-09-23T19:32:08.727Z",
    "ShipFromAddress": {
      "Name": "John Doe",
      "AddressLine1": "1234 Westlake Ave N",
      "City": "Seattle",
      "StateOrProvinceCode": "WA",
      "PostalCode": "98121",
      "CountryCode": "US",
      "Email": "example@example.com",
      "Phone": "2061234567"
    },
    "ShippingServiceOptions": {
      "DeliveryExperience": "DeliveryConfirmationWithoutSignature",
      "CarrierWillPickUp": false,
      "DeclaredValue": {
        "CurrencyCode": "USD",
        "Amount": 10.00
      }
    },
    "ItemList": [
      {
        "OrderItemId": "28207139993814",
        "Quantity": 1
      }
    ]
  },
  "ShippingOfferingFilter": {
    "IncludeComplexShippingOptions": false
  }
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
  "GetEligibleShippingServicesResult": {
    "ShippingServiceList": {
      "ShippingService": {
        "ShippingServiceName": "UPS Ground",
        "CarrierName": "UPS",
        "ShippingServiceId": "UPS_PTP_GND",
        "ShippingServiceOfferId": "ly51yzA1nAXlJzmYlKaH+7WbKOWz2BTujIOPx5PU8luilmZYK\\/JFhbx177aKey8MdZcG90uABbT5q8WAgPI+uxcxx\\/XDtIbI7c161j5spbfsiPTwIJg4Bk66bnP6Ip+JJtuSU5++rAdv4mzXvKpisLGYGrc+FuJvBAjTersJhq4=",
        "ShipDate": "10\\/16\\/2018 07:41:12",
        "EarliestEstimatedDeliveryDate": "10\\/18\\/2018 02:00:00",
        "LatestEstimatedDeliveryDate": "10\\/18\\/2018 02:00:00",
        "Rate": {
          "CurrencyCode": "USD",
          "Amount": "16.83"
        },
        "ShippingServiceOptions": {
          "DeliveryExperience": "DeliveryConfirmationWithoutSignature",
          "CarrierWillPickUp": "False"
        },
        "AvailableLabelFormats": {
          "LabelFormat": [
            "ZPL203",
            "ShippingServiceDefault",
            "PDF",
            "PNG"
          ]
        },
        "RequiresAdditionalSellerInputs": "False"
      }
    },
    "RejectedShippingServiceList": {
      "RejectedShippingService": {
        "CarrierName": "UPS",
        "ShippingServiceId": "UPS_PTP_3DS",
        "RejectionReasonCode": "INELIGIBLE",
        "RejectionReasonMessage": "This ship method is not eligible for this order.",
        "ShippingServiceName": "UPS Three Day Saver"
      }
    },
    "TemporarilyUnavailableCarrierList": {
      "TemporarilyUnavailableCarrier": [
        {
          "CarrierName": "DYNAMEX"
        },
        {
          "CarrierName": "USPS"
        },
        {
          "CarrierName": "DHLECOMMERCE"
        },
        {
          "CarrierName": "SELF_DELIVERY"
        },
        {
          "CarrierName": "ONTRAC"
        },
        {
          "CarrierName": "DHLMX"
        },
        {
          "CarrierName": "DHLM"
        },
        {
          "CarrierName": "FEDEX"
        }
      ]
    },
    "TermsAndConditionsNotAcceptedCarrierList": {
      "TermsAndConditionsNotAcceptedCarrier": [
        {
          "CarrierName": "AMZN_US"
        },
        {
          "CarrierName": "ONTRAC"
        }
      ]
    }
  },
  "ResponseMetadata": {
    "RequestId": "5b7997fb-efd1-495b-b7db-03ecfa691038"
  }
}`}
                                    codeBlock
                                    theme={atomOneLight}
                                    showLineNumbers={false}
                                />
                            </div>
                        </MDBCol>

                        {/* Get Additional Seller Inputs */}
                        <MDBCol className="my-2" sm="12" md="7" >
                            <hr class=""></hr>
                            <h3 className="py-3" id="AmazonAdditionalSellerInputs">Get Additional Seller Inputs</h3>
                            <MDBTypography>
                                Returns a list of additional inputs that are required from the seller for
                                purchasing shipping for some shipping services.
                            </MDBTypography>
                        </MDBCol>

                        {/* Code Example */}
                        <MDBCol sm="12" md="5">
                            <h5 className="pt-3"><span className="badge badge-default">GET</span> | Route: </h5>
                            <CopyBlock
                                langiage="js"
                                text={`https://spacelander.io/api/amazon/fulfillment/get-additional-seller-inputs/{orderId}/{shippingServiceId}?Name=Shenzhen%20Address&AddressLine1=test%20address&City=Shenzhen&StateOrProvinceCode=Guangdong&PostalCode=510810&CountryCode=CN&Email=example%40email.com&Phone=555-555-5555`}
                                codeBlock
                                theme={dracula}
                                showLineNumbers={false}
                            />

                            <p className="mt-3">Response</p>
                            <div className="light">
                                <CopyBlock

                                    langiage="js"
                                    text={`{
   "GetAdditionalSellerInputsResult": {
      "ShipmentLevelFields": {
         "member": [
            {
               "SellerInputDefinition": {
                  "IsRequired": "true",
                  "RestrictedSetValues": {
                     "member": [
                        "Abandon",
                        "Return"
                     ]
                  },
                  "DataType": "String",
                  "InputTarget": "SHIPMENT_LEVEL",
                  "StoredValue": {
                     "ValueAsString": "ABANDON",
                     "DataType": "STRING",
                     "ValueAsBoolean": "false",
                     "ValueAsInteger": "0"
                  },
                  "InputDisplayText": "Non-Deliverable Instructions",
                  "Constraints": {}
               },
               "AdditionalInputFieldName": "NON_DELIVERABLE_INSTRUCTIONS"
            },
            {
               "SellerInputDefinition": {
                  "IsRequired": "true",
                  "RestrictedSetValues": {},
                  "DataType": "Address",
                  "InputTarget": "SHIPMENT_LEVEL",
                  "InputDisplayText": "Ship From Address(Chinese)",
                  "Constraints": {
                     "member": {
                        "ValidationRegEx": "putjust5digitRegex",
                        "ValidationString": "Please enter Ship From Address in Chinese"
                     }
                  }
               },
               "AdditionalInputFieldName": "SENDER_ADDRESS_TRANSLATED"
            }
         ]
      },
      "ItemLevelFieldsList": {
         "member": {
            "Asin": "B004U9TL66",
            "AdditionalInputs": {
               "member": [
                  {
                     "SellerInputDefinition": {
                        "IsRequired": "true",
                        "RestrictedSetValues": {},
                        "DataType": "Weight",
                        "InputTarget": "ITEM_LEVEL",
                        "StoredValue": {
                           "ValueAsWeight": {
                              "Value": "600",
                              "Unit": "G"
                           },
                           "DataType": "WEIGHT",
                           "ValueAsBoolean": "false",
                           "ValueAsInteger": "0"
                        },
                        "InputDisplayText": "Item weight",
                        "Constraints": {
                           "member": {
                              "ValidationRegEx": "^[0-9]{1,3}(.[0-9]{1,2})?$",
                              "ValidationString": "Please enter item weight (max 6 digits)"
                           }
                        }
                     },
                     "AdditionalInputFieldName": "ITEM_WEIGHT"
                  },
                  {
                     "SellerInputDefinition": {
                        "IsRequired": "true",
                        "RestrictedSetValues": {},
                        "DataType": "String",
                        "InputTarget": "ITEM_LEVEL",
                        "StoredValue": {
                           "ValueAsString": "CN",
                           "DataType": "STRING",
                           "ValueAsBoolean": "false",
                           "ValueAsInteger": "0"
                        },
                        "InputDisplayText": "Country of Origin",
                        "Constraints": {
                           "member": {
                              "ValidationRegEx": "^[a-zA-Z]{2}$",
                              "ValidationString": "Please enter country code of the country of manufacture (e.g. CN)"
                           }
                        }
                     },
                     "AdditionalInputFieldName": "COUNTRY_OF_ORIGIN"
                  },
                  {
                     "SellerInputDefinition": {
                        "IsRequired": "true",
                        "RestrictedSetValues": {},
                        "DataType": "String",
                        "InputTarget": "ITEM_LEVEL",
                        "StoredValue": {
                           "ValueAsString": "\u00e8\u00a1\u00a3\u00e6\u0153\ufffd",
                           "DataType": "STRING",
                           "ValueAsBoolean": "false",
                           "ValueAsInteger": "0"
                        },
                        "InputDisplayText": "Item Description(Chinese)",
                        "Constraints": {
                           "member": {
                              "ValidationRegEx": "^[^a-zA-Z]{1,10}$",
                              "ValidationString": "Please enter item description in Chinese up to 10 characters "
                           }
                        }
                     },
                     "AdditionalInputFieldName": "ITEM_DESCRIPTION_TRANSLATED"
                  },
                  {
                     "SellerInputDefinition": {
                        "IsRequired": "true",
                        "RestrictedSetValues": {},
                        "DataType": "String",
                        "InputTarget": "ITEM_LEVEL",
                        "StoredValue": {
                           "ValueAsString": "200",
                           "DataType": "CURRENCY",
                           "ValueAsBoolean": "false",
                           "ValueAsInteger": "0"
                        },
                        "InputDisplayText": "Item Value(USD)",
                        "Constraints": {
                           "member": {
                              "ValidationRegEx": "^[0-9]{1,3}(.[0-9]{1,2})?$",
                              "ValidationString": "Please enter item value in USD (max 6 digits)"
                           }
                        }
                     },
                     "AdditionalInputFieldName": "ITEM_VALUE"
                  },
                  {
                     "SellerInputDefinition": {
                        "IsRequired": "false",
                        "RestrictedSetValues": {},
                        "DataType": "String",
                        "InputTarget": "ITEM_LEVEL",
                        "InputDisplayText": "HS Code",
                        "Constraints": {
                           "member": {
                              "ValidationRegEx": "^[0-9a-zA-Z -]{1,10}?$",
                              "ValidationString": "Please enter HS Code containing letters and numbers only up to 10 characters"
                           }
                        }
                     },
                     "AdditionalInputFieldName": "HS_CODE"
                  },
                  {
                     "SellerInputDefinition": {
                        "IsRequired": "true",
                        "RestrictedSetValues": {},
                        "DataType": "String",
                        "InputTarget": "ITEM_LEVEL",
                        "StoredValue": {
                           "ValueAsString": "Diapers",
                           "DataType": "STRING",
                           "ValueAsBoolean": "false",
                           "ValueAsInteger": "0"
                        },
                        "InputDisplayText": "Item Description",
                        "Constraints": {
                           "member": {
                              "ValidationRegEx": "^[a-zA-Z0-9-._& ]{3,25}$",
                              "ValidationString": "Please enter item description using alphanumeric characters (max 25 characters)"
                           }
                        }
                     },
                     "AdditionalInputFieldName": "ITEM_DESCRIPTION"
                  }
               ]
            }
         }
      }
   },
   "ResponseMetadata": {
      "RequestId": "c16c3c89-6dcd-11e9-b318-db190c5bb6ad"
   }
}`}
                                    codeBlock
                                    theme={atomOneLight}
                                    showLineNumbers={false}
                                />
                            </div>
                        </MDBCol>

                        {/* Create Shipment */}
                        <MDBCol sm="12" md="7"  >

                            <h3 className="py-3" id="AmazonCreateShipment">Create Shipment</h3>
                            <MDBTypography>
                                Returns a list of shipping service offers that satisfy the
                                shipment request details that you specify.
                            </MDBTypography>
                        </MDBCol>

                        {/* Code Example */}
                        <MDBCol sm="12" md="5">
                            <h5 className="pt-3"><span className="badge badge-secondary">PUT</span> | Route: </h5>
                            <CopyBlock
                                langiage="js"
                                text={`https://spacelander.io/api/amazon/fulfillment/shipment`}
                                codeBlock
                                theme={dracula}
                                showLineNumbers={false}
                            />

                            <p className="mt-3">Request: </p>
                            <CopyBlock
                                langiage="js"
                                text=
                                    {`{
  "HazmatType": "None",
  "ShippingServiceId": "FEDEX_PTP_PRIORITY_OVERNIGHT",
  "ShipmentRequestDetails": {
    "AmazonOrderId": "903-1713775-3598252",
    "LabelCustomization": {
      "CustomTextForLabel": "ABC123",
      "StandardIdForLabel": "AmazonOrderId"
    },
    "MustArriveByDate": "2015-09-25T07:00:00Z",
    "PackageDimensions": {
      "Length": 5,
      "Width": 5,
      "Height": 5,
      "Unit": "inches"
    },
    "Weight": {
      "Value": 10,
      "Unit": "ounces"
    },
    "ShipDate": "2015-09-23T20:10:56.829Z",
    "ShipFromAddress": {
      "Name": "John Doe",
      "AddressLine1": "1234 Westlake Ave",
      "City": "Seattle",
      "StateOrProvinceCode": "WA",
      "PostalCode": "98121",
      "CountryCode": "US",
      "Email": "example@example.com",
      "Phone": "2061234567"
    },
    "ShippingServiceOptions": {
      "DeliveryExperience": "DeliveryConfirmationWithoutSignature",
      "CarrierWillPickUp": "false",
      "DeclaredValue.CurrencyCode": "USD",
      "DeclaredValue.Amount": "10.00",
      "LabelFormat": "ZPL203"
    },
    "ItemList": [
      {
        "OrderItemId": "40525960574974",
        "Quantity": "2",
        "TransparencyCodeList.TransparencyCode.1": "AZ:QFUL6MXBXE3A2EBC0",
        "TransparencyCodeList.TransparencyCode.2": "ZA:QFUL6MXBXE3A2EBC0"
      }
    ]
  }
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
   "CreateShipmentResult": {
      "Shipment": {
         "Insurance": {
            "CurrencyCode": "USD",
            "Amount": "10.00"
         },
         "ShipToAddress": {
            "City": "Seattle",
            "Phone": "5555555555",
            "CountryCode": "US",
            "PostalCode": "98121-2778",
            "Name": "Jane Smith",
            "AddressLine1": "321 Main St",
            "StateOrProvinceCode": "WA",
            "Email": "example@example.com"
         },
         "AmazonOrderId": "903-1713775-3598252",
         "Weight": {
            "Value": "10",
            "Unit": "oz"
         },
         "Label": {
            "CustomTextForLabel": "ABC123",
            "LabelFormat": "ZPL203",
            "FileContents": {
               "Checksum": "DmsWbJpdMPALN3jV4wHOrg==",
               "Contents": "H4sIAAAAAAAAAK16WbeqyrLmO2Pc\\/zBVRLG...kI0Ycv76w378UfL6O6ev7UsAwmkWBfL6nycD\\/Bd+Zx3S8LwAA",
               "FileType": "application\\/zpl",
               "LabelFormat": "ZPL203"
            },
            "Dimensions": {
               "Width": "8.50000",
               "Length": "11.00000",
               "Unit": "inches"
            },
            "StandardIdForLabel": "AmazonOrderId"
         },
         "ShippingService": {
            "CarrierName": "FEDEX",
            "ShippingServiceOptions": {
               "CarrierWillPickUp": "false",
               "DeclaredValue": {
                  "CurrencyCode": "USD",
                  "Amount": "10.00"
               },
               "DeliveryExperience": "DELIVERY_CONFIRMATION"
            },
            "ShippingServiceId": "FEDEX_PTP_PRIORITY_OVERNIGHT",
            "Rate": {
               "CurrencyCode": "USD",
               "Amount": "27.81"
            },
            "LatestEstimatedDeliveryDate": "2015-09-24T10:30:00Z",
            "EarliestEstimatedDeliveryDate": "2015-09-24T10:30:00Z",
            "ShippingServiceOfferId": "HDDUKqtQVFetpBZAqx5c1yaCZ9vuFfND0kudyw3lLWCa3mN2+zUOsRCAZS2oYt0ey6fXKdOAucmYVXR9LAkU9O9eys9V3FJCgvQ+vAqm4bSAzHVH04vD8oLyoUPKqxa8Otbek97Z85LFUSsfcUf8frNRMEfNLP8t5RyLXa4ZOjc=",
            "ShipDate": "2015-09-23T20:10:56.829Z",
            "ShippingServiceName": "FedEx Priority Overnight"
         },
         "PackageDimensions": {
            "Width": "5",
            "Length": "5",
            "Unit": "inches",
            "Height": "5"
         },
         "CreatedDate": "2015-09-23T20:11:12.908Z",
         "ShipFromAddress": {
            "City": "Seattle",
            "Phone": "2061234567",
            "CountryCode": "US",
            "PostalCode": "98121",
            "Name": "John Doe",
            "AddressLine1": "1234 Westlake Ave",
            "StateOrProvinceCode": "WA"
         },
         "ShipmentId": "6f77095e-9f75-47eb-aaab-a42d5428fa1a",
         "ItemList": {
            "Item": {
               "OrderItemId": "40525960574974",
               "Quantity": "1",
               "ItemWeight": "200",
               "ItemDescription": "Poster"
            }
         },
         "Status": "Purchased",
         "TrackingId": "794657111237"
      }
   },
   "ResponseMetadata": {
      "RequestId": "adb18f0d-2076-48d4-99ef-fb4b9f892a4e"
   }
}`}
                                    codeBlock
                                    theme={atomOneLight}
                                    showLineNumbers={false}
                                />
                            </div>
                        </MDBCol>

                        {/* Get Shipment */}
                        <MDBCol className="my-2" sm="12" md="7" >
                            <hr class=""></hr>
                            <h3 className="py-3" id="AmazonShipment">Get Shipment</h3>
                            <MDBTypography>
                                Returns an existing shipment for the ShipmentId value that you specify.
                            </MDBTypography>
                        </MDBCol>

                        {/* Code Example */}
                        <MDBCol sm="12" md="5">
                            <h5 className="pt-3"><span className="badge badge-default">GET</span> | Route: </h5>
                            <CopyBlock
                                langiage="js"
                                text={`https://spacelander.io/api/amazon/fulfillment/shipment/{shipmentId}`}
                                codeBlock
                                theme={dracula}
                                showLineNumbers={false}
                            />

                            <p className="mt-3">Response</p>
                            <div className="light">
                                <CopyBlock

                                    langiage="js"
                                    text={`{
   "GetShipmentResult": {
      "Shipment": {
         "Insurance": {
            "CurrencyCode": "USD",
            "Amount": "10.00"
         },
         "ShipToAddress": {
            "City": "Seattle",
            "Phone": "5555555555",
            "CountryCode": "US",
            "PostalCode": "98121-2778",
            "Name": "Jane Smith",
            "AddressLine1": "321 Main St",
            "StateOrProvinceCode": "WA",
            "Email": "example@example.com"
         },
         "AmazonOrderId": "903-1713775-3598252",
         "Weight": {
            "Value": "10",
            "Unit": "oz"
         },
         "Label": {
            "CustomTextForLabel": "ABC123",
            "LabelFormat": "ZPL203",
            "FileContents": {
               "Checksum": "DmsWbJpdMPALN3jV4wHOrg==",
               "Contents": "H4sIAAAAAAAAAK16WbeqyrLmO2Pc\\/zBVRLG...kI0Ycv76w378UfL6O6ev7UsAwmkWBfL6nycD\\/Bd+Zx3S8LwAA",
               "FileType": "application\\/zpl"
            },
            "Dimensions": {
               "Width": "8.50000",
               "Length": "11.00000",
               "Unit": "inches"
            },
            "StandardIdForLabel": "AmazonOrderId"
         },
         "ShippingService": {
            "CarrierName": "FEDEX",
            "ShippingServiceOptions": {
               "CarrierWillPickUp": "false",
               "DeclaredValue": {
                  "CurrencyCode": "USD",
                  "Amount": "10.00"
               },
               "DeliveryExperience": "DELIVERY_CONFIRMATION"
            },
            "ShippingServiceId": "FEDEX_PTP_PRIORITY_OVERNIGHT",
            "Rate": {
               "CurrencyCode": "USD",
               "Amount": "27.81"
            },
            "LatestEstimatedDeliveryDate": "2015-09-24T10:30:00Z",
            "EarliestEstimatedDeliveryDate": "2015-09-24T10:30:00Z",
            "ShippingServiceOfferId": "HDDUKqtQVFetpBZAqx5c1yaCZ9vuFfND0kudyw3lLWCa3mN2+zUOsRCAZS2oYt0ey6fXKdOAucmYVXR9LAkU9O9eys9V3FJCgvQ+vAqm4bSAzHVH04vD8oLyoUPKqxa8Otbek97Z85LFUSsfcUf8frNRMEfNLP8t5RyLXa4ZOjc=",
            "ShipDate": "2015-09-23T20:10:56.829Z",
            "ShippingServiceName": "FedEx Priority Overnight\u00c2\u00ae"
         },
         "PackageDimensions": {
            "Width": "5",
            "Length": "5",
            "Unit": "inches",
            "Height": "5"
         },
         "CreatedDate": "2015-09-23T20:11:12.908Z",
         "ShipFromAddress": {
            "City": "Seattle",
            "Phone": "2061234567",
            "CountryCode": "US",
            "PostalCode": "98121",
            "Name": "John Doe",
            "AddressLine1": "1234 Westlake Ave",
            "StateOrProvinceCode": "WA"
         },
         "ShipmentId": "6f77095e-9f75-47eb-aaab-a42d5428fa1a",
         "ItemList": {
            "Item": {
               "OrderItemId": "40525960574974",
               "Quantity": "1"
            }
         },
         "Status": "Purchased",
         "TrackingId": "794657111237"
      }
   },
   "ResponseMetadata": {
      "RequestId": "f44b6af6-74f8-43d3-b928-1c4e0123b26c"
   }
}`}
                                    codeBlock
                                    theme={atomOneLight}
                                    showLineNumbers={false}
                                />
                            </div>
                        </MDBCol>

                        {/* Cancel Shipment */}
                        <MDBCol className="my-2" sm="12" md="7" >
                            <hr class=""></hr>
                            <h3 className="py-3" id="AmazonCancelShipment">Cancel Shipment</h3>
                            <MDBTypography>
                                Cancels an existing shipment and requests a refund
                                for the ShipmentId value that you specify.
                            </MDBTypography>
                        </MDBCol>

                        {/* Code Example */}
                        <MDBCol sm="12" md="5">
                            <h5 className="pt-3"><span className="badge badge-secondary">DELETE</span> | Route: </h5>
                            <CopyBlock
                                langiage="js"
                                text={`https://spacelander.io/api/amazon/fulfillment/shipment/{shipmentId}`}
                                codeBlock
                                theme={dracula}
                                showLineNumbers={false}
                            />

                            <p className="mt-3">Response</p>
                            <div className="light">
                                <CopyBlock

                                    langiage="js"
                                    text={`{
   "CancelShipmentResult": {
      "Shipment": {
         "Insurance": {
            "CurrencyCode": "USD",
            "Amount": "10.00"
         },
         "ShipToAddress": {
            "City": "Seattle",
            "Phone": "5555555555",
            "CountryCode": "US",
            "PostalCode": "98121-2778",
            "Name": "Jane Smith",
            "AddressLine1": "321 Main St",
            "StateOrProvinceCode": "WA",
            "Email": "example@example.com"
         },
         "AmazonOrderId": "903-1713775-3598252",
         "Weight": {
            "Value": "10",
            "Unit": "oz"
         },
         "Label": {
            "FileContents": {
               "Checksum": "DmsWbJpdMPALN3jV4wHOrg==",
               "Contents": "H4sIAAAAAAAAAK16WbeqyrLmO2Pc\\/zBVRLG...kI0Ycv76w378UfL6O6ev7UsAwmkWBfL6nycD\\/Bd+Zx3S8LwAA",
               "FileType": "application\\/pdf"
            },
            "Dimensions": {
               "Width": "8.50000",
               "Length": "11.00000",
               "Unit": "inches"
            }
         },
         "ShippingService": {
            "CarrierName": "FEDEX",
            "ShippingServiceOptions": {
               "CarrierWillPickUp": "false",
               "DeclaredValue": {
                  "CurrencyCode": "USD",
                  "Amount": "10.00"
               },
               "DeliveryExperience": "DELIVERY_CONFIRMATION\\n        "
            },
            "ShippingServiceId": "FEDEX_PTP_PRIORITY_OVERNIGHT\\n      ",
            "Rate": {
               "CurrencyCode": "USD",
               "Amount": "27.81"
            },
            "LatestEstimatedDeliveryDate": "2015-09-24T10:30:00Z",
            "EarliestEstimatedDeliveryDate": "2015-09-24T10:30:00Z",
            "ShippingServiceOfferId": "HDDUKqtQVFetpBZAqx5c1yaCZ9vuFfND0kudyw3lLWCa3mN2+zUOsRCAZS2oYt0ey6fXKdOAucmYVXR9LAkU9O9eys9V3FJCgvQ+vAqm4bSAzHVH04vD8oLyoUPKqxa8Otbek97Z85LFUSsfcUf8frNRMEfNLP8t5RyLXa4ZOjc=",
            "ShipDate": "2015-09-23T20:10:56.829Z",
            "ShippingServiceName": "FedEx Priority Overnight\u00c2\u00ae"
         },
         "PackageDimensions": {
            "Width": "5",
            "Length": "5",
            "Unit": "inches",
            "Height": "5"
         },
         "CreatedDate": "2015-09-23T20:11:12.908Z",
         "ShipFromAddress": {
            "City": "Seattle",
            "Phone": "2061234567",
            "CountryCode": "US",
            "PostalCode": "98121",
            "Name": "John Doe",
            "AddressLine1": "1234 Westlake Ave",
            "StateOrProvinceCode": "WA"
         },
         "ShipmentId": "6f77095e-9f75-47eb-aaab-a42d5428fa1a",
         "ItemList": {
            "Item": {
               "OrderItemId": "40525960574974",
               "Quantity": "1"
            }
         },
         "Status": "Purchased",
         "TrackingId": "794657111237"
      }
   },
   "ResponseMetadata": {
      "RequestId": "adb18f0d-2076-48d4-99ef-fb4b9f892a4e"
   }
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
