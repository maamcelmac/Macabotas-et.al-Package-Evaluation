import React, { useState } from "react";
import { Form, Select, Radio, InputNumber, DatePicker, Button } from "antd";
import { SelectValue } from "antd/lib/select";
const { Option } = Select;

const FamilyPlanningForm: React.FC = () => {
	const [form] = Form.useForm();
	const [typeOfClient, setTypeOfClient] = useState<SelectValue>(
		"New Acceptor"
	);
	const [changingMethod, setChangingMethod] = useState<SelectValue | null>(
		null
	);

	const onFinish = (val: object) => {
		console.log(val);
	};

	return (
		<div>
			<Form
				layout="vertical"
				form={form}
				name="basic"
				id="createScheduleForm"
				onFinish={onFinish}
			>
				<div className="flex pt-1 pb-1">
					<Form.Item
						label="NHTS?"
						name="nhts"
						className="col-2 col-md-6 col-sm-12 p-half"
						rules={[
							{
								required: true,
								message: "Please select nhts!",
							},
						]}
					>
						<Radio.Group>
							<Radio.Button value="Yes">Yes</Radio.Button>
							<Radio.Button value="No">No</Radio.Button>
						</Radio.Group>
					</Form.Item>

					<Form.Item
						label="4Ps?"
						name="fourPs"
						className="col-2 col-md-6 col-sm-12 p-half"
						rules={[
							{
								required: true,
								message:
									"Please select if you have a 4Ps!",
							},
						]}
					>
						<Radio.Group>
							<Radio.Button value="Yes">Yes</Radio.Button>
							<Radio.Button value="No">No</Radio.Button>
						</Radio.Group>
					</Form.Item>
					<Form.Item
						label="No. of Living Children"
						name="numberOfLivingChildren"
						className="col-2 col-md-6 col-sm-12 p-half"
						rules={[
							{
								required: true,
								message:
									"Please input no. of living children!",
							},
						]}
					>
						<InputNumber />
					</Form.Item>
					<Form.Item
						label="Plan to have more children?"
						name="planToHaveChildren"
						className="col-3 col-md-6 col-sm-12 p-half"
						rules={[
							{
								required: true,
								message:
									"Please select if you plan to have more children?",
							},
						]}
					>
						<Radio.Group>
							<Radio.Button value="Yes">Yes</Radio.Button>
							<Radio.Button value="No">No</Radio.Button>
						</Radio.Group>
					</Form.Item>
					<Form.Item
						label="Average Monthly Income"
						name="averageMonthlyIncome"
						className="col-3 col-md-6 col-sm-12 p-half"
						rules={[
							{
								required: true,
								message:
									"Please input average monthly income!",
							},
						]}
					>
						<InputNumber style={{ width: 150 }} />
					</Form.Item>
				</div>

				<div className="flex">
					<Form.Item
						label="Type of client"
						name="typeOfClient"
						className="col-3 col-md-6 col-sm-12 p-half"
						rules={[
							{
								required: true,
								message:
									"Please select type of client!",
							},
						]}
					>
						<Select
							onChange={(val: SelectValue) =>
								setTypeOfClient(val)
							}
						>
							<Option value="New Acceptor">
								New Acceptor
							</Option>
							<Option value="Current User">
								Current User
							</Option>
						</Select>
					</Form.Item>

					{typeOfClient === "Current User" && (
						<Form.Item
							label="Current User Method"
							name="currentUserMethod"
							className="col-3 col-md-6 col-sm-12 p-half"
							rules={[
								{
									required: true,
									message:
										"Please select type of method!",
								},
							]}
						>
							<Select
								onChange={(val: SelectValue) =>
									setChangingMethod(val)
								}
							>
								<Option value="Changing Method">
									Changing Method
								</Option>
								<Option value="Changing Clinic">
									Changing Clinic
								</Option>
								<Option value="Dropout/Restart">
									Dropout/Restart
								</Option>
							</Select>
						</Form.Item>
					)}
					<Form.Item
						label="Reason For FP"
						name="reasonForFP"
						className="col-3 col-md-6 col-sm-12 p-half"
						rules={[
							{
								required: true,
								message:
									"Please select reason for familly planning!",
							},
						]}
					>
						<Select>
							<Option value="Spacing">Spacing</Option>
							<Option value="Limiting">Limiting</Option>
							<Option value="Others">Others</Option>
						</Select>
					</Form.Item>
					<Form.Item
						label="Reason"
						name="reason"
						className="col-3 col-md-6 col-sm-12 p-half"
						rules={[
							{
								required: true,
								message: "Please select reason!",
							},
						]}
					>
						<Select>
							<Option value="Medical Condition">
								Medical Condition
							</Option>
							<Option value="Side Effects">
								Side Effects
							</Option>
						</Select>
					</Form.Item>

					{changingMethod === "Changing Method" && (
						<Form.Item
							label="Method currently used (for Changing Method):"
							name="methodCurrentlyUsed"
							className="col-6 col-md-12 col-sm-12 p-half"
							rules={[
								{
									required: true,
									message:
										"Please select method currently used!",
								},
							]}
						>
							<Select>
								<Option value="COC">COC</Option>
								<Option value="POP">POP</Option>
								<Option value="Injectable">
									Injectable
								</Option>
								<Option value="Implant">Implant</Option>
								<Option value="IUD-Interval">
									IUD-Interval
								</Option>
								<Option value="IUD-Post-Partum">
									IUD-Post-Partum
								</Option>
								<Option value="Condom">Condom</Option>
								<Option value="BOM/CMM">BOM/CMM</Option>
								<Option value="BBT">BBT</Option>
								<Option value="STM">STM</Option>
								<Option value="SDM">SDM</Option>
								<Option value="LAM">LAM</Option>
								<Option value="Others">Others</Option>
							</Select>
						</Form.Item>
					)}
				</div>

				<MedicalHistory />

				<ObstetricalHistory />

				<SexuallyTransmitted />

				<ViolenceAgainstWomen />

				<PhysicalExamination />

				<div className="section-container">
					<h3> ACKNOWLEDGEMENT:</h3>

					<i>
						{" "}
						This is to certify that the
						Physician/Nurse/Midwife of the clinic has fully
						explained to me the different methods available in
						family planning and I freely choose the{" "}
					</i>

					<div className="flex">
						<Form.Item
							label="Method:"
							name="methodChosen"
							className="col-6 col-md-12 col-sm-12 p-half"
							rules={[
								{
									required: true,
									message: "Please select method!",
								},
							]}
						>
							<Select>
								<Option value="COC">COC</Option>
								<Option value="POP">POP</Option>
								<Option value="Injectable">
									Injectable
								</Option>
								<Option value="Implant">Implant</Option>
								<Option value="IUD-Interval">
									IUD-Interval
								</Option>
								<Option value="IUD-Post-Partum">
									IUD-Post-Partum
								</Option>
								<Option value="Condom">Condom</Option>
								<Option value="BOM/CMM">BOM/CMM</Option>
								<Option value="BBT">BBT</Option>
								<Option value="STM">STM</Option>
								<Option value="SDM">SDM</Option>
								<Option value="LAM">LAM</Option>
								<Option value="Others">Others</Option>
							</Select>
						</Form.Item>

						<div className="flex justify-content-center">
							<Button type="primary" htmlType="submit">
								Submit{" "}
							</Button>
						</div>
					</div>
				</div>
			</Form>
		</div>
	);
};

