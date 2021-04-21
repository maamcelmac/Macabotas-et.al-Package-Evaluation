import { createSlice } from "@reduxjs/toolkit";
import { remove } from "../utils";
import axios from "axios";
import { AppThunk } from "../store";
import { errorCatch } from "../utils";
export const PatientsSlice = createSlice({
	name: "schedules",
	initialState: {
		loading: false,
		patients: [],
		error: null,
		current: null,
	},
	reducers: {
		patientsLoading: (state) => {
			state.loading = true;
		},
		patientsError: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
		getPatientsSuccess: (state, action) => {
			state.loading = false;
			state.patients = action.payload;
		},
		getOnePatientSuccess: (state, action) => {
			state.loading = false;
			state.current = action.payload;
		},
		deletePatientSuccess: (state, action) => {
			state.loading = false;
			state.patients = remove(state.patients, action.payload);
		},

		setCurrentPatient: (state, action) => {
			state.current = action.payload;
		},
	},
});

export const getPatients = (): AppThunk => async (dispatch) => {
	dispatch(patientsLoading());
	try {
		const req = await axios.get("/patients/?status=true");
		const res = await req.data;
		if (res.success) {
			setTimeout(() => {
				dispatch(getPatientsSuccess(res.data));
			}, 500);
		} else {
			throw Error;
		}
	} catch (error) {
		errorCatch(error, "Error loading patients!");
		dispatch(patientsError(error));
	}
};

export const getOnePatient = (
	id: string,
	callback: () => void
): AppThunk => async (dispatch) => {
	dispatch(patientsLoading());
	try {
		const req = await axios.get(`/patients/${id}`);

		const res = await req.data;

		if (res.success) {
			setTimeout(() => {
				dispatch(getOnePatientSuccess(res.data));
				callback();
			}, 500);
		} else {
			throw Error;
		}
	} catch (error) {
		errorCatch(error, "Error loading patient!");
		dispatch(patientsError(error));
	}
};

export const deletePatient = (
	id: string,
	callback: () => void
): AppThunk => async (dispatch) => {
	dispatch(patientsLoading());
	try {
		const req = await axios.put(`/patients/${id}`, {
			status: false,
		});

		const res = await req.data;

		if (res.success) {
			setTimeout(() => {
				dispatch(deletePatientSuccess(res.data));
				callback();
			}, 500);
		} else {
			throw Error;
		}
	} catch (error) {
		errorCatch(error, "Error deleting patient!");
		dispatch(patientsError(error));
	}
};

export const setCurrent = (payload: any): AppThunk => async (dispatch) => {
	dispatch(setCurrentPatient(payload));
};

export const {
	patientsLoading,
	patientsError,
	getPatientsSuccess,
	getOnePatientSuccess,
	deletePatientSuccess,
	setCurrentPatient,
} = PatientsSlice.actions;

export default PatientsSlice.reducer;
