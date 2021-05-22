import React, { useEffect } from "react";
import { Card, Skeleton } from "antd";
import Nutritionist from "../../../components/shared/consultation-forms/nutritionist-form.component";
import {
	getOneAppointment,
	updateAppointment,
} from "../../../redux/appointments/appointments.slice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useParams, useHistory } from "react-router-dom";
import { notify } from "../../../components/global/alerts/alerts.component";

const NutritionistPage: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const history = useHistory();
	const dispatch = useAppDispatch();
	const appointment = useAppSelector((state) => state?.appointments?.current);

	useEffect(() => {
		if (!id) return;
		dispatch(getOneAppointment(id));
	}, [dispatch, id]);
	return (
		<Skeleton active loading={!appointment}>
			<div>
				<Card title="Nutritionist Form">
					<Nutritionist
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
										notify(
											"Appointment Updated!",
											"success"
										);
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
		</Skeleton>
	);
};

export default NutritionistPage;