const PhysicalExamination: React.FC = () => {
	return (
		<div className="flex-column section-container">
			<h3>V. Physical Examination </h3>

			<div className="flex">
				<Form.Item
					label="Weight (kg)"
					name="weight"
					className="col-3 col-md-6 col-sm-12 p-half"
					rules={[
						{
							required: true,
							message: "Please fill out this field!",
						},
					]}
				>
					<InputNumber />
				</Form.Item>
				<Form.Item
					label="Height (meter)"
					name="height"
					className="col-3 col-md-6 col-sm-12 p-half"
					rules={[
						{
							required: true,
							message: "Please fill out this field!",
						},
					]}
				>
					<InputNumber />
				</Form.Item>

				<Form.Item
					label="Blood presure (mmHg)"
					name="weight"
					className="col-3 col-md-6 col-sm-12 p-half"
					rules={[
						{
							required: true,
							message: "Please fill out this field!",
						},
					]}
				>
					<InputNumber />
				</Form.Item>

				<Form.Item
					label="Pulse rate/minute"
					name="pulseRate"
					className="col-3 col-md-6 col-sm-12 p-half"
					rules={[
						{
							required: true,
							message: "Please fill out this field!",
						},
					]}
				>
					<InputNumber />
				</Form.Item>

				<Form.Item
					label="skin"
					name="skin"
					className="col-4 col-md-6 col-sm-12 p-half"
					rules={[
						{
							required: true,
							message: "Please fill out this field!",
						},
					]}
				>
					<Select>
						<Option value="Normal"> Normal</Option>
						<Option value="Pale"> Pale</Option>
						<Option value="Yellowish"> Yellowish</Option>
						<Option value="Hematoma"> Hematoma</Option>
					</Select>
				</Form.Item>

				<Form.Item
					label="Conjuctiva"
					name="conjuctiva"
					className="col-4 col-md-6 col-sm-12 p-half"
					rules={[
						{
							required: true,
							message: "Please fill out this field!",
						},
					]}
				>
					<Select>
						<Option value="Normal"> Normal</Option>
						<Option value="Pale"> Pale</Option>
						<Option value="Yellowish"> Yellowish</Option>
					</Select>
				</Form.Item>

				<Form.Item
					label="Neck"
					name="neck"
					className="col-4 col-md-6 col-sm-12 p-half"
					rules={[
						{
							required: true,
							message: "Please fill out this field!",
						},
					]}
				>
					<Select>
						<Option value="Normal"> Normal</Option>
						<Option value="Neck mass"> Neck mass</Option>
						<Option value="Enlarged lymph nodes">
							{" "}
							Enlarged lymph nodes
						</Option>
					</Select>
				</Form.Item>

				<Form.Item
					label="Breast"
					name="breast"
					className="col-4 col-md-6 col-sm-12 p-half"
					rules={[
						{
							required: true,
							message: "Please fill out this field!",
						},
					]}
				>
					<Select>
						<Option value="Normal"> Normal</Option>
						<Option value="Mass"> Mass</Option>
						<Option value="Nipple discharge">
							{" "}
							Nipple discharge
						</Option>
					</Select>
				</Form.Item>

				<Form.Item
					label="Abdomen"
					name="abdomen"
					className="col-4 col-md-6 col-sm-12 p-half"
					rules={[
						{
							required: true,
							message: "Please fill out this field!",
						},
					]}
				>
					<Select>
						<Option value="Normal"> Normal</Option>
						<Option value="Abdominal mass">
							{" "}
							Abdominal mass
						</Option>
						<Option value="Varicosities">
							{" "}
							Varicosities
						</Option>
					</Select>
				</Form.Item>

				<Form.Item
					label="Extremities"
					name="extremities"
					className="col-4 col-md-6 col-sm-12 p-half"
					rules={[
						{
							required: true,
							message: "Please fill out this field!",
						},
					]}
				>
					<Select>
						<Option value="Normal"> Normal</Option>
						<Option value="Edema"> Edema</Option>
						<Option value="Varicosities">
							{" "}
							Varicosities
						</Option>
					</Select>
				</Form.Item>

				<Form.Item
					label="Pelvic examination (for IUD Acceptors)"
					name="pelvicExamination"
					className="col-8 col-md-6 col-sm-12 p-half"
					rules={[
						{
							required: true,
							message: "Please fill out this field!",
						},
					]}
				>
					<Select>
						<Option value="Normal"> Normal</Option>
						<Option value="Mass"> Mass</Option>
						<Option value="Abnormal discharge">
							{" "}
							Abnormal discharge
						</Option>
						<Option value="Cervical Abnormalities - warts">
							{" "}
							Cervical Abnormalities - warts
						</Option>
						<Option value="Cervical Abnormalities - polyp or cyst">
							{" "}
							Cervical Abnormalities - polyp or cyst
						</Option>
						<Option value="Cervical Abnormalities - inflammation or erosion">
							{" "}
							Cervical Abnormalities - inflammation or
							erosion
						</Option>
						<Option value="Cervical Abnormalities - bloody discharge">
							{" "}
							Cervical Abnormalities - bloody discharge
						</Option>

						<Option value="Cervical Consistency - firm">
							{" "}
							Cervical Consistency - firm
						</Option>
						<Option value="Cervical Consistency - soft">
							{" "}
							Cervical Consistency - soft
						</Option>

						<Option value="Cervical tenderness">
							{" "}
							Cervical tenderness
						</Option>

						<Option value="Adnesal mass / tenderness">
							{" "}
							Adnesal mass / tenderness
						</Option>

						<Option value="Uterine position - mid">
							{" "}
							Uterine position - mid
						</Option>
						<Option value="Uterine position - anteflexed">
							{" "}
							Uterine position - anteflexed
						</Option>
						<Option value="Uterine position - retroflexed">
							{" "}
							Uterine position - retroflexed
						</Option>
					</Select>
				</Form.Item>
				<Form.Item
					label="Uterine depth (cm)"
					name="uterineDepth"
					className="col-4 col-md-6 col-sm-12 p-half"
				>
					<InputNumber />
				</Form.Item>
			</div>
		</div>
	);
};

