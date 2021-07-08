import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardText, CardBody, CardFooter, CardDeck} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderSearchList({searchresults}) {
    return (
        
            <div className ="row ">
                <div className = "col ">
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
                 
                </div>
            </div>
    )
}

function SearchList (props) {
    console.log("searchlist", props.searchresults)
    const searchlist = props.searchresults
    .filter(searchhouse => searchhouse.primary_photo !== null)  // filter out the ones without primary_photo, otherwise app will crash
    .map(searchhouse => {
        
        return (
            <div key = {searchhouse.property_id} className = "col-md-4 m-3 mx-auto">
                <RenderSearchList searchresults={searchhouse} />
            </div>
        )
    })

        return (
            <div className="container-fluid">
                <div className="row">
                     {searchlist}
                </div>
            </div>
         )
    }


export default SearchList;