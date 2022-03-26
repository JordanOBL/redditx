import React from "react";
import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { changeSubReddit } from "../../features/SubReddit/subRedditSlice.js";
import "./SubReddits.scss";
import {getSubReddit} from "../../features/SubReddit/subRedditSlice.js"

export const SubReddits = ({ handleNavSubredditClick }) => {
	const dispatch = useDispatch();
	const currSubReddit = useSelector(getSubReddit)
	const subRedditList = [
		"/r/adrenalineporn",
		"/r/camping",
		"/r/canyoneering",
		"/r/climbing",
		"/r/freediving",
		"/r/girlsurfers",
		"/r/MovieStunts",
		"/r/MTB",
		"/r/offroading",
		"/r/skateboarding",
		"/r/skydiving",
		"/r/snowboarding",
		"/r/surfing",
		"/r/whitewater",
		"/r/womenshredders",
	];

	

	const handleClick = (e) => {
		const toggler = document.querySelector(".navbar-toggler");
		const navbar = document.getElementById("navbarScroll");
		toggler.classList.add("collapsed");
		navbar.classList.remove("show");
		dispatch(changeSubReddit(e.target.innerText));
	};

	return (
		<Container fluid className="subreddit-container">
			<h5>Subreddits</h5>
			<ul className="p-0 subreddit-list">
				{subRedditList.map((subreddit, idx) => (
					<li
						className="subreddit-title"
						onClick={handleClick}
						key={idx}
						style={subreddit === currSubReddit ? {color: "lime"} : {color: "white"} }
					>
						{subreddit}
					</li>
				))}
			</ul>
		</Container>
	);
};
