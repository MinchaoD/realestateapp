import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';


function RenderMap(props){
 
    return (
        <Map
          google={props.google}
          zoom={8}
        //   style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        >
          <Marker position={{ lat: 48.00, lng: -122.00}} />
        </Map>
    );
  }

  export default GoogleApiWrapper({
    apiKey: 'AIzaSyBnNrwpsObb8AcBsyU2nUCKL3CZpSlCgK8'
  })(RenderMap);
