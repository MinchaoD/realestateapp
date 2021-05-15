import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


class RenderMap extends Component {
  render(){
      const mapStyles = {
          width: 300,
          height: 300,
        };
  return (
    <Map
      google={this.props.google}
      zoom={15}
      style={mapStyles}
      initialCenter={{ lat: 47.444, lng: -122.176}}
    >
      <Marker position={{ lat: 48.00, lng: -122.00}} />
    </Map>
  );
}}


  export default GoogleApiWrapper({
    apiKey: 'AIzaSyBnNrwpsObb8AcBsyU2nUCKL3CZpSlCgK8'
  })(RenderMap);

