import Navbar from "../components/Navbar";
import {
  Switch,
  Route
} from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Groups from "../components/Groups";
import News from "../components/News";
import Devices from "../components/Devices";

function Content() {
  return (
    <div className="row" style={{ "overflow": "hidden", "backgroundImage": "linear-gradient(to bottom right, #FFFFFF, #8BE3FF)" }}>
      <div className="content-container-famtrack">
        <Navbar style={{"flex": "1"}} />
        <div style={{"flex": "2"}}>
          <Switch>
            <Route path="/groups">
              <Groups />
            </Route>
            <Route path="/news">
              <News />
            </Route>
            <Route path="/devices">
              <Devices />
            </Route>
            <Route path="/">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default Content;
