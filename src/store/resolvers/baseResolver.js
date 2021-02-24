const initState = {
  baseData: [],
  errorLogin: "",
  errorRegister: [],
  loading: false,
  client: {},
  loadingClient: false
};

function baseResolver (state = initState, action) {
  switch (action.type) {
    case "FETCH_BASE_DATA":
      return {
        ...state, baseData: action.payload
      }
    case "SET_ERROR_LOGIN":
      return {
        ...state, errorLogin: action.payload
      }
    case "SET_ERROR_REGISTER":
      return {
        ...state, errorRegister: action.payload
      }
    case "SET_LOADING":
      return {
        ...state, loading: action.payload
      }
    case "FETCH_CLIENT":
      return {
        ...state, client: action.payload
      }
    case "SET_LOADING_CLIENT":
      return {
        ...state, loadingClient: action.payload
      }
    default:
      return {
        ...state
      }
  }
}

export default baseResolver;
