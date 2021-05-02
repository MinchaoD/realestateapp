import React from 'react';
import { Button, Card, CardImg, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom'

function RenderMainImage(houseitem) {
    if(houseitem){
 
        return(
            <div className = "container">
                <Zoom>
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
                                <CardImg  height="250" src={houseitem.image5} />
                            </Card>
                        </Col>  
                    </Row> 
                </Zoom>

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
                    <Col md={6}>
                    
                        <h4>{houseinfo.location}</h4>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <h2> ${houseinfo.price}</h2>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col md={1}>
                        <h4 style={{ color: 'grey' }}> Beds: </h4>
                    </Col >
                    <Col md={3}>
                        <h4> {houseinfo.beds}</h4>
                    </Col>
                    <Col md={1}>
                        <h4  style={{ color: 'grey' }}>  Baths: </h4>
                    </Col >
                    <Col md={3}>
                        <h4> {houseinfo.baths}</h4>
                    </Col>
                    <Col md={1}>
                        <h4  style={{ color: 'grey' }}> SqFt: </h4>
                    </Col >
                    <Col md={1}>
                        <h4> {houseinfo.sqft}</h4>
                    </Col>
                </Row>
                <br/>
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
                    <Col md={2}>
                        <h4 style={{ color: 'grey' }}>Year Built: </h4>
                    </Col>
                    <Col md={2} >
                        <h4> {houseitem.yearbuilt}</h4>
                    </Col>
                    <Col md={2}>
                        <h4  style={{ color: 'grey' }}>Property Type:</h4>

                    </Col>
                    <Col >
                        <h4> {houseitem.propertytype}</h4>
                    </Col>
                </Row>
                <br/>

                <Row>
                    <Col>
                     
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
            <div className="container">
              <Row>
                  <Col className="mx-3">
                <Button style={{backgroundColor:"black"}}><Link to="/home" style={{ color: 'white', fontSize:'1.8rem'}}>Home</Link></Button>
                </Col>
                </Row>
                <br/>
                <br/>
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