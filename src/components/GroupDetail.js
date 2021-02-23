import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { fetchGroup } from "../store/actions/groupsAction";

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

  if (loadingGroup) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div>
      <div>
      <a style={{"color": "#6c8590"}} onClick={() => history.push('/groups')}>Back</a>
      </div>
      <div>
        <h1>{group.name}</h1>
      </div>
      <div>
        {
          group.client.map(e => {
            return <h1>{e.name}</h1>
          })
        }
      </div>
      <div>
        <a className="btn btn-success">Add Member</a>
        <a className="btn btn-warning">Edit</a>
        <a className="btn btn-danger">Delete</a>
      </div>
    </div>
  );
}

export default GroupDetail;
