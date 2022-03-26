import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { filterPosts } from "../../features/Posts/postSlice";
import { getSubReddit } from "../../features/SubReddit/subRedditSlice.js";
import { changeSubReddit } from "../../features/SubReddit/subRedditSlice";

export const SearchFunction = () => {
	const dispatch = useDispatch();
	//get the value of the searchbar
	let value = document.querySelector(".searchbar").value;
	//if user requests a new subreddit thats not listed
	//change subreddit state and fetch new posts
	//if user is searching for post in current subreddit,
	// search titles of listed posts
	dispatch(filterPosts(value));
};