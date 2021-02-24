const initState = {
  news: [],
  newsById: {},
  loadingNews: false
};

const newsResolver = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_NEWS":
      return {
        ...state, news: action.payload
      };
    case "FETCH_NEWSBYID":
      return {
        ...state, newsById: action.payload
      };
    case "SET_LOADING_NEWS":
      return {
        ...state, loadingNews: action.payload
      };
    default:
      return {
        ...state
      };
  }
}

export default newsResolver;
