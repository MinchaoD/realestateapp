import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardText, CardBody, CardFooter, CardDeck} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderSearchList({searchresults}) {
    return (
        
            <div className ="row justify-content-center">
                <div className = "col ">
                    <CardDeck>
                        <Card>
                            <Link to={`/searchresults${searchresults.property_id}`} >
                                <CardImg  height="400" src={searchresults.primary_photo.href}/>
                                <CardBody className="cardinfo" >
                                    <CardTitle> $ {searchresults.list_price}</CardTitle> 
                                    <CardText>
                                        <div className = "row">
                                            <div className="col col-md-3 m-1" >
                                                {searchresults.description.beds} beds
                                            </div>
                                            <div className="col col-md-3 m-1" >
                                                {searchresults.description.baths} baths
                                            </div>
                                            <div className="col col-md-4 m-1" >
                                                {searchresults.description.sqft} Sq.Ft.
                                            </div>
                                        </div>
                                        <div className = "row">
                                            <div className = "col">
   
                                                {`${searchresults.location.address.line}, ${searchresults.location.address.city}, ${searchresults.location.address.state}`}
                                            </div>
                                        </div>
                                    </CardText>
                                </CardBody>
                                <CardFooter>
                                    <big className="text-muted">Listing provided by {searchresults.source.type}</big>
                                </CardFooter>
                            </Link>
                        </Card>
                    </CardDeck>
                </div>
            </div>
    )
}

function SearchList (props) {
    
    const searchlist = props.searchresults.map(searchhouse => {
        return (
            <div key = {searchhouse.lead_attributes.listing_id} className = "col-md-6 m-3 mx-auto">
                <RenderSearchList searchresults={searchhouse} />
            </div>
        )
    })

        return (
            <div className = "container">
                  
                <div className="row">
                     {searchlist}
                </div>
            </div>
        
        )
    }


export default SearchList;