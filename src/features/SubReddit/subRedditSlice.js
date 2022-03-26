import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: "/r/AdrenalinePorn/hot/" };

const subRedditSlice = createSlice({
	name: "subReddit",
	initialState,
	reducers: {
		changeSubReddit: (state, { payload }) => {
			state.value = payload;
		},
	},
});

export const { changeSubReddit } = subRedditSlice.actions;
export default subRedditSlice.reducer;
export const getSubReddit = (state) => state.subReddit.value;
