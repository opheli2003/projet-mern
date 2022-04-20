import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import "./ticket.css";

const Ticket = ({ ticket }) => {
	return (
		<div className="ticket">
			<Link to={`/ticket/${ticket._id}`}>
				<span className="ticketTitle">{ticket.title}</span>
			</Link>
			<p className="ticketComment">{ticket.comment}</p>
		</div>
	);
};

export default Ticket;
