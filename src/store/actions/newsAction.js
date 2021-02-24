import axios from 'axios';
const url = "https://famstrack.herokuapp.com";

export const fetchNews = () => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: "SET_LOADING_NEWS",
        payload: true
      });

      let payload = await axios.get(`${url}/news`, {
        headers: {
          access_token: localStorage.access_token
        }
      });
      payload = payload.data;

      await dispatch({
        type: "FETCH_NEWS",
        payload
      });

      return dispatch({
        type: "SET_LOADING_NEWS",
        payload: false
      });
    } catch (err) {
      console.log(err);
    }
  }
}

export const fetchNewsById = (id) => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: "SET_LOADING_NEWS",
        payload: true
      });

      let payload = await axios.get(`${url}/news/${id}`, {
        headers: {
          access_token: localStorage.access_token
        }
      });
      payload = payload.data;

      await dispatch({
        type: "FETCH_NEWSBYID",
        payload
      });

      return dispatch({
        type: "SET_LOADING_NEWS",
        payload: false
      });
    } catch (err) {
      console.log(err);
    }
  }
}
