import { combineReducers } from "@reduxjs/toolkit";
import ScheduleSlice from "./schedules/schedule.slice";
import PatientsSlice from "./patients/patients.slice";

const rootReducer = combineReducers({
	schedules: ScheduleSlice,
	patients: PatientsSlice,
});

export default rootReducer;
