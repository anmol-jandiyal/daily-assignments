const styles = {
	display: "inline-block",
	padding: "40px",
	backgroundColor: "#b3d7b6",
	margin: "30px",
};

function Card(props) {
	if (props.userDetails === null) {
		// starting case when no one perform the search
		return <></>;
	}

	if (!props.userDetails) {
		// if user not found
		return (
			<>
				<h1>No user found</h1>
			</>
		);
	}

	const { name, id, email, contact, age } = props.userDetails;
	return (
		<div className="card" style={styles}>
			<h3>Name: {name}</h3>
			<h3>ID: {id}</h3>
			<h3>Contact: {contact}</h3>
			<h3>Email: {email}</h3>
			<h3>Age: {age}</h3>
		</div>
	);
}

export default Card;