const ViolenceAgainstWomen: React.FC = () => {
	return (
		<div className="flex-column section-container">
			<h3>IV. Risks for Violence Against Women (VAW) </h3>
			<h5>
				Does the client or the client's partner have any of the
				following?
			</h5>
			<div className="flex">
				<Form.Item
					label="Unpleasant relationship with partner"
					name="unpleasantRelationShip"
					className="col-6 col-md-12 col-sm-12 p-half"
					rules={[
						{
							required: true,
							message: "Please fill out this field!",
						},
					]}
				>
					<Radio.Group>
						<Radio.Button value="Yes">Yes</Radio.Button>
						<Radio.Button value="No">No</Radio.Button>
					</Radio.Group>
				</Form.Item>
				<Form.Item
					label="Parner does not approve of the visit to FP clinic?"
					name="FPClinicVisit"
					className="col-6 col-md-12 col-sm-12 p-half"
					rules={[
						{
							required: true,
							message: "Please fill out this field!",
						},
					]}
				>
					<Radio.Group>
						<Radio.Button value="Yes">Yes</Radio.Button>
						<Radio.Button value="No">No</Radio.Button>
					</Radio.Group>
				</Form.Item>

				<Form.Item
					label="History of domestic violence or VAW?"
					name="historyOfDomesticViolence"
					className="col-6 col-md-12 col-sm-12 p-half"
					rules={[
						{
							required: true,
							message: "Please fill out this field!",
						},
					]}
				>
					<Radio.Group>
						<Radio.Button value="Yes">Yes</Radio.Button>
						<Radio.Button value="No">No</Radio.Button>
					</Radio.Group>
				</Form.Item>

				<Form.Item
					label="Reffered to"
					name="referredTo"
					className="col-6 col-md-12 col-sm-12 p-half"
					rules={[
						{
							required: true,
							message: "Please fill out this field!",
						},
					]}
				>
					<Select>
						<Option value="DSWD"> DSWD</Option>
						<Option value="WCPU"> WCPU</Option>
						<Option value="NGOs"> NGOs</Option>
						<Option value="Others"> Others</Option>
					</Select>
				</Form.Item>
			</div>
		</div>
	);
};

