import React from "react";
import { Card } from "antd";
import PersonalDataForm from "../../../components/shared/personal-data-form/personal-data-form.component";
import { register } from "../../../redux/auth/auth.slice";
import { useAppDispatch } from "../../../redux/hooks";
import { notify } from "../../../components/global/alerts/alerts.component";
import { useHistory } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

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
						<div className="col-3 col-md-12 justify-content-space-between align-items-flex-center">
							<Link to="/patient-login">
								{" "}
								<ArrowLeftOutlined /> Back{" "}
							</Link>
						</div>
						<div className="flex align-items-flex-center col-9 col-md-12">
							<img src={Logo} alt="Logo" width="65" height="65" />

							<div>
								<p className="navbar-title m-0 ">
									E-Management System
								</p>{" "}
								<p className="navbar-title m-0 ">
									for Brgy Health Center
								</p>
							</div>
						</div>
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
