import React, { lazy, Suspense } from "react";
import Spinner from "./components/hoc/spinner/spinner.component";
import ErrorBoundary from "./components/hoc/error-boundary/error-boundary.component";
const SecretaryRoutes = lazy(() => import("./routes/secretary.routes"));
const Dashboard = lazy(
	() => import("./pages/secretary/dashboard/dashboard.page")
);

const App: React.FC = () => {
	return (
		<>
			<Suspense fallback={<Spinner />}>
				<ErrorBoundary>
					<SecretaryRoutes />
				</ErrorBoundary>
			</Suspense>
		</>
	);
};

export default App;
