import React, { Component } from 'react';
import HouseList from './HouseListComponent';
import { HOUSEDETAILS } from '../shared/housedetails';
import { HOUSEINFO } from '../shared/houseinfo';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import HouseItem from './HouseItemComponent';

import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            housedetails: HOUSEDETAILS,
            houseinfo: HOUSEINFO
        };
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