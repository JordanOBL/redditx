import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./Posts/postSlice";
import subRedditReducer from "./SubReddit/subRedditSlice";
import searchTermReducer from "./SearchTerm/searchTermSlice";

export const store = configureStore({
	reducer: {
		posts: postsReducer,
		subReddit: subRedditReducer,
		searchTerm: searchTermReducer,
	},
});
