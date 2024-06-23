import React, { useState } from "react";
import { NavL, NavLink, NavLinkink } from "react-router-dom";
import desktopLogo from "../images/SCNet Logo 2024 Paths w.png";
import { navLinks } from "../data";
import mobileLogo from "../images/marker-icon.png";
import { AiOutlineClose, AiOutlineMenuFold } from "react-icons/ai";
import { motion } from "framer-motion";
import NavLinks from "./NavLinks";

const NavBar = () => {
	const [isMobile, setIsMobile] = useState(false);

	const handleMenuToggle = () => {
		setIsMobile((prev) => !prev);
		document.body.style.overflow = isMobile ? "auto" : "hidden";
	};

	const menuVariants = {
		open: {
			opacity: 1,
			x: 0,
			transition: { type: "tween", duration: 0.5 },
		},
		closed: {
			opacity: 0,
			x: "100%",
			transition: { type: "tween", duration: 0.5 },
		},
	};

	return (
		<>
			{/* Desktop Navigation */}
			<nav className="hidden sm:flex px-4 md:px-12 lg:px-16 justify-between items-center text-white shadow-navbar bg-zinc-800 backdrop-blur text-sm font-regular h-20 sticky top-0">
				{/* Brand */}
				<NavLink to="/">
					<img
						src={desktopLogo}
						alt="Desktop Company Logo"
						className=" sm:w-56 md:w-64 lg:w-72 z-[99]"
					/>
				</NavLink>
				{/* Navigation links */}
				<div className="flex items-center">
					<NavLinks />
					<button className="bg-[#E03F3F] px-5 py-1.5 rounded-lg ml-2 lg:ml-2 font-medium hover:brightness-125 active:scale-95 transition-all duration-300">
						Login
					</button>
				</div>
			</nav>
			{/* Mobile Navigation */}
			<nav className="flex sm:hidden px-4 md:px-12 lg:px-16 justify-between items-center text-white shadow-navbar bg-zinc-800 text-sm font-regular h-20 sticky top-0 z-[99]">
				{/* Brand */}
				<NavLink to="/">
					<img src={mobileLogo} alt="Mobile Company Logo" className="w-20" />
				</NavLink>

				<AiOutlineMenuFold
					size={42}
					className="cursor-pointer hover:text-red-600 transition-all duration-300"
					onClick={handleMenuToggle}
				/>

				{/* Navigation Links */}
				{isMobile && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 0.5 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 bg-black z-10"
						onClick={handleMenuToggle}
					/>
				)}

				{/* Navigation Links */}
				<motion.div
					initial="closed"
					animate={isMobile ? "open" : "closed"}
					variants={menuVariants}
					className="fixed top-0 right-0 bg-zinc-50 text-zinc-800 w-3/4 max-w-xs h-full p-5 z-20 shadow-lg"
				>
					<AiOutlineClose
						size={28}
						className="cursor-pointer mb-2"
						onClick={handleMenuToggle}
					/>
					{/* Navigation links */}
					<div className="flex flex-col text-xl gap-2">
						<NavLinks />
					</div>
					<button
						className="w-full text-left py-1.5 hover:text-red-500 transition-all duration-300 text-xl"
						onClick={handleMenuToggle}
					>
						Login
					</button>
				</motion.div>
			</nav>
		</>
	);
};

export default NavBar;
