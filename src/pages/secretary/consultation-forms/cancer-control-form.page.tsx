import React from "react";
import { Card } from "antd";
import CancerControlForm from "../../../components/shared/consultation-forms/cancer-control-form.component";

const CancerControlFormPage: React.FC = () => {
	return (
		<div>
			<Card title="Cancen Control & Prevention Program">
				<CancerControlForm />
			</Card>
		</div>
	);
};

export default CancerControlFormPage;
