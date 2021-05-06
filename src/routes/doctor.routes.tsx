import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";
import Sidebar from "../components/doctor/sidebar/sidebar.component";
import Navbar from "../components/doctor/navbar/navbar.component";

const SchedulesPage = lazy(
	() => import("../pages/doctor/schedules/schedules.page")
);

const SecretaryRoutes: React.FC = () => {
	return (
		<div className="admin-page-wrapper">
			<Navbar />
			<div className="main-content-wrapper">
				<Sidebar />

				<div className="main-content">
					<Switch>
						{/* 						
						<Route
							path="/doctor/consultations"
							component={ConsultationsPage}
						/>
						<Route
							path="/doctor/patients"
							component={PatientsPage}
						/> */}
						<Route
							path="/doctor/schedules"
							component={SchedulesPage}
						/>
						{/* <Route
							path="/doctor/reports"
							component={ReportsPage}
						/>

						<Route
							path="/doctor/forms/family-planning"
							component={FamilyPlanningForm}
						/>
						<Route
							path="/doctor/forms/obstetric"
							component={ObstetricForm}
						/>
						<Route
							path="/doctor/forms/cancer-control"
							component={CancerControlForm}
						/>
						<Route
							path="/doctor/forms/individual-treatment"
							component={IndividualFormPage}
						/>
						<Route
							path="/doctor/forms/nutritionist"
							component={NutritionistPage}
						/> */}
					</Switch>
				</div>
			</div>
		</div>
	);
};

export default SecretaryRoutes;
