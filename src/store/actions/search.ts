import axios from 'axios'
import store from '../store'
import {
    UPDATE_QUERY,
    SEARCH_PHOTOS,
    RETRIEVE_MORE_PHOTOS,
    REMOVE_PREVIOUS_QUERY,
    UPDATE_SEARCH_PARAMS
} from './actionTypes'

export const BASE_URL = process.env.REACT_APP_UNSPLASH_BASE_URL
export const CLIENT_ID = process.env.REACT_APP_UNSPLASH_CLIENT_ID

const buildURL = (query: string, incrementPage = false) => {
    const orientation = store.getState().search['orientation']
    const resultsPerPage = store.getState().search['resultsPerPage']
    const orderBy = store.getState().search['orderBy']
    const page = store.getState().search['page']

    return `${BASE_URL}?client_id=${CLIENT_ID}&query=${query}&orientation=${orientation}&per_page=${resultsPerPage}&order_by=${orderBy}&page=${
        incrementPage ? page + 1 : page
    }`
}

export const updateQuery = (query: string) => ({ type: UPDATE_QUERY, payload: query })

export const searchPhotos = (query: string) => async (dispatch: any) => {
    axios
        .get(buildURL(query))
        .then(response => {
            dispatch({
                type: SEARCH_PHOTOS,
                payload: { images: response.data.results, query: query, totalPages: response.data.total_pages }
            })
        })
        .catch(err => console.log(`ERROR: ${err}`))
}

export const retrieveMorePhotos = () => async (dispatch: any) => {
    const query = store.getState().search['query']
    const incrementPage = true
    axios
        .get(buildURL(query, incrementPage))
        .then(response =>
            dispatch({
                type: RETRIEVE_MORE_PHOTOS,
                payload: { images: response.data.results, query: query }
            })
        )
        .catch(err => console.log(`ERROR: ${err}`))
}

export const removePreviousQuery = (query: string) => ({ type: REMOVE_PREVIOUS_QUERY, payload: query })

export const updateSearchParams = (key: string, value: string) => ({
    type: UPDATE_SEARCH_PARAMS,
    payload: { key, value }
})
