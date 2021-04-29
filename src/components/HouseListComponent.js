import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardText, CardBody, CardFooter, CardDeck} from 'reactstrap';
import { Link } from 'react-router-dom';





function RenderHouseList({houseitem}) {
    return (

            <div className ="row justify-content-center">
                <div className = "col ">
                    <CardDeck>
                        <Card>
                            <Link to={`/houselist${houseitem.id}`} >
                                <CardImg  height="400" src={houseitem.image} alt={houseitem.location} />
                                <CardBody >
                                    <CardTitle>$ {houseitem.price}</CardTitle>
                                    <CardText>
                                        <div className = "row">
                                            <div className="col col-md-3 m-1" >
                                                {houseitem.beds} beds
                                            </div>
                                            <div className="col col-md-3 m-1" >
                                                {houseitem.baths} baths
                                            </div>
                                            <div className="col col-md-4 m-1" >
                                                {houseitem.sqft} Sq.Ft.
                                            </div>
                                        </div>
                                        <div className = "row">
                                            <div className = "col">
                                                {houseitem.location}
                                            </div>
                                        </div>
                                    </CardText>
                                </CardBody>
                                <CardFooter>
                                    <big className="text-muted">Listing provided by {houseitem.listing}</big>
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
                <RenderHouseList houseitem={house} />
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