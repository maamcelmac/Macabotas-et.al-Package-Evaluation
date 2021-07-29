import React, { useState, useEffect } from "react";
import SchedulesTable from "../../../components/secretary/schedule-table/schedule-table.component";
import { Card, Button, Skeleton } from "antd";
import CreateScheduleModal from "../../../components/secretary/schedule-modal/add-schedule.component";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import {
	getSchedules,
	setCurrent,
} from "../../../redux/schedules/schedule.slice";
import { getDoctors } from "../../../redux/doctor/doctor.slice";

const ConsulationsPage: React.FC = () => {
	const [modalVisibility, setModalVisibility] = useState<boolean>(false);
	const dispatch = useAppDispatch();
	const schedules = useAppSelector((state) => state.schedules);
	const [editState, setEditState] = useState<boolean>(false);
	useEffect(() => {
		dispatch(getSchedules());
		dispatch(getDoctors());
		return () => {
			dispatch(setCurrent(null));
		};
	}, [dispatch]);
	useEffect(() => {
		if (schedules?.current) {
			setModalVisibility(true);
			setEditState(true);
		} else {
			setModalVisibility(false);
			setEditState(false);
		}
	}, [schedules]);
	return (
		<div>
			<CreateScheduleModal
				editState={editState}
				onCancel={() => {
					setModalVisibility(false);
				}}
				visibility={modalVisibility}
			/>
			<Card
				title="Consultation Schedules"
				extra={
					<Button
						type="primary"
						onClick={(): void => {
							setModalVisibility(true);
						}}
					>
						{" "}
						Create Schedule
					</Button>
				}
			>
				<Skeleton loading={schedules?.loading}>
					<SchedulesTable
						forReport={false}
						data={schedules?.schedules}
						userType="admin"
					/>
				</Skeleton>
			</Card>
		</div>
	);
};

export default ConsulationsPage;
