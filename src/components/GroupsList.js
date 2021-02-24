import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBaseData } from "../store/actions/baseAction";
import { fetchGroups } from "../store/actions/groupsAction";
import GroupCard from "./GroupCard";

function GroupsList() {
  const {
    groups,
    loadingGroup
  } = useSelector(state => state.groupsResolver);
  const dispatch = useDispatch();
  const {
    baseData,
    loading
  } = useSelector(state => state.baseResolver);

  useEffect(() => {
    dispatch(fetchGroups());
  }, []);

  if (loadingGroup || loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="groups-container-famtrack">
      <div className="groups-list-famtrack">
        {
          groups.map(group => {
            return <GroupCard key={group.id} group={group} />
          })
        }
      </div>
      <div className="ungrouped-list-famtrack">
        <h3>Not Grouped</h3>
        {
          baseData.map(e => {
            if (!e.groupId) {
              return <div key={e.id} className="d-flex align-items-center mb-3">
                <img src={e.img} width="100px" height="100px" style={{"borderRadius": "50px", "marginLeft": "1rem"}} />
                <h3 style={{"fontSize": "20px", "marginLeft": "2rem"}}>{e.name}</h3>
              </div>
            }
          })
        }
      </div>
    </div>
  );
}

export default GroupsList;
