import {
	configureStore,
	ThunkAction,
	Action,
	getDefaultMiddleware,
} from "@reduxjs/toolkit";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import reduxThunk from "redux-thunk";
const store = configureStore({
	reducer: rootReducer,
	middleware: [...getDefaultMiddleware(), logger, reduxThunk] as const,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, unknown, Action>;

export default store;
