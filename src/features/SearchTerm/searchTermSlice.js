import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: "" };

const searchTermSlice = createSlice({
	name: "searchTerm",
	initialState,
	reducers: {
		changeSearchTerm: (state, { payload }) => {
			state.value = payload;
		},
	},
});

export const { changeSearchTerm } = searchTermSlice.actions;
export default searchTermSlice.reducer;
export const getSearchTerm = (state) => state.searchTerm.value;
