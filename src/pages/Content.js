import Navbar from "../components/Navbar";
import {
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Groups from "../components/Groups";
import News from "../components/News";
import Devices from "../components/Devices";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBaseData
} from '../store/actions/baseAction';
import '../App.css';

function Content() {
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    loading
  } = useSelector(state => state.baseResolver);

  useEffect(() => {
    if (!localStorage.access_token) {
      history.push('/login');
    } else {
      dispatch(fetchBaseData());
    }
  }, []);

  if (loading) {
    return (
      <div style={{ "backgroundImage": "linear-gradient(to bottom right, #FFFFFF, #8BE3FF)", "minHeight": "100vh", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="row" style={{ "backgroundImage": "linear-gradient(to bottom right, #FFFFFF, #8BE3FF)" }}>
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
