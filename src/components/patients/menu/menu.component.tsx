import React from "react";
import { Drawer, Menu } from "antd";
import { NavLink } from "react-router-dom";

interface Props {
	visible: boolean;
	onClose: () => void;
}
const PatientMenu: React.FC<Props> = ({ visible, onClose }) => {
	return (
		<>
			<Drawer
				title="E-Management System for Brgy. Health Center"
				placement="left"
				closable={false}
				visible={visible}
				onClose={onClose}
				style={{ padding: 0 }}
			>
				<Menu
					style={{ width: "100%" }}
					defaultSelectedKeys={["1"]}
					defaultOpenKeys={["sub1"]}
					mode="inline"
				>
					<Menu.Item key="1">
						<NavLink to="/patients/consultations">
							Consultation
						</NavLink>
					</Menu.Item>
					<Menu.Item key="2">
						<NavLink to="/patients/my-schedules">
							My Schedules
						</NavLink>
					</Menu.Item>
					<Menu.Item key="3">
						<NavLink to="/patients/my-account">
							My Account
						</NavLink>
					</Menu.Item>
					<Menu.Item key="4">
						<NavLink to="/patients/logout">Logout</NavLink>
					</Menu.Item>
				</Menu>
			</Drawer>
		</>
	);
};

export default PatientMenu;
