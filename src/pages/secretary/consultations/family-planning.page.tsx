import React, { useEffect } from "react";
import { Card, Skeleton } from "antd";
import AppointmentTable from "../../../components/secretary/appointment-table/appointment-table.component";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getAppointments } from "../../../redux/appointments/appointments.slice";

const FamilyPlanningPage: React.FC = () => {
	const dispatch = useAppDispatch();
	const appointments = useAppSelector((state) => state.appointments);
	useEffect(() => {
		dispatch(getAppointments("Family Planning", "Pending"));
	}, [dispatch]);
	return (
		<div>
			<Card title="Family Planning">
				<Skeleton loading={appointments?.loading}>
					<AppointmentTable data={appointments?.appointments} />
				</Skeleton>
			</Card>
		</div>
	);
};

export default FamilyPlanningPage;
