import { UPDATE_QUERY, SEARCH_PHOTOS, RETRIEVE_MORE_PHOTOS } from '../actions/actionTypes'

const initialState = {
    query: '',
    images: [],
    previouslySearched: [],
    isInitialSearch: true,
    page: 1,
    orientation: 'landscape', // landscape, portrait, squarish
    resultsPerPage: 30
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_QUERY:
            return { ...state, query: action.payload }
        case SEARCH_PHOTOS:
            return {
                ...state,
                images: action.payload.images,
                previouslySearched: state.previouslySearched.includes(action.payload.query)
                    ? state.previouslySearched
                    : [...state.previouslySearched, action.payload.query],
                isInitialSearch: false,
                page: 1,
            }
        case RETRIEVE_MORE_PHOTOS:
            return { ...state, images: [...state.images, ...action.payload.images], page: state.page + 1 }
        default:
            return state
    }
}

export default searchReducer
