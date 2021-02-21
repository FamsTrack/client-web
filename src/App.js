import Login from './pages/Login';
import Content from './pages/Content';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Content />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
