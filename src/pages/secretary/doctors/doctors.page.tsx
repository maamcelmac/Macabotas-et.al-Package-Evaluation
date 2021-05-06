import React, { useState, useEffect } from "react";
import DoctorsTable from "../../../components/secretary/doctors-table/doctors-table.component";
import { Card, Button, Skeleton } from "antd";
import AddDoctorForm from "../../../components/secretary/add-doctor-form/add-doctor-form";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { getDoctors } from "../../../redux/doctor/doctor.slice";

const DoctorsPage: React.FC = () => {
	const [modalVisibility, setModalVisibility] = useState<boolean>(false);
	const dispatch = useAppDispatch();
	const doctors = useAppSelector((state) => state.doctors);
	useEffect(() => {
		dispatch(getDoctors());
	}, [dispatch]);

	return (
		<div>
			<AddDoctorForm
				onCancel={() => {
					setModalVisibility(false);
				}}
				visibility={modalVisibility}
			/>
			<Card
				title="Doctors"
				extra={
					<Button
						type="primary"
						onClick={(): void => {
							setModalVisibility(true);
						}}
					>
						{" "}
						Add a Doctor
					</Button>
				}
			>
				<Skeleton loading={doctors?.loading}>
					<DoctorsTable data={doctors?.doctors} />
				</Skeleton>
			</Card>
		</div>
	);
};

export default DoctorsPage;
