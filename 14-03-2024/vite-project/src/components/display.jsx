import "./card.css";

function Display(props) {
	const { weatherDetails } = props;

	if (weatherDetails === null) {
		return <></>;
	}

	const city = weatherDetails.name;
	const { description, icon } = weatherDetails.weather[0];
	const iconSrc = `https://openweathermap.org/img/w/${icon}.png`;
	const { temp, temp_max, temp_min, pressure, humidity } = weatherDetails.main;

	return (
		<>
			<div className="weather-card">
				<h2 className="city-name">{city}</h2>

				<div>
					<div>
						<h1 className="temperature">{temp} &deg;C</h1>
						<img src={iconSrc} alt="" />
					</div>
					<h3 className="weather-description">{description}</h3>
				</div>
				<div className="other-info">
					<div className="left">
						<p>Humidity: {humidity}%</p>
						<p>Pressure: {pressure}</p>
					</div>
					<div className="right">
						<p>Max Temp: {temp_max}&deg;C</p>
						<p>Max Temp: {temp_min} &deg;C</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Display;