const SexuallyTransmitted: React.FC = () => {
	const [
		abnormalDischarge,
		setAbnormalDischarge,
	] = useState<SelectValue | null>(null);

	return (
		<div className="flex-column section-container">
			<h3>III. Risks for Sexually Transmitted Infections </h3>
			<h5>
				Does the client or the client's partner have any of the
				following?
			</h5>
			<div className="flex">
				<Form.Item
					label="Abnormal discharge from the genital area"
					name="sexuallyAbnormalDischarge"
					className="col-6 col-md-12 col-sm-12 p-half"
					rules={[
						{
							required: true,
							message: "Please fill out this field!",
						},
					]}
				>
					<Select onChange={(val) => setAbnormalDischarge(val)}>
						<Option value="Yes"> Yes</Option>
						<Option value="No"> No</Option>
					</Select>
				</Form.Item>
				{abnormalDischarge === "Yes" && (
					<Form.Item
						label="Abnormal Discharge from?"
						name="abnormalDischargeFrom"
						className="col-3 col-md-12 col-sm-12 p-half"
						rules={[
							{
								required: true,
								message: "Please fill out this field!",
							},
						]}
					>
						<Select>
							<Option value="Penis"> Penis</Option>
							<Option value="Vagina"> Vagina</Option>
						</Select>
					</Form.Item>
				)}

				<Form.Item
					label="Sores or ulcers in the genital area"
					name="genitalAreaSores"
					className="col-6 col-md-12 col-sm-12 p-half"
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
					label="Pain or burning sensation in the genital area"
					name="genitalAreaPain"
					className="col-6 col-md-12 col-sm-12 p-half"
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
					label="History of treatment for sexually transmitted infections"
					name="sexuallyTransmittedInfections"
					className="col-6 col-md-12 col-sm-12 p-half"
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
					label="HIV / AIDS / Pelvic inflammatory disease"
					name="hiv"
					className="col-6 col-md-12 col-sm-12 p-half"
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
		</div>
	);
};

