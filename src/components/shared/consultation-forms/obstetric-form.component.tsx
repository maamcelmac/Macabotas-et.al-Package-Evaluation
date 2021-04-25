import React, { useState } from "react";
import {
	Form,
	Select,
	Radio,
	InputNumber,
	DatePicker,
	Checkbox,
	Button,
	Input,
	TimePicker,
} from "antd";
import { SelectValue } from "antd/lib/select";
const { Option } = Select;
const { TextArea } = Input;

const ObstetricForm: React.FC = () => {
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
						label="To:"
						name="to"
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
						label="From:"
						name="from"
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
						label="Date of admission:"
						name="dateOfAdmission"
						className="col-6 col-md-6 col-sm-12 p-half"
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
						label="Time:"
						name="timeOfAdmission"
						className="col-6 col-md-6 col-sm-12 p-half"
						rules={[
							{
								required: true,
								message: "Please fill out this field!",
							},
						]}
					>
						<TimePicker style={{ width: "100%" }} />
					</Form.Item>

					<Form.Item
						label="Date of Referral:"
						name="dateOfReferral"
						className="col-6 col-md-6 col-sm-12 p-half"
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
						label="Time:"
						name="timeOfReferral"
						className="col-6 col-md-6 col-sm-12 p-half"
						rules={[
							{
								required: true,
								message: "Please fill out this field!",
							},
						]}
					>
						<TimePicker style={{ width: "100%" }} />
					</Form.Item>

					<Form.Item
						label="Name of Patient:"
						name="patientName"
						className="col-6 col-md-12 col-sm-12 p-half"
						rules={[
							{
								required: true,
								message: "Please fill out this field!",
							},
						]}
					>
						{" "}
						<Input />
					</Form.Item>
					<Form.Item
						label="Age:"
						name="age"
						className="col-2 col-md-6 col-sm-12 p-half"
						rules={[
							{
								required: true,
								message: "Please fill out this field!",
							},
						]}
					>
						{" "}
						<Input />
					</Form.Item>
					<Form.Item
						label="Civil Status:"
						name="civilStatus"
						className="col-4 col-md-6 col-sm-12 p-half"
						rules={[
							{
								required: true,
								message: "Please fill out this field!",
							},
						]}
					>
						{" "}
						<Input />
					</Form.Item>

					<Form.Item
						label="Reason for Referral:"
						name="reasonForReferral"
						className="col-12 col-md-12 col-sm-12 p-half"
						rules={[
							{
								required: true,
								message: "Please fill out this field!",
							},
						]}
					>
						{" "}
						<Input />
					</Form.Item>

					<Form.Item
						label="History of Present Illness:"
						name="historyOfPresentIllness"
						className="col-12 col-md-12 col-sm-12 p-half"
						rules={[
							{
								required: true,
								message: "Please fill out this field!",
							},
						]}
					>
						{" "}
						<TextArea rows={4} />
					</Form.Item>

					<Form.Item
						label="OB-GYNE History:"
						name="obgyneHistory"
						className="col-12 col-md-12 col-sm-12 p-half"
						rules={[
							{
								required: true,
								message: "Please fill out this field!",
							},
						]}
					>
						{" "}
						<TextArea rows={4} />
					</Form.Item>

					<Form.Item
						label="LMP:"
						name="LMP"
						className="col-4 col-md-12 col-sm-12 p-half"
						rules={[
							{
								required: true,
								message: "Please fill out this field!",
							},
						]}
					>
						{" "}
						<Input />
					</Form.Item>

					<Form.Item
						label="EDC:"
						name="EDC"
						className="col-4 col-md-12 col-sm-12 p-half"
						rules={[
							{
								required: true,
								message: "Please fill out this field!",
							},
						]}
					>
						{" "}
						<Input />
					</Form.Item>

					<Form.Item
						label="AOG:"
						name="AOG"
						className="col-4 col-md-12 col-sm-12 p-half"
						rules={[
							{
								required: true,
								message: "Please fill out this field!",
							},
						]}
					>
						{" "}
						<Input />
					</Form.Item>

					<Form.Item
						label="Physical Examination on Admission:"
						name="physicalExamination"
						className="col-12 col-md-12 col-sm-12 p-half"
						rules={[
							{
								required: true,
								message: "Please fill out this field!",
							},
						]}
					>
						{" "}
						<TextArea rows={4} />
					</Form.Item>
				</div>

				<div className="flex-column section-container">
					<h3 className="mb-1"> Vital Signs</h3>
					<div className="flex">
						<Form.Item
							label="Blood Pressure:"
							name="bloodPressure"
							className="col-3 col-md-6 col-sm-12 p-half"
							rules={[
								{
									required: true,
									message:
										"Please fill out this field!",
								},
							]}
						>
							{" "}
							<Input />
						</Form.Item>
						<Form.Item
							label="Cardiac Rate:"
							name="cardiacRate"
							className="col-3 col-md-6 col-sm-12 p-half"
							rules={[
								{
									required: true,
									message:
										"Please fill out this field!",
								},
							]}
						>
							{" "}
							<Input />
						</Form.Item>

						<Form.Item
							label="Resp. Rate:"
							name="respRate"
							className="col-3 col-md-6 col-sm-12 p-half"
							rules={[
								{
									required: true,
									message:
										"Please fill out this field!",
								},
							]}
						>
							{" "}
							<Input />
						</Form.Item>
						<Form.Item
							label="Temp:"
							name="temperature"
							className="col-3 col-md-6 col-sm-12 p-half"
							rules={[
								{
									required: true,
									message:
										"Please fill out this field!",
								},
							]}
						>
							{" "}
							<Input />
						</Form.Item>
						<Form.Item
							label="02Sat:"
							name="Sat"
							className="col-3 col-md-6 col-sm-12 p-half"
							rules={[
								{
									required: true,
									message:
										"Please fill out this field!",
								},
							]}
						>
							{" "}
							<Input />
						</Form.Item>
						<Form.Item
							label="Weight:"
							name="weight"
							className="col-3 col-md-6 col-sm-12 p-half"
							rules={[
								{
									required: true,
									message:
										"Please fill out this field!",
								},
							]}
						>
							{" "}
							<Input />
						</Form.Item>
						<Form.Item
							label="Height:"
							name="height"
							className="col-3 col-md-6 col-sm-12 p-half"
							rules={[
								{
									required: true,
									message:
										"Please fill out this field!",
								},
							]}
						>
							{" "}
							<Input />
						</Form.Item>
					</div>
					<div className="flex">
						<Form.Item
							label="Fundic Height:"
							name="fundicHeight"
							className="col-6 col-md-6 col-sm-12 p-half"
							rules={[
								{
									required: true,
									message:
										"Please fill out this field!",
								},
							]}
						>
							{" "}
							<Input />
						</Form.Item>
						<Form.Item
							label="Fetal Heartbeat:"
							name="fetalHeartbeat"
							className="col-6 col-md-6 col-sm-12 p-half"
							rules={[
								{
									required: true,
									message:
										"Please fill out this field!",
								},
							]}
						>
							{" "}
							<Input />
						</Form.Item>
					</div>
					<div className="flex">
						<Form.Item
							label="Leopold's Maneuver 1:"
							name="leopold1"
							className="col-6 col-md-6 col-sm-12 p-half"
						>
							{" "}
							<Input />
						</Form.Item>
						<Form.Item
							label="Leopold's Maneuver 1:"
							name="leopold2"
							className="col-6 col-md-6 col-sm-12 p-half"
						>
							{" "}
							<Input />
						</Form.Item>
						<Form.Item
							label="Leopold's Maneuver 3:"
							name="leopold3"
							className="col-6 col-md-6 col-sm-12 p-half"
						>
							{" "}
							<Input />
						</Form.Item>
						<Form.Item
							label="Leopold's Maneuver 4:"
							name="leopold4"
							className="col-6 col-md-6 col-sm-12 p-half"
						>
							{" "}
							<Input />
						</Form.Item>
					</div>
					<div className="flex mt-1">
						<Form.Item
							label="Internal Examination:"
							name="internalExamination"
							className="col-12 col-md-12 col-sm-12 p-half"
							rules={[
								{
									required: true,
									message:
										"Please fill out this field!",
								},
							]}
						>
							{" "}
							<TextArea rows={4} />
						</Form.Item>

						<Form.Item
							label="Intervention Done:"
							name="interventionDone"
							className="col-12 col-md-12 col-sm-12 p-half"
							rules={[
								{
									required: true,
									message:
										"Please fill out this field!",
								},
							]}
						>
							{" "}
							<TextArea rows={4} />
						</Form.Item>

						<Form.Item
							label="Physical Examination Before Referral:"
							name="physicalExaminationBeforeReferral"
							className="col-12 col-md-12 col-sm-12 p-half"
							rules={[
								{
									required: true,
									message:
										"Please fill out this field!",
								},
							]}
						>
							{" "}
							<TextArea rows={4} />
						</Form.Item>
					</div>

					<div className="justify-content-center">
						<Button type="primary" htmlType="submit">
							Submit
						</Button>
					</div>
				</div>
			</Form>
		</div>
	);
};

export default ObstetricForm;
