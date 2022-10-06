import store from '../store'
import axios from 'axios'
import { UPDATE_QUERY, SEARCH_PHOTOS } from './actionTypes'

const BASE_URL = 'https://api.unsplash.com/search/photos'
const CLIENT_ID = process.env.REACT_APP_UNSPLASH_CLIENT_ID

export const updateQuery = query => ({
    type: UPDATE_QUERY,
    payload: query,
})

export const searchPhotos = () => async dispatch => {
    const searchQuery = store.getState().search.query
    const requestURL = `${BASE_URL}?query=${searchQuery}&client_id=${CLIENT_ID}`
    axios.get(requestURL).then(response => dispatch({ type: SEARCH_PHOTOS, payload: response.data.results }))
}
