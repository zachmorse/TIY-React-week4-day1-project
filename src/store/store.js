import { combineReducers, createStore, applyMiddleware } from "redux";
import splashReducer from "../reducers/splashReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

let reducers = combineReducers({
  splash: splashReducer
});

let middleware = applyMiddleware(thunk, logger);

let store = createStore(reducers, middleware);

export default store;
