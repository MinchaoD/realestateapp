import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <footer className="site-footer">
                 
                    <div class="container">
                        <div class="row row-content-footer text-center">
                            <div class="col-4">
                                <a role="button" class="btn btn-dark"  href="tel:+12063838906"><i class="fa fa-phone-square fa-lg"></i> Phone ： 1-206-383-8906 </a><br />
                            </div>
                            <div class="col-4">
                                <h5> made with <i class="fa fa-heart"></i> in Seattle</h5>
                            </div>
                            <div class="col-4 ">
                                <a role="button" class="btn btn-dark"  href="mailto: chaohg@hotmail.com"><i class="fa fa-envelope-square fa-lg"></i> Email :  chaohg@hotmail.com </a>
                            </div>
                        </div>
                        <div class="row text-center">
                            <div class="col">
                            <p id="year"></p>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
            
        );
    }
}

export default Footer;