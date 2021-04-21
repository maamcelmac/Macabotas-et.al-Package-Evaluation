import React from "react";
import { Table, Button } from "antd";
import { PatientInfo } from "../../../types/Interfaces";
import { ColumnsType } from "antd/lib/table";
import { Confirmation, notify } from "../../global/alerts/alerts.component";
import { useAppDispatch } from "../../../redux/hooks";
import { deletePatient } from "../../../redux/patients/patients.slice";

interface Props {
	data: PatientInfo[];
}

const PatientTable: React.FC<Props> = ({ data }) => {
	const dispatch = useAppDispatch();
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
		{
			title: "Action",
			render: (row): JSX.Element => {
				return (
					<div className="flex">
						<Confirmation
							confirmFn={(): void => {
								dispatch(
									deletePatient(row._id, () => {
										notify(
											"Patient deleted!",
											"success"
										);
									})
								);
							}}
							title="Click ok to delete this patient."
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

	return <Table<PatientInfo> dataSource={data} columns={columns} />;
};

export default PatientTable;
