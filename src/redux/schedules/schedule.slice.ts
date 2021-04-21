import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { add, remove, update } from "../utils";
import axios from "axios";
import { AppThunk } from "../store";
import { errorCatch } from "../utils";
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
			state.schedules = add(state.schedules, action.payload);
		},
		addScheduleError: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const createSchedule = (
	payload: any,
	callback: () => void
): AppThunk => async (dispatch) => {
	dispatch(addScheduleStart());
	try {
		const req = await axios.post("/schedules", payload);
		const res = await req.data;

		if (res.success) {
			setTimeout(() => {
				dispatch(addScheduleSuccess(res.data));
				callback();
			}, 3000);
		} else {
			throw Error;
		}
	} catch (error) {
		errorCatch(error, "Error creating schedule!");
		dispatch(addScheduleError(error));
	}
};

export const {
	addScheduleStart,
	addScheduleSuccess,
	addScheduleError,
} = ScheduleSlice.actions;

export default ScheduleSlice.reducer;
