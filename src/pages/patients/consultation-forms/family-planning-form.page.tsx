import React from "react";
import { Card } from "antd";
import FamilyPlanningForm from "../../../components/shared/consultation-forms/family-planning.component";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { createAppointment } from "../../../redux/appointments/appointments.slice";
import { useParams, Link, useHistory } from "react-router-dom";
import { notify } from "../../../components/global/alerts/alerts.component";
import { PatientInfo } from "../../../types/Interfaces";
import { ArrowLeftOutlined } from "@ant-design/icons";
const FamilyPlanningFormPage: React.FC = () => {
	const params: string | any = useParams();
	const dispatch = useAppDispatch();
	const currentUser: PatientInfo | any = useAppSelector(
		(state) => state.auth.user
	);

	const history = useHistory();
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
							Family Planning
						</div>
					}
				>
					<FamilyPlanningForm
						initialValues={
							currentUser && {
								...currentUser?.familyPlanning,
								type: "Family Planning",
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
										history.push(
											"/patients/my-schedules"
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

export default FamilyPlanningFormPage;
