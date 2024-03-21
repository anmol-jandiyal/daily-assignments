import { updateLocalStrorage } from "../../function/localStroage";
import { useReducer } from "react";

function submitHandler(e, users, signUpData) {
	e.preventDefault();

	if (signUpData.email && signUpData.password === signUpData.confirmPassword && signUpData.firstName && signUpData.lastName) {
		const newEntry = { ...signUpData };
		delete newEntry.confirmPassword;

		users.push(newEntry);
		updateLocalStrorage("users", users);
		console.log("successful signup");
	}
}

const initialState = { password: "", confirmPassword: "", firstName: "", lastName: "", email: "", mismatchStyle: "" };

function reducer(state, action) {
	switch (action.type) {
		case "CHANGE_FIRST_NAME":
			return { ...state, firstName: action.payload, mismatchClass: "" };

		case "CHANGE_LAST_NAME":
			return { ...state, lastName: action.payload, mismatchClass: "" };

		case "CHANGE_EMAIL":
			return { ...state, email: action.payload, mismatchClass: "" };

		case "CHANGE_PASSWORD":
			return { ...state, password: action.payload, mismatchClass: "" };

		case "CHANGE_CONF_PASSWORD":
			if (state.password !== action.payload) {
				return { ...state, confirmPassword: action.payload, mismatchClass: "wrongPassword" };
			} else {
				return { ...state, confirmPassword: action.payload, mismatchClass: "" };
			}

		default:
			return state;
	}
}

export default function SignUp({ users }) {
	const [signUpData, dispatch] = useReducer(reducer, initialState);

	return (
		<div>
			<form
				action=""
				onSubmit={(e) => {
					submitHandler(e, users, signUpData);
				}}>
				<input
					type="text"
					placeholder="First Name"
					onChange={(e) => {
						dispatch({ type: "CHANGE_FIRST_NAME", payload: e.target.value });
					}}
				/>
				<input
					type="text"
					placeholder="Last Name"
					onChange={(e) => {
						dispatch({ type: "CHANGE_LAST_NAME", payload: e.target.value });
					}}
				/>
				<input
					type="email"
					placeholder="Email"
					onChange={(e) => {
						dispatch({ type: "CHANGE_EMAIL", payload: e.target.value });
					}}
				/>
				<input
					type="number"
					placeholder="Contact"
					onChange={(e) => {
						dispatch({ type: "CHANGE_CONTACT", payload: e.target.value });
					}}
				/>

				<input
					type="text"
					placeholder="Password"
					onChange={(e) => {
						dispatch({ type: "CHANGE_PASSWORD", payload: e.target.value });
					}}
				/>
				<input
					type="text"
					placeholder="confirmPassword"
					name="confirmPassword"
					className={signUpData.mismatchClass}
					onChange={(e) => {
						dispatch({ type: "CHANGE_CONF_PASSWORD", payload: e.target.value });
					}}
				/>
				<button>Submit</button>
			</form>
		</div>
	);
}
