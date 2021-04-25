import React from "react";
import { Card } from "antd";
import FamilyPlanningForm from "../../../components/shared/consultation-forms/family-planning.component";

const FamilyPlanningFormPage: React.FC = () => {
	return (
		<div>
			<Card title="Cancer Control and Prevention Program">
				<FamilyPlanningForm />
			</Card>
		</div>
	);
};

export default FamilyPlanningFormPage;
