import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todosSlice.js";
import editIndexReducer from "./editIndexSlice.js";

const store = configureStore({
	reducer: {
		todos: todosReducer,
		editIndex: editIndexReducer,
	},
});

export default store;
