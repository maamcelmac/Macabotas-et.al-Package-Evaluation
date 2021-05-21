import React, { useState, useEffect } from "react";
import SchedulesTable from "../../../components/secretary/schedule-table/schedule-table.component";
import { Card, Skeleton } from "antd";
import CreateScheduleModal from "../../../components/secretary/schedule-modal/add-schedule.component";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { getSchedulesByDoctor } from "../../../redux/schedules/schedule.slice";

const ConsulationsPage: React.FC = () => {
	const [modalVisibility, setModalVisibility] = useState<boolean>(false);
	const dispatch = useAppDispatch();
	const schedules = useAppSelector((state) => state.schedules);
	const currentUser = useAppSelector((state) => state.auth.user);

	const [editState, setEditState] = useState<boolean>(false);
	useEffect(() => {
		if (!currentUser?._id) return;

		dispatch(getSchedulesByDoctor(currentUser?._id));
	}, [dispatch, currentUser]);

	return (
		<div>
			<CreateScheduleModal
				editState={editState}
				onCancel={() => {
					setModalVisibility(false);
				}}
				visibility={modalVisibility}
			/>
			<Card title="Consultation Schedules">
				<Skeleton loading={schedules?.loading}>
					<SchedulesTable data={schedules?.schedules} />
				</Skeleton>
			</Card>
		</div>
	);
};

export default ConsulationsPage;
