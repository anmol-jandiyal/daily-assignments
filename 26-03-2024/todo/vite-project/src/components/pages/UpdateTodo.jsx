import { useSelector, useDispatch } from "react-redux";
import { editTodo } from "../../redux/todosSlice";
import { useNavigate } from "react-router-dom";

export default function UpdateTodo() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const index = useSelector((store) => {
		return store.editIndex.index;
	});
	const todo = useSelector((store) => {
		return store.todos.todos[index];
	});

	function editHandler(e) {
		e.preventDefault();
		e.preventDefault();
		const fd = new FormData(e.target);
		const updatedTodoItem = {
			title: fd.get("title"),
			description: fd.get("description"),
		};

		dispatch(editTodo({ index: index, updated: updatedTodoItem }));
		navigate("/display");
	}
	return (
		<div>
			<h3 style={{ textAlign: "center" }}>Update Todo</h3>
			<form action="" onSubmit={editHandler}>
				<label htmlFor="">
					Title:
					<input type="text" placeholder="Title" defaultValue={todo.title} name="title" onChange={() => {}} />
				</label>
				<label htmlFor="">
					Description:
					<input type="text" placeholder="despcription" defaultValue={todo.description} name="description" onChange={() => {}} />
				</label>
				<button>update</button>
			</form>
		</div>
	);
}
