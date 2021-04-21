import React from "react";
import { Table, Button } from "antd";
import { Schedule } from "../../../types/Interfaces";
import { ColumnsType } from "antd/lib/table";
import moment from "moment";
import {
	deleteSchedule,
	setCurrent,
} from "../../../redux/schedules/schedule.slice";
import { Confirmation, notify } from "../../global/alerts/alerts.component";
import { useAppDispatch } from "../../../redux/hooks";
interface Props {
	data: Schedule[];
}

const ScheduleTable: React.FC<Props> = ({ data }) => {
	const dispatch = useAppDispatch();
	const columns: ColumnsType<Schedule> = [
		{
			title: "Consultation",
			dataIndex: "type",
			key: "type",
		},
		{
			title: "Title",
			dataIndex: "title",
			key: "title",
		},
		{
			title: "Description",
			dataIndex: "description",
			key: "description",
		},
		{
			title: "Health Worker",
			dataIndex: "healthWorker",
			key: "healthWorker",
		},
		{
			title: "Number of slots",
			dataIndex: "numberOfSlot",
			key: "numberOfSlot",
		},
		{
			title: "Date & Time",
			dataIndex: "consultationDate",
			key: "consultationDate",
			render: (date, row) =>
				`${moment(date).format("MMMM DD, YYYY")} ${moment(
					row.consultationTime
				).format("h:mm:ss a")}`,
		},
		{
			title: "Number of slots",
			dataIndex: "numberOfSlot",
			key: "numberOfSlot",
		},
		{
			title: "Status",
			dataIndex: "startStatus",
			key: "startStatus",
		},
		{
			title: "Current Number",
			dataIndex: "currentNumber",
			key: "currentNumber",
		},
		{
			title: "Action",
			render: (row): JSX.Element => {
				return (
					<div className="flex">
						<Button
							className="mr-half"
							size="small"
							onClick={() => {
								dispatch(setCurrent(row));
							}}
						>
							Edit
						</Button>
						<Confirmation
							confirmFn={(): void => {
								dispatch(
									deleteSchedule(row._id, () => {
										notify(
											"Consulatation schedule deleted!",
											"success"
										);
									})
								);
							}}
							title="Click ok to delete this schedule"
						>
							<Button size="small" danger>
								Delete
							</Button>
						</Confirmation>
					</div>
				);
			},
		},
	];

	return (
		<Table<Schedule> rowKey="_id" dataSource={data} columns={columns} />
	);
};

export default ScheduleTable;
