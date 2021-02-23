import { useSelector } from 'react-redux';
import '../assets/Devices.css';
import DeviceList from './DeviceList';
import DeviceDetail from './DeviceDetail';
import {
  Switch,
  Route,
  useRouteMatch
} from 'react-router-dom';
import AddClientModal from './AddClientModal';

function Devices() {
  const {
    baseData
  } = useSelector(state => state.baseResolver);
  const { path, url } = useRouteMatch();

  return (
    <div style={{ "height": "100vh", "overflow": "auto" }} className="main-sub-div-famtrack">
      <div className="title-devices-famtrack">
        <h1 style={{"fontWeight": "200", "margin": "0"}}>Clients</h1>
        <AddClientModal />
      </div>
      <Switch>
        <Route path="/devices/:id">
          <DeviceDetail />
        </Route>
        <Route path="/devices">
          <DeviceList />
        </Route>
      </Switch>
    </div>
  );
}

export default Devices;
