import React from "react";
import {
	ErrorImageOverlay,
	ErrorImageContainer,
	ErrorImageText,
} from "./error-boundary.styles";

type MyState = { hasErrored: boolean; errorMessage: string };

class ErrorBoundary extends React.Component<{}, any> {
	constructor(props?: any, context?: any) {
		super(props);
		this.state = {
			hasErrored: false,
			errorMessage: "",
		} as MyState;
	}
	static getDerivedStateFromError(error: any) {
		return { hasErrored: true, errorMessage: error };
	}

	componentDidCatch(error: any, info: any) {
		console.log(error, info);
	}

	render() {
		if (this.state.hasErrored) {
			return (
				<ErrorImageOverlay>
					<ErrorImageContainer imageUrl="https://i.imgur.com/yW2W9SC.png" />
					<ErrorImageText> Something went wrong!</ErrorImageText>
					<ErrorImageText>
						{" "}
						Please Refresh the Page.
					</ErrorImageText>
				</ErrorImageOverlay>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
