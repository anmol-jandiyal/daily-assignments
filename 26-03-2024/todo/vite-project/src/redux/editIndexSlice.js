import { createSlice } from "@reduxjs/toolkit";

const editIndexSlice = createSlice({
	name: "editIndex",
	initialState: { index: 0 },
	reducers: {
		setIndex: (state, action) => {
			state.index = action.payload.index;
		},
	},
});

export const { setIndex } = editIndexSlice.actions;
export default editIndexSlice.reducer;
