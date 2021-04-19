import React from "react";
import PatientsTable from "../../../components/secretary/patients-table/patients-table.component";
import { Card } from "antd";
const PatientsPage: React.FC = () => {
	return (
		<div>
			<Card title="Patients">
				<PatientsTable data={[]} />
			</Card>
		</div>
	);
};

export default PatientsPage;
