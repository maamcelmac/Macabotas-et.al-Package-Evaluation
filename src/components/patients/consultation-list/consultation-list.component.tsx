import React from "react";
import { List } from "antd";
import { useHistory } from "react-router-dom";
import { Schedule } from "../../../types/Interfaces";
import moment from "moment";
interface Props {
	data: Schedule[];
}
const ConsultationList: React.FC<Props> = ({ data }) => {
	const history = useHistory();
	return (
		<div>
			<List
				itemLayout="horizontal"
				dataSource={data}
				renderItem={(item) => (
					<List.Item
						className="card"
						onClick={() => {
							let { type } = item;
							let url;

							if (type === "Family Planning") {
								url = "family-planning";
							} else if (
								type === "Obstetric and Gynecological"
							) {
								url = "obstetric";
							} else if (type === "Individual Treatment") {
								url = "individual-treatment";
							} else if (
								type ===
								"Cancer Control and Prevention Program"
							) {
								url = "cancer-control";
							} else if (type === "Nutritionist") {
								url = "nutritionist";
							}

							history.push(
								`/patients/consultations/${url}/${item?._id}`
							);
						}}
					>
						<List.Item.Meta
							title={
								<div>
									<p>
										{item?.type} - {item?.title}
									</p>
									<small>
										{moment(
											item?.consultationDate
										).format(
											"MMMM DD, YYYY"
										)}{" "}
										-{" "}
										{moment(
											item?.consultationTime
										).format("h:mm:ss a")}
									</small>
								</div>
							}
							description={
								<div>
									<p className="m-0">
										{item?.description?.length >
										150
											? item?.description.substring(
													150
											  ) + "..."
											: item?.description}
									</p>
									<small>
										Health Worker:
										{item?.healthWorker}
									</small>

									<div className="flex">
										<small>
											Slot:
											{` ${
												item?.nextSlotToGive -
												1
											}/${item?.numberOfSlot}`}
										</small>
									</div>
								</div>
							}
						/>
					</List.Item>
				)}
			/>
		</div>
	);
};

export default ConsultationList;
