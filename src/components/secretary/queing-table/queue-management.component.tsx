import React, { useState, useEffect } from "react";
import { Card, Button } from "antd";
import { Schedule } from "../../../types/Interfaces";
import QueingTable from "./queing-table.component";
import {
	updateSchedule,
	getSchedules,
} from "../../../redux/schedules/schedule.slice";
import { updateAppointment } from "../../../redux/appointments/appointments.slice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { notify } from "../../global/alerts/alerts.component";
import moment from "moment";
import axios from "axios";

interface Props {
	schedule?: Schedule;
}

const getPatientsAppointedBySchedule = async (id: any, title: any) => {
	try {
		const request = await axios.get(
			`/appointments/?status=true&schedule=${id}`
		);
		const response = request?.data;

		if (response?.success === true) {
			return response?.data;
		} else {
			throw Error;
		}
	} catch (error) {
		notify(
			`Error loading patients under consultation with title: ${title}`,
			"error"
		);
		return [];
	}
};

const AppointmentTable: React.FC<Props> = ({ schedule }) => {
	const dispatch = useAppDispatch();

	const [appointments, setAppointments] = useState<any>([]);
	const [currentAppointment, setCurrentAppointment] = useState<any>();
	const consultationLoading: any = useAppSelector(
		(state) => state?.schedules?.loading
	);

	useEffect(() => {
		async function getPatients() {
			const data = await getPatientsAppointedBySchedule(
				schedule?._id,
				schedule?.title
			);

			const unfinishedPatients = data
				?.filter((item: any) => {
					if (item?.queueNumber && schedule?.currentNumber) {
						if (item?.queueNumber > schedule?.currentNumber) {
							return true;
						} else {
							return false;
						}
					}
				})
				.sort((data: any) => -1);

			const currentAppointment =
				data &&
				data?.filter((appointment: any) => {
					if (appointment?.queueNumber === schedule?.currentNumber) {
						return true;
					}
				})[0];

			setAppointments(unfinishedPatients);
			if (currentAppointment) {
				setCurrentAppointment(currentAppointment);
			}
		}

		if (schedule) {
			getPatients();
		} else {
			return;
		}
	}, [schedule]);
	return schedule && schedule ? (
		<div style={{ width: "100%" }}>
			<Card
				title={`${schedule?.type} - ${schedule?.healthWorker?.fname} ${schedule?.healthWorker?.mname} ${schedule?.healthWorker?.lname} `}
			>
				<h4>
					{schedule?.title} -{" "}
					{moment(schedule?.consultationDate).format("MMMM DD, YYYY")}{" "}
					{moment(schedule?.consultationTime).format("hh:mm a")}
				</h4>
				<div className="mb-1">
					{currentAppointment && currentAppointment?.patient && (
						<small>
							Current Patient:{" "}
							{currentAppointment &&
								`${currentAppointment?.patient?.fname} ${currentAppointment?.patient?.mname} ${currentAppointment?.patient?.lname}`}
						</small>
					)}
				</div>
				<div className="justify-content-center align-items-flex-center flex-column">
					<div
						style={{
							border: "2px solid rgba(0,102,204, 0.5)",
							borderRadius: "50%",
							padding: "1rem",
							width: "100px",
							height: "100px",
						}}
						className="align-items-flex-center justify-content-center mb-2 mt-2"
					>
						<h1 className="m-0"> {schedule?.currentNumber} </h1>
					</div>
					{schedule?.nextSlotToGive - 1 ===
					schedule?.currentNumber ? (
						<Button
							type="primary"
							onClick={() => {
								if ((schedule?._id, currentAppointment)) {
									dispatch(
										updateSchedule(
											schedule?._id,
											{
												startStatus: "Done",
											},
											() => {
												dispatch(
													updateAppointment(
														currentAppointment?._id,
														{
															appointmentStatus:
																"Attended",
														}
													)
												);

												dispatch(
													getSchedules("admin", false)
												);

												notify(
													"Consultation Successfully Ended!",
													"success"
												);
											}
										)
									);
								} else {
									notify(
										"Error executing End of consultation, Please refresh the page!",
										"error"
									);
								}
							}}
						>
							{" "}
							End Consultation{" "}
						</Button>
					) : (
						<Button
							type="primary"
							onClick={() => {
								if (
									schedule?._id &&
									schedule?.currentNumber &&
									currentAppointment
								) {
									dispatch(
										updateSchedule(
											schedule._id,
											{
												currentNumber:
													schedule?.currentNumber + 1,
											},
											() => {
												dispatch(
													getSchedules("admin", false)
												);
												dispatch(
													updateAppointment(
														currentAppointment?._id,
														{
															appointmentStatus:
																"Attended",
														}
													)
												);
											}
										)
									);
								} else {
									notify(
										"Error executing 'Next' due to no next number in Queue!",
										"error"
									);
								}
							}}
						>
							{" "}
							Next{" "}
						</Button>
					)}
				</div>

				<div className="mt-1">
					<QueingTable data={appointments && appointments} />
				</div>
			</Card>
		</div>
	) : (
		<p>Loading... </p>
	);
};

export default AppointmentTable;
