import React, { lazy, Suspense, useEffect } from "react";
import Spinner from "./components/hoc/spinner/spinner.component";
import ErrorBoundary from "./components/hoc/error-boundary/error-boundary.component";
import { Route, Switch, useLocation } from "react-router-dom";
import setAuthToken from "./utils/setAuthToken";
const SecretaryRoutes = lazy(() => import("./routes/secretary.routes"));

const LoginPage = lazy(() => import("./pages/secretary/login/login.page"));

const App: React.FC = () => {
	useEffect(() => {
		setAuthToken(localStorage.getItem("atkn"));
	}, []);
	const location = useLocation();
	return (
		<>
			<Suspense fallback={<Spinner />}>
				<ErrorBoundary>
					<Switch>
						<Route
							path="/admin"
							component={SecretaryRoutes}
						/>
						<Route path="/login" component={LoginPage} />
					</Switch>
				</ErrorBoundary>
			</Suspense>
		</>
	);
};

export default App;
