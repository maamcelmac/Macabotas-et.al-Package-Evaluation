import React from "react";
import { Card } from "antd";
import AppointmentTable from "../../../components/secretary/appointment-table/appointment-table.component";
const CancerControlPage: React.FC = () => {
	return (
		<div>
			<Card title="Cancer Control and Prevention Program">
				<AppointmentTable data={[]} />
			</Card>
		</div>
	);
};

export default CancerControlPage;
