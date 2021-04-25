import React from "react";
import { Card } from "antd";
import ObstetricForm from "../../../components/shared/consultation-forms/obstetric-form.component";

const ObstetricFormPage: React.FC = () => {
	return (
		<div>
			<Card title="For Obstetric and Gynecologocial Patient">
				<ObstetricForm />
			</Card>
		</div>
	);
};

export default ObstetricFormPage;
