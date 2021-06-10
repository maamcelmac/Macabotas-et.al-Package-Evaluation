import React, { useEffect } from "react";
import { Card } from "antd";
import FamilyPlanningForm from "../../../components/shared/consultation-forms/family-planning.component";
import {
	getOneAppointment,
	updateAppointment,
} from "../../../redux/appointments/appointments.slice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useParams, useHistory } from "react-router-dom";
import { notify } from "../../../components/global/alerts/alerts.component";
const FamilyPlanningFormPage: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const history = useHistory();
	const dispatch = useAppDispatch();
	const appointment = useAppSelector((state) => state?.appointments?.current);

	useEffect(() => {
		if (!id) return;
		dispatch(getOneAppointment(id));
	}, [dispatch, id]);
	return (
		<div>
			<Card title="Family Planning">
				<FamilyPlanningForm
					userType="doctor"
					initialValues={{
						...appointment?.consultationForm,
						remarks: appointment?.remarks,
					}}
					onSubmit={(val: object | any) => {
						console.log(val);
						dispatch(
							updateAppointment(
								id,
								{
									consulationForm: val,
									remarks: val?.remarks,
								},
								() => {
									notify("Appointment Updated!", "success");
									history.push(
										`/doctor/schedules/${appointment?.schedule}`
									);
								}
							)
						);
					}}
				/>
			</Card>
		</div>
	);
};

export default FamilyPlanningFormPage;
