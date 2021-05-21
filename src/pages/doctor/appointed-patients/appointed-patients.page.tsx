import React, { useEffect } from "react";
import AppointmentsTable from "../../../components/secretary/appointment-table/appointment-table.component";
import { Card, Skeleton } from "antd";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getAppointmentsBySchedule } from "../../../redux/appointments/appointments.slice";
import { getOneSchedule } from "../../../redux/schedules/schedule.slice";
import moment from "moment";
const AppointedPatientsPage: React.FC = () => {
	const { idParam } = useParams<{ idParam: string }>();

	const dispatch = useAppDispatch();
	const appointments = useAppSelector((state) => state.appointments);
	const currentSchedule = useAppSelector(
		(state) => state?.schedules?.current
	);

	useEffect(() => {
		if (!idParam) return;
		dispatch(getAppointmentsBySchedule(idParam));
		dispatch(getOneSchedule(idParam));
	}, [dispatch, idParam]);
	return !!appointments && currentSchedule ? (
		<div>
			<Card
				title={`Patients - ${currentSchedule?.type} - ${currentSchedule?.title}`}
			>
				<h3>
					{" "}
					Consultation Date & Time:{" "}
					{moment(currentSchedule?.consultationDate).format(
						"MMMM DD, YYYY"
					)}{" "}
					&nbsp;{" "}
					{moment(currentSchedule?.consultationTime).format(
						"hh:mm a"
					)}{" "}
				</h3>
				<Skeleton loading={appointments?.loading}>
					<AppointmentsTable
						data={appointments?.appointments}
						isDoctor={true}
						scheduleType={currentSchedule?.type}
					/>
				</Skeleton>
			</Card>
		</div>
	) : (
		<div> Loading ... </div>
	);
};

export default AppointedPatientsPage;
