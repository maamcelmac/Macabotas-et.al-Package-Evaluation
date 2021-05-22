import ReactDOM from "react-dom";
import App from "./App";
import "antd/dist/antd.css";
import "./sass/main.scss";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { Provider } from "react-redux";
import store from "./redux/store";

if (process.env.NODE_ENV === "development") {
	axios.defaults.baseURL = "https://tosia.xyz/health-center/api/";
	// axios.defaults.baseURL = "http://localhost:5001/api/";
} else {
	axios.defaults.baseURL = "https://tosia.xyz/health-center/api/";
}

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
