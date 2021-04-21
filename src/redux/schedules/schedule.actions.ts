import {
	addScheduleStart,
	addScheduleSuccess,
	addScheduleError,
} from "./schedule.slice";
import axios from "axios";
import { errorCatch } from "../utils";
interface Schedule {
	type: string;
	title: string;
	description: string;
	healthWorker: string;
	numberOfSlot: number;
	consultationDate: Date;
	consultationTime: Date;
}

export const createSchedule = (dispatch: any) => async (payload: Schedule) => {
	dispatch(addScheduleStart());
	try {
		const req = await axios.post("/schedules", payload);

		const res = await req.data;

		if (res.success) {
			dispatch(addScheduleSuccess(res.data));
		} else {
			throw Error;
		}
	} catch (error) {
		errorCatch(error, "Error creating schedule!");
		dispatch(addScheduleError(error));
	}
};
