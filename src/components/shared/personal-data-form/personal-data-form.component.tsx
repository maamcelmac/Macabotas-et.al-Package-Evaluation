import React from "react";
import { Form, Select, Radio, Button, Input, InputNumber } from "antd";
import { ConsultationFormProps } from "../../../types/Interfaces";
const { Option } = Select;

const PersonalDataForm: React.FC<ConsultationFormProps> = ({
	onSubmit,
	initialValues,
	userType,
}) => {
	const [form] = Form.useForm();

	const onFinish = (val: any) => {
		if (onSubmit) {
			onSubmit(val);
		}
	};

	return (
		<div>
			<Form
				layout="vertical"
				form={form}
				name="basic"
				id="createScheduleForm"
				onFinish={onFinish}
				initialValues={initialValues && initialValues}
				scrollToFirstError
			>
				<div className="flex pt-1 pb-1">
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
								message: "Please confirm your password!",
							},
							({ getFieldValue }) => ({
								validator(_, value) {
									if (
										!value ||
										getFieldValue("password") === value
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
						label="Birth date"
						name="birthdate"
						rules={[
							{
								required: true,
								message: "Please fill out this field!",
							},
						]}
						className="col-6 col-md-12 col-sm-12 p-half"
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
							<Radio.Button value="Male">Male</Radio.Button>
							<Radio.Button value="Female">Female</Radio.Button>
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

					<Form.Item
						className="col-6 col-md-12 col-sm-12 p-half"
						label="Civil Status"
						name="civilStatus"
						rules={[
							{
								required: true,
								message: "Please fill out this field!",
							},
						]}
					>
						<Select>
							<Option value="Single"> Single</Option>
							<Option value="Married"> Married</Option>
						</Select>
					</Form.Item>

					<Form.Item
						className="col-6 col-md-12 col-sm-12 p-half"
						label="Occupation"
						name="occupation"
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
						label="Educational Attainment"
						name="educationalAttainment"
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
						label="Weight in kilograms: (Optional)"
						name="weight"
					>
						{" "}
						<InputNumber />
					</Form.Item>
					<Form.Item
						className="col-6 col-md-12 col-sm-12 p-half"
						label="Height in centimeter: (Optional)"
						name="height"
					>
						{" "}
						<InputNumber />
					</Form.Item>
				</div>

				<div className="flex justify-content-center">
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</div>
			</Form>
		</div>
	);
};

export default PersonalDataForm;
