import moment from "moment";

export interface PatientInfo {
	_id: string;
	email: string;
	password: string;
	image?: string;
	fname: string;
	mname: string;
	lname: string;
	gender?: string;
	birthdate?: Date;
	phoneNumber?: string;
	occupation?: string;
	educationalAttainment?: string;
	philHealthNumber?: string;
	address?: string;
	brgy?: string;
	city_municipality?: string;
	province?: string;
	status: boolean;
	createdAt?: Date;
	religion?: string;
	weight?: string;
	height?: string;
	age?: number;
	civilStatus?: string;
	role: string;
	familyPlanning: object | null;
	obstetric: object | null;
	individualTreatment: object | null;
	cancerControl: object | null;
	nutritionist: object | null;
}

export interface Appointment {
	_id: string;
	patient: PatientInfo;
	schedule: Schedule;
	consultationRecord?: object | null;
	queueNumber?: number;
	type: string;
	consultationForm?: object | null;
	appointmentDate: Date;
	appointmentStatus: string;
}

export interface Schedule {
	_id: string;
	type: string;
	title: string;
	description: string;
	healthWorker: string;
	numberOfSlot: number;
	consultationDate: any | moment.Moment;
	consultationTime: any | moment.Moment;
	isStarted: boolean;
	currentNumber?: number;
	startStatus: string;
	createdAt: Date;
	slotRemaining?: number;
}

export interface ConsultationFormProps {
	onSubmit: (val: object) => void;
	initialValues?: object;
	userType?: string;
}