const ObstetricalHistory: React.FC = () => (
	<div className="flex-column section-container">
		<h3>II. Obstetrical History </h3>
		<div className="flex">
			<Form.Item
				label="Number of pregnancies (G)"
				name="numberOfPregnanciesG"
				className="col-3 col-md-12 col-sm-12 p-half"
				rules={[
					{
						required: true,
						message: "Please fill out this field!",
					},
				]}
			>
				<InputNumber placeholder="1" />
			</Form.Item>
			<Form.Item
				label="Number of pregnancies (P)"
				name="numberOfPregnanciesP"
				className="col-3 col-md-12 col-sm-12 p-half"
				rules={[
					{
						required: true,
						message: "Please fill out this field!",
					},
				]}
			>
				<InputNumber placeholder="1" />
			</Form.Item>
			<Form.Item
				label="Full term"
				name="fullTerm"
				className="col-3 col-md-12 col-sm-12 p-half"
				rules={[
					{
						required: true,
						message: "Please fill out this field!",
					},
				]}
			>
				<InputNumber placeholder="1" />
			</Form.Item>
			<Form.Item
				label="Premature"
				name="premature"
				className="col-3 col-md-12 col-sm-12 p-half"
				rules={[
					{
						required: true,
						message: "Please fill out this field!",
					},
				]}
			>
				<InputNumber placeholder="1" />
			</Form.Item>
			<Form.Item
				label="Abortion"
				name="abortion"
				className="col-3 col-md-12 col-sm-12 p-half"
				rules={[
					{
						required: true,
						message: "Please fill out this field!",
					},
				]}
			>
				<InputNumber placeholder="1" />
			</Form.Item>
			<Form.Item
				label="Living children"
				name="livingChildren"
				className="col-3 col-md-12 col-sm-12 p-half"
				rules={[
					{
						required: true,
						message: "Please fill out this field!",
					},
				]}
			>
				<InputNumber placeholder="1" />
			</Form.Item>
			<Form.Item
				label="Date of last delivery"
				name="dateOfLastDelivery"
				className="col-3 col-md-12 col-sm-12 p-half"
				rules={[
					{
						required: true,
						message: "Please fill out this field!",
					},
				]}
			>
				<DatePicker />
			</Form.Item>
			<Form.Item
				label="Type of last delivery"
				name="typeOfLastDelivery"
				className="col-3 col-md-12 col-sm-12 p-half"
				rules={[
					{
						required: true,
						message: "Please fill out this field!",
					},
				]}
			>
				<Select>
					<Option value="Vaginal"> Vaginal</Option>
					<Option value="Cesarean Section">
						Cesarean Section
					</Option>
				</Select>
			</Form.Item>

			<Form.Item
				label="Last mentrual period"
				name="dateOfLastMenstrualPeriod"
				className="col-3 col-md-12 col-sm-12 p-half"
				rules={[
					{
						required: true,
						message: "Please fill out this field!",
					},
				]}
			>
				<DatePicker />
			</Form.Item>
			<Form.Item
				label="Previous mentrual period"
				name="previousfLastMenstrualPeriod"
				className="col-3 col-md-12 col-sm-12 p-half"
				rules={[
					{
						required: true,
						message: "Please fill out this field!",
					},
				]}
			>
				<DatePicker />
			</Form.Item>

			<Form.Item
				label="Mestrual flow"
				name="typeOfLastDelivery"
				className="col-3 col-md-12 col-sm-12 p-half"
				rules={[
					{
						required: true,
						message: "Please fill out this field!",
					},
				]}
			>
				<Select>
					<Option value="Scanty (1-2 pads per day)">
						{" "}
						Scanty (1-2 pads per day)
					</Option>
					<Option value="Moderate (3-5 pads per day)">
						Moderate (3-5 pads per day)
					</Option>
					<Option value="Heavy (> 5 pads per day)">
						Heavy ( &gt; 5 pads per day)
					</Option>
				</Select>
			</Form.Item>

			<Form.Item
				label="Dysmenorrhea"
				name="dysmenorrhea"
				className="col-4 col-md-12 col-sm-12 p-half"
				rules={[
					{
						required: true,
						message: "Please fill out this field!",
					},
				]}
			>
				<Radio.Group>
					<Radio.Button value="Yes">Yes</Radio.Button>
					<Radio.Button value="No">No</Radio.Button>
				</Radio.Group>
			</Form.Item>

			<Form.Item
				label="	Hydatidiform mole (within the last 12 months)"
				name="Hydatidiform"
				className="col-4 col-md-12 col-sm-12 p-half"
				rules={[
					{
						required: true,
						message: "Please fill out this field!",
					},
				]}
			>
				<Radio.Group>
					<Radio.Button value="Yes">Yes</Radio.Button>
					<Radio.Button value="No">No</Radio.Button>
				</Radio.Group>
			</Form.Item>

			<Form.Item
				label="History of ectopic pregnancy"
				name="ectopic"
				className="col-4 col-md-12 col-sm-12 p-half"
				rules={[
					{
						required: true,
						message: "Please fill out this field!",
					},
				]}
			>
				<Radio.Group>
					<Radio.Button value="Yes">Yes</Radio.Button>
					<Radio.Button value="No">No</Radio.Button>
				</Radio.Group>
			</Form.Item>
		</div>
	</div>
);

