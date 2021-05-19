import React from "react";
import { List } from "antd";
import { useHistory } from "react-router-dom";
import { Appointment } from "../../../types/Interfaces";
import moment from "moment";
interface Props {
	data: Appointment[];
}
const ConsultationList: React.FC<Props> = ({ data }) => {
	const history = useHistory();
	return (
		<div>
			<List
				itemLayout="horizontal"
				dataSource={data}
				renderItem={(item) => (
					<List.Item className="card">
						<List.Item.Meta
							title={
								<div>
									<p>
										{item?.schedule?.type} -{" "}
										{item?.schedule?.title}
									</p>
									<small>
										{moment(
											item?.schedule?.consultationDate
										).format("MMMM DD, YYYY")}{" "}
										-{" "}
										{moment(
											item?.schedule?.consultationTime
										).format("h:mm:ss a")}
									</small>
								</div>
							}
							description={
								<div>
									<p className="m-0">
										{item?.schedule?.description?.length >
										150
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
							}
						/>
					</List.Item>
				)}
			/>
		</div>
	);
};

export default ConsultationList;
