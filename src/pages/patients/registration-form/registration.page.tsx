import React from "react";
import { Card } from "antd";
import PersonalDataForm from "../../../components/shared/personal-data-form/personal-data-form.component";
import { register } from "../../../redux/auth/auth.slice";
import { useAppDispatch } from "../../../redux/hooks";
import { notify } from "../../../components/global/alerts/alerts.component";
import { useHistory } from "react-router-dom";

const RegistrationPage: React.FC = () => {
	const dispatch = useAppDispatch();
	const history = useHistory();

	const onSubmit = (val: any) => {
		console.log(val);
		dispatch(
			register(val, "patient", () => {
				notify("Registration Success", "success");
				history.push("/patient-login");
			})
		);
	};

	return (
		<div className="flex" style={{ height: "90vh" }}>
			<Card
				title={
					<div className="logo-container flex align-items-flex-center">
						<p className="navbar-title m-0 ">
							E-Management System
						</p>
						<p className="navbar-title m-0">
							for Brgy Health Center
						</p>
					</div>
				}
				className="col-5 col-md-8"
			>
				<h4 className="mb-2" style={{ color: "#444" }}>
					{" "}
					Registration Form
				</h4>

				<PersonalDataForm onSubmit={onSubmit} />
			</Card>
		</div>
	);
};

export default RegistrationPage;
