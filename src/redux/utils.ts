import { notify } from "../components/global/alerts/alerts.component";

export const add = (items: any, itemToAdd: any) => {
	const isExisting: boolean = items?.find(
		(i: any) => i._id === itemToAdd._id
	);

	if (isExisting) {
		return items;
	}

	return [...items, itemToAdd];
};

export const remove = (items: any, itemToRemove: any) => {
	const isExisting: boolean = items?.find(
		(i: any) => i._id === itemToRemove._id
	);

	if (isExisting) {
		return items?.filter((i: any) => i._id !== itemToRemove._id);
	}

	return items;
};

export const update = (items: any, itemToUpdate: any) => {
	const isExisting: boolean = items?.find(
		(i: any) => i._id === itemToUpdate._id
	);

	if (isExisting) {
		return add(remove(items, itemToUpdate), itemToUpdate);
	}

	return items;
};

export const errorCatch = (error: any, customMessage: string) => {
	const errorResponse = error.response.data.error;
	if (errorResponse) {
		if (errorResponse.startsWith("Validation")) {
			notify(errorResponse, "error");
		} else if (errorResponse.startsWith("Duplicate")) {
			notify(
				"Email address already exists, Please use another email address.",
				"error"
			);
		} else if (errorResponse.startsWith("CastError")) {
			notify("Information not found", "error");
		} else {
			notify(errorResponse, "error");
		}
	} else {
		notify(customMessage, "error");
	}
};
