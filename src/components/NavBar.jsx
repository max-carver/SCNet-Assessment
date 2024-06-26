import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import desktopLogo from "../images/SCNet Logo 2024 Paths w.png";
import mobileLogo from "../images/marker-icon.png";
import { AiOutlineClose, AiOutlineMenuFold } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import NavLinks from "./NavLinks";
import LoginModal from "./LoginModal";

const NavBar = ({ user }) => {
	const [isMobile, setIsMobile] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const handleMenuToggle = () => {
		setIsMobile((prev) => !prev);
		// 'Disables' screen when mobile menu is open
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
			<nav className="hidden sm:flex px-4 md:px-12 lg:px-16 justify-between items-center text-white shadow-navbar bg-zinc-800 backdrop-blur text-sm font-regular h-20 sticky top-0 z-[100]">
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
					{user ? (
						<span
							className="cursor-pointer border-l pl-2 text-red-300 hover:brightness-125 transition-all duration-300"
							onClick={() => {
								localStorage.removeItem("username");
								window.location.reload();
							}}
						>
							Sign out
						</span>
					) : (
						<button
							className="bg-[#E03F3F] px-5 py-1.5 rounded-lg ml-2 lg:ml-2 font-medium hover:brightness-125 active:scale-95 transition-all duration-300"
							onClick={() => setShowModal((prev) => !prev)}
						>
							Login
						</button>
					)}
				</div>
			</nav>

			{/* Nice transition for showing and hiding Login Modal */}
			<AnimatePresence>
				{showModal && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.25 }}
					>
						<LoginModal onClick={() => setShowModal((prev) => !prev)} />
					</motion.div>
				)}
			</AnimatePresence>

			{showModal && (
				// Overlay
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 0.5 }}
					exit={{ opacity: 0 }}
					className="fixed inset-0 bg-black z-10"
					onClick={handleMenuToggle}
				/>
			)}
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
					// Overlay
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
						<NavLinks
							onClick={() => {
								setIsMobile(false);
							}}
						/>
					</div>
					{user ? (
						<button
							className="cursor-pointer text-xl pt-2 text-red-900 hover:brightness-125 transition-all duration-300"
							onClick={() => {
								localStorage.removeItem("username");
								window.location.reload();
							}}
						>
							Sign out
						</button>
					) : (
						<button
							className="hover:brightness-125 text-xl mt-2 transition-all duration-300"
							onClick={() => {
								setShowModal((prev) => !prev);
								setIsMobile(false);
							}}
						>
							Login
						</button>
					)}
				</motion.div>
			</nav>
		</>
	);
};

export default NavBar;
