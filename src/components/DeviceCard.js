import { useHistory } from 'react-router';
import '../assets/Devices.css';

function DeviceVard({ data }) {
  const history = useHistory();

  const handleDetail = (id) => {
    history.push(`/devices/${id}`);
  }

  return (
    <div className="device-list-row-famtrack device-card-hov-famtrack" style={{cursor:'pointer'}} onClick={() => handleDetail(data.id)}>
      <div className="name-device-famtrack">
        <div>
          <img className="img-devices-famtrack" src={typeof data.img === 'string' ? data.img : 'http://www.beautifulpeople.com/cdn/beautifulpeople/images/default_profile/signup_male.png'} />
        </div>
        <div>
          <h3 style={{"marginLeft": "20px"}}>{data.name}</h3>
        </div>
      </div>
      <div className="age-device-famtrack">
        <h3>{data.device?.arduinoUniqueKey || 'Not Connected'}</h3>
      </div>
      <div className="contact-device-famtrack">
        <h3>
          {data.contact}
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
