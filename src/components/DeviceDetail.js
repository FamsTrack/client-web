import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import {
  fetchClient
} from '../store/actions/baseAction';
import DeviceModal from "./DeviceModal";
import EditClientModal from "./EditClientModal";
import FamiliesModal from "./FamiliesModal";

function DeviceDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    client,
    loadingClient
  } = useSelector(state => state.baseResolver);
  const history = useHistory();

  useEffect(() => {
    if (client.id !== id) return dispatch(fetchClient(id));
  }, []);

  if (loadingClient) {
    return (
      <div className="p-5 m-5">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="device-detail-cont-famtrack d-flex flex-column justify-content-around">
      <div className="mb-3">
        <a style={{ "color": "#6c8590" }} onClick={e => history.push('/devices')}>Back</a>
      </div>
      <div className="d-flex flex-column flex-md-row">
        <div style={{ "display": "flex", "justifyContent": "center" }} className="mb-3">
          <img src={client.img} style={{ "borderRadius": "10px", "maxWidth": "400px", "minWidth": "100px" }} />
        </div>
        <div className="d-flex flex-column align-items-start p-3">
          <h1 className="mb-3">{client.name}</h1>
          <div className="d-flex align-items-start flex-column">
            <h3>Birth Date: {client.birth_date}</h3>
            <h3>Contact: {client.contact}</h3>
            <h3>Gender: {client.gender}</h3>
            <h3>Adress: {client.address}</h3>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column align-items-start">
        <FamiliesModal />
        <DeviceModal device={client} />
      </div>
      <div style={{"display": "flex", "justifyContent": "flex-end"}}>
        <EditClientModal client={client} />
        <button className="btn btn-danger m-2">Delete</button>
      </div>
    </div>
  );
}

export default DeviceDetail;
