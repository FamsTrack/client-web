import axios from 'axios';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import {
  setErrorLogin
} from '../store/actions/baseAction';

function LoginCard({ setVisible }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      let res = await axios.post('http://localhost:3000/login', {
        email,
        password
      })

      localStorage.setItem('access_token', res.data.access_token);
      history.push('/');
    } catch (err) {
      dispatch(setErrorLogin(err.response.data.errors));
      setVisible(true);
    }
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  }

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <div className="form-floating mb-3">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required onChange={e => handleChangeEmail(e)} />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required onChange={e => handleChangePassword(e)} />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <div>
        <button className="btn btn-primary mt-3 mb-3">Log In</button>
        <p className="mb-5" style={{ "fontSize": "15px" }}>Doesn't have account yet? Sign in</p>
      </div>
    </form>
  );
}

export default LoginCard;
