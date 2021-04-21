import { Form, Input, Button, Checkbox, Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Logo from "../../../assets/logo.png";
const LoginForm: React.FC = () => {
	const onFinish = (values: any) => {
		console.log("Received values of form: ", values);
	};

	return (
		<div
			className="flex align-items-flex-center justify-content-center"
			style={{ height: "90vh" }}
		>
			<Card
				title={
					<div className="logo-container flex align-items-flex-center">
						<img src={Logo} alt="Logo" width="35" />
						<p className="navbar-title m-0 ml-1">
							E-Management System for Brgy Health Center
						</p>
					</div>
				}
				className="col-5 col-md-8"
			>
				<h2 className="mb-2" style={{ color: "#444" }}>
					{" "}
					Please login your account.
				</h2>
				<Form
					name="normal_login"
					className="login-form"
					initialValues={{
						remember: true,
					}}
					onFinish={onFinish}
				>
					<Form.Item
						name="username"
						rules={[
							{
								required: true,
								message: "Please input your Username!",
							},
						]}
					>
						<Input
							prefix={
								<UserOutlined className="site-form-item-icon" />
							}
							placeholder="Username"
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
			</Card>
		</div>
	);
};

export default LoginForm;
