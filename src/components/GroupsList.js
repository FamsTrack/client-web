import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGroups } from "../store/actions/groupsAction";
import GroupCard from "./GroupCard";

function GroupsList() {
  const {
    groups,
    loadingGroup
  } = useSelector(state => state.groupsResolver);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGroups());
  }, []);

  if (loadingGroup) {
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
        <h1>Test</h1>
      </div>
    </div>
  );
}

export default GroupsList;