const MedicalHistory: React.FC = () => (
	<div className="flex-column section-container">
		<h3>I. Medical History</h3>
		<h5> Does the client have any of the following?</h5>
		<div className="flex">
			<Form.Item
				label="Severe headaches / migraine"
				name="severeHeadaches"
				className="col-6 col-md-12 col-sm-12 p-half"
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
				label="History of stroke / heart attack / hypertension"
				name="stroke"
				className="col-6 col-md-12 col-sm-12 p-half"
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
				label="Non-traumatic hematoma / frequent bruising or gum bleeding"
				name="nonTraumatic"
				className="col-6 col-md-12 col-sm-12 p-half"
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
				label="Current or history of breast cancer / breast mass"
				name="breastCancer"
				className="col-6 col-md-12 col-sm-12 p-half"
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
				label="Severe chest pain"
				name="severeChestPain"
				className="col-6 col-md-12 col-sm-12 p-half"
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
				label="Cough for more than 14 days"
				name="cough"
				className="col-6 col-md-12 col-sm-12 p-half"
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
				label="Jaundice"
				name="jaundice"
				className="col-6 col-md-12 col-sm-12 p-half"
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
				label="Unexplained vaginal bleeding"
				name="vaginalBleeding"
				className="col-6 col-md-12 col-sm-12 p-half"
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
				label="Abnormal vaginal discharge"
				name="vaginalDischarge"
				className="col-6 col-md-12 col-sm-12 p-half"
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
				label="Intake of phenobarbital (anti-seizure) or nfampicin (anti-TB)"
				name="phenobarbital"
				className="col-6 col-md-12 col-sm-12 p-half"
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
				label="Smoker?"
				name="smoker"
				className="col-6 col-md-12 col-sm-12 p-half"
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
				label="With disability?"
				name="withDisability"
				className="col-6 col-md-12 col-sm-12 p-half"
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
	</div>
);

export default FamilyPlanningForm;
