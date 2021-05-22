import React, { useEffect } from "react";
import AppointmentsTable from "../../../components/secretary/appointment-table/appointment-table.component";
import { Card, Skeleton, Button } from "antd";
import { useParams, useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getAppointmentsBySchedule } from "../../../redux/appointments/appointments.slice";
import { getOneSchedule } from "../../../redux/schedules/schedule.slice";
import moment from "moment";
import { notify } from "../../../components/global/alerts/alerts.component";
const AppointedPatientsPage: React.FC = () => {
	const { idParam } = useParams<{ idParam: string }>();
	const history = useHistory();
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

	const getCurrentOnQueueAppointment = (
		appointments: any,
		currentNumber: any
	) => {
		if (!appointments || appointments?.length < 1) return;
		const appointment = appointments?.filter(
			(item: any) => item.queueNumber === currentNumber
		)[0];

		return appointment;
	};

	const getCurrentPatient = (
		appointments: any,
		currentNumber: any,
		type: any
	) => {
		const appointment = getCurrentOnQueueAppointment(
			appointments,
			currentNumber
		);

		if (appointment?.length === 0) {
			return "Error";
		}

		return (
			<div className="mb-1 flex">
				<p className="m-0 mr-1">
					Current Patient:{" "}
					{appointment === "Error"
						? "No Appointment on this Queue Number"
						: `${appointment?.patient?.fname} ${appointment?.patient?.mname} ${appointment?.patient?.lname}`}
				</p>
				<Button
					size="small"
					type="primary"
					onClick={() => {
						if (type !== "" && appointment?.patient?._id) {
							let url;

							if (type === "Family Planning") {
								url = "family-planning";
							} else if (type === "Obstetric and Gynecological") {
								url = "obstetric";
							} else if (type === "Individual Treatment") {
								url = "individual-treatment";
							} else if (
								type === "Cancer Control and Prevention Program"
							) {
								url = "cancer-control";
							} else if (type === "Nutritionist") {
								url = "nutritionist";
							}

							history.push(
								`/doctor/forms/${url}/${appointment?._id}`
							);
						} else {
							notify(
								"Error viewing patient consultation form, Please refresh the page and try again!",
								"error"
							);
						}
					}}
				>
					View Form
				</Button>
			</div>
		);
	};
	return !!appointments && currentSchedule ? (
		<div>
			<Card
				title={`Patients - ${currentSchedule?.type} - ${currentSchedule?.title}`}
			>
				<p className="m-0">
					{" "}
					Consultation Date & Time:{" "}
					{moment(currentSchedule?.consultationDate).format(
						"MMMM DD, YYYY"
					)}{" "}
					&nbsp;{" "}
					{moment(currentSchedule?.consultationTime).format(
						"hh:mm a"
					)}{" "}
				</p>
				<p className="m-0">Status: {currentSchedule?.startStatus}</p>
				{currentSchedule?.startStatus === "Started" &&
					currentSchedule?.isStarted && (
						<div>
							<p className="m-0">
								Current Queue Number:{" "}
								{currentSchedule?.currentNumber}
							</p>

							{getCurrentPatient(
								appointments?.appointments,
								currentSchedule?.currentNumber,
								currentSchedule?.type
							)}
						</div>
					)}

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
