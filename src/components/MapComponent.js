import React from 'react';
import { GoogleMap, withScriptjs, Marker, withGoogleMap } from 'react-google-maps';

function showMap() {
  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{lat: 45.42, lng: -75.69}}>
      <Marker
          
          position={{lat: 45.42, lng: -75.69}} />
    </GoogleMap>

  )
}

const WrappedMap = withScriptjs(withGoogleMap(showMap));

export default function Map() {
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



// import React, {Component} from 'react';
// import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


// class RenderMap extends Component {
//   render(){
//       const mapStyles = {
//           width: 300,
//           height: 300,
//         };
//   return (
//     <Map
//       google={this.props.google}
//       zoom={15}
//       style={mapStyles}
//       initialCenter={{ lat: 47.444, lng: -122.176}}
//     >
//       <Marker position={{ lat: 48.00, lng: -122.00}} />
//     </Map>
//   );
// }}


//   export default GoogleApiWrapper({
//     apiKey: 'AIzaSyBnNrwpsObb8AcBsyU2nUCKL3CZpSlCgK8'
//   })(RenderMap);

