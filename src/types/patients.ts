export interface PatientInfo {
	email: String;
	password: String;
	image?: String;
	fname: String;
	mname: String;
	lname: String;
	gender?: String;
	birthdate?: Date;
	phoneNumber?: String;
	occupation?: String;
	educationalAttainment?: String;
	philHealthNumber?: String;
	address?: String;
	brgy?: String;
	city_municipality?: String;
	province?: String;
	status: Boolean;
	createdAt?: Date;
	role: String;
}
