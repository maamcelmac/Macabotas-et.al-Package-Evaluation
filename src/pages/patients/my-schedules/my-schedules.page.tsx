import React, { useEffect } from "react";
import SchedulesList from "../../../components/patients/schedules-list/schedules-list.component";
import { getAppointmentsByPatient } from "../../../redux/appointments/appointments.slice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

const ConsultationSchedules: React.FC = () => {
	const dispatch = useAppDispatch();
	const data = useAppSelector((state) => state.appointments);
	const currentUser = useAppSelector((state) => state.auth.user);

	useEffect(() => {
		if (currentUser && currentUser) {
			const { _id } = currentUser;

			if (!_id) return;
			// setInterval(() => {
			// 	dispatch(
			// 		getAppointmentsByPatient(_id, () => {
			// 			console.log("Schedules Loaded");
			// 		})
			// 	);
			// }, 30000);

			dispatch(
				getAppointmentsByPatient(_id, () => {
					console.log("Schedules Loaded");
				})
			);

			return () => {
				clearInterval();
			};
		}
	}, [dispatch, currentUser]);

	return (
		<div>
			<h3> My Appointments </h3>
			<SchedulesList data={data?.patientAppointments} />
		</div>
	);
};

export default ConsultationSchedules;
