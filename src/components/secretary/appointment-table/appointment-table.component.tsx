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
			dataIndex: "fname",
			key: "fname",
			render: (val: string, current) => {
				return `${val} ${current.mname} ${current.lname}`;
			},
		},
		{
			title: "Address Line",
			dataIndex: "address",
			key: "address",
			render: (val: string, current) => {
				return `${val} - ${current.brgy} ${current.city_municipality}, ${current.province}`;
			},
		},

		{
			title: "Gender",
			dataIndex: "gender",
			key: "gender",
		},
		{
			title: "Contact #",
			dataIndex: "phoneNumber",
			key: "phoneNumber",
		},
		{
			title: "Appointment Date",
			dataIndex: "appointmentDate",
			key: "appointmentDate",
		},
		{
			title: "Appointment Status",
			dataIndex: "appointmentStatus",
			key: "appointmentStatus",
		},
	];

	return <Table<Appointment> dataSource={data} columns={columns} />;
};

export default AppointmentTable;
