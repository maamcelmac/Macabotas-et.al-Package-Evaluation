import React, { useState } from "react";
import { Menu } from "antd";
import Logo from "../../../assets/logo.png";
const Sidebar: React.FC = () => {
	const [collapse, setCollapse] = useState(false);

	const toggleCollapsed = () => {
		setCollapse(!collapse);
	};

	return (
		<div className="main-sidebar">
			<div className="logo-container">
				<img src={Logo} alt="Logo" width="75" />
			</div>
			<Menu
				defaultSelectedKeys={["1"]}
				defaultOpenKeys={["sub1"]}
				mode="inline"
				theme="dark"
			>
				<Menu.Item key="1">Dashboard</Menu.Item>
				<Menu.Item key="2">Forms</Menu.Item>
				<Menu.Item key="3">Patients</Menu.Item>
			</Menu>
		</div>
	);
};

export default Sidebar;
