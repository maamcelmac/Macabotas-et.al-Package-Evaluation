import React from "react";
import { Table, Button } from "antd";
import { Schedule } from "../../../types/Interfaces";
import { ColumnsType } from "antd/lib/table";
import moment from "moment";
interface Props {
	data: Schedule[];
}

const ScheduleTable: React.FC<Props> = ({ data }) => {
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
			dataIndex: "consultationDate",
			key: "consultationDate",
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
						<Button onClick={() => alert(row._id)}>
							{" "}
							Edit{" "}
						</Button>
						<Button danger onClick={() => alert(row._id)}>
							{" "}
							Delete{" "}
						</Button>
					</div>
				);
			},
		},
	];

	return <Table<Schedule> dataSource={data} columns={columns} />;
};

export default ScheduleTable;
