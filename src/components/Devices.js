import './Devices.css';
import DeviceCard from './DeviceCard';

function Devices() {
  return (
    <div style={{ "height": "100vh", "overflow": "auto" }}>
      <div className="title-devices-famtrack">
        <h1 style={{"fontWeight": "200", "margin": "0"}}>Devices</h1>
        <button className="btn add-button-famtrack">Add</button>
      </div>
      <div className="devices-list-famtrack">
        <div className="device-list-row-famtrack">
          <div>
            <h3 className="title-text-famtrack">Name</h3>
          </div>
          <div>
            <h3 className="title-text-famtrack">Age</h3>
          </div>
          <div>
            <h3 className="title-text-famtrack">Contact</h3>
          </div>
          <div>
            <h3 className="title-text-famtrack">Last seen</h3>
          </div>
        </div>
        <div className="card-cont-famtrack">
          <DeviceCard />
          <DeviceCard />
          <DeviceCard />
          <DeviceCard />
          <DeviceCard />
          <DeviceCard />
          <DeviceCard />
          <DeviceCard />
        </div>
      </div>
    </div>
  );
}

export default Devices;
