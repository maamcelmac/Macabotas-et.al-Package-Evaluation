import React from "react";
import { Menu } from "antd";
import {
	FormOutlined,
	UsergroupAddOutlined,
	CalendarOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {
	return (
		<div className="main-sidebar">
			<Menu
				defaultSelectedKeys={["1"]}
				defaultOpenKeys={["sub1"]}
				style={{ width: "220px" }}
				mode="inline"
				theme="dark"
			>
				<Menu.Item key="1" icon={<CalendarOutlined />}>
					<NavLink to="/doctor/schedules">Schedules</NavLink>
				</Menu.Item>

				<Menu.Item key="2" icon={<UsergroupAddOutlined />}>
					<NavLink to="/doctor/patients">Patients</NavLink>
				</Menu.Item>
			</Menu>
		</div>
	);
};

export default Sidebar;
