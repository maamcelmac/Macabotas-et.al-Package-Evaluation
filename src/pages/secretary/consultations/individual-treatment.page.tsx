import React from "react";
import { Card } from "antd";
import AppointmentTable from "../../../components/secretary/appointment-table/appointment-table.component";
const IndividualTreatment: React.FC = () => {
	return (
		<div>
			<Card title="Individual Treatment">
				<AppointmentTable data={[]} />
			</Card>
		</div>
	);
};

export default IndividualTreatment;
