import React, { Component } from 'react';

class GoogleMap extends Component {
    
    componentDidMount() {
       
        const google = window.google;
        var mapOptions = {
            zoom: 10,
            center: new google.maps.LatLng(this.props.lat, this.props.lng),
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };
          new google.maps.Map(this.refs.map, mapOptions);
    }
    
    render() { 
        return (
            <div ref="map" />
        )
    }
}

export default GoogleMap;