import React, {Component} from 'react';
import { Button, Form, FormGroup, Card, CardImg, Row, Label, Input, Col, FormFeedback  } from 'reactstrap';
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';
import { Fade, FadeTransform, Transform, Stagger } from 'react-animation-components'
import Geocode from "react-geocode";
import GoogleApiWrapper from './MapComponent'
import ToastBody from 'reactstrap/lib/ToastBody';


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
                                <CardImg  height="250" src={houseitem.image1} align />
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

class Tour extends Component{
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            date:'',
            time:'',
            notes: '',
            touched: {
                firstName: false,
                lastName: false,
                phoneNum: false,
                email: false,
                date: false,
                time: false
            }
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validate(firstName, lastName, phoneNum, email, date) {
        const errors = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            date:''
        };

        if (this.state.touched.firstName) {
            if (firstName.length < 2) {
                errors.firstName = 'First name must be at least 2 characters.';
            } else if (firstName.length > 15) {
                errors.firstName = 'First name must be 15 or less characters.';
            }
        }

        if (this.state.touched.lastName) {
            if (lastName.length < 2) {
                errors.lastName = 'Last name must be at least 2 characters.';
            } else if (lastName.length > 15) {
                errors.lastName = 'Last name must be 15 or less characters.';
            }
        }

        const reg = /^\d+$/;
        if (this.state.touched.phoneNum && !reg.test(phoneNum)) {
            errors.phoneNum = 'The phone number should contain only numbers.';
        }

        if (this.state.touched.email && !email.includes('@')) {
            errors.email = 'Email should contain a @';
        }

        if (this.state.touched.date) {
            if (date <  new Date() ){
                errors.date = "Please pick a future date.";
            }
        }

        return errors;
    }

    handleBlur = (field) => () => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }


    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name] : value
        })
    }

    handleSubmit(event) {
        
        alert('Thank you for scheduling the home tour with us, ' + this.state.firstName + ' ' + this.state.lastName +'!'+ '\n' + 'We will see you at ' + this.state.time + ' on ' + this.state.date +'.');
        event.preventDefault();
        }

    render(){
        const errors = this.validate(this.state.firstName, this.state.lastName, this.state.phoneNum, this.state.email, this.state.date);   
        return (
                <div className="container">
                    <div>
                        <h2 style={{color:"green", fontWeight: 'bold'}} align="center">Schedule Your Tour</h2>
                        <hr />
                    </div>
                    <div >
                        <Form onSubmit={this.handleSubmit} >
                        <FormGroup row>
                                <Label htmlFor="firstName" md={2} align="right" >First Name</Label>
                                <Col md={4}>
                                    <Input type="text" id="firstName" name="firstName"
                                        placeholder="First Name"
                                        value={this.state.firstName}
                                        invalid={errors.firstName}
                                        onBlur={this.handleBlur("firstName")}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.firstName}</FormFeedback>
                                </Col>
                          
                                    <Label htmlFor="lastName" md={2} align="right">Last Name</Label>
                            
                                <Col md={4}>
                                    <Input type="text" id="lastName" name="lastName"
                                        placeholder="Last Name"
                                        value={this.state.lastName}
                                        invalid={errors.lastName}
                                        onBlur={this.handleBlur("lastName")}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.lastName}</FormFeedback>
                                </Col>
                            </FormGroup>
                          
                            <FormGroup row>
                                <Label htmlFor="phoneNum" md={2} align="right">Phone</Label>
                                <Col md={4}>
                                    <Input type="tel" id="phoneNum" name="phoneNum"
                                        placeholder="Phone number"
                                        value={this.state.phoneNum}
                                        invalid={errors.phoneNum}
                                        onBlur={this.handleBlur("phoneNum")}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.phoneNum}</FormFeedback>
                                </Col>
                                <Label htmlFor="email" md={2} align="right">Email</Label>
                                <Col md={4}>
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        invalid={errors.email}
                                        onBlur={this.handleBlur("email")}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                          
                            <FormGroup row>
                                <Label htmlFor="date" md={2} align="right">Date</Label>
                                    <Col md={4}>
                                        <Input type="date" id="date" name="date" placeholder="mm/dd/yyyy"
                                        value={this.state.date}
                                        invalid={errors.date}
                                        onBlur={this.handleBlur("date")}
                                        onChange={this.handleInputChange}/>
                                        <FormFeedback>{errors.date}</FormFeedback>
                                    </Col>
                                    <Label htmlFor="time" md={2} align="right">Time</Label>
                                    <Col md={4}>
                                        <Input type="time" id="time" name="time"
                                        value={this.state.time}                                      
                                        onChange={this.handleInputChange}/>
                                    </Col>
                            </FormGroup>
                        
                            <FormGroup row>
                                <Label htmlFor="notes" md={2} align="right">Notes (Optional)</Label>
                                <Col md={4}>
                                    <Input type="textarea" id="notes" name="notes"
                                        rows="6"
                                        value={this.state.notes}
                                        onChange={this.handleInputChange}></Input>
                                </Col>
                                <Col className="align-self-end" align="center">
                                    <Button type="submit" size="lg" color="success">
                                        Schedule Tour
                                    </Button>
                                </Col>
                            </FormGroup>
                            
                        </Form>
                    </div>
                </div>
        
        );
    }
}


function HouseItem (props) {
    if (props.houseitem){
    return (
            <div className="container">
                <Row>
                    <Col className="mx-3">
                    <Button variant="outline-light" style={{backgroundColor:"black"}}><Link to="/home" style={{ color: 'white', fontSize:'1.8rem'}}>Home</Link></Button>
                    </Col>
                </Row>
                <br/>
                <br/>
                {RenderMainImage(props.houseitem)}
                <br/>
                <br/>
                {RenderInfo(props.houseinfo)}
            
                {RenderDescription(props.houseitem)}
                <br/>
                <br/>
                <br/>
                
                <FadeTransform
                                in
                                transformProps={{
                                    exitTransform: 'scale(0.5) translateY(50%)'
                                }}>

                    <Tour/>
                </FadeTransform>
              
            </div>
    )
}
return <div />;
}



export default HouseItem;