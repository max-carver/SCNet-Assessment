import React, { useState } from "react";
import { Link } from "react-router-dom";
import desktopLogo from "../images/SCNet Logo 2024 Paths w.png";
import { navLinks } from "../data";
import mobileLogo from "../images/marker-icon.png";
import { AiOutlineClose, AiOutlineMenuFold } from "react-icons/ai";
import { motion } from "framer-motion";

const NavBar = () => {
	const [isMobile, setIsMobile] = useState(false);

	const handleMenuToggle = () => {
		setIsMobile((prev) => !prev);
		if (!isMobile) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
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
			<nav className="hidden sm:flex px-4 md:px-12 lg:px-16 justify-between items-center text-white shadow-navbar bg-zinc-800 text-sm font-regular h-20 sticky top-0">
				{/* Brand */}
				<Link to="/">
					<img
						src={desktopLogo}
						alt="Desktop Company Logo"
						className="sm:w-56 md:w-64 lg:w-72"
					/>
				</Link>

				{/* Navigation links */}
				<div className="flex items-center">
					<>
						{navLinks.map((link) => (
							<Link
								key={link.title}
								to={link.path}
								className="sm:px-1 md:px-2 lg:px-3 hover:text-red-500 transition-all duration-300"
							>
								{link.title}
							</Link>
						))}
						<button className="bg-red-600 px-5 py-1.5 rounded-lg ml-2 lg:ml-2 font-medium hover:brightness-125 active:scale-95 transition-all duration-300">
							Login
						</button>
					</>
				</div>
			</nav>
			{/* Mobile Navigation */}
			<nav className="flex sm:hidden px-4 md:px-12 lg:px-16 justify-between items-center text-white shadow-navbar bg-zinc-800 text-sm font-regular h-20 sticky top-0 z-[99]">
				{/* Brand */}
				<Link to="/">
					<img src={mobileLogo} alt="Mobile Company Logo" className="w-20" />
				</Link>

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
					{navLinks.map((link) => (
						<Link
							key={link.title}
							to={link.path}
							className="block py-1.5 hover:text-red-500 transition-all duration-300 text-xl"
							onClick={handleMenuToggle}
						>
							{link.title}
						</Link>
					))}
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
