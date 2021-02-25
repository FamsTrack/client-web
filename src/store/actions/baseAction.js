import axios from 'axios';
const access_token = localStorage.access_token;
const url = 'https://famstrack.herokuapp.com';

export const fetchBaseData = () => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: "SET_LOADING",
        payload: true
      });
      
      let payload = await axios.get(`${url}/clients`, {
        headers: {
          access_token: localStorage.access_token
        }
      });
      payload = payload.data;
      
      await dispatch({
        type: "FETCH_BASE_DATA",
        payload
      });

      return dispatch({
        type: "SET_LOADING",
        payload: false
      });
    } catch (err) {
      console.log(err.response);
    }
  }
}

export const setErrorLogin = (payload) => {
  return async (dispatch) => {
    try {
      return dispatch({
        type: "SET_ERROR_LOGIN",
        payload
      });
    } catch (err) {
      console.log(err);
    }
  }
}

export const setErrorRegister = async () => {
  try {
    
  } catch (err) {
    console.log(err);
  }
}

export const fetchClient = (id) => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: "SET_LOADING_CLIENT",
        payload: true
      });

      let payload = await axios.get(`${url}/clients/${id}`, {
        headers: {
          access_token: localStorage.access_token
        }
      });
      payload = payload.data;
      
      await dispatch({
        type: "FETCH_CLIENT",
        payload
      });

      return dispatch({
        type: "SET_LOADING_CLIENT",
        payload: false
      });
    } catch (err) {
      console.log(err);
    }
  }
}

export const socketMap = (device) => {
  return async (dispatch, getState) => {
    try {
      const newData = getState().baseResolver.baseData;
      
      newData.forEach(e => {
        if (device.arduinoUniqueKey === e.device.arduinoUniqueKey) {
          e.device = device;
        }
      });
      
      await dispatch({
        type: "FETCH_BASE_DATA",
        payload: newData
      });
    } catch (err) {
      console.log(err);
    }
  }
}
