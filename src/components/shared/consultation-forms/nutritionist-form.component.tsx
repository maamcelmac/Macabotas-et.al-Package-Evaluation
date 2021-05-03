import React from "react";
import { Form, DatePicker, Button, Input, Select } from "antd";
import { ConsultationFormProps } from "../../../types/Interfaces";
import PersonalDataForm from "./personal-data-form.component";
const { Option } = Select;
const { TextArea } = Input;
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
						label="Date:"
						name="date"
						className="col-6 col-md-12 col-sm-12 p-half"
						rules={[
							{
								required: true,
								message: "Please fill out this field!",
							},
						]}
					>
						<DatePicker style={{ width: "100%" }} />
					</Form.Item>

					<Form.Item
						label="Ht:"
						name="Ht"
						className="col-6 col-md-12 col-sm-12 p-half"
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
						className="col-6 col-md-12 col-sm-12 p-half"
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
						label="BMI:"
						name="BMI"
						className="col-6 col-md-12 col-sm-12 p-half"
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
						label="Interpretation:"
						name="interpretation"
						className="col-6 col-md-12 col-sm-12 p-half"
						rules={[
							{
								required: true,
								message: "Please fill out this field!",
							},
						]}
					>
						<Select>
							<Option value="UW"> UW</Option>
							<Option value="N"> N</Option>
							<Option value="OW"> OW</Option>
							<Option value="OB"> OB</Option>
						</Select>
					</Form.Item>
				</div>

				<div className="col-12 mt-2 mb-2">
					<Form.Item
						label="Diet Rx:"
						name="dietRx"
						className="col-12 col-md-12 col-sm-12 p-half mt-2 mb-2"
						rules={[
							{
								required: true,
								message: "Please fill out this field!",
							},
						]}
					>
						<TextArea rows={7} />
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
