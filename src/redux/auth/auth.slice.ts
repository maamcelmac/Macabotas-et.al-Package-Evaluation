import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { AppThunk } from "../store";
import { errorCatch } from "../utils";
import { PatientInfo } from "../../types/Interfaces";
interface InitialState {
	loading: boolean;
	user?: PatientInfo;
	error: any | null;
	isAuthenticated: boolean;
}
export const Auth = createSlice({
	name: "auth",
	initialState: {
		loading: false,
		user: {},
		error: null,
		isAuthenticated: false,
	} as InitialState,
	reducers: {
		authLoading: (state) => {
			state.loading = true;
		},
		authError: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
		registerSuccess: (state, action) => {
			state.loading = false;
		},
		loginSuccess: (state, action) => {
			if (action.payload?.otherResp[0] === "admin") {
				localStorage.setItem("admin-token", action.payload?.token);
			} else if (action.payload?.otherResp[0] === "patient") {
				localStorage.setItem("patient-token", action.payload?.token);
			} else {
				alert("doctor");
				localStorage.setItem("doctor-token", action.payload?.token);
			}
			state.loading = false;
			state.isAuthenticated = true;
		},

		getAdminLoggedInSuccess: (state, action) => {
			state.loading = false;
			state.user = action.payload;
			state.isAuthenticated = true;
		},
		getPatientLoggedInSuccess: (state, action) => {
			state.loading = false;
			state.user = action.payload;
			state.isAuthenticated = true;
		},
		getDoctorLoggedInSuccess: (state, action) => {
			state.loading = false;
			state.user = action.payload;
			state.isAuthenticated = true;
		},
	},
});

export const login = (
	payload: { email: string; password: string },
	type: string,
	callback: () => void
): AppThunk => async (dispatch) => {
	dispatch(authLoading());
	try {
		let req;
		if (type === "admin") {
			req = await axios.post(`/auth/admin-login`, payload);
		} else if (type === "patient") {
			req = await axios.post(`/auth/patient-login`, payload);
		} else {
			req = await axios.post(`/auth/doctor-login`, payload);
		}
		const res = await req.data;

		console.log(req?.data);
		if (res.success) {
			setTimeout(() => {
				console.log(res);
				dispatch(loginSuccess(res));
				callback();
			}, 500);
		} else {
			throw Error;
		}
	} catch (error) {
		errorCatch(error, "Error Login!");
		dispatch(authError(error));
	}
};

export const register = (
	payload: any,
	type: string = "patient",
	callback: () => void
): AppThunk => async (dispatch) => {
	dispatch(authLoading());
	try {
		let req;

		if (type === "admin") {
			req = await axios.post(`/auth/admin-register`, payload);
		} else {
			req = await axios.post(`/auth/patient-register`, payload);
		}
		const res = await req.data;

		if (res.success) {
			setTimeout(() => {
				dispatch(loginSuccess(res));
				callback();
			}, 500);
		} else {
			throw Error;
		}
	} catch (error) {
		console.log(error);
		errorCatch(error, "Error Registration!");
		dispatch(authError(error));
	}
};

export const getAdminLoggedIn = (callback: () => void): AppThunk => async (
	dispatch
) => {
	dispatch(authLoading());
	try {
		let req;

		req = await axios.get(`/auth/get-admin`);
		const res = await req.data;
		if (res.success) {
			setTimeout(() => {
				dispatch(getAdminLoggedInSuccess(res.data));
				callback();
			}, 500);
		} else {
			throw Error;
		}
	} catch (error) {
		errorCatch(error, "Error Login!");
		dispatch(authError(error));
	}
};

export const getPatientLoggedIn = (callback: () => void): AppThunk => async (
	dispatch
) => {
	dispatch(authLoading());
	try {
		let req;

		req = await axios.get(`/auth/get-patient`);
		const res = await req.data;
		if (res.success) {
			setTimeout(() => {
				dispatch(getPatientLoggedInSuccess(res.data));
				callback();
			}, 500);
		} else {
			throw Error;
		}
	} catch (error) {
		errorCatch(error, "Error Login!");
		dispatch(authError(error));
	}
};

export const getDoctorLoggedIn = (callback: () => void): AppThunk => async (
	dispatch
) => {
	dispatch(authLoading());
	try {
		let req;

		req = await axios.get(`/auth/get-doctor`);
		const res = await req.data;
		if (res.success) {
			setTimeout(() => {
				dispatch(getDoctorLoggedInSuccess(res.data));
				callback();
			}, 500);
		} else {
			throw Error;
		}
	} catch (error) {
		errorCatch(error, "Error Login!");
		dispatch(authError(error));
	}
};

export const {
	authLoading,
	authError,
	registerSuccess,
	loginSuccess,
	getAdminLoggedInSuccess,
	getPatientLoggedInSuccess,
	getDoctorLoggedInSuccess,
} = Auth.actions;

export default Auth.reducer;
