import { configureStore, MiddlewareArray } from "@reduxjs/toolkit";
import logger from "redux-logger";
// @ts-ignore
import untypedMiddleware from "untyped-middleware";
import rootReducer from "./root-reducer";

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
	reducer: rootReducer,
	middleware: [logger] as const,
});

export default store;
