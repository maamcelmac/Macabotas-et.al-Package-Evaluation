import React from "react";
import { Card, Spin } from "antd";
import PersonalDataForm from "../../../components/shared/personal-data-form/personal-data-form.component";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { notify } from "../../../components/global/alerts/alerts.component";
import { PatientInfo } from "../../../types/Interfaces";

const CancerControlFormPage: React.FC = () => {
	const dispatch = useAppDispatch();
	const auth: PatientInfo | any = useAppSelector((state) => state.auth);
	return !auth.loading ? (
		<div>
			<Card title="My Account">
				<PersonalDataForm
					initialValues={auth && auth?.user}
					onSubmit={(val: object) => {
						console.log(val);
					}}
				/>
			</Card>
		</div>
	) : (
		<div
			className="align-items-flex-center justify-content-center"
			style={{ width: "100%", height: "100vh" }}
		>
			<Spin />
		</div>
	);
};

export default CancerControlFormPage;
