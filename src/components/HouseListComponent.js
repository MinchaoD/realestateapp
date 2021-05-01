import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardText, CardBody, CardFooter, CardDeck} from 'reactstrap';
import { Link } from 'react-router-dom';





function RenderHouseList({houseinfo}) {
    return (

            <div className ="row justify-content-center">
                <div className = "col ">
                    <CardDeck>
                        <Card>
                            <Link to={`/houselist${houseinfo.id}`} >
                                <CardImg  height="400" src={houseinfo.image} alt={houseinfo.location} />
                                <CardBody >
                                    <CardTitle>$ {houseinfo.price}</CardTitle>
                                    <CardText>
                                        <div className = "row">
                                            <div className="col col-md-3 m-1" >
                                                {houseinfo.beds} beds
                                            </div>
                                            <div className="col col-md-3 m-1" >
                                                {houseinfo.baths} baths
                                            </div>
                                            <div className="col col-md-4 m-1" >
                                                {houseinfo.sqft} Sq.Ft.
                                            </div>
                                        </div>
                                        <div className = "row">
                                            <div className = "col">
                                                {houseinfo.location}
                                            </div>
                                        </div>
                                    </CardText>
                                </CardBody>
                                <CardFooter>
                                    <big className="text-muted">Listing provided by {houseinfo.listing}</big>
                                </CardFooter>
                            </Link>
                        </Card>
                    </CardDeck>
                </div>
            </div>
    )
}

function HouseList (props) {

    const houselist = props.houseinfo.map(house => {
        return (
            <div key = {house.id} className = "col-md-6 m-3 mx-auto">
                <RenderHouseList houseinfo={house} />
            </div>
        )
    })

        return (
            <div className = "container">
                <div className = "row ml-1">
                    <h3>
                        Hot Homes Listing
                    </h3>
                </div>        
                <div className="row">
 
                    {houselist}
                    
                </div>
            </div>
        
        )
    }


export default HouseList;