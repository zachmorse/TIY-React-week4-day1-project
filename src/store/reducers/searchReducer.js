import { UPDATE_QUERY, SEARCH_PHOTOS } from '../actions/actionTypes'

const initialState = {
    query: '',
    images: [],
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_QUERY:
            return { ...state, query: action.payload }
        case SEARCH_PHOTOS:
            return { ...state, images: action.payload }
        default:
            return state
    }
}

export default searchReducer
