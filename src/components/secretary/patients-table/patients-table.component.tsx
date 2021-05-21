import React, { useEffect } from "react";
import { Table, Button } from "antd";
import { PatientInfo } from "../../../types/Interfaces";
import { ColumnsType } from "antd/lib/table";
import { Confirmation, notify } from "../../global/alerts/alerts.component";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { deletePatient } from "../../../redux/patients/patients.slice";
import { useHistory, useParams } from "react-router-dom";

interface Props {
	data: PatientInfo[];
	isAppointment?: boolean;
}

const PatientTable: React.FC<Props> = ({ data, isAppointment = false }) => {
	const dispatch = useAppDispatch();
	const history = useHistory();
	const { idParam } = useParams<{ idParam: string }>();
	const currentUserRole = useAppSelector((state) => state?.auth?.user?.role);
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

	useEffect(() => {
		if (currentUserRole !== "doctor") {
			columns.push({
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
			});
		}
	}, []);

	return (
		<Table<PatientInfo> rowKey="_id" dataSource={data} columns={columns} />
	);
};

export default PatientTable;
