const initState = {
  families: {}
};

const familiesresolver = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_FAMILIES":
      return {
        ...state, families: action.payload
      };
    default:
      return {
        ...state
      };
  }
}

export default familiesresolver;
