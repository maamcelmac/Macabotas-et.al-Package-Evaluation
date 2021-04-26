import React, { useState, useEffect } from "react";
import ConsultationsList from "../../../components/patients/consultation-list/consultation-list.component";
import { getSchedules } from "../../../redux/schedules/schedule.slice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { Skeleton } from "antd";

const ConsultationPage: React.FC = () => {
	const dispatch = useAppDispatch();
	const data = useAppSelector((state) => state.schedules);

	useEffect(() => {
		dispatch(getSchedules("patient"));
	}, [dispatch]);

	return (
		<div>
			<h3> Upcoming Consultation Schedules </h3>
			<Skeleton loading={data?.loading}>
				<ConsultationsList data={data?.schedules} />
			</Skeleton>
		</div>
	);
};

export default ConsultationPage;
