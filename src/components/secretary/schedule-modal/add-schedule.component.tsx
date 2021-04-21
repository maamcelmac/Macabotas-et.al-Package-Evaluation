import React, { useEffect } from "react";
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
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";
import { Schedule } from "../../../types/Interfaces";
import {
	createSchedule,
	setCurrent,
	updateSchedule,
} from "../../../redux/schedules/schedule.slice";
import { notify } from "../../global/alerts/alerts.component";
import moment from "moment";
const { Option } = Select;
const { TextArea } = Input;
interface Props {
	visibility: boolean;
	onCancel: () => void;
	editState: boolean;
}
const CreateScheduleModal: React.FC<Props> = ({
	visibility,
	onCancel,
	editState,
}) => {
	const [form] = Form.useForm();
	const dispatch = useAppDispatch();

	const loading = useAppSelector(
		(state: RootState) => state.schedules.loading
	);
	const currentData: any = useAppSelector(
		(state: RootState) => state.schedules.current
	);

	useEffect(() => {
		if (editState === true && currentData) {
			form.setFieldsValue({
				_id: editState && currentData?._id,
				type: editState && currentData?.type,
				title: editState && currentData?.title,
				description: editState && currentData?.description,
				healthWorker: editState && currentData?.healthWorker,
				numberOfSlot: editState && currentData?.numberOfSlot,
				consultationDate:
					editState &&
					currentData &&
					moment(
						moment(currentData?.consultationDate).format(
							"YYYY/MM/DD"
						),
						"YYYY/MM/DD"
					),
				consultationTime:
					editState &&
					moment(
						moment(currentData?.consultationTime).format(
							"hh:mm:ss"
						),
						"hh:mm:ss"
					),
			});
		}
	}, [currentData, editState, form]);

	const onFinish = async (val: Schedule) => {
		if (editState === true && currentData) {
			if (val._id) {
				dispatch(
					updateSchedule(val._id, val, () => {
						notify("Schedule updated!", "success");
						form.resetFields();
						onCancel();
					})
				);
			} else {
				notify("Error updating information", "error");
			}
		} else {
			dispatch(
				createSchedule(val, () => {
					notify("Schedule created!", "success");
					form.resetFields();
					onCancel();
				})
			);
		}
	};

	return (
		<>
			<Modal
				title="Create Schedule Form"
				visible={visibility}
				onCancel={() => {
					onCancel();
					dispatch(setCurrent(null));
				}}
				width={750}
				onOk={() => {
					form.submit();
				}}
				footer={[
					<Button
						htmlType="button"
						key="cancel"
						onClick={() => {
							onCancel();
							dispatch(setCurrent(null));
						}}
					>
						Close
					</Button>,
					<Button
						loading={loading}
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
					{editState === true && currentData && (
						<Form.Item
							label="ID"
							name="_id"
							hidden
							rules={[
								{
									required: true,
									message: "Please input id!",
								},
							]}
						>
							<Input />
						</Form.Item>
					)}
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
							<TimePicker
								className="width-100"
								format="HH:mm"
							/>
						</Form.Item>
					</div>
				</Form>
			</Modal>
		</>
	);
};

export default CreateScheduleModal;
