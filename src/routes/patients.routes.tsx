import React, { lazy, useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import PatientMenu from "../components/patients/menu/menu.component";
const ConsultationsPage = lazy(
	() => import("../pages/patients/consultations/consultations.page")
);
const MySchedulesPage = lazy(
	() => import("../pages/patients/my-schedules/my-schedules.page")
);

const SecretaryRoutes: React.FC = () => {
	const location = useLocation();
	const [menuVisible, setMenuVisible] = useState<boolean>(false);

	useEffect(() => {
		setMenuVisible(false);
	}, [location]);

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
				<h3> E-Management System for Brgy. Health Center</h3>

				<PatientMenu visible={menuVisible} onClose={onClose} />
			</div>
			<div className="patient-main-content">
				<Switch>
					<Route
						path="/patients/consultations"
						component={ConsultationsPage}
					/>
					<Route
						path="/patients/my-schedules"
						component={MySchedulesPage}
					/>
				</Switch>
			</div>
		</div>
	);
};

export default SecretaryRoutes;
