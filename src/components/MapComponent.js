import React, {Component} from 'react';
import { GoogleMap, withScriptjs, Marker, withGoogleMap } from 'react-google-maps';
import Geocode from 'react-geocode';

class showMap extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      houseLat: '',
      houseLng: ''
    };
    }
    

    convertAddress() {
      Geocode.setApiKey('AIzaSyBnNrwpsObb8AcBsyU2nUCKL3CZpSlCgK8');
      Geocode.setLanguage('en');
      Geocode.setRegion('US');
      Geocode.setLocationType('ROOFTOP');
      Geocode.enableDebug();
      Geocode.fromAddress("10426 NE 43rd St, Kirkland, WA 98033, USA").then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          this.setState({
            houseLat: lat,
            houseLng: lng,
        });
        
        },
        (error) => {
          console.error(error);
        }
      )
      return
    }

    componentDidMount() {this.convertAddress()}; 

render(){
  console.log("aabb " +this.state.houseLat)
  console.log("aabb " +this.state.houseLng)
  const houseLatNum = Number(`${this.state.houseLat}`)
  const houseLngNum = Number(`${this.state.houseLng}`)
  console.log("aabb " +houseLatNum)
  console.log("aabb " +houseLngNum)
    return (
      
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{lat: houseLatNum, lng: houseLngNum}}>
        <Marker
            position={{lat: houseLatNum, lng: houseLngNum}} />
      </GoogleMap>
   )
}}

const WrappedMap = withScriptjs(withGoogleMap(showMap));


function Map() {

  return (
    <div style = {{ width: '50vw', height: '50vh'}}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBnNrwpsObb8AcBsyU2nUCKL3CZpSlCgK8`}
        loadingElement={<div style={{height: '100%'}}/>}
        containerElement={<div style={{ height: '100%'}}/>}
        mapElement={<div style={{height:'100%'}} />} />
    </div>
  )
}

export default Map

