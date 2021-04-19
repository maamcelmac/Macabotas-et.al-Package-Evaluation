import React from "react";
import { Table } from "antd";
import { PatientInfo } from "../../../types/Interfaces";
import { ColumnsType } from "antd/lib/table";

interface Props {
	data: PatientInfo[];
}

const PatientTable: React.FC<Props> = ({ data }) => {
	const columns: ColumnsType<PatientInfo> = [
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
			title: "Phone #",
			dataIndex: "phoneNumber",
			key: "phoneNumber",
		},
		{
			title: "Email",
			dataIndex: "email",
			key: "email",
		},
		{
			title: "Birth date",
			dataIndex: "birthdate",
			key: "birthdate",
		},
		{
			title: "Educational Attainment",
			dataIndex: "educationalAttainment",
			key: "educationalAttainment",
		},
		{
			title: "Phil Health No.",
			dataIndex: "philHealthNumber",
			key: "philHealthNumber",
		},
		{
			title: "Occupation",
			dataIndex: "occupation",
			key: "occupation",
		},
	];

	return <Table<PatientInfo> dataSource={data} columns={columns} />;
};

export default PatientTable;
