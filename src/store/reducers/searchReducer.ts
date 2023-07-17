import { UPDATE_QUERY, SEARCH_PHOTOS, RETRIEVE_MORE_PHOTOS, REMOVE_PREVIOUS_QUERY } from '../actions/actionTypes'
import { iPayload } from '../../types'

const previouslySearchedArray: string[] = []

const initialState = {
    query: '',
    images: [],
    previouslySearched: previouslySearchedArray,
    isInitialSearch: true,
    page: 1,
    orientation: 'landscape', // landscape, portrait, squarish
    resultsPerPage: 30
}

const searchReducer = (state = initialState, action: iPayload) => {
    switch (action.type) {
        case UPDATE_QUERY:
            return { ...state, query: action.payload, page: 1 }
        case SEARCH_PHOTOS:
            const searchTerm = action.payload.query
            return {
                ...state,
                images: action.payload.images,
                previouslySearched: state.previouslySearched.includes(searchTerm)
                    ? state.previouslySearched
                    : [...state.previouslySearched, searchTerm],
                isInitialSearch: false,
                query: action.payload.query
            }
        case RETRIEVE_MORE_PHOTOS:
            return {
                ...state,
                images: [...state.images, ...action.payload.images],
                query: action.payload.query,
                page: state.page + 1
            }
        case REMOVE_PREVIOUS_QUERY:
            console.log(state.previouslySearched)

            return { ...state, previouslySearched: state.previouslySearched.filter(item => item !== action.payload) }
        default:
            return state
    }
}

export default searchReducer
