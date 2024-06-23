import React from "react";
// import "../CSS/Footer.css";
import "../pages/HomePage";
import "../pages/MapPage";
import "../pages/HealthReportPage";
import { navLinks } from "../data/index";
import { Link } from "react-router-dom";
const Footer = () => {
	return (
		<footer className="w-full flex flex-col justify-center items-center py-8 gap-2">
			<nav>
				<ul className="flex items-center gap-4">
					{navLinks.map((item, index) => (
						<li key={index} className="text-zinc-500">
							<Link to={item.path}>{item.title}</Link>
						</li>
					))}
				</ul>
			</nav>
			<p className="font-medium">
				&copy; {new Date().getFullYear()} Supply Chain Network Pty LTD
			</p>
		</footer>
	);
};

export default Footer;
