import React from "react";
import { Card } from "antd";
import AppointmentTable from "../../../components/secretary/appointment-table/appointment-table.component";
const NutritionistPage: React.FC = () => {
	return (
		<div>
			<Card title="Nutritionist">
				<AppointmentTable data={[]} />
			</Card>
		</div>
	);
};

export default NutritionistPage;
