import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todosSlice";
import { useNavigate } from "react-router-dom";

export default function CreateTodo() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	function additionHandler(e) {
		e.preventDefault();
		const fd = new FormData(e.target);

		const newTodo = {
			title: fd.get("title"),
			description: fd.get("description"),
			completed: false,
		};
		if (!(newTodo.title && newTodo.description)) {
			alert("Please enter details");
			return;
		}
		dispatch(addTodo(newTodo));
		navigate("/display");
	}
	return (
		<div>
			<form action="" onSubmit={additionHandler}>
				<input type="text" placeholder="Title" name="title" onChange={() => {}} />
				<input type="text" placeholder="despcription" name="description" onChange={() => {}} />
				<button>Add</button>
			</form>
		</div>
	);
}
