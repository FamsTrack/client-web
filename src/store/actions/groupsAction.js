import axios from 'axios';
const url = 'http://localhost:3000';
const access_token = localStorage.access_token;

export const fetchGroups = () => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: "SET_LOADING_GROUP",
        payload: true
      });

      let payload = await axios.get(`${url}/groups`, {
        headers: {
          access_token
        }
      });
      payload = payload.data

      await dispatch({
        type: "FETCH_GROUPS",
        payload
      });

      return dispatch({
        type: "SET_LOADING_GROUP",
        payload: false
      });
    } catch (err) {
      console.log(err);
    }
  }
}

export const fetchGroup = (id) => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: "SET_LOADING_GROUP",
        payload: true
      });

      let payload = await axios.get(`${url}/groups/${id}`, {
        headers: {
          access_token
        }
      });
      payload = payload.data

      await dispatch({
        type: "FETCH_GROUP",
        payload
      });

      return dispatch({
        type: "SET_LOADING_GROUP",
        payload: false
      });
    } catch (err) {
      console.log(err);
    }
  }
}
