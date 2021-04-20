import ReactDOM from "react-dom";
import App from "./App";
import "antd/dist/antd.css";
import "./sass/main.scss";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000";

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals