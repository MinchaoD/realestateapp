import React, { Component } from 'react';
import { Card, CardImg, Col, Row, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem  } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderMainImage(houseitem) {
    if(houseitem){
 
        return(
            <div className = "container">
         

                <Row >
                    <Col md={8}>
                        <Card>
                            <CardImg  height="530" src={houseitem.image}/>
                        </Card>
                    </Col>
                    <Col md={4} >
                        <Card>
                            <CardImg  height="250" src={houseitem.image1}  />
                        </Card>
                        
                            <br/>
                        <Card>
                            <CardImg  height="250" src={houseitem.image2} mb-6 />
                        </Card>
                    </Col>
                </Row> 
                <br/>
                <Row>
                    <Col md={4}>
                        <Card>
                            <CardImg  height="250" src={houseitem.image3} />
                        </Card>
                    </Col>  
                    <Col md={4}>
                        <Card>
                            <CardImg  height="250" src={houseitem.image4} />
                        </Card>
                    </Col>  
                    <Col md={4}>
                        <Card>
                            <CardImg  height="250" src={houseitem.image4} />
                        </Card>
                    </Col>  
                </Row> 

            </div>
        )
    }
    return <div />;
}


function RenderInfo(houseinfo) {
    if(houseinfo){
 
        return(
            <div className = "container">
                <Row>
                    <Col>
                        <h2>Price: ${houseinfo.price}</h2>
                    </Col>
                 
                </Row>
                <br/>

                <Row>
                    <Col md={6}>
                    
                        <h4>Location: {houseinfo.location}</h4>
                    </Col>
                </Row>
            </div>
        )
    }
    return <div />;
}


function RenderDescription(houseitem) {
    if(houseitem){
 
        return(
            <div className = "container">
                <Row>
                    <Col>
                        <h4>Year Built: {houseitem.yearbuilt}</h4>
                    </Col>
                    <Col>
                        <h4>Property Type: {houseitem.propertytype}</h4>

                    </Col>
                </Row>
                <br/>

                <Row>
                    <Col>
                        <h2>Description:</h2>
                        <h5>{houseitem.description}</h5>
                    </Col>
                </Row>
            </div>
        )
    }
    return <div />;
}


function HouseItem (props) {
    if (props.houseitem){
  

    return (
            <div>
                {RenderMainImage(props.houseitem)}
                <br/>
                <br/>
                {RenderInfo(props.houseinfo)}
                {RenderDescription(props.houseitem)}
            </div>
    )
}
return <div />;
}



export default HouseItem;