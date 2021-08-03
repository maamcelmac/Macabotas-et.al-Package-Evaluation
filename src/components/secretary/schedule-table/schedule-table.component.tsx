import React from "react";
import { Table, Button } from "antd";
import { Schedule } from "../../../types/Interfaces";
import { ColumnsType } from "antd/lib/table";
import moment from "moment";
import {
	deleteSchedule,
	setCurrent,
} from "../../../redux/schedules/schedule.slice";
import { Confirmation, notify } from "../../global/alerts/alerts.component";
import { useAppDispatch } from "../../../redux/hooks";
import { updateSchedule } from "../../../redux/schedules/schedule.slice";
import { useHistory } from "react-router-dom";
interface Props {
	data: Schedule[];
	userType?: string;
	forReport?: boolean;
	pagination?: boolean;
}

const ScheduleTable: React.FC<Props> = ({
	data,
	userType,
	forReport,
	pagination,
}) => {
	const dispatch = useAppDispatch();
	const history = useHistory();
	const columns: ColumnsType<Schedule> = [
		{
			title: "Consultation",
			dataIndex: "type",
		},
		{
			title: "Title",
			dataIndex: "title",
		},
		{
			title: "Description",
			dataIndex: "description",
		},
		{
			title: "Health Worker",
			dataIndex: "healthWorker",
			render: (val: any) => {
				return `${val?.fname} ${val?.mname} ${val?.lname}`;
			},
		},
		{
			title: "Number of slots",
			dataIndex: "numberOfSlot",
		},
		{
			title: "Date & Time",
			dataIndex: "consultationDate",
			render: (date, row) =>
				`${moment(date).format("MMMM DD, YYYY")} ${moment(
					row.consultationTime
				).format("h:mm:ss a")}`,
		},
		{
			title: "Number of slots",
			dataIndex: "numberOfSlot",
		},
		{
			title: "Status",
			dataIndex: "startStatus",
		},
		{
			title: "Current Number",
			dataIndex: "currentNumber",
		},
	];

	if (!forReport) {
		columns.push({
			title: "Action",
			render: (row): JSX.Element | null => {
				if (userType === "admin") {
					return (
						<div className="flex">
							{row?.startStatus === "Pending" &&
								row?.isStarted === false && (
									<Button
										type="primary"
										className="mr-half"
										size="small"
										onClick={() => {
											if (row._id) {
												dispatch(
													updateSchedule(
														row._id,
														{
															startStatus:
																"Started",
															isStarted: true,
															currentNumber: 1,
														},
														() => {
															notify(
																"Consultation Started!",
																"success"
															);
														}
													)
												);
											} else {
												notify(
													"Error starting consultation, Please refresh the page!",
													"error"
												);
											}
										}}
									>
										Start
									</Button>
								)}
							<Button
								className="mr-half"
								size="small"
								onClick={() => {
									console.log(row);
									dispatch(setCurrent(row));
								}}
							>
								Edit
							</Button>
							<Confirmation
								confirmFn={(): void => {
									dispatch(
										deleteSchedule(row._id, () => {
											notify(
												"Consulatation schedule deleted!",
												"success"
											);
										})
									);
								}}
								title="Click ok to delete this schedule"
							>
								<Button size="small" danger>
									Delete
								</Button>
							</Confirmation>
						</div>
					);
				} else {
					if (!row?._id) {
						notify(
							"Error viewing patients, Please refresh the page!",
							"error"
						);

						return null;
					} else {
						return (
							<Button
								size="small"
								type="primary"
								onClick={() => {
									history.push(
										`/doctor/schedules/${row?._id}`
									);
								}}
							>
								View Patients
							</Button>
						);
					}
				}
			},
		});
	}

	return (
		<Table<Schedule>
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

export default ScheduleTable;
