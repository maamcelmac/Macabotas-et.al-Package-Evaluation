import React from "react";
import { Card } from "antd";
import AppointmentTable from "../../../components/secretary/appointment-table/appointment-table.component";
const FamilyPlanningPage: React.FC = () => {
	return (
		<div>
			<Card title="Family Planning">
				<AppointmentTable data={[]} />
			</Card>
		</div>
	);
};

export default FamilyPlanningPage;
