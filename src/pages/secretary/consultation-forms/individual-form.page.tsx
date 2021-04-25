import React from "react";
import { Card } from "antd";
import IndividualForm from "../../../components/shared/consultation-forms/individual-treatment-form.component";

const IndividualFormPage: React.FC = () => {
	return (
		<div>
			<Card title="For Obstetric and Gynecologocial Patient">
				<IndividualForm />
			</Card>
		</div>
	);
};

export default IndividualFormPage;
