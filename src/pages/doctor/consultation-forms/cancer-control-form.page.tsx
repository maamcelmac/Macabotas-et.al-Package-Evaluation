import React, { useEffect } from "react";
import { Card, Skeleton } from "antd";
import CancerControlForm from "../../../components/shared/consultation-forms/cancer-control-form.component";
import {
	getOneAppointment,
	updateAppointment,
} from "../../../redux/appointments/appointments.slice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useParams, useHistory } from "react-router-dom";
import { notify } from "../../../components/global/alerts/alerts.component";

const CancerControlFormPage: React.FC = () => {
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
				<Card title="Cancer Control & Prevention Program">
					<CancerControlForm
						userType="doctor"
						initialValues={appointment?.consultationForm}
						onSubmit={(val: object | any) => {
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

export default CancerControlFormPage;
