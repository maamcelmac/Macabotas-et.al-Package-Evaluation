import React from "react";
import Logo from "../../../assets/logo.png";
import { Button } from "antd";
const Navbar: React.FC = () => {
	return (
		<div className="main-navbar">
			<div className="logo-container">
				<img src={Logo} alt="Logo" width="35" />
				<p className="navbar-title">
					E-Management System for Brgy Health Center
				</p>
			</div>

			<div className="navbar-options">
				<Button> Logout </Button>
			</div>
		</div>
	);
};

export default Navbar;
