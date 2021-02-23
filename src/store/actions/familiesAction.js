import axios from 'axios';
const access_token = localStorage.access_token;
const url = 'http://localhost:3000';

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: 'SET_LOADING_FAMILY',
        payload: true
      });

      let payload = await axios.get(`${url}/user`, {
        headers: {
          access_token
        }
      });
      payload = payload.data;
      
      await dispatch({
        type: 'FETCH_USERS',
        payload
      });

      return dispatch({
        type: 'SET_LOADING_FAMILY',
        payload: false
      });
    } catch (err) {
      console.log(err);
    }
  }
}

export const fetchFamilies = (id) => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: 'SET_LOADING_FAMILY',
        payload: true
      });

      let payload = await axios.get(`${url}/families/${id}`, {
        headers: {
          access_token
        }
      });
      payload = payload.data;
      
      await dispatch({
        type: 'FETCH_FAMILIES',
        payload
      });

      return dispatch({
        type: 'SET_LOADING_FAMILY',
        payload: false
      });
    } catch (err) {
      console.log(err);
    }
  }
}
