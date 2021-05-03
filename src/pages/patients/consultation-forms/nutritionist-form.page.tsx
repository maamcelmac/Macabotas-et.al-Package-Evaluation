import React from "react";
import { Card } from "antd";
import Nutritionist from "../../../components/shared/consultation-forms/nutritionist-form.component";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { createAppointment } from "../../../redux/appointments/appointments.slice";
import { useParams, Link } from "react-router-dom";
import { notify } from "../../../components/global/alerts/alerts.component";
import { PatientInfo } from "../../../types/Interfaces";
import { ArrowLeftOutlined } from "@ant-design/icons";
const NutritionistPage: React.FC = () => {
	const params: string | any = useParams();
	const dispatch = useAppDispatch();
	const currentUser: PatientInfo | any = useAppSelector(
		(state) => state.auth.user
	);
	return (
		currentUser &&
		currentUser && (
			<div>
				<Card
					title={
						<div className="flex-unwrap align-items-flex-center">
							{" "}
							<Link to="/patients/consultations">
								<ArrowLeftOutlined className="mr-1" />
							</Link>
							Nutrionist Form
						</div>
					}
				>
					<Nutritionist
						initialValues={
							currentUser && {
								...currentUser?.nutritionist,
								type: "Nutritionist",
								...currentUser,
							}
						}
						onSubmit={(val: object) => {
							dispatch(
								createAppointment(
									params.id,
									currentUser._id,
									val,
									() => {
										notify(
											"Appointment created.",
											"success"
										);
									}
								)
							);
						}}
					/>
				</Card>
			</div>
		)
	);
};

export default NutritionistPage;
