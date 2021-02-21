import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './Dashboard.css';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  render() {
    return (
      <div className="map-famtrack">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyD1U0qe-aERdL2ut577emMk13QUx222D0o' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;
