import React from "react";
import { Skeleton } from "antd";

const WithSpinner = (WrappedComponent: React.FC) => {
	const Spinner = ({ isLoading, ...otherProps }: { isLoading: boolean }) => {
		return isLoading ? (
			<Skeleton active paragraph={{ rows: 10 }} />
		) : (
			<WrappedComponent />
		);
	};

	return <div> {Spinner}</div>;
};

export default WithSpinner;
