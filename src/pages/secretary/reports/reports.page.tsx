import React, { useEffect, useState } from "react";
import DashboardPage from "../dashboard/dashboard.page";
import SchedulesTable from "../../../components/secretary/schedule-table/schedule-table.component";
import { Card, Skeleton, Button } from "antd";
import AppointmentTable from "../../../components/secretary/appointment-table/appointment-table.component";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getAppointments } from "../../../redux/appointments/appointments.slice";
import { getSchedules } from "../../../redux/schedules/schedule.slice";
import { useReactToPrint } from "react-to-print";

const ReportsPage: React.FC = () => {
	const dispatch = useAppDispatch();
	const appointments = useAppSelector((state) => state.appointments);
	const schedules = useAppSelector((state) => state.schedules);

	const [isPrinting, setIsPrinting] = useState<Boolean>(false);

	const consultedPatientsPrintRef = React.useRef<any>();
	const consultationsConducted = React.useRef<any>();

	// @ts-ignore
	const handleConsultedPatientsPrintRef: () => void = useReactToPrint({
		content: () => consultedPatientsPrintRef.current,
		onBeforeGetContent: () => setIsPrinting(true),
		onBeforePrint: () => setIsPrinting(true),
		onAfterPrint: () => setIsPrinting(false),
	});

	// @ts-ignore
	const handleConsultationsConductedPrintRef: () => void = useReactToPrint({
		content: () => consultationsConducted.current,
		onBeforeGetContent: () => setIsPrinting(true),
		onBeforePrint: () => setIsPrinting(true),
		onAfterPrint: () => setIsPrinting(false),
	});

	useEffect(() => {
		dispatch(
			getAppointments("Cancer Control and Prevention Program", "Attended")
		);
		dispatch(getSchedules("admin", true));
	}, [dispatch]);

	return (
		<div>
			<h2>Reports</h2>
			<DashboardPage forReport={true} />

			<Card
				title="Consulted Patients"
				style={{ marginBottom: "2rem", marginTop: "2rem" }}
				extra={
					<Button
						loading={isPrinting ? true : false}
						type="primary"
						onClick={() => {
							setIsPrinting(true);
							setTimeout(() => {
								handleConsultedPatientsPrintRef();
							}, 2000);
						}}
					>
						Print
					</Button>
				}
			>
				<Skeleton loading={appointments?.loading}>
					<div
						ref={consultedPatientsPrintRef}
						style={{ padding: isPrinting ? "2rem" : 0 }}
					>
						{isPrinting ? (
							<h2> Consulted Patients List</h2>
						) : (
							<h2></h2>
						)}
						<AppointmentTable
							data={appointments?.appointments}
							pagination={isPrinting ? false : true}
						/>
					</div>
				</Skeleton>
			</Card>

			<Card
				title="Consultations Conducted"
				extra={
					<Button
						type="primary"
						loading={isPrinting ? true : false}
						onClick={() => {
							setIsPrinting(true);
							setTimeout(() => {
								handleConsultationsConductedPrintRef();
							}, 2000);
						}}
					>
						Print
					</Button>
				}
			>
				<Skeleton loading={schedules?.loading}>
					<div
						ref={consultationsConducted}
						style={{ padding: isPrinting ? "2rem" : 0 }}
					>
						{isPrinting ? (
							<h2> Consultations Conducted</h2>
						) : (
							<h2></h2>
						)}
						<SchedulesTable
							data={schedules?.schedules}
							userType="admin"
							forReport={true}
							pagination={isPrinting ? false : true}
						/>
					</div>
				</Skeleton>
			</Card>
		</div>
	);
};

export default ReportsPage;
