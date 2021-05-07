import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
               <footer className="site-footer">
                    <div className="container-fluid">
                        <div className="row text-left ">
                            <div className="col-4 offset-3">
                                <h2>Links</h2>
                                <ul className="list-unstyled">
                                    <li><a href="http://www.redfin.com"><h5>Redfin</h5></a></li>
                                    <li><a href="http://www.zillow.com"><h5>Zillow</h5></a></li>
                                    <li><a href="http://www.windermere.com"><h5>Windermere</h5></a></li>
                                </ul>
                            </div>
                        
                            <div className="col-5 ">
                                <a role="button" className="btn btn-link" href="tel:+12063838906"><h5><i className="fa fa-phone-square fa-lg"></i> Phone: 206-383-8906</h5></a><br />
                                <a role="button" className="btn btn-link" href="mailto: chaohg@hotmail.com"><h5><i className="fa fa-envelope-square fa-lg"></i> Email :  chaohg@hotmail.com </h5></a>
                                <a role="button" className="btn btn-link" href="https://github.com/chaohg"><h5><i className="fa fa-github fa-lg"></i> Github :  https://github.com/chaohg </h5></a>
                            </div>
                        </div>
                    </div>
                </footer>

              

            </React.Fragment>
            
        );
    }
}

export default Footer;