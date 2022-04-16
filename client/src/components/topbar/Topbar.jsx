import React from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
	return (
		<ul>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/write"> Write</Link>
			</li>
		</ul>
	);
};

export default Topbar;
