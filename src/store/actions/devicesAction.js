import axios from 'axios';
const url = 'http://localhost:3000';
const access_token = localStorage.access_token;

export const fetchDevices = () => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: "SET_LOADING_DEVICES",
        payload: true
      });

      let payload = await axios.get(`${url}/devices`, {
        headers: {
          access_token
        }
      });
      payload = payload.data;
      
      await dispatch({
        type: "FETCH_DEVICES",
        payload
      });

      return dispatch({
        type: "SET_LOADING_DEVICES",
        payload: false
      });
    } catch (err) {
      console.log(err);
    }
  }
}
