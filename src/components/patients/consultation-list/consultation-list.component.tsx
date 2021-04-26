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
							history.push(
								`/patients/consultations/${item?._id}`
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
										{" "}
										Health Worker:{" "}
										{item?.healthWorker}
									</small>

									<div className="flex">
										<small>
											{" "}
											Slots Remaining:{" "}
											{item?.slotRemaining}
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
