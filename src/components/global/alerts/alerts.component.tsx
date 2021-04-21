import React from "react";
import { notification, Popconfirm, message } from "antd";
import { NotificationApi } from "antd/lib/notification";

export const notify = (
	title: string,
	type: any,
	description: string | null = null
) => {
	if (type === "success") {
		notification["success"]({
			message: title,
			description: description && description,
		});
	} else if (type === "warning") {
		notification["warning"]({
			message: title,
			description: description && description,
		});
	} else if (type === "error") {
		notification["error"]({
			message: title,
			description: description && description,
		});
	} else {
		notification["info"]({
			message: title,
			description: description && description,
		});
	}
};

export const confirm = (e: any, msg: string) => {
	message.success(msg);
};

export const cancel = (e: any, msg: string) => {
	message.success(msg);
};

export const Confirmation = ({
	children,
	title,
	confirmFn,
}: {
	children: React.ReactNode;
	title: string;
	confirmFn: () => void;
}) => (
	<Popconfirm
		title={title}
		onConfirm={() => confirmFn()}
		okText="Yes"
		cancelText="No"
	>
		{children}
	</Popconfirm>
);
