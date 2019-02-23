import _ from "lodash";

const initialState = {
  searchQuery: "",
  images: []
};

export default (state = initialState, action) => {
  let newState = _.cloneDeep(state);
  switch (action.type) {
    case "UPDATE_QUERY":
      newState.searchQuery = action.payload;
      return newState;

    case "SEARCH_PHOTOS":
      newState.images = action.payload;
      return newState;

    default:
      return newState;
  }
};
