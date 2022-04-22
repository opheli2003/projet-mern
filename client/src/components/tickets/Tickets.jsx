import React from "react";
import Ticket from "../ticket/Ticket";
import "./tickets.css";

const Tickets = ({ tickets }) => {
	return (
		<div className="tickets">
			{tickets.map((t) => (
				<Ticket ticket={t} />
			))}
		</div>
	);
};

export default Tickets;
