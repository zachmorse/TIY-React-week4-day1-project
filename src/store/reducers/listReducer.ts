import { UPDATE_COLUMNS } from '../actions/actionTypes'

const initialState = {
    columns: 3,
}

interface iListReducer {
    state: { columns: number }
    action: { type: string; payload: number }
}

const listReducer = ({ state = initialState, action }: iListReducer) => {
    switch (action.type) {
        case UPDATE_COLUMNS:
            return { ...state, columns: action.payload }
        default:
            return state
    }
}

export default listReducer
