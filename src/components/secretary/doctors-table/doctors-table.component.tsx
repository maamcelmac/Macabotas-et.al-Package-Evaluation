import React from "react";
import { Table } from "antd";
import { DoctorInfo } from "../../../types/Interfaces";
import { ColumnsType } from "antd/lib/table";

interface Props {
	data: DoctorInfo[];
}

const DoctorsTable: React.FC<Props> = ({ data }) => {
	const columns: ColumnsType<DoctorInfo> = [
		{
			title: "Full Name",
			dataIndex: "fname",
			key: "fname",
			render: (val: string, current) => {
				return `${val} ${current.mname} ${current.lname}`;
			},
		},
		{
			title: "Email",
			dataIndex: "email",
			key: "email",
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

		// {
		// 	title: "Action",
		// 	render: (row): JSX.Element => {
		// 		return (
		// 			<div className="flex">
		// 				<Confirmation
		// 					confirmFn={(): void => {
		// 						dispatch(
		// 							deletePatient(row._id, () => {
		// 								notify(
		// 									"Patient deleted!",
		// 									"success"
		// 								);
		// 							})
		// 						);
		// 					}}
		// 					title="Click ok to delete this patient."
		// 				>
		// 					<Button size="small" danger>
		// 						Delete
		// 					</Button>
		// 				</Confirmation>
		// 			</div>
		// 		);
		// 	},
		// },
	];

	return <Table<DoctorInfo> dataSource={data} columns={columns} />;
};

export default DoctorsTable;
