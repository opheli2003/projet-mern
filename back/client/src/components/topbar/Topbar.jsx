import React from "react";
import { Link } from "react-router-dom";
import "./topbar.css";

const Topbar = () => {
	return (
		<>
			<div className="top">
				<div className="topLeft" style={{ color: "#2b2b2b" }}>
					Bug Tickets
				</div>
				<div className="topCenter">
					<Link to="/" style={{ textDecoration: "none", color: "#2b2b2b" }}>
						Home
					</Link>
				</div>
				<div className="topRight">
					<Link
						to="/write"
						style={{ textDecoration: "none", color: "#2b2b2b" }}
					>
						{" "}
						Write
					</Link>
				</div>
			</div>
		</>
	);
};

export default Topbar;
