import { UPDATE_COLUMNS } from './actionTypes'

export const updateColumns = columns => dispatch => {
    dispatch({ type: UPDATE_COLUMNS, payload: columns })
}
