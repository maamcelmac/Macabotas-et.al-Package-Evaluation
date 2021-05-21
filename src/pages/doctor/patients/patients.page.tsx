import React, { useEffect } from "react";
import PatientsTable from "../../../components/secretary/patients-table/patients-table.component";
import { Card, Skeleton } from "antd";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getPatients } from "../../../redux/patients/patients.slice";
const PatientsPage: React.FC = () => {
	const dispatch = useAppDispatch();
	const patients = useAppSelector((state) => state.patients);

	useEffect(() => {
		dispatch(getPatients());
	}, [dispatch]);
	return (
		<div>
			<Card title="Patients">
				<Skeleton loading={patients?.loading}>
					<PatientsTable data={patients?.patients} />
				</Skeleton>
			</Card>
		</div>
	);
};

export default PatientsPage;
