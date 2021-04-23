import React, { Component } from 'react';
import HouseList from './HouseListComponent';
import Contact from './ContactComponent';
import HouseInfo from './HouseInfoComponent';
import { HOUSEDETAILS } from '../shared/housedetails';
import { HOUSEINFO } from '../shared/houseinfo';
import Header from './HeaderComponent';
import Footer from './FooterComponent';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            housedetails: HOUSEDETAILS,
            houseinfo: HOUSEINFO
        };
    }
    render() {
        return (
            <div>
                <Header />
                <HouseList houseinfo={this.state.houseinfo} />
                <Footer />
                
            </div>
        )
    }
}

export default Main;