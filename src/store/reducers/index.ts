import { combineReducers } from 'redux'

import searchReducer from './searchReducer'
import listReducer from './listReducer'

export const rootReducer = combineReducers({ search: searchReducer, list: listReducer })
