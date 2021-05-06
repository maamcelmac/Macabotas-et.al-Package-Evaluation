import React from "react";
import { Modal, Button, Form, Input, Radio } from "antd";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";
import { createDoctor } from "../../../redux/doctor/doctor.slice";
import { notify } from "../../global/alerts/alerts.component";
interface Props {
	visibility: boolean;
	onCancel: () => void;
}
const AddDoctorForm: React.FC<Props> = ({ visibility, onCancel }) => {
	const [form] = Form.useForm();
	const dispatch = useAppDispatch();

	const loading = useAppSelector(
		(state: RootState) => state.doctors.loading
	);

	const onFinish = async (val: any) => {
		dispatch(
			createDoctor(val, () => {
				notify("New Doctor Added!", "success");
				form.resetFields();
				onCancel();
			})
		);
	};

	return (
		<>
			<Modal
				title="Add New Doctor Form"
				visible={visibility}
				onCancel={() => {
					onCancel();
				}}
				width={750}
				style={{ top: 20 }}
				onOk={() => {
					form.submit();
				}}
				footer={[
					<Button
						htmlType="button"
						key="cancel"
						onClick={() => {
							onCancel();
						}}
					>
						Close
					</Button>,
					<Button
						loading={loading}
						type="primary"
						form="addDoctorForm"
						key="submit"
						htmlType="submit"
					>
						Submit
					</Button>,
				]}
			>
				<Form
					layout="vertical"
					form={form}
					name="basic"
					id="addDoctorForm"
					onFinish={onFinish}
				>
					<Form.Item
						className="col-6 col-md-12 col-sm-12 p-half"
						name="email"
						label="Email Address"
						rules={[
							{
								required: true,
								message: "Please input your email!",
								type: "email",
							},
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						className="col-6 col-md-12 col-sm-12 p-half"
						name="password"
						label="Password"
						rules={[
							{
								required: true,
								message: "Please input your password!",
							},
						]}
					>
						<Input.Password />
					</Form.Item>

					<Form.Item
						className="col-6 col-md-12 col-sm-12 p-half"
						name="confirm"
						label="Confirm Password"
						dependencies={["password"]}
						rules={[
							{
								required: true,
								message:
									"Please confirm your password!",
							},
							({ getFieldValue }) => ({
								validator(_, value) {
									if (
										!value ||
										getFieldValue("password") ===
											value
									) {
										return Promise.resolve();
									}
									return Promise.reject(
										new Error(
											"The two passwords that you entered do not match!"
										)
									);
								},
							}),
						]}
					>
						<Input.Password />
					</Form.Item>
					<Form.Item
						className="col-6 col-md-12 col-sm-12 p-half"
						label="Firstname"
						name="fname"
						rules={[
							{
								required: true,
								message: "Please fill out this field!",
							},
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						className="col-6 col-md-12 col-sm-12 p-half"
						label="Middlename"
						name="mname"
						rules={[
							{
								required: true,
								message: "Please fill out this field!",
							},
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						className="col-6 col-md-12 col-sm-12 p-half"
						label="Lastname"
						name="lname"
						rules={[
							{
								required: true,
								message: "Please fill out this field!",
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						className="col-6 col-md-12 col-sm-12 p-half"
						label="Phone Number"
						name="phoneNumber"
						rules={[
							{
								required: true,
								message: "Please fill out this field!",
							},
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						className="col-6 col-md-12 col-sm-12 p-half"
						label="Gender"
						name="gender"
						rules={[
							{
								required: true,
								message: "Please select nhts!",
							},
						]}
					>
						<Radio.Group>
							<Radio.Button value="Male">
								Male
							</Radio.Button>
							<Radio.Button value="Female">
								Female
							</Radio.Button>
						</Radio.Group>
					</Form.Item>
					<Form.Item
						className="col-6 col-md-12 col-sm-12 p-half"
						label="Address Line"
						name="address"
						rules={[
							{
								required: true,
								message: "Please fill out this field!",
							},
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						className="col-6 col-md-12 col-sm-12 p-half"
						label="Brgy."
						name="brgy"
						rules={[
							{
								required: true,
								message: "Please fill out this field!",
							},
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						className="col-6 col-md-12 col-sm-12 p-half"
						label="City/Municipality"
						name="city_municipality"
						rules={[
							{
								required: true,
								message: "Please fill out this field!",
							},
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						className="col-6 col-md-12 col-sm-12 p-half"
						label="Province"
						name="province"
						rules={[
							{
								required: true,
								message: "Please fill out this field!",
							},
						]}
					>
						<Input />
					</Form.Item>
				</Form>
			</Modal>
		</>
	);
};

export default AddDoctorForm;
