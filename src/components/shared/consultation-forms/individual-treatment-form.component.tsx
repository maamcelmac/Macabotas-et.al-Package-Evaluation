import React from "react";
import { Form, DatePicker, Button, Input, Radio } from "antd";
import { ConsultationFormProps } from "../../../types/Interfaces";
import PersonalDataForm from "./personal-data-form.component";

const IndividualTreatmentForm: React.FC<ConsultationFormProps> = ({
	onSubmit,
	initialValues,
	userType,
}) => {
	const [form] = Form.useForm();

	const onFinish = (val: object) => {
		onSubmit(val);
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
			>
				<div className="flex pt-1 pb-1">
					<PersonalDataForm />
					<Form.Item
						label="FSN:"
						name="FSN"
						className="col-2 col-md-6 col-sm-12 p-half"
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
						label="HF:"
						name="HF"
						className="col-3 col-md-6 col-sm-12 p-half"
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
						label="4 P's No:"
						name="fourPieceNumber"
						className="col-4 col-md-6 col-sm-12 p-half"
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
						label="Sponsor:"
						name="sponsor"
						className="col-6 col-md-6 col-sm-12 p-half"
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
						label="Type"
						name="patientType"
						className="col-6 col-md-6 col-sm-12 p-half"
						rules={[
							{
								required: true,
								message: "Please select one!",
							},
						]}
					>
						<Radio.Group>
							<Radio.Button value="Member">
								Member
							</Radio.Button>
							<Radio.Button value="Dependent">
								Dependent
							</Radio.Button>
						</Radio.Group>
					</Form.Item>

					<Form.Item
						label="Mother:"
						name="mother"
						className="col-12 col-md-12 col-sm-12 p-half"
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
						label="Father:"
						name="father"
						className="col-12 col-md-12 col-sm-12 p-half"
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
						label="Wt:"
						name="Wt"
						className="col-6 col-md-6 col-sm-12 p-half"
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
						label="Ht:"
						name="Ht"
						className="col-6 col-md-6 col-sm-12 p-half"
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
						label="BP:"
						name="BP"
						className="col-6 col-md-6 col-sm-12 p-half"
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
						label="PR:"
						name="PR"
						className="col-6 col-md-6 col-sm-12 p-half"
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
						label="O2:"
						name="O2"
						className="col-6 col-md-6 col-sm-12 p-half"
						rules={[
							{
								required: true,
								message: "Please fill out this field!",
							},
						]}
					>
						<Input />
					</Form.Item>
				</div>

				<div className="justify-content-center">
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</div>
			</Form>
		</div>
	);
};

export default IndividualTreatmentForm;
