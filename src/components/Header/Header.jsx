import React from "react";
import { useDispatch } from "react-redux";
import { Container, Navbar, Nav } from "react-bootstrap";
import { SubReddits } from "../SubReddits/SubReddits";
import "./Header.scss";
import { changeSubReddit } from "../../features/SubReddit/subRedditSlice";
import SearchForm from "./SearchForm/SearchForm";

const Header = () => {
	const dispatch = useDispatch();
	return (
		<Navbar
			className="navbar-elements-container"
			variant="dark"
			expand="lg"
			collapseOnSelect
		>
			<Container fluid className="navbar-container p-3">
				<Navbar.Brand
					href="#"
					onClick={() =>
						dispatch(changeSubReddit("/r/AdrenalinePorn"))
					}
				>
					<h1>
						<span className="brand-reddit">REDDIT </span>
						<span className="brand-xtreme fw-bolder">XTREME</span>
					</h1>{" "}
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse
					id="navbarScroll"
					onClick={(e) => {
						!e.target.classList.contains(".show")
							? e.target.classList.add("show")
							: e.target.classList.remove("show");
					}}
				>
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: "25vh" }}
						navbarScroll
					>
						{/* List Subbreddits component */}
						{<SubReddits />}
					</Nav>
					<SearchForm />
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
