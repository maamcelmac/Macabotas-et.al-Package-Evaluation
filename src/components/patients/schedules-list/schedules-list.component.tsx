import React from "react";
import { List } from "antd";
import { useHistory } from "react-router-dom";
import { Appointment } from "../../../types/Interfaces";
import moment from "moment";
import { notify } from "../../global/alerts/alerts.component";
interface Props {
	data: Appointment[];
}
const SchedulesList: React.FC<Props> = ({ data }) => {
	const history = useHistory();
	return (
		<div>
			<List
				itemLayout="horizontal"
				dataSource={data}
				renderItem={(item) => (
					<List.Item
						onClick={() => {
							if (item?.schedule?.type !== "" && item?._id) {
								let url;

								if (
									item?.schedule?.type === "Family Planning"
								) {
									url = "family-planning";
								} else if (
									item?.schedule?.type ===
									"Obstetric and Gynecological"
								) {
									url = "obstetric";
								} else if (
									item?.schedule?.type ===
									"Individual Treatment"
								) {
									url = "individual-treatment";
								} else if (
									item?.schedule?.type ===
									"Cancer Control and Prevention Program"
								) {
									url = "cancer-control";
								} else if (
									item?.schedule?.type === "Nutritionist"
								) {
									url = "nutritionist";
								}

								history.push(
									`/patients/consultation-form/${url}/${item?._id}`
								);
							} else {
								notify(
									"Error viewing consultation form, Please refresh the page and try again!",
									"error"
								);
							}
						}}
						className="card"
						style={{
							background:
								item?.schedule?.currentNumber ===
								item?.queueNumber
									? "rgba(	46, 204, 113, 0.2)"
									: "white",
						}}
					>
						<List.Item.Meta
							title={
								<div>
									<p className="m-0">
										{item?.schedule?.type} -{" "}
										{item?.schedule?.title}
									</p>
								</div>
							}
							description={
								<div className="row">
									<div className="col-md-8">
										{" "}
										<small>
											{moment(
												item?.schedule?.consultationDate
											).format("MMMM DD, YYYY")}{" "}
											-{" "}
											{moment(
												item?.schedule?.consultationTime
											).format("h:mm:ss a")}
										</small>
										<p className="m-0">
											{item?.schedule?.description
												?.length > 150
												? item?.schedule?.description.substring(
														150
												  ) + "..."
												: item?.schedule?.description}
										</p>
										<small>
											Health Worker:
											{`${item?.schedule?.healthWorker?.fname} ${item?.schedule?.healthWorker?.mname} ${item?.schedule?.healthWorker?.lname}`}
										</small>
										<br />
										<label className="text-green ">
											{" "}
											Queue Number: &nbsp;{" "}
											<strong className="font-25">
												{" "}
												{item?.queueNumber}{" "}
											</strong>{" "}
										</label>
									</div>

									{item?.schedule?.isStarted &&
										item?.schedule?.startStatus ===
											"Started" && (
											<div className="col-md-4  align-items-flex-center justify-content-space-around flex-column">
												<small
													style={{ display: "block" }}
												>
													{" "}
													Current Number:{" "}
												</small>
												<div
													className="align-items-flex-center justify-content-center"
													style={{
														width: "50px",
														height: "50px",
														border: "2px solid",
														color: "green",
														borderRadius: "50%",
														fontSize: "15px",
													}}
												>
													{
														item?.schedule
															?.currentNumber
													}
												</div>
											</div>
										)}
								</div>
							}
						/>
					</List.Item>
				)}
			/>
		</div>
	);
};

export default SchedulesList;
