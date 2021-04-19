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
	role: string;
}

export interface Appointment {
	_id: string;
	fname: string;
	mname: string;
	lname: string;
	address: string;
	gender: string;
	phoneNumber: string;
	appointmentDate: Date;
	appointmentStatus: string;
	brgy: string;
	city_municipality: string;
	province: string;
}

export interface Schedule {
	_id: string;
	type: string;
	title: string;
	description: string;
	healthWorker: string;
	numberOfSlot: number;
	consultationDate: Date;
	consultationTime: Date;
	isStarted: boolean;
	currentNumber?: number;
	startStatus: string;
	createdAt: Date;
}
