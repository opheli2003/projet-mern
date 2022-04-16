import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Topbar from "../topbar/Topbar";
import axios from "axios";

const SingleTicket = () => {
	const location = useLocation();
	// console.log(location.pathname.split("/")[2])
	const path = location.pathname.split("/")[2];
	const [singleTickets, setSingleTickets] = useState({});

	const [title, setTitle] = useState("");
	const [comment, setComment] = useState("");
	const [updateMode, setUpdateMode] = useState(false);
	useEffect(() => {
		try {
			const getTicket = async () => {
				const response = await axios.get(
					"http://localhost:5000/api/ticket/" + path
				);
				console.log(response);
				setSingleTickets(response.data);

				setTitle(response.data.title);
				setComment(response.data.comment);
			};
			getTicket();
		} catch (err) {}
	}, [path]);
	// whenever the path changes, fires this useEffect

	const handleDelete = async () => {
		try {
			await axios.delete("http://localhost:5000/api/ticket/" + path);
			window.location.replace("/");
		} catch (err) {
			console.log(err);
		}
	};

	const handleEdit = async() => {
		try {
			await axios.put("http://localhost:5000/api/ticket/" + path, {
				title, comment
			
			})
			// window.location.reload()
			setUpdateMode(false)
	}

		catch (err) {
			
		}
	}

	return (
		<div>
			<Topbar />
			{updateMode ? (
				<input
					type="text"
					value={title}
					onChange={(evt) => setTitle(evt.target.value)}
				/>
			) : (
				<span className="singleTicketTitle">{title}</span>
			)}
			{updateMode ? (
				<textarea
					value={comment}
					onChange={(evt) => setComment(evt.target.value)}
				></textarea>
			) : (
				<p className="singleTicketComment">{comment}</p>
			)}
			<p>
				{updateMode ?  <button onClick={handleEdit}>Save</button> :
			 <button onClick={() => setUpdateMode(true)} >Edit</button> }


				
				<button onClick={handleDelete}>Delete</button>
			</p>
		</div>
	);
};

export default SingleTicket;
