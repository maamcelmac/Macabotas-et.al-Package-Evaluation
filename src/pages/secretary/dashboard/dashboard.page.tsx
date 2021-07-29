import React, { useEffect } from "react";
import { Statistic, Card, Row, Col, Skeleton } from "antd";
import QueueManage from "../../../components/secretary/queing-table/queue-management.component";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getConsultedPatients } from "../../../redux/appointments/appointments.slice";
import { getSchedules } from "../../../redux/schedules/schedule.slice";
import { getPatients } from "../../../redux/patients/patients.slice";


interface Props {
	forReport: boolean;

}


const DasboardPage: React.FC<Props> = ({ forReport }) => {
	const dispatch = useAppDispatch();
	const upcomingConsultation = useAppSelector(
		(state) => state?.schedules?.schedules?.length
	);
	const consultationsConducted = useAppSelector(
		(state) =>
			state?.schedules?.schedules?.filter(
				(sched) => sched?.startStatus === "Done"
			)?.length
	);
	const onGoingConsultation: any = useAppSelector((state) =>
		state?.schedules?.schedules?.filter(
			(sched) =>
				sched?.startStatus === "Started" && sched?.isStarted === true
		)
	);

	const consultedPatients = useAppSelector(
		(state) => state?.appointments?.consultedPatients
	);

	const registeredPatients = useAppSelector(
		(state) => state?.patients?.patients?.length
	);

	useEffect(() => {
		dispatch(getConsultedPatients());
		dispatch(getSchedules("patient"));
		dispatch(getPatients());
	}, [dispatch]);
	return (
		<div>
			<Row gutter={16} className="mb-1">
				<Col span={8}>
					<Skeleton
						active
						loading={
							consultationsConducted ||
							consultationsConducted === 0
								? false
								: true
						}
					>
						<Card>
							<Statistic
								title="Consultations Conducted"
								value={
									consultationsConducted &&
									consultationsConducted
								}
								// precision={2}
								valueStyle={{ color: "#1890FF" }}
								// suffix="%"
							/>
						</Card>
					</Skeleton>
				</Col>
				<Col span={8}>
					<Skeleton
						active
						loading={
							upcomingConsultation || upcomingConsultation === 0
								? false
								: true
						}
					>
						<Card>
							<Statistic
								title="Upcoming Consultations"
								value={
									upcomingConsultation && upcomingConsultation
								}
								valueStyle={{ color: "#1890FF" }}
								// suffix="%"
							/>
						</Card>
					</Skeleton>
				</Col>
				<Col span={8}>
					<Skeleton
						active
						loading={
							registeredPatients || registeredPatients === 0
								? false
								: true
						}
					>
						<Card>
							<Statistic
								title="Registered Patients"
								value={registeredPatients && registeredPatients}
								valueStyle={{ color: "#1890FF" }}

								// suffix="%"
							/>
						</Card>
					</Skeleton>
				</Col>
			</Row>
			<Row gutter={16}>
				<Col span={8}>
					<Skeleton
						active
						loading={
							consultedPatients || consultedPatients === 0
								? false
								: true
						}
					>
						<Card>
							<Statistic
								title="Consulted Patients"
								value={consultedPatients && consultedPatients}
								valueStyle={{ color: "#1890FF" }}

								// suffix="%"
							/>
						</Card>
					</Skeleton>
				</Col>
				<Col span={8}>
					<Skeleton
						active
						loading={
							onGoingConsultation?.length ||
							onGoingConsultation?.length === 0
								? false
								: true
						}
					>
						<Card>
							<Statistic
								title="On Going Consultations"
								value={
									onGoingConsultation &&
									onGoingConsultation?.length
								}
								valueStyle={{ color: "#1890FF" }}

								// suffix="%"
							/>
						</Card>
					</Skeleton>
				</Col>
			</Row>

			{
				!forReport && !!onGoingConsultation ? (
					<Row gutter={16} className="mt-2">
						{onGoingConsultation &&
							onGoingConsultation?.map((sched: any) => (
								<Col span={12}>
									<QueueManage schedule={sched} />
								</Col>
							))}
					</Row>
				) : (
					<div> Loading... </div>
				)}
			
		</div>
	);
};

export default DasboardPage;
