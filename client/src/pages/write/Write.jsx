// import "./create.css";
import axios from "axios";

import React, { useState } from "react";

const Create = () => {
	const [title, setTitle] = useState("");
	const [comment, setComment] = useState("");

	const handleSubmit = async (evt) => {
		evt.preventDefault();
		const newTicket = {
			title,
			comment,
		};
		try {
			await axios.post("http://localhost:5000/api/ticket/", newTicket);
			window.location.replace("http://localhost:3000");
		} catch (error) {
			console.log(error.response.data);
		}
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<input
						type="text"
						placeholder="Title"
						onChange={(evt) => setTitle(evt.target.value)}
					/>
				</div>
				<div>
					<textarea
						placeholder="Put a comment"
						onChange={(evt) => setComment(evt.target.value)}
					></textarea>
				</div>
				<button type="submit">Add your ticket</button>
			</form>
		</div>
	);
};

export default Create;
