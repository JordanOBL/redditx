import React from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { changeSubReddit } from "../../features/SubReddit/subRedditSlice.js";
import "./SubReddits.scss";

export const SubReddits = ({ handleNavSubredditClick }) => {
	const subRedditList = [
		"/r/adrenaline",
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

	const dispatch = useDispatch();

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
					>
						{subreddit}
					</li>
				))}
			</ul>
		</Container>
	);
};
