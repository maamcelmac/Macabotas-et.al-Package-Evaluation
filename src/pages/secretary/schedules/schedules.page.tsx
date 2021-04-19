import React from "react";
import PatientsTable from "../../../components/secretary/patients-table/patients-table.component";
import { Card, Button } from "antd";
const ConsulationsPage: React.FC = () => {
	return (
		<div>
			<Card
				title="Consultation Schedules"
				extra={<Button type="primary"> Create Schedule</Button>}
			>
				<PatientsTable data={[]} />
			</Card>
		</div>
	);
};

export default ConsulationsPage;
