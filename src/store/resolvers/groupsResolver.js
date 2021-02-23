const initState = {
  groups: [],
  group: {},
  loadingGroup: false
};

const groupsResolver = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GROUPS":
      return {
        ...state, groups: action.payload
      };
    case "FETCH_GROUP":
      return {
        ...state, group: action.payload
      };
    case "SET_LOADING_GROUP":
      return {
        ...state, loadingGroup: action.payload
      };
    default:
      return {
        ...state
      };
  }
}

export default groupsResolver;
