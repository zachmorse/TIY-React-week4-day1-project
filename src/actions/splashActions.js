import store from "../store/store";
import axios from "axios";

import { apiConfig } from "../token";

export const updateSearchQuery = e => {
  store.dispatch({
    type: "UPDATE_QUERY",
    payload: e.target.value
  });
};

export const searchPhotos = () => {
  store.dispatch((dispatch, getState) => {
    let query = getState().splash.searchQuery;
    axios
      .get(
        // `https://api.unsplash.com/search/photos?query=${query}&client_id=ae97b5ec928c0ebd6c55094ddf21b6391d4df410defc61e67b8e986ac71d0724`
        `https://api.unsplash.com/search/photos?query=${query}&client_id=${apiConfig.applicationID}`
      )
      .then(response => {
        dispatch(completeSearchPhotos(response.data.results));
      });
  });
};

const completeSearchPhotos = photos => {
  return { type: "SEARCH_PHOTOS", payload: photos };
};
