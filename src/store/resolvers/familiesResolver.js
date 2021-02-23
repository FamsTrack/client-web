const initState = {
  users: [],
  families: {},
  loadingFamily: false
};

const familiesresolver = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_USERS":
      return {
        ...state, users: action.payload
      };
    case "FETCH_FAMILIES":
      return {
        ...state, families: action.payload
      };
    case "SET_LOADING_FAMILY":
      return {
        ...state, loadingFamily: action.payload
      };
    default:
      return {
        ...state
      };
  }
}

export default familiesresolver;
