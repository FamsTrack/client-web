import axios from 'axios'
const url = 'https://famstrack.herokuapp.com'

export const fetchSchedule = (id) => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: "SET_LOADING_SCHED",
        payload: true
      })

      let schedule = await axios.get(`${url}/groups/${id}/schedule`, {
        headers: {
          access_token: localStorage.access_token
        }
      })
      await dispatch({
        type: "FETCH_SCHED",
        payload: schedule.data
      })

      return dispatch({
        type: "SET_LOADING_SCHED",
        payload: false
      })
    } catch (err) {
      console.log(err);
    }
  }
}

export const addSchedule = (id, input) => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: "SET_LOADING_SCHED",
        payload: true
      })

      await axios.post(`${url}/groups/${id}/schedule`, input, {
        headers: {
          access_token: localStorage.access_token
        }
      }).then(console.log).catch(console.log)

      const schedule = await axios.get(`${url}/groups/${id}/schedule`, {
        headers: {
          access_token: localStorage.access_token
        }
      })

      await dispatch({
        type: "FETCH_SCHED",
        payload: schedule.data
      })

      return dispatch({
        type: "SET_LOADING_SCHED",
        payload: false
      })
    } catch (err) {
      console.log(err);
    }
  }
}

export const updateSchedule = (id, schId, input) => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: "SET_LOADING_SCHED",
        payload: true
      })

      await axios.put(`${url}/groups/${id}/schedule/${schId}`, input,  {
        headers: {
          access_token: localStorage.access_token
        }
      }).then(console.log).catch(console.log)

      const schedule = await axios.get(`${url}/groups/${id}/schedule`, {
        headers: {
          access_token: localStorage.access_token
        }
      })

      await dispatch({
        type: "FETCH_SCHED",
        payload: schedule.data
      })

      return dispatch({
        type: "SET_LOADING_SCHED",
        payload: false
      })
    } catch (err) {
      console.log(err);
    }
  }
}

export const deleteSchedule = (id, schId) => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: "SET_LOADING_SCHED",
        payload: true
      })

      await axios.delete(`${url}/groups/${id}/schedule/${schId}`, {
        headers: {
          access_token: localStorage.access_token
        }
      }).then(console.log).catch(console.log)

      const schedule = await axios.get(`${url}/groups/${id}/schedule`, {
        headers: {
          access_token: localStorage.access_token
        }
      })

      await dispatch({
        type: "FETCH_SCHED",
        payload: schedule.data
      })

      return dispatch({
        type: "SET_LOADING_SCHED",
        payload: false
      })
    } catch (err) {
      console.log(err);
    }
  }
}