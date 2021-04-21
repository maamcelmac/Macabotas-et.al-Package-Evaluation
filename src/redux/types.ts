export interface ScheduleState {
	loading: boolean;
	schedules: object[];
	error: string | object;
	current: object;
}

export interface ScheduleSliceInterface {
	name: string;
	initialState: ScheduleState;
	reducer: object;
}

export interface StateInterface {
	schedule: ScheduleState;
}
