import { createSlice } from "@reduxjs/toolkit";
import { add, remove, update } from "../utils";
export const ScheduleSlice = createSlice({
	name: "schedules",
	initialState: {
		loading: false,
		schedules: [],
		error: null,
	},
	reducers: {
		addScheduleStart: (state) => {
			state.loading = true;
		},
		addScheduleSuccess: (state, action) => {
			state.loading = false;
			state.schedules = (state.schedules, action.payload);
		},
		addScheduleError: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const {
	addScheduleStart,
	addScheduleSuccess,
	addScheduleError,
} = ScheduleSlice.actions;

export default ScheduleSlice.reducer;
