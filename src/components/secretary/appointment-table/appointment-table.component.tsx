import React from "react";
import { Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import { Appointment } from "../../../types/Interfaces";
import moment from "moment";

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
				return `${val.fname} ${val.mname} ${val.lname}`;
			},
		},
		{
			title: "Address Line",
			dataIndex: "patient",
			key: "patient",
			render: (val) => {
				return `${val} - ${val.brgy} ${val.city_municipality}, ${val.province}`;
			},
		},
		{
			title: "Contact #",
			dataIndex: "patient",
			key: "patient",
			render: (val) => val.phoneNumber,
		},

		{
			title: "Consultation",
			dataIndex: "consultation",
			key: "consultation",
			render: (val) => val.type,
		},
		{
			title: "Consultation",
			dataIndex: "consultation",
			key: "consultation",
			render: (val) => val.title,
		},
		{
			title: "Schedule",
			dataIndex: "consultation",
			key: "consultation",
			render: (val) =>
				`${moment(val.consultationDate).format(
					"MMMM DD, YYYY"
				)} ${moment(val.consultationTime).format("h:mm:ss a")}`,
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
