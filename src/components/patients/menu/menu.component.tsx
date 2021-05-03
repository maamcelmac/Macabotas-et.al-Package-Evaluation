import React from "react";
import { Drawer, Menu } from "antd";
import { NavLink, useHistory } from "react-router-dom";

interface Props {
	visible: boolean;
	onClose: () => void;
}
const PatientMenu: React.FC<Props> = ({ visible, onClose }) => {
	const history = useHistory();
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
							Consultations
						</NavLink>
					</Menu.Item>
					<Menu.Item key="2">
						<NavLink to="/patients/my-schedules">
							My Appointments
						</NavLink>
					</Menu.Item>
					<Menu.Item key="3">
						<NavLink to="/patients/my-account">
							My Account
						</NavLink>
					</Menu.Item>
					<Menu.Item
						key="4"
						onClick={() => {
							localStorage.removeItem("patient-token");
							history.push("/patient-login");
						}}
					>
						Logout
					</Menu.Item>
				</Menu>
			</Drawer>
		</>
	);
};

export default PatientMenu;
