import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
	name: "todos",
	initialState: {
		todos: [
			{ title: "Javascript", description: "study javascript in depth", completed: true },
			{ title: "Express", description: "Try to use express in each projects", completed: false },
			{ title: "Redux", description: "state management ", completed: false },
			{ title: "html/css", description: "structure and styling", completed: true },
		],
	},
	reducers: {
		addTodo: (state, action) => {
			state.todos.push(action.payload);
			alert("New todo Added");
		},
		editTodo: (state, action) => {
			const index = action.payload.index;
			state.todos[index] = { ...state.todos[index], ...action.payload.updated };
		},
		removeTodo: (state, action) => {
			const index = action.payload.index;
			state.todos.splice(index, 1);
		},
	},
});

export default todosSlice.reducer;
export const { addTodo, editTodo, removeTodo } = todosSlice.actions;
