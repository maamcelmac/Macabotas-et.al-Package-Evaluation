import React from "react";
import Logo from "../../../assets/logo.png";
import { Button } from "antd";
import { useHistory } from "react-router-dom";
const Navbar: React.FC = () => {
	const history = useHistory();
	return (
		<div className="main-navbar">
			<div className="logo-container">
				<img src={Logo} alt="Logo" width="35" />
				<p className="navbar-title">
					E-Management System for Brgy Health Center
				</p>
			</div>

			<div className="navbar-options">
				<Button
					onClick={() => {
						localStorage.removeItem("doctor-token");
						history.push("/doctor-login");
					}}
				>
					{" "}
					Logout{" "}
				</Button>
			</div>
		</div>
	);
};

export default Navbar;
