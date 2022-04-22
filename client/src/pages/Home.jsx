import React, { useEffect, useState } from "react";
import Tickets from "../components/tickets/Tickets";
import Topbar from "../components/topbar/Topbar";
import axios from "axios";
import "./home.css";

const Home = () => {
	const [tickets, setTickets] = useState([]);
	// I use a usestate and define my tickets
	// initial state = empty array bc we haven't fetched any data yet
	// so let's fetch it

	useEffect(() => {
		const fetchTickets = async () => {
			const response = await axios.get(
				"https://mern-gladys.herokuapp.com/api/ticket/all-tickets"
			);
			console.log(response);
			setTickets(response.data);
		};
		fetchTickets();
	}, []);
	// we use an empty array bc we wt the callback to be re be run only at the bg and never again
	return (
		<>
			<Topbar />
			<img src="pexels.jpg"></img>
			<Tickets tickets={tickets} />
		</>
	);
};

export default Home;
