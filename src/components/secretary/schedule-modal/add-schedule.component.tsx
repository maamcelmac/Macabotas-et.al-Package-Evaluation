import React from "react";
import {
	Modal,
	Button,
	Form,
	Input,
	Select,
	InputNumber,
	DatePicker,
	TimePicker,
} from "antd";
const { Option } = Select;
const { TextArea } = Input;
interface Props {
	visibility: boolean;
	onCancel: () => void;
}
const CreateScheduleModal: React.FC<Props> = ({ visibility, onCancel }) => {
	const [form] = Form.useForm();

	const onFinish = (val: any) => {
		console.log(val);
	};

	return (
		<>
			<Modal
				title="Create Schedule Form"
				visible={visibility}
				onCancel={() => {
					onCancel();
				}}
				width={750}
				onOk={() => {
					form.submit();
				}}
				footer={[
					<Button
						htmlType="button"
						key="cancel"
						onClick={() => onCancel()}
					>
						Close
					</Button>,
					<Button
						type="primary"
						form="createScheduleForm"
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
					id="createScheduleForm"
					onFinish={onFinish}
				>
					<Form.Item
						label="Consultation"
						name="type"
						rules={[
							{
								required: true,
								message: "Please select consultation!",
							},
						]}
					>
						<Select>
							<Option value="Family Planning">
								{" "}
								Family Planning
							</Option>
							<Option value="Obstetric and Gynecological">
								{" "}
								Obstetric and Gynecological
							</Option>

							<Option value="Individual Treatment">
								{" "}
								Individual Treatment
							</Option>

							<Option value="Cancer Control and Prevention Program">
								{" "}
								Cancer Control and Prevention Program
							</Option>

							<Option value="Nutritionist">
								{" "}
								Nutritionist
							</Option>
						</Select>
					</Form.Item>

					<Form.Item
						label="Title"
						name="title"
						rules={[
							{
								required: true,
								message: "Please input title!",
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						label="Description"
						name="description"
						rules={[
							{
								required: true,
								message: "Please input description!",
							},
						]}
					>
						<TextArea rows={4} />
					</Form.Item>

					<div className="flex-unwrap" style={{ width: "100%" }}>
						<Form.Item
							label="Health Worker Name"
							name="healthWorker"
							className="col-6 col-md-12 p-half"
							rules={[
								{
									required: true,
									message:
										"Please input health worker name!",
								},
							]}
						>
							<Input className="width-100" />
						</Form.Item>

						<Form.Item
							label="Number of Slots"
							name="numberOfSlot"
							className="col-6 col-md-12 p-half"
							rules={[
								{
									required: true,
									message:
										"Please input number of slots!",
								},
							]}
						>
							<InputNumber className="width-100" />
						</Form.Item>
					</div>

					<div className="flex-unwrap" style={{ width: "100%" }}>
						<Form.Item
							label="Consultation Date"
							name="consultationDate"
							className="col-6 col-md-12 p-half"
							rules={[
								{
									required: true,
									message:
										"Please input consultation date!",
								},
							]}
						>
							<DatePicker className="width-100" />
						</Form.Item>

						<Form.Item
							label="Consultation Time"
							name="consultationTime"
							className="col-6 col-md-12 p-half"
							rules={[
								{
									required: true,
									message:
										"Please input consultation time!",
								},
							]}
						>
							<TimePicker className="width-100" />
						</Form.Item>
					</div>
				</Form>
			</Modal>
		</>
	);
};

export default CreateScheduleModal;
