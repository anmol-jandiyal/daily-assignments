import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editTodo, removeTodo } from "../../redux/todosSlice";
import { setIndex } from "../../redux/editIndexSlice";

export default function DisplayTodo() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const todos = useSelector((store) => {
		return store.todos.todos;
	});

	return (
		<div>
			{todos.map((todo, index) => {
				return (
					<div key={index} className={`todoDiv ${todo.completed ? "completed" : ""}`}>
						<div className="left">
							<h3>{todo.title}</h3>
							<p>{todo.description}</p>
						</div>
						<div>
							<button
								onClick={(e) => {
									const completeStatus = e.target.closest(".todoDiv").classList.contains("completed");
									dispatch(editTodo({ index: index, updated: { completed: completeStatus ? false : true } }));
								}}>
								mark done
							</button>
							<button
								onClick={() => {
									dispatch(setIndex({ index: index }));
									navigate("/update");
								}}>
								edit
							</button>
							<button
								onClick={(e) => {
									e.preventDefault();
									dispatch(removeTodo({ index: index }));
								}}>
								delete
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
}
