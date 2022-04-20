import React from "react";
import { Link } from "react-router-dom";
import "./topbar.css";

const Topbar = () => {
	return (
		<div className="top">
			<div className="topLeft">Bug Tickets</div>
			<div className="topCenter">
				<Link to="/">Home</Link>
			</div>
			<div className="topRight">
				<Link to="/write"> Write</Link>
			</div>
		</div>
	);
};

export default Topbar;
