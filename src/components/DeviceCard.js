import './Devices.css';

function DeviceVard() {
  return (
    <div className="device-list-row-famtrack">
      <div className="name-device-famtrack">
        <div>
          <img className="img-devices-famtrack" src="https://images.unsplash.com/profile-1515664380611-85fbbc522ddb?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff" />
        </div>
        <div>
          <h3>Muhammad Abdul</h3>
          <a className="btn family-color-famtrack"><i>Manage Family</i></a>
        </div>
      </div>
      <div className="age-device-famtrack">
        <h3>33</h3>
      </div>
      <div className="contact-device-famtrack">
        <h3>
          081312345678
        </h3>
      </div>
      <div className="lastseen-device-famtrack">
        <h3>
        6, RW.3, Kp. Rw., Kec. Johar Baru, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta
        </h3>
      </div>
    </div>
  );
}

export default DeviceVard;
