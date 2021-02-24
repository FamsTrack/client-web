import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Alert } from 'reactstrap';
import { useSelector } from "react-redux";
import LoginCard from '../components/LoginCard';

function Login() {
  const history = useHistory();
  const [visible, setVisible] = useState(false);
  const {
    errorLogin,
    errorRegister,
    loading
  } = useSelector(state => state.baseResolver);

  useEffect(() => {
    if (localStorage.access_token) {
      history.push('/');
    }
  }, []);

  const onDismiss = () => {
    setVisible(false);
  }

  return (
    <div>
      {
        errorLogin ? 
          <Alert color="danger" isOpen={visible} onClick={() => onDismiss()}>
            {errorLogin}
          </Alert> : ''
      }
      <div className="row mt-5 mt-md-0" style={{ "backgroundColor": "rgb(220 255 231)", "minHeight": "100vh", "display": "flex", "alignItems": "center" }}>
        <div className="col-lg-1"></div>
        <div className="col-lg-10">
          <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
            <div style={{ "flex": "8" }}>
              <img className="container" src="https://i.ibb.co/wSH72xV/My-Post.png" width="auto" style={{ "maxWidth": "400px", "borderRadius": "500px" }} />
            </div>
            <div className="container pt-md-5 mt-md-5" style={{ "flex": "4" }}>
              <h2 style={{"fontSize": "25px"}} className="p-3">Welcome Back!</h2>
              <LoginCard setVisible={setVisible}/>
            </div>
          </div>
          <div className="container mt-md-5 mt-3">
            <div className="container mb-5" style={{ "textAlign": "left" }}>
              <h1>Best Tracking App</h1>
              <p>Are you worried that your family will get lost during their Hajj trip, or are you a travel tour vendor who wants to be able to monitor the whereabouts of your congregation? Calm down, FamTrack is here to help you. FamTrack is an IoT-based application that can monitor the whereabouts of your family or congregation and we also have a panic button feature if your family or clients get lost.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
}

export default Login;
