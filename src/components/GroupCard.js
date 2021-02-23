import { useHistory } from "react-router";

function GroupCard (props) {
  const {
    name,
    client,
    id
  } = props.group;
  const history = useHistory();

  return (
    <div onClick={() => history.push(`/groups/${id}`)}>
      <h3>{name}</h3>
      <h3>{client.length}</h3>
    </div>
  );
}

export default GroupCard;
