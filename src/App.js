import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PlebNavbar from "./components/Navbar";
import HomePage from "./pages/Homepage";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ExperimentPage from "./pages/ExperimentPage";

function App() {
	return (
		<Router>
			<div className="App">
				<PlebNavbar />
			</div>

			<Switch>
				<Route path="/experiment">
					<ExperimentPage />
				</Route>
				<Route path="/">
					<HomePage />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
