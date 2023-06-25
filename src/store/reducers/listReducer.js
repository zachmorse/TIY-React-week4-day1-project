import { UPDATE_COLUMNS } from '../actions/actionTypes'

const initialState = {
    columns: 3,
}

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COLUMNS:
            return { ...state, columns: 3 }
        default:
            return state
    }
}

export default listReducer
