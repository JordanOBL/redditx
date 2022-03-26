import React from "react";
import ReactPlayer from "react-player/lazy";
import "./PostCard.scss";

const PostCard = ({ data }) => {

	return (
		<div className="post-container mt-4 d-flex flex-column">
			<h4 className="post-title p-3">{data.data.title}</h4>
			{/* Display text if its under 150wc */}
			{data.data.selftext.length < 150 && (
				<p className="post-selftext">{data.data.selftext}</p>
			)}

			{/* If post has an image display IMAGE */}
			{data.data.url.includes(".jpg") && (
				<img className="post-image" alt="" src={data.data.url} />
			)}

			{/* IF post has a video display video */}
			{data.data.url.includes(".mp4") && (
				<div className="video-player-container">
					<ReactPlayer playing={true} controls={true} className="react-player post-video" light={true} pip={true} alt="" url={data.data.url} />
				</div>
			) }

			{/* Footer for each post */}
			<div className="post-footer d-flex flex-column">
				<p className="post-author">{data.data.author}</p>
				<p className="posted-date">
					{new Date(data.data.created_utc * 1000).toLocaleString()}
				</p>
			</div>
		</div>
	);
};

export default PostCard;
