import { useSelector } from 'react-redux';
import DeviceCard from './DeviceCard';

function DeviceList() {
  const {
    baseData
  } = useSelector(state => state.baseResolver);

  return (
    <div className="devices-list-famtrack">
      <div className="device-list-row-famtrack">
        <div style={{ "display": "flex", "justifyContent": "center" }}>
          <h3 className="title-text-famtrack">Name</h3>
        </div>
        <div style={{ "display": "flex", "justifyContent": "center" }}>
          <h3 className="title-text-famtrack">Device</h3>
        </div>
        <div style={{ "display": "flex", "justifyContent": "center" }}>
          <h3 className="title-text-famtrack">Contact</h3>
        </div>
        <div style={{ "display": "flex", "justifyContent": "center" }}>
          <h3 className="title-text-famtrack">Last seen</h3>
        </div>
      </div>
      <div className="card-cont-famtrack">
        {
          baseData.map(e => {
            return (
              <DeviceCard key={e.id} data={e} />
            )
          })
        }
      </div>
    </div>
  );
}

export default DeviceList;
