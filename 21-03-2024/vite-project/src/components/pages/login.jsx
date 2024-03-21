import { useReducer } from "react";

function submitHandler(e, users, loginData) {
	e.preventDefault();

	const user = users.find((ele) => {
		return ele.email === loginData.email && ele.password === loginData.password;
	});
	if (!user) {
		console.log("unable to login");
	} else {
		console.log("successful logged in");
	}
}

const initialLogin = { email: "", password: "" };

function reducer(state, action) {
	switch (action.type) {
		case "CHANGE_EMAIL":
			return { ...state, email: action.payload };

		case "CHANGE_PASSWORD":
			return { ...state, password: action.payload };

		default:
			return state;
	}
}

export default function Login({ users }) {
	const [loginData, dispatchLoginData] = useReducer(reducer, initialLogin);

	return (
		<div>
			<form
				action=""
				onSubmit={(e) => {
					submitHandler(e, users, loginData);
				}}>
				<input
					type="email"
					placeholder="Email"
					name="email"
					onChange={(e) => {
						dispatchLoginData({ type: "CHANGE_EMAIL", payLoad: e.target.value });
					}}
				/>
				<input
					type="text"
					placeholder="Password"
					name="password"
					onChange={(e) => {
						dispatchLoginData({ type: "CHANGE_PASSWORD", payLoad: e.target.value });
					}}
				/>
				<button>Submit</button>
			</form>

			<div></div>
		</div>
	);
}
