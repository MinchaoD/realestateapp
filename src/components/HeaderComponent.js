import React, { Component } from 'react'
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron,  Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        
        this.state = {
        
          isModalOpen: false
        };

    
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

    }

    handleLogin(event) {
        alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
        this.toggleModal();
        event.preventDefault();
    }

     
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row row-content">
                            <div className="col">
                                <h1>Find Your Dream Home in Seattle</h1>
                               
                            </div>
                            <div className="col col-md-1">
                                <span >
                                    <Button outline color="light" onClick={this.toggleModal}>
                                      SignUp
                                    </Button>
                                </span>
                            </div>
                            <div className="col col-md-1">
                                <span >
                                    <Button outline color="light" onClick={this.toggleModal}>
                                      LogIn
                                    </Button>
                                </span>
                            </div>
                        </div>
                        
                    </div>
                    
                </Jumbotron>
                
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                                <FormGroup>
                                    <Label htmlFor="username">Username</Label>
                                    <Input type="text" id="username" name="username"
                                        innerRef={input => this.username = input} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="password">Password</Label>
                                    <Input type="password" id="password" name="password"
                                        innerRef={input => this.password = input} />
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" name="remember"
                                            innerRef={input => this.remember = input} />
                                        Remember me
                                    </Label>
                                </FormGroup>
                                <Button type="submit" value="submit" color="primary">Login</Button>
                            </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}

export default Header;