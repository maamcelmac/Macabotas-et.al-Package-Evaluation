import React, { lazy, Suspense } from "react";
import Spinner from "./components/hoc/spinner/spinner.component";
import ErrorBoundary from "./components/hoc/error-boundary/error-boundary.component";
import { Route, Switch, useLocation } from "react-router-dom";
const SecretaryRoutes = lazy(() => import("./routes/secretary.routes"));

const LoginPage = lazy(() => import("./pages/secretary/login/login.page"));

const forAdmin = ["/admin"];
const App: React.FC = () => {
	const location = useLocation();
	return (
		<>
			<Suspense fallback={<Spinner />}>
				<ErrorBoundary>
					{forAdmin.includes(location.pathname) && (
						<SecretaryRoutes />
					)}

					<Switch>
						<Route path="/login" component={LoginPage} />
					</Switch>
				</ErrorBoundary>
			</Suspense>
		</>
	);
};

export default App;
