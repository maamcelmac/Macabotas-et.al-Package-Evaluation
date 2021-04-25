import React from "react";
import { Form, Button, Input, Radio } from "antd";
import { ConsultationFormProps } from "../../../types/Interfaces";
const { TextArea } = Input;

const CancenControlForm: React.FC<ConsultationFormProps> = ({
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
				layout="horizontal"
				form={form}
				name="basic"
				id="createScheduleForm"
				onFinish={onFinish}
				initialValues={initialValues && initialValues}
			>
				<div className="flex pt-1 pb-1">
					<Form.Item
						label="Patient's Name:"
						name="patientName"
						className="col-12 col-md-6 col-sm-12 p-half"
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
						className="col-12 col-md-6 col-sm-12 p-half"
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
						label="Registry No.:"
						name="registryNumber"
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
						label="Age:"
						name="age"
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
						label="Date of Last Pap Smear:"
						name="lastPapSmearDate"
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
						label="Menstrual Cycles"
						name="menstrualCycles"
						className="col-6 col-md-6 col-sm-12 p-half"
						rules={[
							{
								required: true,
								message: "Please select one!",
							},
						]}
					>
						<Radio.Group>
							<Radio.Button value="Regular">
								Regular
							</Radio.Button>
							<Radio.Button value="Irregular">
								Irregular
							</Radio.Button>
						</Radio.Group>
					</Form.Item>

					<Form.Item
						label="LMP"
						name="LMP"
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
						label="Contact Bleeding?"
						name="contactBleeding"
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
						label="Pregnant?"
						name="pregnant"
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
						label="Age at First Contact"
						name="ageAtFirstContact"
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
						label="No. of Children"
						name="numberOfChildren"
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
						label="Using Contraceptives?"
						name="usingContraceptives"
						className="col-6 col-md-6 col-sm-12 p-half"
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
						label="If yes specify"
						name="usingContraceptivesSpecify"
						className="col-6 col-md-6 col-sm-12 p-half"
					>
						<Input />
					</Form.Item>

					<Form.Item
						label="Smoking?"
						name="smoking"
						className="col-6 col-md-6 col-sm-12 p-half"
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
						label="Cervical inspection"
						name="cervicalInspection"
						className="col-12 col-md-12 col-sm-12 p-half"
						rules={[
							{
								required: true,
								message: "Please select one!",
							},
						]}
					>
						<Radio.Group>
							<Radio.Button value="Normal">
								Normal
							</Radio.Button>
							<Radio.Button value="Abnormal">
								Abnormal
							</Radio.Button>
						</Radio.Group>
					</Form.Item>

					<Form.Item
						label="Colposcopy"
						name="cervicalInspection"
						className="col-12 col-md-12 col-sm-12 p-half"
						rules={[
							{
								required: true,
								message: "Please select one!",
							},
						]}
					>
						<Radio.Group>
							<Radio.Button value="None">
								None
							</Radio.Button>
							<Radio.Button value="Abnormal">
								Abnormal
							</Radio.Button>
						</Radio.Group>
					</Form.Item>

					<Form.Item
						label="Complaint: "
						name="complaint"
						className="col-12 col-md-12 col-sm-12 p-half"
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
						label="Referred by: "
						name="referredBy"
						className="col-12 col-md-12 col-sm-12 p-half"
					>
						{" "}
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

export default CancenControlForm;
