import { combineReducers } from "@reduxjs/toolkit";
import ScheduleSlice from "./schedules/schedule.slice";
import PatientsSlice from "./patients/patients.slice";
import AppointmentsSlice from "./appointments/appointments.slice";
import AuthSlice from "./auth/auth.slice";
import DoctorsSlice from "./doctor/doctor.slice";

const rootReducer = combineReducers({
	schedules: ScheduleSlice,
	patients: PatientsSlice,
	appointments: AppointmentsSlice,
	auth: AuthSlice,
	doctors: DoctorsSlice,
});

export default rootReducer;
