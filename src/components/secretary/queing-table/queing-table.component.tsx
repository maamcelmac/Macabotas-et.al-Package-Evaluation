import React from "react";
import { Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import { Appointment } from "../../../types/Interfaces";

interface Props {
	data: Appointment[];
}

const AppointmentTable: React.FC<Props> = ({ data }) => {
	const columns: ColumnsType<Appointment> = [
		{
			title: "Full Name",
			dataIndex: "patient",
			key: "patient",
			render: (val) => {
				return `${val?.fname} ${val?.mname} ${val?.lname}`;
			},
		},
		{
			title: "Queue Number",
			dataIndex: "queueNumber",
			key: "queueNumber",
		},
		{
			title: "Phone #",
			dataIndex: ["consultationForm", "phoneNumber"],
		},
	];

	return (
		<div className="width-100">
			<Table<Appointment>
				rowKey="_id"
				dataSource={data && data}
				columns={columns}
			/>
		</div>
	);
};

export default AppointmentTable;
