import { createSlice } from "@reduxjs/toolkit";
import { remove, update } from "../utils";
import axios from "axios";
import { AppThunk } from "../store";
import { errorCatch } from "../utils";
export const Appointments = createSlice({
	name: "appointments",
	initialState: {
		loading: false,
		appointments: [],
		error: null,
		current: null,
	},
	reducers: {
		appointmentLoading: (state) => {
			state.loading = true;
		},
		appointmentError: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
		getAppointmentsSuccess: (state, action) => {
			state.loading = false;
			state.appointments = action.payload;
		},
		getOneAppointmentSuccess: (state, action) => {
			state.loading = false;
			state.current = action.payload;
		},
		updateAppointmentSuccess: (state, action) => {
			state.loading = false;
			state.appointments = update(state.appointments, action.payload);
		},
		deleteAppointmentSuccess: (state, action) => {
			state.loading = false;
			state.appointments = remove(state.appointments, action.payload);
		},

		setCurrentAppointment: (state, action) => {
			state.current = action.payload;
		},
	},
});

export const getAppointments = (
	type: string,
	status: string
): AppThunk => async (dispatch) => {
	dispatch(appointmentLoading());
	try {
		const req = await axios.get(
			`/appointments/?status=true&type=${type}&appointmentStatus=${status}`
		);
		const res = await req.data;
		if (res.success) {
			setTimeout(() => {
				dispatch(getAppointmentsSuccess(res.data));
			}, 500);
		} else {
			throw Error;
		}
	} catch (error) {
		errorCatch(error, "Error loading appointments!");
		dispatch(appointmentError(error));
	}
};

export const getOneAppointment = (
	id: string,
	callback: () => void
): AppThunk => async (dispatch) => {
	dispatch(appointmentLoading());
	try {
		const req = await axios.get(`/appointments/${id}`);

		const res = await req.data;

		if (res.success) {
			setTimeout(() => {
				dispatch(getOneAppointmentSuccess(res.data));
				callback();
			}, 500);
		} else {
			throw Error;
		}
	} catch (error) {
		errorCatch(error, "Error loading appointment!");
		dispatch(appointmentError(error));
	}
};

export const updateAppointment = (
	id: string,
	payload: any,
	callback: () => void
): AppThunk => async (dispatch) => {
	dispatch(appointmentLoading());
	try {
		const req = await axios.put(`/patients/${id}`, payload);

		const res = await req.data;

		if (res.success) {
			setTimeout(() => {
				dispatch(updateAppointmentSuccess(res.data));
				callback();
			}, 500);
		} else {
			throw Error;
		}
	} catch (error) {
		errorCatch(error, "Error deleting patient!");
		dispatch(appointmentError(error));
	}
};

export const deleteAppointment = (
	id: string,
	callback: () => void
): AppThunk => async (dispatch) => {
	dispatch(appointmentLoading());
	try {
		const req = await axios.put(`/patients/${id}`, {
			status: false,
		});

		const res = await req.data;

		if (res.success) {
			setTimeout(() => {
				dispatch(deleteAppointmentSuccess(res.data));
				callback();
			}, 500);
		} else {
			throw Error;
		}
	} catch (error) {
		errorCatch(error, "Error deleting patient!");
		dispatch(appointmentError(error));
	}
};

export const setCurrent = (payload: any): AppThunk => async (dispatch) => {
	dispatch(setCurrentAppointment(payload));
};

export const {
	appointmentLoading,
	appointmentError,
	getAppointmentsSuccess,
	getOneAppointmentSuccess,
	deleteAppointmentSuccess,
	setCurrentAppointment,
	updateAppointmentSuccess,
} = Appointments.actions;

export default Appointments.reducer;
