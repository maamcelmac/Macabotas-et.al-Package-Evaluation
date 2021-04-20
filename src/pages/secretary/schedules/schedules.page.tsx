import React, { useState } from "react";
import PatientsTable from "../../../components/secretary/patients-table/patients-table.component";
import { Card, Button } from "antd";
import CreateScheduleModal from "../../../components/secretary/schedule-modal/add-schedule.component";
const ConsulationsPage: React.FC = () => {
	const [modalVisibility, setModalVisibility] = useState<boolean>(false);
	return (
		<div>
			<CreateScheduleModal
				onCancel={() => {
					setModalVisibility(false);
				}}
				visibility={modalVisibility}
			/>
			<Card
				title="Consultation Schedules"
				extra={
					<Button
						type="primary"
						onClick={(): void => {
							setModalVisibility(true);
						}}
					>
						{" "}
						Create Schedule
					</Button>
				}
			>
				<PatientsTable data={[]} />
			</Card>
		</div>
	);
};

export default ConsulationsPage;
