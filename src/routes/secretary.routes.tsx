import React from "react";
import { Switch, Route } from "react-router-dom";
import Sidebar from "../components/secretary/sidebar/sidebar.component";

const SecretaryRoutes: React.FC = () => {
	return (
		<div className="admin-main-content">
			<Sidebar />
			<div className="main-content">
				<h1>
					Lorem ipsum dolor sit, amet consectetur adipisicing
					elit. Soluta nobis beatae aut, doloremque perferendis
					est! Sit, incidunt quae tenetur ad aspernatur
					recusandae repellendus laudantium explicabo quas
					repellat facilis harum voluptatum.
				</h1>
				<Switch>{/* <Route path = "/admin/dashboard"  */}</Switch>
			</div>
		</div>
	);
};

export default SecretaryRoutes;
