import React, { useState } from "react";
import { Card, CardImg, CardTitle, CardText, CardBody, Row, Col, Button, CardFooter} from 'reactstrap';
import { Link } from 'react-router-dom';


 
function FavoriteList(props) {
return(
    <div className ="row ">
    <div className = "col ">
            <Card>
                <Link to={`/searchresult${props.favoritelist.property_id}`} >
                    <CardImg  height="400" src={props.favoritelist.primary_photo.href} />
                </Link>
                    <CardBody className="cardinfo" >
                        <CardTitle> $ {props.favoritelist.list_price}</CardTitle> 
                        <CardText>
                            <div className = "row">
                                <div className="col col-md-3 m-1" >
                                    {props.favoritelist.description.beds} beds
                                </div>
                                <div className="col col-md-3 m-1" >
                                    {props.favoritelist.description.baths} baths
                                </div>
                                <div className="col col-md-3 m-1" >
                                    {props.favoritelist.description.sqft} Sq.Ft.
                                </div>
                                
                            </div>
                            <div className = "row">
                                <div className = "col col-md-10">

                                    {`${props.favoritelist.location.address.line}, ${props.favoritelist.location.address.city}, ${props.favoritelist.location.address.state}`}
                                </div>
                                
                            </div>
                        </CardText>
                    </CardBody>
                    <CardFooter>
                        <big className="text-muted">Listing provided by {props.favoritelist.source.type}</big>
                    </CardFooter>
                
            </Card>
     
    </div>
</div>)
}



export default FavoriteList;

