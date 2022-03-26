import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./components/Header/Header";
import { addPosts } from "./features/Posts/postSlice.js";
import PostListings from "./components/PostListings/PostListings.jsx";
import { SubReddits } from "./components/SubReddits/SubReddits";
import { getSubReddit } from "./features/SubReddit/subRedditSlice";
import { getSearchTerm } from "./features/SearchTerm/searchTermSlice.js";
import "./App.scss";

const App = () => {
	const axios = require("axios").default;
	const dispatch = useDispatch();
	const subredditState = useSelector(getSubReddit);
	const searchTerm = useSelector(getSearchTerm);
	const baseURL = "https://www.reddit.com";

	//Fetch data onload and when subreddit changes
	useEffect(() => {
		// API CALL
		const fetchPosts = async () => {
			const response = await axios(
				baseURL + subredditState + ".json?limit=100"
			).catch((err) => {
				console.log("UNSUCCESSFUL :", err);
			});
			//Add posts action to post state
			dispatch(addPosts(response.data.data.children));
		};
		fetchPosts();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [subredditState]);

	return (
		<Container fluid className="p-0 app-wrapper">
			<Header />
			{/* BODY */}
			<Row className="posts-subrooms-wrapper ">
				{/* POSTS Container */}
				<Col xs={12} lg={8}>
					<PostListings searchterm={searchTerm} />
				</Col>
				{/* SUBREDDIT container */}
				<Col className="subreddits-col" xs={0} lg={4}>
					<SubReddits />
				</Col>
			</Row>
		</Container>
	);
};

export default App;
