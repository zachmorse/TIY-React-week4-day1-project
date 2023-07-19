import {
    UPDATE_QUERY,
    SEARCH_PHOTOS,
    RETRIEVE_MORE_PHOTOS,
    REMOVE_PREVIOUS_QUERY,
    UPDATE_SEARCH_PARAMS
} from '../actions/actionTypes'

import { iPayload } from '../../types'

const previouslySearchedArray: string[] = []

const initialState = {
    query: '',
    images: [],
    previouslySearched: previouslySearchedArray,
    isInitialSearch: true,
    page: 1,
    orientation: 'landscape', // landscape, portrait, squarish
    resultsPerPage: 30,
    totalPages: 1,
    orderBy: 'relevant', // relevant, latest,
    color: '' // black_and_white, black, white, yellow, orange, red, purple, magenta, green, teal, and blue
}

const searchReducer = (state = initialState, action: iPayload) => {
    switch (action.type) {
        case UPDATE_QUERY:
            return { ...state, query: action.payload, page: 1 }
        case SEARCH_PHOTOS:
            const { query, totalPages } = action.payload
            return {
                ...state,
                images: action.payload.images,
                previouslySearched: state.previouslySearched.includes(query)
                    ? state.previouslySearched
                    : [...state.previouslySearched, query],
                isInitialSearch: false,
                query: query,
                totalPages: totalPages
            }
        case RETRIEVE_MORE_PHOTOS:
            return {
                ...state,
                images: [...state.images, ...action.payload.images],
                query: action.payload.query,
                page: state.page + 1
            }
        case REMOVE_PREVIOUS_QUERY:
            return { ...state, previouslySearched: state.previouslySearched.filter(item => item !== action.payload) }
        case UPDATE_SEARCH_PARAMS:
            return { ...state, [action.payload.key]: action.payload.value }
        default:
            return state
    }
}

export default searchReducer
