import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem  } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderHouseList({house}) {
    return (
        <Card>
            <CardImg width="100%" src={house.image} alt={house.location} />

        </Card>
    )
}

function HouseList (props) {

    const houselist = props.houseinfo.map(house => {
        return (
            <div key = {house.id} className = "col-md-5 m-1">
                <RenderHouseList house={house} />
            </div>
        )
    })

        return (
            <div>
                {houselist}
                
            </div>
        )
    }


export default HouseList;