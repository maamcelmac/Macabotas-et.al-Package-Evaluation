import React, { useState } from "react";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

const ConsultationMenu: React.FC = () => {
	const [key, setKey] = useState<string>("1");
	return (
		<Menu
			selectedKeys={[key]}
			onClick={(e) => {
				const newKey = e.key.toString();
				console.log();
				setKey(newKey);
			}}
			mode="horizontal"
		>
			<Menu.Item key="1">
				<NavLink to="/admin/consultations/family-planning">
					{" "}
					Family Planning{" "}
				</NavLink>{" "}
			</Menu.Item>
			<Menu.Item key="2">
				{" "}
				<NavLink to="/admin/consultations/obstetric">
					{" "}
					Obstetric and Gynecological
				</NavLink>{" "}
			</Menu.Item>
			<Menu.Item key="3">
				{" "}
				<NavLink to="/admin/consultations/individual-treatment">
					{" "}
					Individual Treatment{" "}
				</NavLink>{" "}
			</Menu.Item>
			<Menu.Item key="4">
				{" "}
				<NavLink to="/admin/consultations/cancer-control">
					{" "}
					Cancer Control and Prevention Program{" "}
				</NavLink>{" "}
			</Menu.Item>
			<Menu.Item key="5">
				{" "}
				<NavLink to="/admin/consultations/nutritionist">
					{" "}
					Nutritionist
				</NavLink>{" "}
			</Menu.Item>
		</Menu>
	);
};

export default ConsultationMenu;
