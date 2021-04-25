import React from "react";
import { Card } from "antd";
import IndividualForm from "../../../components/shared/consultation-forms/individual-treatment-form.component";

const IndividualFormPage: React.FC = () => {
	return (
		<div>
			<Card title="Individual Treatment Record">
				<IndividualForm
					onSubmit={(val: object) => {
						console.log(val);
					}}
				/>
			</Card>
		</div>
	);
};

export default IndividualFormPage;
