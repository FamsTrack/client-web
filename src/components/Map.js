import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import '../assets/Dashboard.css';
import { useSelector } from 'react-redux';

const AnyReactComponent = ({ text, image }) => <div style={{"display": "flex", "alignItems": "center"}}>
  <img src={image} width="60px" height="60px" style={{"borderRadius": "30px"}} />
  <p style={{ "color": "black", "fontWeight": "500", "fontSize": "15px" }}>{text}</p>
</div>;

function Map() {
  const [center, setCenter] = useState({
    lat: 39.82456281213858,
    lng: 21.435957167256333
  });
  const [zoom, setZoom] = useState(11);
  const {
    baseData
  } = useSelector(state => state.baseResolver);

  return (
    <div className="map-famtrack">
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {
          baseData.map(e => {
            return (
              <AnyReactComponent
                lat={e.device.latitude}
                lng={e.device.longitude}
                text={e.name}
                key={e.id}
                image={e.img}
              />
            )
          })
        }
      </GoogleMapReact>
    </div>
  );
}

export default Map;
