import _ from "lodash";

const initialState = {
  searchQuery: "",
  images: []
};

export default (state = initialState, action) => {
  let newState = _.cloneDeep(state);
  console.log("newState: ", newState);

  switch (action.type) {
    case "UPDATE_QUERY":
      console.log("ACTION PAYLOAD: ", action.payload);
      newState.searchQuery = action.payload;
      return newState;

    case "SEARCH_PHOTOS":
      console.log("payload", action.payload);
      newState.images = action.payload;
      console.log("newState: ", newState);
      return newState;

    default:
      return newState;
  }

  // return newState;
};
