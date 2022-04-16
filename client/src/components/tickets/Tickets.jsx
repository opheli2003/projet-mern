import React from "react";
import Ticket from "../ticket/Ticket";

const Tickets = ({ tickets }) => {
	return (
		<div>
			{tickets.map((t) => (
				<Ticket ticket={t} />
			))}
		</div>
	);
};

export default Tickets;
