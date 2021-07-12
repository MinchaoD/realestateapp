import React, { Component } from 'react'
import axios from "axios"
import baseUrl from '../shared/baseUrl'



class Header extends Component {
    constructor(props) {
        super(props);

        
        this.state = {
        
          isModalOpenLogin: false,
          isModalOpenSignup: false,
          username: "",
          email: "",
          password: ""
        };

    
        this.toggleModalLogin = this.toggleModalLogin.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.toggleModalSignup = this.toggleModalSignup.bind(this);
        this.handleSignup = this.handleSignup.bind(this);

    }

    handleLogin(event) {
        alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
        this.toggleModalLogin();
        event.preventDefault();
        fetch(baseUrl + 'user/login', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(creds)
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => { throw error; }
        )
        .then(response => response.json())
        .then(response => {
            if (response.success) {
                // If login was successful, set the token in local storage
                localStorage.setItem('token', response.token);
                localStorage.setItem('creds', JSON.stringify(creds));
                // Dispatch the success action
                dispatch(fetchFavorites());
                dispatch(receiveLogin(response));
            } else {
                const error = new Error('Error ' + response.status);
                error.response = response;
                throw error;
            }
        })
        .catch(error => dispatch(loginError(error.message)))
    };
    

    handleSignup(event) {
        alert(`Username: ${this.username.value} Email: ${this.email.value} Password: ${this.password.value} terms: ${this.terms.checked}`);
        this.toggleModalSignup();
        event.preventDefault();
    }
     
    toggleModalLogin(event) {
        this.setState({
            isModalOpenLogin: !this.state.isModalOpenLogin
        })
        event.preventDefault();
    }

     
    toggleModalSignup(event) {
        this.setState({
            isModalOpenSignup: !this.state.isModalOpenSignup
        })
        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container-fluid">
                        <div className="row row-content">
                            <div className="col">
                            <FadeTransform
                                in
                                transformProps={{
                                    exitTransform: 'scale(0.5) translateY(50%)'
                                }}>

                                <h1 style={{fontSize:'7vh'}}>Find Your Dream Home</h1>
                            </FadeTransform>
                               
                            </div>
                            <div className="col col-md-1 mx-5">
                                <span >
                                    <Button outline size="lg" color="light" onClick={this.toggleModalSignup}>
                                      SignUp
                                    </Button>
                                </span>
                            </div>
                            <div className="col col-md-1">
                                <span >
                                    <Button outline size="lg" color="light" onClick={this.toggleModalLogin}>
                                      LogIn
                                    </Button>
                                </span>
                            </div>
                        </div>
                        
                    </div>
                    
                </Jumbotron>
                
                <Modal isOpen={this.state.isModalOpenLogin} toggle={this.toggleModalLogin} className="my-modal">
                    <ModalHeader toggle={this.toggleModalLogin}>Login</ModalHeader>
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
                                <br></br>
                                <Button type="submit" size="lg" block value="submit" color="primary">Login</Button>
                            </Form>
                    </ModalBody>
                </Modal>

                <Modal isOpen={this.state.isModalOpenSignup} toggle={this.toggleModalSignup} className="my-modal">
                    <ModalHeader toggle={this.toggleModalSignup}>Sign Up</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSignup}>
                                <FormGroup>
                                    <Label htmlFor="username">Username</Label>
                                    <Input type="text" id="username" name="username"
                                        innerRef={input => this.username = input} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="email">Email</Label>
                                    <Input type="text" id="email" name="email"
                                        innerRef={input => this.email = input} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="password">Password</Label>
                                    <Input type="password" id="password" name="password"
                                        innerRef={input => this.password = input} />
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" name="terms"
                                            innerRef={input => this.terms = input} />
                                        I accept the Terms of Use and the Privacy Policy.
                                    </Label>
                                </FormGroup>
                                <br></br>
                                <Button type="submit" size="lg" block value="submit" color="primary">Sign Up</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Header;