import React, { Component } from 'react'

class Footer extends Component {
    render() {
        const date = new Date();
        const year = date.getFullYear()
        return (
            <div>
               <footer className="site-footer">
                    <div className="container-fluid">
                    <hr  className='pb-4' style={{
                                height: .5,
                                borderColor : 'white'
                            }}/>
                      
                        <div className="row  ">
                            
                            <div className="col-md-3 offset-1 text-left d-none d-md-block">
                            
                                <h2>Links</h2>
                                <ul className="list-unstyled">
                                    <li><a href="http://www.redfin.com"><h5>Redfin</h5></a></li>
                                    <li><a href="http://www.zillow.com"><h5>Zillow</h5></a></li>
                                    <li><a href="https://www.windermere.com/"><h5>Windermere</h5></a></li>
                                </ul>
                            </div>

                            <div className="col-md-4  text-center d-none d-md-block">
                                <h4> made with <i className="fa fa-heart"></i> in Seattle</h4>
                                <p>copyright ©  {year}</p>
                            </div>
                     
                            <div className="col-md-3 offset-md-1 text-left">
                                <a role="button" className="btn btn-link " href="tel:+12063838906"><h5><i className="fa fa-phone-square fa-lg"></i> 206-383-8906</h5></a>
                                <a role="button" className="btn btn-link" href="mailto: chaohg@hotmail.com"><h5><i className="fa fa-envelope-square fa-lg"></i> chaohg@hotmail.com </h5></a>
                                <a role="button" className="btn btn-link" href="https://github.com/chaohg"><h5><i className="fa fa-github fa-lg"></i> www.github.com/chaohg </h5></a>
                            </div>
                        </div>
                    </div>
                </footer>

              

            </div>
            
        );
    }
}

export default Footer;


