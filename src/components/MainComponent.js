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
                    houseitem={this.state.housedetails.filter(houseitem => houseitem.id === +match.params.houseId)[0]}/>
            )
        }


        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' render={() => <HouseList houseinfo={this.state.houseinfo} />} />
                    <Route path='/houselist:houseId' component={HouseId} /> 
                    <Redirect to='/home' />
                </Switch>
                
                <Footer />
                
            </div>
        )
    }
}

export default Main;