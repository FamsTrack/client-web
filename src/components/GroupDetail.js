import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { fetchGroups, fetchGroup } from "../store/actions/groupsAction";
import EditGroupModal from "./EditGroupModal";
import swal from 'sweetalert';
import axios from "axios";

function GroupDetail () {
  const {
    group,
    loadingGroup
  } = useSelector(state => state.groupsResolver);
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchGroup(id));
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
        await axios.delete(`https://famstrack.herokuapp.com/groups/${id}`, {
          headers: {
            access_token: localStorage.access_token
          }
        });
        
        dispatch(fetchGroups());
        history.push('/groups');
      }
    } catch (err) {
      console.log(err);
    }
  }

  if (loadingGroup) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div className="groups-detail-famtrack d-flex flex-column">
      <div>
      <a style={{"color": "#6c8590"}} onClick={() => history.push('/groups')}>Back</a>
      </div>
      <div style={{"alignSelf": "flex-start"}}>
        <h1>{group.name}</h1>
      </div>
      <div style={{"alignSelf": "flex-start"}} className="ms-3">
        <div style={{"textAlign": "start"}} className="mt-2 mb-3">
          <h1 style={{"fontSize": "30px", "fontWeight": "300"}}>Member</h1>
        </div>
        <div className="d-flex flex-column align-items-start">
          {
            group.client?.map(e => {
              return <div key={e.id} className="d-flex align-items-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
                <img src={e.img} width="100px" height="100px" style={{"borderRadius": "50px", "marginLeft": "1rem"}} />
                <h3 style={{"fontSize": "20px", "marginLeft": "2rem"}}>{e.name}</h3>
              </div>
            })
          }
        </div>
      </div>
      <div style={{"alignSelf": "flex-end"}}>
        <a className="btn btn-primary" style={{"marginRight": "1rem"}}>Schedule</a>
        <a className="btn btn-success" style={{"marginRight": "1rem"}}>Add Member</a>
        <EditGroupModal group={group}/>
        <a className="btn btn-danger" onClick={handleDelete}>Delete</a>
      </div>
    </div>
  );
}

export default GroupDetail;
