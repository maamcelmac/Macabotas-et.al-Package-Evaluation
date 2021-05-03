import React, { lazy, useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import PatientMenu from "../components/patients/menu/menu.component";
import { login, getPatientLoggedIn } from "../redux/auth/auth.slice";
import { notify } from "../components/global/alerts/alerts.component";
import setAuthToken from "../utils/setAuthToken";
import { useHistory } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";

const ConsultationsPage = lazy(
	() => import("../pages/patients/consultations/consultations.page")
);
const MySchedulesPage = lazy(
	() => import("../pages/patients/my-schedules/my-schedules.page")
);
const FamilyPlanningForm = lazy(
	() =>
		import(
			"../pages/patients/consultation-forms/family-planning-form.page"
		)
);
const ObstetricForm = lazy(
	() => import("../pages/patients/consultation-forms/obstetitric-form.page")
);
const CancerControlForm = lazy(
	() =>
		import(
			"../pages/patients/consultation-forms/cancer-control-form.page"
		)
);
const IndividualFormPage = lazy(
	() => import("../pages/patients/consultation-forms/individual-form.page")
);
const NutritionistPage = lazy(
	() => import("../pages/patients/consultation-forms/nutritionist-form.page")
);

const MyAccountPage = lazy(
	() => import("../pages/patients/my-account/my-account.page")
);

const token = localStorage.getItem("patient-token");
const SecretaryRoutes: React.FC = () => {
	const location = useLocation();
	const dispatch = useAppDispatch();
	const history = useHistory();
	const [menuVisible, setMenuVisible] = useState<boolean>(false);

	useEffect(() => {
		setMenuVisible(false);
	}, [location]);

	useEffect(() => {
		if (token) {
			setAuthToken(token);

			dispatch(getPatientLoggedIn(() => {}));
		} else {
			history.push("/patient-login");
		}
	}, [token, dispatch]);

	const onOpenMenu = () => {
		setMenuVisible(true);
	};
	const onClose = () => {
		setMenuVisible(false);
	};

	return (
		<div className="patient-page-wrapper">
			<MenuOutlined className="menu-btn" onClick={onOpenMenu} />

			<div className="patient-page-header">
				<h3
					onClick={() => {
						history.push("/patients/consultations");
					}}
				>
					{" "}
					E-Management System for Brgy. Health Center
				</h3>

				<PatientMenu visible={menuVisible} onClose={onClose} />
			</div>
			<div className="patient-main-content">
				<Switch>
					<Route
						path="/patients/my-schedules"
						component={MySchedulesPage}
					/>
					<Route
						path="/patients/consultations/family-planning/:id"
						component={FamilyPlanningForm}
					/>

					<Route
						path="/patients/consultations/obstetric/:id"
						component={ObstetricForm}
					/>
					<Route
						path="/patients/consultations/cancer-control/:id"
						component={CancerControlForm}
					/>
					<Route
						path="/patients/consultations/individual-treatment/:id"
						component={IndividualFormPage}
					/>
					<Route
						path="/patients/consultations/nutritionist/:id"
						component={NutritionistPage}
					/>
					<Route
						path="/patients/consultations"
						component={ConsultationsPage}
					/>
					<Route
						path="/patients/my-account"
						component={MyAccountPage}
					/>
				</Switch>
			</div>
		</div>
	);
};

export default SecretaryRoutes;
