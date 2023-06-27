import { UPDATE_COLUMNS } from '../actions/actionTypes'
import { iPayload } from '../../types'

const initialState = {
    columns: 3,
}

const listReducer = (state = initialState, action: iPayload) => {
    switch (action.type) {
        case UPDATE_COLUMNS:
            return { ...state, columns: action.payload }
        default:
            return state
    }
}

export default listReducer
