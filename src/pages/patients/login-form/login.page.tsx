import React, { useEffect } from "react";
import { Form, Input, Button, Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Logo from "../../../assets/logo.png";
import { useAppDispatch } from "../../../redux/hooks";
import { login, getPatientLoggedIn } from "../../../redux/auth/auth.slice";
import { notify } from "../../../components/global/alerts/alerts.component";
import setAuthToken from "../../../utils/setAuthToken";
import { useHistory } from "react-router-dom";

const LoginForm: React.FC = () => {
	const dispatch = useAppDispatch();
	const history = useHistory();
	const token = localStorage.getItem("patient-token");

	useEffect(() => {
		if (token) {
			setAuthToken(token);

			dispatch(
				getPatientLoggedIn(() => {
					history.push("/patients/consultations");
				})
			);
		}
	}, [token, dispatch, history]);

	const onLogin = (values: any) => {
		dispatch(
			login(values, "patient", () => {
				notify("Login success", "success");
				window.location.reload();
			})
		);
	};

	return (
		<div
			className="flex align-items-flex-center justify-content-center"
			style={{ height: "90vh" }}
		>
			<Card
				title={
					<div className="logo-container flex align-items-flex-center">
						<div className="col-2 col-md-12 justify-content-center">
							<img src={Logo} alt="Logo" width="65" height="65" />
						</div>
						<div className="flex-column col-10 col-md-12">
							<p className="navbar-title m-0 ">
								E-Management System
							</p>{" "}
							<p className="navbar-title m-0 ">
								for Brgy Health Center
							</p>{" "}
						</div>
					</div>
				}
				className="col-5 col-md-8"
			>
				<h4 className="mb-2" style={{ color: "#444" }}>
					{" "}
					Please login your account.
				</h4>
				<Form
					name="normal_login"
					className="login-form"
					initialValues={{
						remember: true,
					}}
					onFinish={onLogin}
				>
					<Form.Item
						name="email"
						rules={[
							{
								required: true,
								message: "Please input your Email!",
							},
						]}
					>
						<Input
							prefix={
								<UserOutlined className="site-form-item-icon" />
							}
							placeholder="Email"
						/>
					</Form.Item>
					<Form.Item
						name="password"
						rules={[
							{
								required: true,
								message: "Please input your Password!",
							},
						]}
					>
						<Input
							prefix={
								<LockOutlined className="site-form-item-icon" />
							}
							type="password"
							placeholder="Password"
						/>
					</Form.Item>

					<div className="flex justify-content-center">
						<Button
							type="primary"
							htmlType="submit"
							className="login-form-button"
						>
							Log in
						</Button>
					</div>
				</Form>
				<div className="flex justify-content-center mt-1">
					<Button
						type="default"
						htmlType="button"
						onClick={() => {
							history.push("/patient-registration");
						}}
					>
						Register
					</Button>
				</div>
			</Card>
		</div>
	);
};

export default LoginForm;
