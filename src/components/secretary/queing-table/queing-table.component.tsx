import React from "react";
import { Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import { Appointment, PatientInfo } from "../../../types/Interfaces";
import QueueManage from "./queue-management.component";
interface Queue {
	patient: PatientInfo;
	appointment: Appointment;
}
interface Props {
	data: Queue[];
}

const AppointmentTable: React.FC<Props> = ({ data }) => {
	const columns: ColumnsType<Queue> = [
		{
			title: "Full Name",
			dataIndex: "patient",
			key: "patient",
			render: (val) => {
				return `${val.fname} ${val.mname} ${val.lname}`;
			},
		},
		{
			title: "Queue Number",
			dataIndex: "appointment",
			key: "appointment",
			render: (val) => {
				return `${val.queueNumber}`;
			},
		},
	];

	return (
		<div className="flex">
			<Table<Queue> dataSource={data} columns={columns} />
		</div>
	);
};

export default AppointmentTable;
