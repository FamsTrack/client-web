import { useHistory } from "react-router";

function GroupCard (props) {
  const {
    name,
    client,
    id
  } = props.group;
  const history = useHistory();

  return (
    <div className="d-flex justify-content-between align-items-center mb-3" style={{cursor:'pointer'}} onClick={() => history.push(`/groups/${id}`)}>
      <h3>{name}</h3>
      <div className="d-flex align-items-center"><h3>{client.length + ' '}</h3><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle ms-2" viewBox="0 0 16 16">
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
      </svg></div>
    </div>
  );
}

export default GroupCard;
