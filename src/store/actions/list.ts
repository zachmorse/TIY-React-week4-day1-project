import { UPDATE_COLUMNS } from './actionTypes'

export const updateColumns = (columns: number) => (dispatch: any) => {
    dispatch({ type: UPDATE_COLUMNS, payload: columns })
}
