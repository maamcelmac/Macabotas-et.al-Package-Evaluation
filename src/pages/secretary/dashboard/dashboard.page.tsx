import React from "react";
import { Statistic, Card, Row, Col } from "antd";
import QueueManage from "../../../components/secretary/queing-table/queue-management.component";
const DasboardPage: React.FC = () => {
	return (
		<div>
			<Row gutter={16} className="mb-1">
				<Col span={8}>
					<Card>
						<Statistic
							title="Consultations Conducted"
							value={9}
							// precision={2}
							valueStyle={{ color: "#1890FF" }}
							// suffix="%"
						/>
					</Card>
				</Col>
				<Col span={8}>
					<Card>
						<Statistic
							title="Upcoming Consultations"
							value={4}
							valueStyle={{ color: "#1890FF" }}
							// suffix="%"
						/>
					</Card>
				</Col>
				<Col span={8}>
					<Card>
						<Statistic
							title="Pending Appointments"
							value={11}
							valueStyle={{ color: "#1890FF" }}

							// suffix="%"
						/>
					</Card>
				</Col>
			</Row>
			<Row gutter={16}>
				<Col span={8}>
					<Card>
						<Statistic
							title="Registered Patients"
							value={85}
							valueStyle={{ color: "#1890FF" }}

							// suffix="%"
						/>
					</Card>
				</Col>
				<Col span={8}>
					<Card>
						<Statistic
							title="Consulted Patients"
							value={144}
							valueStyle={{ color: "#1890FF" }}
							// suffix="%"
						/>
					</Card>
				</Col>
				<Col span={8}>
					<Card>
						<Statistic
							title="On Going Consultation"
							value={2}
							valueStyle={{ color: "#1890FF" }}
							// suffix="%"
						/>
					</Card>
				</Col>
			</Row>

			<Row gutter={16}>
				<Col span={16}>
					{/* <QueueManage
						schedule={{
							_id: "12345",
							type: "Family Planning",
							title: "Title Test",
							healthWorker: "Collen Tabago",
							consultationDate: "April 12, 2021",
							consultationTime: "08:30 am",
							isStarted: true,
							numberOfSlot: 30,
							startStatus: "Started",
							createdAt: new Date(),
							currentNumber: 5,
							description: "nice",
						}}
					/> */}
				</Col>
			</Row>
		</div>
	);
};

export default DasboardPage;
