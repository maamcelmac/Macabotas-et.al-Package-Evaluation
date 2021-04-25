import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";
import Sidebar from "../components/secretary/sidebar/sidebar.component";
import Navbar from "../components/secretary/navbar/navbar.component";
import FamilyPlanningPage from "../pages/secretary/consultations/family-planning.page";

const DashboardPage = lazy(
	() => import("../pages/secretary/dashboard/dashboard.page")
);
const ConsultationsPage = lazy(
	() => import("../pages/secretary/consultations/consultations.page")
);

const PatientsPage = lazy(
	() => import("../pages/secretary/patients/patients.page")
);
const SchedulesPage = lazy(
	() => import("../pages/secretary/schedules/schedules.page")
);
const ReportsPage = lazy(
	() => import("../pages/secretary/reports/reports.page")
);

const FamilyPlanningForm = lazy(
	() =>
		import(
			"../pages/secretary/consultation-forms/family-planning-form.page"
		)
);

const ObstetricForm = lazy(
	() => import("../pages/secretary/consultation-forms/obstetitric-form.page")
);

const CancerControlForm = lazy(
	() =>
		import(
			"../pages/secretary/consultation-forms/cancer-control-form.page"
		)
);

const IndividualFormPage = lazy(
	() => import("../pages/secretary/consultation-forms/individual-form.page")
);

const SecretaryRoutes: React.FC = () => {
	return (
		<div className="admin-page-wrapper">
			<Navbar />
			<div className="main-content-wrapper">
				<Sidebar />

				<div className="main-content">
					<Switch>
						<Route
							path="/admin/dashboard"
							component={DashboardPage}
						/>
						<Route
							path="/admin/consultations"
							component={ConsultationsPage}
						/>
						<Route
							path="/admin/patients"
							component={PatientsPage}
						/>
						<Route
							path="/admin/schedules"
							component={SchedulesPage}
						/>
						<Route
							path="/admin/reports"
							component={ReportsPage}
						/>

						<Route
							path="/admin/forms/family-planning"
							component={FamilyPlanningForm}
						/>
						<Route
							path="/admin/forms/obstetric"
							component={ObstetricForm}
						/>
						<Route
							path="/admin/forms/cancer-control"
							component={CancerControlForm}
						/>
						<Route
							path="/admin/forms/individual-treatment"
							component={IndividualFormPage}
						/>
					</Switch>
				</div>
			</div>
		</div>
	);
};

export default SecretaryRoutes;
