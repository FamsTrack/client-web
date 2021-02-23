import '../assets/Groups.css';
import {
  Link,
  Route,
  Switch
} from 'react-router-dom';
import GroupsList from './GroupsList';
import GroupDetail from './GroupDetail';

function Groups() {
  return (
    <div style={{"height": "100vh", "overflow": "auto"}} className="main-sub-div-famtrack">
      <div className="groups-title-famtrack">
        <h1 style={{"fontWeight": "200"}}>Groups</h1>
        <button className="btn add-button-famtrack">Add</button>
      </div>
      <Switch>
        <Route path="/groups/:id">
          <GroupDetail />
        </Route>
        <Route path="/groups">
          <GroupsList />
        </Route>
      </Switch>
    </div>
  );
}

export default Groups;
