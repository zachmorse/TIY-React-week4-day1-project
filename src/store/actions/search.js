import axios from 'axios'
import { UPDATE_QUERY, SEARCH_PHOTOS, RETRIEVE_MORE_PHOTOS } from './actionTypes'

const BASE_URL = 'https://api.unsplash.com/search/photos'
const CLIENT_ID = process.env.REACT_APP_UNSPLASH_CLIENT_ID
const RESULTS_PER_PAGE = 30
const ORIENTATION = 'landscape'
const PAGE = 1

export const updateQuery = query => ({ type: UPDATE_QUERY, payload: query })

export const searchPhotos = query => async dispatch => {
    const requestURL = `${BASE_URL}?query=${query}&client_id=${CLIENT_ID}&orientation=${ORIENTATION}&page=${PAGE}&per_page=${RESULTS_PER_PAGE}`
    axios.get(requestURL).then(response => {
        dispatch({ type: SEARCH_PHOTOS, payload: { images: response.data.results, query: query } })
    })
}

export const retrieveMorePhotos = query => async dispatch => {
    console.log('query?', query)
    const requestURL = `${BASE_URL}?query=${query}&client_id=${CLIENT_ID}&orientation=${ORIENTATION}&page=${2}&per_page=${RESULTS_PER_PAGE}`
    axios.get(requestURL).then(response => {
        console.log('response?', response)
        dispatch({ type: RETRIEVE_MORE_PHOTOS, payload: { images: response.data.results } })
    })
}
