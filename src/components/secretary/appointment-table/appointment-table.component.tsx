import React from "react";
import { Table, Button } from "antd";
import { ColumnsType } from "antd/lib/table";
import { Appointment } from "../../../types/Interfaces";
import moment from "moment";
import { useHistory } from "react-router-dom";
import { notify } from "../../global/alerts/alerts.component";

interface Props {
	data: Appointment[];
	isDoctor?: boolean;
	scheduleType?: string;
	pagination?: boolean;
}

const AppointmentTable: React.FC<Props> = ({
	data,
	isDoctor = false,
	scheduleType = "",
	pagination = true,
}) => {
	const history = useHistory();

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
				return `${val?.address}, ${val.province}`;
			},
		},
		{
			title: "Contact #",
			dataIndex: "patient",
			key: "patient",
			render: (val) => val?.phoneNumber,
		},

		{
			title: "Consultation",
			dataIndex: "schedule",
			key: "schedule",
			render: (val) => val?.type,
		},
		{
			title: "Consultation Title",
			dataIndex: "schedule",
			key: "schedule",
			render: (val) => val?.title,
		},
		{
			title: "Schedule",
			dataIndex: "schedule",
			key: "schedule",
			render: (val) =>
				`${moment(val?.consultationDate).format(
					"MMMM DD, YYYY"
				)} ${moment(val?.consultationTime).format("h:mm:ss a")}`,
		},
		{
			title: "Appointment Date",
			dataIndex: "createdAt",
			key: "createdAt",
			render: (val) => moment(val).format("MMMM DD, YYYY"),
		},
		{
			title: "Appointment Status",
			dataIndex: "appointmentStatus",
			key: "appointmentStatus",
		},
		{
			title: "Queue Number",
			dataIndex: "queueNumber",
			key: "queueNumber",
		},
	];
	if (isDoctor) {
		columns.push({
			title: "Action",
			render: (row) => {
				return (
					<Button
						size="small"
						type="primary"
						onClick={() => {
							if (scheduleType !== "" && row?.patient?._id) {
								let url;

								if (scheduleType === "Family Planning") {
									url = "family-planning";
								} else if (
									scheduleType ===
									"Obstetric and Gynecological"
								) {
									url = "obstetric";
								} else if (
									scheduleType === "Individual Treatment"
								) {
									url = "individual-treatment";
								} else if (
									scheduleType ===
									"Cancer Control and Prevention Program"
								) {
									url = "cancer-control";
								} else if (scheduleType === "Nutritionist") {
									url = "nutritionist";
								}

								history.push(
									`/doctor/forms/${url}/${row?._id}`
								);
							} else {
								notify(
									"Error viewing patient consultation form, Please refresh the page and try again!",
									"error"
								);
							}
						}}
					>
						View Form
					</Button>
				);
			},
		});
	}

	return (
		<Table<Appointment>
			rowKey="_id"
			dataSource={data}
			columns={columns}
			pagination={
				pagination
					? { position: ["bottomRight" as "bottomRight"] }
					: false
			}
		/>
	);
};

export default AppointmentTable;
