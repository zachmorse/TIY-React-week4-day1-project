import axios from 'axios'
import store from '../store'
import { UPDATE_QUERY, SEARCH_PHOTOS, RETRIEVE_MORE_PHOTOS } from './actionTypes'

export const BASE_URL = process.env.REACT_APP_UNSPLASH_BASE_URL
export const CLIENT_ID = process.env.REACT_APP_UNSPLASH_CLIENT_ID


const buildURL = (incrementPage = false) => {
    const query = store.getState().search.query
    const orientation = store.getState().search.orientation
    const resultsPerPage = store.getState().search.resultsPerPage
    const page = store.getState().search.page

    return `${BASE_URL}?client_id=${CLIENT_ID}&query=${query}&orientation=${orientation}&per_page=${resultsPerPage}&page=${
        incrementPage ? page + 1 : page
    }`
}

export const updateQuery = query => ({ type: UPDATE_QUERY, payload: query })

export const searchPhotos = query => async dispatch => {
    axios
        .get(buildURL())
        .then(response => dispatch({ type: SEARCH_PHOTOS, payload: { images: response.data.results, query: query } }))
        .catch(err => console.log(`ERROR: ${err}`))
}

export const retrieveMorePhotos = query => async dispatch => {
    const incrementPage = true
    axios
        .get(buildURL(incrementPage))
        .then(response => dispatch({ type: RETRIEVE_MORE_PHOTOS, payload: { images: response.data.results } }))
        .catch(err => console.log(`ERROR: ${err}`))
}
