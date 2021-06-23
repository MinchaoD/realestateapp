import React, { Component } from 'react';
import HouseList from './HouseListComponent';
import HouseItem from './HouseItemComponent';
import SearchList from './SearchListComponent';
import { HOUSEDETAILS } from '../shared/housedetails';
import { HOUSEINFO } from '../shared/houseinfo';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';


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

    componentDidMount(){
        this.citySearch()
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
    this.citySearch()
    e.target.value=""
    this.setState((state)=>({
        city:'',
        state:''
    }))
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
        return (
            <div>
                <Header />

                {/* <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory campsites={this.state.campsites} />} />
                    <Route path='/directory/:campsiteId' component={CampsiteWithId} />
                    <Route exact path='/contactus' component={Contact} />
                    <Route exact path='/aboutus' render={() => <About partners={this.state.partners} />}  />
                    <Redirect to='/home' />
                </Switch> */}
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
                      
             
                        <Route exact path='/home' render={() => <HouseList houseinfo={this.state.houseinfo} />} />,
                        <Route exact path ='/searchresults' render={()=> <SearchList searchresults={this.state.searchresults} city={this.state.city} state={this.state.state}/>}/>                       
                        <Route path='/houselist:id' component={HouseId} /> 
                        {/* <Route path='/searchlist:id' component={SearchId} /> , */}
                        <Redirect to ='/home' />
                </Switch>
                <Footer />
                
            </div>
        )
    }
}

export default Main;