import React from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../data";

const NavLinks = ({ handleMenuToggle }) => (
	<>
		{navLinks.map((link) => (
			<NavLink
				key={link.title}
				to={link.path}
				className={({ isActive }) =>
					`sm:px-1 md:px-2 lg:px-3 hover:text-red-500 transition-all duration-300 ${
						isActive && "text-zinc-400 hover:text-zinc-400"
					}`
				}
				onClick={handleMenuToggle}
			>
				{link.title}
			</NavLink>
		))}
	</>
);

export default NavLinks;
