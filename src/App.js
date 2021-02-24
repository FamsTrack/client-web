import Login from './pages/Login';
import Content from './pages/Content';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useEffect } from 'react';
import { io } from "socket.io-client";
import { useDispatch } from 'react-redux';
import { socketMap } from './store/actions/baseAction';
const ENDPOINT = "http://localhost:3000"; //https://c11d32085703.ngrok.io/

function App() {
  const socket = io(ENDPOINT, {
    transports: ['websocket']
  });
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on("data:device", data => {
      dispatch(socketMap(data));
    });
    // CLEAN UP THE EFFECT
    return () => socket.disconnect();
  }, []);

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
