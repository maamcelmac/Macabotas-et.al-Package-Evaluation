import { createSlice } from "@reduxjs/toolkit";
import { remove, add } from "../utils";
import axios from "axios";
import { AppThunk } from "../store";
import { errorCatch } from "../utils";

export const DoctorsSlice = createSlice({
	name: "doctor",
	initialState: {
		loading: false,
		doctors: [],
		error: null,
		current: null,
	},
	reducers: {
		doctorLoading: (state) => {
			state.loading = true;
		},
		doctorError: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
		createDoctorSuccess: (state, action) => {
			state.loading = false;
			state.doctors = add(state.doctors, action.payload);
		},
		getDoctorsSuccess: (state, action) => {
			state.loading = false;
			state.doctors = action.payload;
		},
		getOneDoctorSuccess: (state, action) => {
			state.loading = false;
			state.current = action.payload;
		},
		deleteDoctorSuccess: (state, action) => {
			state.loading = false;
			state.doctors = remove(state.doctors, action.payload);
		},
	},
});

export const createDoctor = (
	payload: any,
	callback: () => void
): AppThunk => async (dispatch) => {
	dispatch(doctorLoading());
	try {
		const req = await axios.post("/doctors", payload);
		const res = await req.data;

		if (res.success) {
			setTimeout(() => {
				dispatch(createDoctorSuccess(res.data));
				callback();
			}, 1000);
		} else {
			throw Error;
		}
	} catch (error) {
		errorCatch(error, "Error creating doctor!");
		dispatch(doctorError(error));
	}
};

export const getDoctors = (): AppThunk => async (dispatch) => {
	dispatch(doctorLoading());
	try {
		const req = await axios.get("/doctors/?status=true");
		const res = await req.data;
		if (res.success) {
			setTimeout(() => {
				dispatch(getDoctorsSuccess(res.data));
			}, 500);
		} else {
			throw Error;
		}
	} catch (error) {
		errorCatch(error, "Error loading doctors!");
		dispatch(doctorError(error));
	}
};

export const getOneDoctor = (
	id: string,
	callback: () => void
): AppThunk => async (dispatch) => {
	dispatch(doctorLoading());
	try {
		const req = await axios.get(`/doctors/${id}`);

		const res = await req.data;

		if (res.success) {
			setTimeout(() => {
				dispatch(getOneDoctorSuccess(res.data));
				callback();
			}, 500);
		} else {
			throw Error;
		}
	} catch (error) {
		errorCatch(error, "Error loading doctor!");
		dispatch(doctorError(error));
	}
};

export const deleteDoctor = (
	id: string,
	callback: () => void
): AppThunk => async (dispatch) => {
	dispatch(doctorLoading());
	try {
		const req = await axios.put(`/doctors/${id}`, {
			status: false,
		});

		const res = await req.data;

		if (res.success) {
			setTimeout(() => {
				dispatch(deleteDoctorSuccess(res.data));
				callback();
			}, 500);
		} else {
			throw Error;
		}
	} catch (error) {
		errorCatch(error, "Error deleting patient!");
		dispatch(doctorError(error));
	}
};

export const {
	doctorLoading,
	doctorError,
	getDoctorsSuccess,
	getOneDoctorSuccess,
	deleteDoctorSuccess,
    createDoctorSuccess
} = DoctorsSlice.actions;

export default DoctorsSlice.reducer;
