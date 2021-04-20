import { createStore, applyMiddleware } from "redux";
import rootReducer from "./root-reducer";
import logger from "redux-logger";

const middlewares: any = [];
const INITIAL_STATE = {};

middlewares.push(logger);

const store = createStore(
	rootReducer,
	INITIAL_STATE,
	applyMiddleware(...middlewares)
);

export default store;
