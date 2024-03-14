import { useEffect, useState } from "react";

const apiKey = "c314452c0a61985488d17fe47a6ac99d";

// const url = `https://api.openweathermap.org/data/2.5/weather?q=Toronto,CA&appid=${apiKey}`;

const styles = {
	padding: "30px",
	display: "flex",
	justifyContent: "center",
	gap: "10px",
};

function Search(props) {
	const [city, setCity] = useState("jammu");

	const searchHandler = (e) => {
		e.preventDefault();
		const fd = new FormData(e.target);
		const city = fd.get("search-input");

		setCity(city);
	};

	useEffect(() => {
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				if (data.cod === "404") {
					alert("Invalid city");
					props.setWeatherDetails(null);
				} else {
					props.setWeatherDetails(data);
				}
			})
			.catch((err) => {
				console.log("error", err);
			});
	}, [city]);

	return (
		<>
			<form onSubmit={searchHandler} style={styles}>
				<input type="text" name="search-input" placeholder="Enter City" style={{ fontSize: "1.2rem", textAlign: "center", borderRadius: "20px" }} />

				<button style={{ padding: "4px", borderRadius: "10px" }}>Search</button>
			</form>
		</>
	);
}

export default Search;
