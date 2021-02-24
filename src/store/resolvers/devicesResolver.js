const initState = {
  devices: [],
  loadingDevices: false
};

const devicesResolver = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_DEVICES":
      return {
        ...state, devices: action.payload
      }
    case "SET_LOADING_DEVICES":
      return {
        ...state, loadingDevices: action.payload
      }
    default:
      return {
        ...state
      }
  }
}

export default devicesResolver;
