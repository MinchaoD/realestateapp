import React, { Component, Fragment  } from 'react';
import HouseList from './HouseListComponent';
import HouseItem from './HouseItemComponent';
import SearchList from './SearchListComponent';
import SearchItem from './SearchItemComponent';
import { HOUSEDETAILS } from '../shared/housedetails';
import { HOUSEINFO } from '../shared/houseinfo';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect} from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            housedetails: HOUSEDETAILS,
            houseinfo: HOUSEINFO,
            city:"",
            state:"",
            searchresults:[]

        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

   
    citySearch = () => {
    
    fetch(`https://us-real-estate.p.rapidapi.com/for-sale?offset=0&limit=42&state_code=${this.state.state}&city=${this.state.city}&sort=newest`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "90c32ee4dfmsh4fb639c105f3c53p17b70ejsn4202beb6b2c8",
		"x-rapidapi-host": "us-real-estate.p.rapidapi.com"
	}
    })
    .then(response => 
        response.json())
    .then(data =>{
        this.setState({
            searchresults: data.data.results
        })
        console.log("aaa", this.state.searchresults)
    })
    .catch(err => {
        console.error(err);
    });
   
}

    
handleSubmit = (e) => {
    e.preventDefault()
    this.citySearch();

    console.log("zz",e.target.value);
}


handleInputChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
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

        const SearchId = ({match}) => {
            return (
                <SearchItem 
                    searchitem={this.state.searchresults.filter(searchitem => searchitem.id === +match.params.id)[0]} />
            )
        }

        return (
            <div>
                <Header />
                    <div style={{display: 'flex', fontSize:"3.5vh", justifyContent:'center', alignItems:'center'}}>
                            <label for="site-search"><span>City:&nbsp;&nbsp;</span></label>
                            <input type="search" id="city" name="city"
                                onChange={this.handleInputChange} />
                            <span>&nbsp;&nbsp;</span>
                            <label for="site-search"><span>State:&nbsp;&nbsp;</span></label>
                            <input type="search" id="state" name="state"
                                onChange={this.handleInputChange} />
                            <span>&nbsp;&nbsp;</span>
                            <button type="submit" onClick={this.handleSubmit}>Search</button>
                            
                    </div>
                    <br/><br/><br/>

                <Switch>
                        <Route path='/home' render={() => 
                        <Fragment>  
                            <SearchList searchresults={this.state.searchresults} city={this.state.city} state={this.state.state}/>
                            <br/><br/><br/>
                            <HouseList houseinfo={this.state.houseinfo} />
                        </Fragment> }/> 
                        {/* // above code is to render searchlist and houselist 2 components on the same home page */}
                        <Route path='/houselist:id' component={HouseId} /> 
                        <Route path='/searchlist:id' component={SearchId} /> ,
                        <Redirect to ='/home' />
                </Switch>
                <Footer />
                
            </div>
        )
    }
}

export default Main;