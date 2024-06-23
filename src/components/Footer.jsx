import React from "react";
// import "../CSS/Footer.css";
import "../pages/HomePage";
import "../pages/MapPage";
import "../pages/HealthReportPage";
import { navLinks } from "../data/index";
const Footer = () => {
	return (
		<footer className=" w-full flex flex-col justify-center items-center">
			<nav>
				<ul>
					{/* Replace these links with your actual navigation items */}
					<li>
						<a href="./Home">Home</a>
					</li>
					<li>
						<a href="./Map">SA Map Stats</a>
					</li>
					<li>
						<a href="./DataTable">Health Report</a>
					</li>
				</ul>
			</nav>
			<p>&copy; {new Date().getFullYear()} Supply Chain Network Pty LTD</p>
		</footer>
	);
};

export default Footer;
