import React from "react";
import { Card } from "antd";
import AppointmentTable from "../../../components/secretary/appointment-table/appointment-table.component";
const ObstetricPage: React.FC = () => {
	return (
		<div>
			<Card title="Obstetric and Gynecological">
				<AppointmentTable data={[]} />
			</Card>
		</div>
	);
};

export default ObstetricPage;
