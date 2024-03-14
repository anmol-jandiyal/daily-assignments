import Display from "./components/display";
import Search from "./components/search";
import { useState } from "react";

import "./app.css";

function App() {
	const [weatherDetails, setWeatherDetails] = useState(null);

	return (
		<div className="app">
			<Search setWeatherDetails={setWeatherDetails} />
			<Display weatherDetails={weatherDetails} />
		</div>
	);
}

export default App;
