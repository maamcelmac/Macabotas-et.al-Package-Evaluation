import React, { useEffect } from "react";
import DashboardPage from "../dashboard/dashboard.page";
import SchedulesTable from "../../../components/secretary/schedule-table/schedule-table.component";
import { Card, Skeleton } from "antd";
import AppointmentTable from "../../../components/secretary/appointment-table/appointment-table.component";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getAppointments } from "../../../redux/appointments/appointments.slice";
import { getSchedules } from "../../../redux/schedules/schedule.slice";

const ReportsPage: React.FC = () => {
	const dispatch = useAppDispatch();
	const appointments = useAppSelector((state) => state.appointments);
	const schedules = useAppSelector((state) => state.schedules);
	useEffect(() => {
		dispatch(
			getAppointments("Cancer Control and Prevention Program", "Attended")
		);
		dispatch(getSchedules("admin", true));
	}, [dispatch]);

	console.log(appointments?.appointments);
	return (
		<div>
			<h2>Reports</h2>
			<DashboardPage forReport={true} />

			<Card title="Consulted Patients" style={{ marginBottom: "2rem" }}>
				<Skeleton loading={appointments?.loading}>
					<AppointmentTable data={appointments?.appointments} />
				</Skeleton>
			</Card>

			<Card title="Consultations Conducted">
				<Skeleton loading={schedules?.loading}>
					<SchedulesTable
						data={schedules?.schedules}
						userType="admin"
						forReport={true}
					/>
				</Skeleton>
			</Card>
		</div>
	);
};

export default ReportsPage;
