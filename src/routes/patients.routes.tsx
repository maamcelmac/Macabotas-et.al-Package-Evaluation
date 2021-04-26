import React, { lazy, useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import PatientMenu from "../components/patients/menu/menu.component";
const ConsultationsPage = lazy(
	() => import("../pages/patients/consultations/consultations.page")
);
const MySchedulesPage = lazy(
	() => import("../pages/patients/my-schedules/my-schedules.page")
);

const SecretaryRoutes: React.FC = () => {
	const location = useLocation();
	const [menuVisible, setMenuVisible] = useState<boolean>(false);

	useEffect(() => {
		setMenuVisible(false);
	}, [location]);

	const onOpenMenu = () => {
		setMenuVisible(true);
	};
	const onClose = () => {
		setMenuVisible(false);
	};

	return (
		<div className="patient-page-wrapper">
			<MenuOutlined className="menu-btn" onClick={onOpenMenu} />

			<div className="patient-page-header">
				<h3> E-Management System for Brgy. Health Center</h3>

				<PatientMenu visible={menuVisible} onClose={onClose} />
			</div>
			<div className="patient-main-content">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Suscipit mollitia quasi optio, magni, modi dolores possimus
				nesciunt tempora dolore provident sunt veritatis nihil iusto
				ad. Eos nisi id molestiae ratione. Iusto nemo repellat ipsa
				impedit consequatur, dolores eaque totam nisi, repudiandae
				ullam inventore iure eveniet at veniam laborum quo adipisci
				rem officiis. Minima quaerat qui necessitatibus et at dicta
				doloremque. Sed sint doloremque, quos voluptas magni animi
				laborum dicta expedita dolores? A id exercitationem amet
				distinctio molestiae, excepturi voluptatum earum culpa sint
				vel numquam suscipit quas error neque. Culpa, at! Aspernatur
				illum quis quo, ipsum impedit at veniam itaque nulla
				quisquam eveniet ducimus facilis maxime harum ad? Odit
				voluptatibus minima maxime cumque quidem necessitatibus
				maiores molestias, hic minus placeat corporis. Laboriosam,
				aut commodi dolorem vero sint eaque beatae maiores? Quos
				corporis incidunt hic veniam sapiente ab aperiam iusto.
				Obcaecati animi minus reiciendis nemo corrupti blanditiis
				velit culpa consequatur voluptas cum. Lorem ipsum dolor sit
				amet consectetur, adipisicing elit. Iste architecto
				provident nisi libero excepturi sit necessitatibus at
				obcaecati! Doloremque laborum perferendis commodi inventore,
				qui deserunt aut alias nobis asperiores ducimus. Sapiente
				cum fugit voluptatibus sed laboriosam corporis atque illum
				debitis sequi. Magni, eaque? Ullam maiores, itaque expedita
				ex earum sunt nobis commodi odit rerum, aliquid obcaecati
				quia saepe at. Amet? Vitae animi autem enim quos, incidunt
				debitis voluptas laborum consequatur rem illum ad velit
				quidem error! Voluptas, molestiae? Fugiat ab, tenetur minus
				ducimus doloribus eos dolores voluptates voluptatibus at
				placeat? Culpa autem facere minima totam voluptates expedita
				nesciunt magni obcaecati reiciendis, voluptatum, minus vel
				repellat commodi, dicta quia? Harum vitae neque reiciendis,
				quis illo nulla maxime nostrum dignissimos aliquam hic.
				Sequi sint perspiciatis, labore nihil aperiam odio
				asperiores corrupti rem ipsa dicta nesciunt animi culpa
				laudantium error velit optio assumenda voluptas dolor quidem
				mollitia provident. Provident repudiandae accusantium odio
				vero. Nihil quisquam rerum facere, illo ea odit eum magnam
				nisi tempore voluptate quas dolor nulla pariatur deserunt
				vero corporis ullam vel tempora maiores a, consequatur
				sequi. Architecto ad culpa rem! Est praesentium omnis
				repellat nesciunt. Ducimus saepe illo, qui excepturi error
				quam id quaerat, tenetur quidem provident iste sed delectus
				vero corrupti minus laboriosam expedita ad ipsa incidunt,
				sint voluptate? Vero quod quis itaque temporibus, impedit
				iste vel nobis amet voluptas esse, unde sequi fugiat. Nemo
				aperiam, provident voluptate, reprehenderit a repellendus
				voluptatibus nostrum laudantium similique quam impedit illum
				sit. Nobis eligendi, illum accusamus asperiores quia odio,
				cum eos nesciunt eaque error optio? Atque corrupti, dolorem
				laborum placeat soluta qui vitae incidunt iste perspiciatis
				cum. Magni tenetur repellat doloremque quisquam. Cum placeat
				eveniet nihil natus corrupti et magni dolorum
				necessitatibus, nemo iste voluptatum exercitationem neque
				adipisci eos id officiis nam repudiandae vel eligendi
				incidunt sit sunt. Error voluptas assumenda distinctio.
				<Switch>
					<Route
						path="/patients/consultations"
						component={ConsultationsPage}
					/>
					<Route
						path="/patients/my-schedules"
						component={MySchedulesPage}
					/>
				</Switch>
			</div>
		</div>
	);
};

export default SecretaryRoutes;
