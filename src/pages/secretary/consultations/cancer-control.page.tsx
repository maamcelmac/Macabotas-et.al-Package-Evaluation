import React, { useEffect } from "react";
import { Card, Skeleton } from "antd";
import AppointmentTable from "../../../components/secretary/appointment-table/appointment-table.component";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getAppointments } from "../../../redux/appointments/appointments.slice";

const CanderControlPage: React.FC = () => {
	const dispatch = useAppDispatch();
	const appointments = useAppSelector((state) => state.appointments);
	useEffect(() => {
		dispatch(
			getAppointments(
				"Cancer Control and Prevention Program",
				"Pending"
			)
		);
	}, [dispatch]);
	return (
		<div>
			<Card title="Cancer Control and Prevention Program">
				<Skeleton loading={appointments?.loading}>
					<AppointmentTable data={appointments?.appointments} />
				</Skeleton>
			</Card>
		</div>
	);
};

export default CanderControlPage;
