import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Topbar from "../topbar/Topbar";
import axios from "axios";
import "./singleTicket.css";
import Image from './pexels.jpg'

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
					"https://mern-gladys.herokuapp.com//api/ticket/" + path
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
			await axios.delete("https://mern-gladys.herokuapp.com//api/ticket/" + path);
			window.location.replace("/");
		} catch (err) {
			console.log(err);
		}
	};

	const handleEdit = async () => {
		try {
			await axios.put("https://mern-gladys.herokuapp.com//api/ticket/" + path, {
				title,
				comment,
			});
			// window.location.reload()
			setUpdateMode(false);
		} catch (err) {}
	};

	return (
		<>
			<Topbar />
			<img src={Image} alt="img" ></img>


			<div className="singleTicket">
				
				{updateMode ? (
					<input
						type="text"
						value={title}
						className='singleTicketInput'
						autoFocus='autofocus'
						onChange={(evt) => setTitle(evt.target.value)}
					/>
				) : (
					<h1 className="singleTicketTitle">{title}</h1>
				)}
				{updateMode ? (
					<textarea
						value={comment}
						className= "singleTicketTextArea"
						onChange={(evt) => setComment(evt.target.value)}
					></textarea>
				) : (
					<p className="singleTicketComment">{comment}</p>
				)}
				<p>
					<div className="singleTicketEditContainer">
						{updateMode ? (
							<i className="singleTicketIcon fas fa-save"  onClick={handleEdit}></i>
							
						)  :<> 
							<i
								className="singleTicketIcon fas fa-edit"
								onClick={() => setUpdateMode(true)}
								></i>
								<i
							class="singleTicketIcon fa-regular fa-trash-can"
							onClick={handleDelete}
						></i>
						</>}
						
						
					</div>
					</p>
				
			</div>
		</>
	);
};

export default SingleTicket;
