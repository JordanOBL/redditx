import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllPosts } from "../../features/Posts/postSlice.js";
import { getSubReddit } from "../../features/SubReddit/subRedditSlice.js";
import PostCard from "../PostCard/PostCard";
import "./PostListings.scss";

const PostListings = ({ searchterm }) => {
	//get all posts state
	const posts = useSelector(getAllPosts);
	//Get subreddit state
	const subRedditName = useSelector(getSubReddit);

	let renderPosts = "";

	//if api successful, return posts
	renderPosts = posts.length ? (
		posts
			.filter(
				(post) =>
					post.data.selftext.includes(searchterm.toLowerCase()) &&
					post.data.url.includes(".jpg")
			)
			.map((post, idx) => <PostCard key={idx} data={post} />)
	) : (
		//Show error 
		<div className="posts.error">
			<h3>{posts.Error}</h3>
		</div>
	);

	return (
		<Container fluid className="posts-container">
			<h4 className="posts-subreddit-title">
				{subRedditName === "/r/AdrenalinePorn/hot/"
					? null
					: subRedditName}
			</h4>
			{(renderPosts.length && renderPosts) || (
				<h3 className="p-2" style={{height: "100vh"}}>
					...Nothing to see here, go make your own adventures and post
					them here!!
				</h3>
			)}
		</Container>
	);
};

export default PostListings;
