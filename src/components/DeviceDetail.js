import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import {
  fetchBaseData,
  fetchClient
} from '../store/actions/baseAction';
import DeviceModal from "./DeviceModal";
import EditClientModal from "./EditClientModal";
import FamiliesModal from "./FamiliesModal";
import swal from 'sweetalert';
import axios from "axios";

function DeviceDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    client,
    loadingClient
  } = useSelector(state => state.baseResolver);
  const history = useHistory();
  const date = new Date(client.birth_date);

  useEffect(() => {
    if (client.id !== id) return dispatch(fetchClient(id));
  }, []);

  const handleDelete = async () => {
    try {
      let willDelete = await swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover it again!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      
      if (willDelete) {
        await axios.delete(`http://localhost:3000/clients/${id}`, {
          headers: {
            access_token: localStorage.access_token
          }
        });
        
        dispatch(fetchBaseData());
        history.push('/devices');
      }
    } catch (err) {
      console.log(err);
    }
  }

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
        <div style={{ "display": "flex", "justifyContent": "center", "flex": "3", "alignItems": "flex-start" }} className="mb-3">
          <img src={typeof client.img === 'string' ? client.img : 'http://1.bp.blogspot.com/-dZWOzEoZHs0/UDILL8QE-hI/AAAAAAAACog/o1V4u2WwFk0/s1600/SMART+BOY+FB.jpg'} style={{ "borderRadius": "10px", "maxWidth": "500px", "minWidth": "100px" }} />
        </div>
        <div className="d-flex flex-column align-items-start p-3 p-md-1" style={{"flex": "2"}}>
          <h1 className="mb-3 mb-md-3" style={{"fontSize": "30px"}}>{client.name}</h1>
          <div className="d-flex align-items-start flex-column">
            <h3 style={{"fontWeight": "500"}}>Birth Date:</h3>
            <h3 style={{"margin": "5px 10px"}}>{`${date.getFullYear()}-${(date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1)}-${date.getDate() > 9 ? date.getDate() : '0' + date.getDate()}`}</h3>
            <h3 style={{"fontWeight": "500"}}>Contact:</h3>
            <h3 style={{"margin": "5px 10px"}}>{client.contact}</h3>
            <h3 style={{"fontWeight": "500"}}>Gender:</h3>
            <h3 style={{"margin": "5px 10px"}}>{client.gender}</h3>
            <h3 style={{"fontWeight": "500"}}>Adress:</h3>
            <h3 style={{"margin": "5px 10px"}}>{client.address}</h3>
            <h3 style={{"fontWeight": "500"}}>Device:</h3>
            <h3 style={{"margin": "5px 10px"}}>{client.device?.arduinoUniqueKey || 'Not Connected'}</h3>
          </div>
          <div className="d-flex flex-column align-items-start mt-3">
            <FamiliesModal family={client.familiesId} />
            <DeviceModal device={client.device} />
          </div>
        </div>
      </div>
      <div style={{"display": "flex", "justifyContent": "flex-end"}}>
        <EditClientModal client={client} />
        <button className="btn btn-danger m-2" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default DeviceDetail;
