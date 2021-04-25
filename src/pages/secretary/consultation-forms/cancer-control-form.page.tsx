import React from "react";
import { Card } from "antd";
import CancerControlForm from "../../../components/shared/consultation-forms/cancer-control-form.component";

const CancerControlFormPage: React.FC = () => {
	return (
		<div>
			<Card title="Cancer Control & Prevention Program">
				<CancerControlForm
					onSubmit={(val: object) => {
						console.log(val);
					}}
				/>
			</Card>
		</div>
	);
};

export default CancerControlFormPage;
