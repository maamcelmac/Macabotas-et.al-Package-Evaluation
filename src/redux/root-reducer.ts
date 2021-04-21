import { combineReducers } from "@reduxjs/toolkit";
import ScheduleSlice from "./schedules/schedule.slice";
import PatientsSlice from "./patients/patients.slice";
import AppointmentsSlice from "./appointments/appointments.slice";

const rootReducer = combineReducers({
	schedules: ScheduleSlice,
	patients: PatientsSlice,
	appointments: AppointmentsSlice,
});

export default rootReducer;
