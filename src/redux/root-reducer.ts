import { combineReducers } from "@reduxjs/toolkit";
import ScheduleSlice from "./schedules/schedule.slice";
const rootReducer = combineReducers({
	schedule: ScheduleSlice,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
