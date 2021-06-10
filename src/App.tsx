import React, { lazy, Suspense, useEffect } from "react";
import Spinner from "./components/hoc/spinner/spinner.component";
import ErrorBoundary from "./components/hoc/error-boundary/error-boundary.component";
import { Route, Switch } from "react-router-dom";
import setAuthToken from "./utils/setAuthToken";
import PatientLoginPage from "./pages/patients/login-form/login.page";

const SecretaryRoutes = lazy(() => import("./routes/secretary.routes"));

const LoginPage = lazy(() => import("./pages/secretary/login/login.page"));

const PatientRegistrationPage = lazy(
	() => import("./pages/patients/registration-form/registration.page")
);

const PatientsRoutes = lazy(() => import("./routes/patients.routes"));

const DoctorRoutes = lazy(() => import("./routes/doctor.routes"));
const DoctorLogin = lazy(() => import("./pages/doctor/login/login.page"));

const App: React.FC = () => {
	useEffect(() => {
		setAuthToken(localStorage.getItem("atkn"));
	}, []);
	return (
		<>
			<Suspense fallback={<Spinner />}>
				<ErrorBoundary>
					<Switch>
						<Route path="/admin" component={SecretaryRoutes} />
						<Route path="/login" component={LoginPage} />

						<Route path="/patients" component={PatientsRoutes} />
						<Route
							path="/patient-login"
							component={PatientLoginPage}
						/>

						<Route path="/doctor" component={DoctorRoutes} />
						<Route path="/doctor-login" component={DoctorLogin} />

						<Route
							path="/patient-registration"
							component={PatientRegistrationPage}
						/>
					</Switch>
				</ErrorBoundary>
			</Suspense>
		</>
	);
};

export default App;
