import React, { lazy, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Sidebar from "../components/doctor/sidebar/sidebar.component";
import Navbar from "../components/doctor/navbar/navbar.component";
import { useAppDispatch } from "../redux/hooks";
import setAuthToken from "../utils/setAuthToken";
import { getDoctorLoggedIn } from "../redux/auth/auth.slice";
import { useHistory } from "react-router-dom";
const SchedulesPage = lazy(
	() => import("../pages/doctor/schedules/schedules.page")
);

const PatientsPage = lazy(
	() => import("../pages/doctor/patients/patients.page")
);

const AppointedPatientsPage = lazy(
	() => import("../pages/doctor/appointed-patients/appointed-patients.page")
);

const FamilyPlanningForm = lazy(
	() => import("../pages/doctor/consultation-forms/family-planning-form.page")
);

const ObstetricForm = lazy(
	() => import("../pages/doctor/consultation-forms/obstetitric-form.page")
);

const CancerControlForm = lazy(
	() => import("../pages/doctor/consultation-forms/cancer-control-form.page")
);

const IndividualFormPage = lazy(
	() => import("../pages/doctor/consultation-forms/individual-form.page")
);

const NutritionistPage = lazy(
	() => import("../pages/doctor/consultation-forms/nutritionist-form.page")
);

const token = localStorage.getItem("doctor-token");
const SecretaryRoutes: React.FC = () => {
	const dispatch = useAppDispatch();
	const history = useHistory();
	useEffect(() => {
		if (token) {
			setAuthToken(token);

			dispatch(getDoctorLoggedIn(() => {}));
		} else {
			history.push("/doctor-login");
		}
	}, [token, dispatch]);
	return (
		<div className="admin-page-wrapper">
			<Navbar />
			<div className="main-content-wrapper">
				<Sidebar />

				<div className="main-content">
					<Switch>
						{/* <Route
							path="/doctor/consultations"
							component={ConsultationsPage}
						/> */}
						<Route
							path="/doctor/patients"
							component={PatientsPage}
						/>
						<Route
							path={`/doctor/schedules/:idParam`}
							component={AppointedPatientsPage}
						/>
						<Route
							path="/doctor/schedules"
							component={SchedulesPage}
						/>

						<Route
							path="/doctor/forms/family-planning/:id"
							component={FamilyPlanningForm}
						/>
						<Route
							path="/doctor/forms/obstetric/:id"
							component={ObstetricForm}
						/>
						<Route
							path="/doctor/forms/cancer-control/:id"
							component={CancerControlForm}
						/>
						<Route
							path="/doctor/forms/individual-treatment/:id"
							component={IndividualFormPage}
						/>
						<Route
							path="/doctor/forms/nutritionist/:id"
							component={NutritionistPage}
						/>
					</Switch>
				</div>
			</div>
		</div>
	);
};

export default SecretaryRoutes;
