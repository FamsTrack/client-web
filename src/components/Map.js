import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import '../assets/Dashboard.css';
import { useSelector } from 'react-redux';

const AnyReactComponent = ({ text, image }) => <div style={{"display": "flex", "alignItems": "center"}}>
  <img src={image} width="60px" height="60px" style={{"borderRadius": "30px"}} />
  <p style={{ "color": "black", "fontWeight": "500", "fontSize": "15px" }}>{text}</p>
</div>;

function Map() {
  const [zoom, setZoom] = useState(11);
  const {
    baseData
  } = useSelector(state => state.baseResolver);
  const [search, setSearch] = useState('');
  const [centered, setCentered] = useState(baseData[0]);
  const [center, setCenter] = useState({
    lat: baseData[0]?.device.latitude,
    lng: baseData[0]?.device.longitude
  });

  useEffect(async () => {
    try {
      setCenter({
        lat: baseData[0]?.device.latitude,
        lng: baseData[0]?.device.longitude
      });
  
      await setCentered(baseData.filter(e => e.id === centered.id));
      console.log(centered);
      setCenter({
        lat: centered[0].device.latitude,
        lng: centered[0].device.longitude
      });
    } catch (err) {
      console.log(err);
    }
  }, [baseData[0]?.device]);

  const handleChange = async () => {
    try {
      await setCentered(baseData.filter(e => new RegExp(search, "i").exec(e.name)));
      
      setCenter({
        lat: centered[0].device.latitude,
        lng: centered[0].device.longitude
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="map-famtrack">
      <div class="form-floating">
        <input type="text" value={search} class="form-control" id="floatingInput" placeholder="Search" autoComplete="off" onChange={e => {
          setSearch(e.target.value);
          handleChange();
        }} />
        <label for="floatingInput">Search</label>
      </div>
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        center={center}
        zoom={zoom}
      >
        {
          baseData.map(e => {
            if (e.device) {
              return (
                <AnyReactComponent
                  lat={e.device.latitude}
                  lng={e.device.longitude}
                  text={e.name}
                  key={e.id}
                  image={e.img}
                />
              )
            }
          })
        }
      </GoogleMapReact>
    </div>
  );
}

export default Map;
