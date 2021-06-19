import React, { Component } from 'react';
import HouseList from './HouseListComponent';
import { HOUSEDETAILS } from '../shared/housedetails';
import { HOUSEINFO } from '../shared/houseinfo';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import HouseItem from './HouseItemComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

// const request = require('request');

// const options = {
//   method: 'GET',
//   url: 'https://real-estate-usa.p.rapidapi.com/api/v1/properties',
//   qs: {postal_code: `${this.state.zipcode}`, offset: '0', limit: '200'},
//   headers: {
//     'x-rapidapi-key': '90c32ee4dfmsh4fb639c105f3c53p17b70ejsn4202beb6b2c8',
//     'x-rapidapi-host': 'real-estate-usa.p.rapidapi.com',
//     useQueryString: true
//   }
// };

// request(options, function (error, response, body) {
// 	if (error) throw new Error(error);

// 	console.log("body"+body);
// });

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            housedetails: HOUSEDETAILS,
            houseinfo: HOUSEINFO,
            zipcode: ""
        };
    }

    zipcodeSearch = () => {
        const request = require('request');

        const options = {
          method: 'GET',
          url: 'https://real-estate-usa.p.rapidapi.com/api/v1/properties',
          qs: {postal_code: '94105', offset: '0', limit: '200'},
          headers: {
            'x-rapidapi-key': '90c32ee4dfmsh4fb639c105f3c53p17b70ejsn4202beb6b2c8',
            'x-rapidapi-host': 'real-estate-usa.p.rapidapi.com',
            useQueryString: true
          }
        };
        
        request(options, function (error, response, body) {
            if (error) throw new Error(error);
        
            console.log(body);
        });}

handleSubmit = (e) => {
    e.preventDefault()
    this.zipcodeSearch()
}

handleInputChange = (e) => {
    this.setState({
        zipcode: e.target.value
    })
}


    render() {

        const HouseId = ({match}) => {
            return (
                <HouseItem 
                    houseitem={this.state.housedetails.filter(houseitem => houseitem.id === +match.params.id)[0]}
                    houseinfo={this.state.houseinfo.filter(houseinfo => houseinfo.id === +match.params.id)[0]} />

            )
        }


        return (
            <div>
                <Header />
                <div style={{display: 'flex', fontSize:"3.5vh", justifyContent:'center', alignItems:'center'}}>
                    <label for="site-search"><span>Search Houses at this Zipcode:&nbsp;&nbsp;</span></label>
                    <input type="search" id="zipcode" name="zipcode"
                        aria-label="Search this zipcode" 
                        onChange={this.handleInputChange} />
                    <span>&nbsp;&nbsp;</span>
                    <button type="submit" onClick={this.handleSubmit}>Search</button>
                </div>
                <br/><br/><br/>
                <Switch>
                    <Route path='/home' render={() => <HouseList houseinfo={this.state.houseinfo} />} />
                    <Route path='/houselist:id' component={HouseId} /> 
                    <Redirect to='/home' />
                </Switch>
                <Footer />
                
            </div>
        )
    }
}

export default Main;