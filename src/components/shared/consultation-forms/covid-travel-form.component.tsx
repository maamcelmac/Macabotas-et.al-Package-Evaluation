import React from "react";
import { Form, Button, Input, Radio } from "antd";
const { TextArea } = Input;

const NutritionistForm: React.FC = () => {
	const [form] = Form.useForm();

	const onFinish = (val: object) => {
		console.log(val);
	};

	return (
		<div>
			<Form
				layout="horizontal"
				form={form}
				name="basic"
				id="createScheduleForm"
				onFinish={onFinish}
			>
				<div className="flex pt-1 pb-1">
					<Form.Item
						label="Patient's Name:"
						name="patientName"
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
						label="Address:"
						name="address"
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
						label="Age:"
						name="age"
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
						label="Sex:"
						name="gender"
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
						label="Occupation:"
						name="occupation"
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
						label="Civil Status:"
						name="civilStatus"
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
						label="Diagnosis:"
						name="internalExamination"
						className="col-12 col-md-12 col-sm-12 p-half mt-2 mb-2"
						rules={[
							{
								required: true,
								message: "Please fill out this field!",
							},
						]}
					>
						{" "}
						<TextArea rows={6} />
					</Form.Item>

					<Form.Item
						label="Physically Fit?"
						name="physicallyFit"
						className="col-12 col-md-12 col-sm-12 p-half"
						rules={[
							{
								required: true,
								message: "Please select one!",
							},
						]}
					>
						<Radio.Group>
							<Radio.Button value="Yes">Yes</Radio.Button>
							<Radio.Button value="No">No</Radio.Button>
						</Radio.Group>
					</Form.Item>

					<Form.Item
						label="No signs and symptoms of COVID-19?"
						name="covid19Signs"
						className="col-12 col-md-12 col-sm-12 p-half"
						rules={[
							{
								required: true,
								message: "Please select one!",
							},
						]}
					>
						<Radio.Group>
							<Radio.Button value="Yes">Yes</Radio.Button>
							<Radio.Button value="No">No</Radio.Button>
						</Radio.Group>
					</Form.Item>

					<Form.Item
						label="RT-PCR Test Done with NEGATIVE Result?"
						name="covid19Signs"
						className="col-12 col-md-12 col-sm-12 p-half"
						rules={[
							{
								required: true,
								message: "Please select one!",
							},
						]}
					>
						<Radio.Group>
							<Radio.Button value="Yes">Yes</Radio.Button>
							<Radio.Button value="No">No</Radio.Button>
						</Radio.Group>
					</Form.Item>

					<Form.Item
						label="Not PUM/PUI?"
						name="notPUM"
						className="col-12 col-md-12 col-sm-12 p-half"
						rules={[
							{
								required: true,
								message: "Please select one!",
							},
						]}
					>
						<Radio.Group>
							<Radio.Button value="Yes">Yes</Radio.Button>
							<Radio.Button value="No">No</Radio.Button>
						</Radio.Group>
					</Form.Item>

					<Form.Item
						label="Locally Stranded Individual?"
						name="strandedIndividual"
						className="col-12 col-md-12 col-sm-12 p-half"
						rules={[
							{
								required: true,
								message: "Please select one!",
							},
						]}
					>
						<Radio.Group>
							<Radio.Button value="Yes">Yes</Radio.Button>
							<Radio.Button value="No">No</Radio.Button>
						</Radio.Group>
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

export default NutritionistForm;
