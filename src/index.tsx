import { hydrate, render } from "react-dom";
import App from "./App";
import "antd/dist/antd.css";
import "./sass/main.scss";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { Provider } from "react-redux";
import registerServiceWorker from "./serviceWorker";

import store from "./redux/store";
// eslint-disable-next-line import/no-extraneous-dependencies
import { loadableReady } from "@loadable/component";

if (process.env.NODE_ENV === "development") {
	axios.defaults.baseURL = "https://health-center-api.herokuapp.com/api";
	// axios.defaults.baseURL = "http://localhost:5001/api/";
} else {
	axios.defaults.baseURL = "https://health-center-api.herokuapp.com/api";
}

loadableReady(() => {
	const root = document.getElementById("root");
	hydrate(
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>,
		root
	);
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

registerServiceWorker();
