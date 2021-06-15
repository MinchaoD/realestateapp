import React, {Component, useState} from 'react';
import { GoogleMap, withScriptjs, Marker, withGoogleMap } from 'react-google-maps';
import Geocode from 'react-geocode';
 


function showMap(houseinfo) {
  let houseLat =''
  let houseLng =''
  if(houseinfo){
      Geocode.setApiKey('AIzaSyBnNrwpsObb8AcBsyU2nUCKL3CZpSlCgK8');
      Geocode.setLanguage('en');
      Geocode.setRegion('US');
      Geocode.setLocationType('ROOFTOP');
      Geocode.enableDebug();
      Geocode.fromAddress(`${houseinfo.location}`).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
       houseLat = lat;
       houseLng = lng;
       
      console.log("abc" + houseLat)
       
        },
        (error) => {
          console.error(error);
        }
      )}
      return (
       
        <GoogleMap
          defaultZoom={15}
          defaultCenter={{lat: 47, lng: 23}}>
          <Marker
              position={{lat: houseLat, lng: houseLng}} />
        </GoogleMap>
      
     )
}



function Map(props) {
  const WrappedMap = withScriptjs(withGoogleMap(showMap(props.houseinfo)));
<WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBnNrwpsObb8AcBsyU2nUCKL3CZpSlCgK8`}
        loadingElement={<div style={{height: '100%'}}/>}
        containerElement={<div style={{ height: '100%'}}/>}
        mapElement={<div style={{height:'100%'}} />} />
  return (
    <div style = {{ width: '50vw', height: '50vh'}}>
      {WrappedMap}
      
    </div>
  )
}

export default Map

