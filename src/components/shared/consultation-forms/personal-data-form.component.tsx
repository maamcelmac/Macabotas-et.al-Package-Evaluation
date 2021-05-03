import React from "react";
import { Form, Input } from "antd";
const PersonalDataForm: React.FC = () => {
	return (
		<div className="flex">
			<Form.Item
				hidden
				label="type"
				name="type"
				className="col-4 col-md-6 col-sm-12 p-half"
			>
				<Input />
			</Form.Item>
			<Form.Item
				label="First Name"
				name="fname"
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
				label="Middle Name"
				name="mname"
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
				label="Last Name"
				name="lname"
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
				label="Birthdate"
				name="birthdate"
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
				label="Educational Attainment"
				name="educationalAttainment"
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
				label="Occupation"
				name="occupation"
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
				label="Address Line"
				name="address"
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
				label="Street"
				name="street"
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
				label="Brgy."
				name="brgy"
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
				label="City/Municipality"
				name="city_municipality"
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
				label="Province"
				name="province"
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
				label="Contact Number"
				name="phoneNumber"
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
				label="Civil Status"
				name="civilStatus"
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
				label="Religion"
				name="religion"
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
				label="Phil Health #"
				name="philHealthNumber"
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
		</div>
	);
};

export default PersonalDataForm;
