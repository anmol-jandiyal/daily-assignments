import { useState } from "react";
import Card from "./card";
import users from "./users";

function Search() {
	const [details, setDetails] = useState(null);

	const searchHandler = (e) => {
		e.preventDefault();

		const fd = new FormData(e.target);
		const id = +fd.get("id-input");

		setDetails(() => {
			return users.find((user) => {
				return user.id === id;
			});
		});
	};

	return (
		<div>
			<form onSubmit={searchHandler}>
				<input required type="text" name="id-input" placeholder="Enter the ID" />
				<button>Search</button>
			</form>

			<Card userDetails={details} />
		</div>
	);
}

export default Search;
