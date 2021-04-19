import React, { lazy } from "react";
import { Card } from "antd";
import { Switch, Route } from "react-router-dom";
import ConsultationMenu from "../../../components/secretary/consultation-menu/consultation-menu.component";
const FamilyPlanningPage = lazy(() => import("./family-planning.page"));
const CancerControlPage = lazy(() => import("./cancer-control.page"));
const IndividualTreatmentPage = lazy(
	() => import("./individual-treatment.page")
);
const ObstetricPage = lazy(() => import("./obstetric.page"));
const NutritionistPage = lazy(() => import("./nutritionist.page"));

const ConsulationsPage: React.FC = () => {
	return (
		<div>
			<ConsultationMenu />

			<Card>
				<Switch>
					<Route
						path="/admin/consultations/family-planning"
						component={FamilyPlanningPage}
					/>
					<Route
						path="/admin/consultations/cancer-control"
						component={CancerControlPage}
					/>
					<Route
						path="/admin/consultations/individual-treatment"
						component={IndividualTreatmentPage}
					/>
					<Route
						path="/admin/consultations/obstetric"
						component={ObstetricPage}
					/>
					<Route
						path="/admin/consultations/nutritionist"
						component={NutritionistPage}
					/>
				</Switch>
			</Card>
		</div>
	);
};

export default ConsulationsPage;
