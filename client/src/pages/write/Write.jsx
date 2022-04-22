// import "./create.css";
import axios from "axios";
import React, { useState } from "react";
import Topbar from "../../components/topbar/Topbar";
import Image from "./pexels.jpg";
import "./write.css";

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
			await axios.post("https://mern-gladys.herokuapp.com//api/ticket/", newTicket);
			window.location.replace("https://mern-gladys.herokuapp.com/");
		} catch (error) {
			console.log(error.response.data);
		}
	};
	return (
		<>
			<Topbar />
			<img src={Image} alt="img"></img>

			<div className="write">
				<form onSubmit={handleSubmit} className="writeForm">
					<div className="writeFormGroup">
						<input
							type="text"
							placeholder="Title"
							className="writeInput"
							autoFocus="autofocus"
							onChange={(evt) => setTitle(evt.target.value)}
						/>
					</div>
					<div className="writeFormGroup">
						<textarea
							placeholder="Put a comment"
							className="writeInput writeComment"
							onChange={(evt) => setComment(evt.target.value)}
						></textarea>
					</div>
					<button type="submit" className="writeSubmit">
						Add your ticket
					</button>
				</form>
			</div>
		</>
	);
};

export default Create;
