import React from "react";
import { Menu } from "antd";
import {
	BarChartOutlined,
	FormOutlined,
	UsergroupAddOutlined,
	CalendarOutlined,
	CopyOutlined,
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
				<Menu.Item key="1" icon={<BarChartOutlined />}>
					<NavLink to="/admin/dashboard">Dashboard</NavLink>
				</Menu.Item>
				<Menu.Item key="2" icon={<FormOutlined />}>
					<NavLink to="/admin/consultations/family-planning">
						Consultations
					</NavLink>
				</Menu.Item>
				<Menu.Item key="3" icon={<UsergroupAddOutlined />}>
					<NavLink to="/admin/patients">Patients</NavLink>
				</Menu.Item>
				<Menu.Item key="4" icon={<CalendarOutlined />}>
					<NavLink to="/admin/schedules">Schedules</NavLink>
				</Menu.Item>
				<Menu.Item key="5" icon={<CopyOutlined />}>
					<NavLink to="/admin/reports">Reports</NavLink>
				</Menu.Item>
			</Menu>
		</div>
	);
};

export default Sidebar;
