import React from "react";
import { Form, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { changeSearchTerm } from "../../../features/SearchTerm/searchTermSlice.js";

const SearchForm = () => {
	const dispatch = useDispatch();
	const handleChange = (e) => {
		// send action to Searchterm reducer
		dispatch(changeSearchTerm(e.target.value.toLowerCase()));
	};
	return (
		//SearchBar
		<Form className="d-flex">
			<FormControl
				type="search"
				placeholder="Search"
				className="me-2 searchbar"
				aria-label="Search"
				onChange={handleChange}
			/>
		</Form>
	);
};

export default SearchForm;
