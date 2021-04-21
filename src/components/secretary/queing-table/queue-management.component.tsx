import React from "react";
import { Statistic, Card, Button } from "antd";
import { Schedule } from "../../../types/Interfaces";
import QueingTable from "./queing-table.component";
interface Props {
	schedule?: Schedule;
}

const AppointmentTable: React.FC<Props> = ({ schedule }) => {
	return (
		<Card title={`${schedule?.type} - ${schedule?.healthWorker}`}>
			<Statistic
				title={`${schedule?.title} - ${schedule?.consultationDate} ${schedule?.consultationTime}`}
				value={schedule?.currentNumber}
				valueStyle={{ color: "#1890FF" }}
				suffix={<Button type="primary"> Next </Button>}
			/>

			<div className="mt-1">
				<QueingTable data={[]} />
			</div>
		</Card>
	);
};

export default AppointmentTable;
