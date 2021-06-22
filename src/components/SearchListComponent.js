import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardText, CardBody, CardFooter, CardDeck} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderSearchList({searchinfo}) {
    return (

            <div className ="row justify-content-center">
                <div className = "col ">
                    <CardDeck>
                        <Card>
                            {/* <Link to={`/searchlist${searchinfo.id}`} > */}
                                <CardImg  height="400" src={searchinfo.listings.photos[0].href} alt={searchinfo.listings.address} />
                                <CardBody className="cardinfo" >
                                    <CardTitle>$ {searchinfo.listings.price}</CardTitle>
                                    <CardText>
                                        <div className = "row">
                                            <div className="col col-md-3 m-1" >
                                                {searchinfo.listings.beds} beds
                                            </div>
                                            <div className="col col-md-3 m-1" >
                                                {searchinfo.listings.baths} baths
                                            </div>
                                            <div className="col col-md-4 m-1" >
                                                {searchinfo.listings.sqft} Sq.Ft.
                                            </div>
                                        </div>
                                        <div className = "row">
                                            <div className = "col">
                                                {searchinfo.listings.address}
                                            </div>
                                        </div>
                                    </CardText>
                                </CardBody>
                                <CardFooter>
                                    <big className="text-muted">Listing provided by {searchinfo.listing.mls_id.mls.name}</big>
                                </CardFooter>
                            {/* </Link> */}
                        </Card>
                    </CardDeck>
                </div>
            </div>
    )
}

function SearchList (props) {

    const searchlist = props.searchinfo.map(searchhouse => {
        return (
            <div key = {searchhouse.id} className = "col-md-6 m-3 mx-auto">
                <RenderSearchList searchinfo={searchhouse} />
            </div>
        )
    })

        return (
            <div className = "container">
                
                <div className = "row ml-1">
                    <h3>
                        Search Results
                    </h3>
                </div>        
                <div className="row">
 
                    {searchlist}
                    
                </div>
            </div>
        
        )
    }


export default SearchList;