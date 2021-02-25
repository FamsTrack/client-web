const initState = {
  schedule: [],
  loading: false
}

const scheduleResolver = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_SCHED":
      return { ...state, schedule: action.payload }
    case "SET_LOADING_SCHED":
      return { ...state, loading: action.payload }
    default:
      return state
  }
}

export default scheduleResolver