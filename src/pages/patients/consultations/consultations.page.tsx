import React, { useEffect, useState } from "react";
import ConsultationsList from "../../../components/patients/consultation-list/consultation-list.component";
import { getSchedules } from "../../../redux/schedules/schedule.slice";
import { getAppointmentsByPatient } from "../../../redux/appointments/appointments.slice";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { Skeleton } from "antd";

const ConsultationPage: React.FC = () => {
	const dispatch = useAppDispatch();
	const schedules = useAppSelector((state) => state.schedules);
	const patientAppointments = useAppSelector(
		(state) => state?.appointments?.patientAppointments
	);
	const currentUser = useAppSelector((state) => state.auth.user);

	const [data, setData] = useState([]);

	useEffect(() => {
		if (currentUser && currentUser) {
			const { _id } = currentUser;

			if (!_id) return;
			dispatch(getSchedules("patient"));
			dispatch(
				getAppointmentsByPatient(_id, () => {
					console.log("Schedules Loaded");
				})
			);
		}
	}, [dispatch, currentUser]);

	useEffect(() => {
		const newData = removeFromArray(
			schedules && schedules?.schedules,
			patientAppointments && patientAppointments
		);

		setData(newData);
	}, [schedules, patientAppointments]);

	const removeFromArray = (mainData: any, dataToRemove: any) => {
		return mainData?.filter(
			(ar: any) =>
				!dataToRemove?.find(
					(rm: any) => rm?.schedule?._id === ar?._id
				)
		);
	};

	return (
		<div>
			<h3> Upcoming Consultation Schedules </h3>
			<Skeleton loading={schedules?.loading}>
				<ConsultationsList data={data && data} />
			</Skeleton>
		</div>
	);
};

export default ConsultationPage;
