import { combineReducers } from "@reduxjs/toolkit";
import ScheduleSlice from "./schedules/schedule.slice";
const rootReducer = combineReducers({
	schedules: ScheduleSlice,
});

export default rootReducer;
