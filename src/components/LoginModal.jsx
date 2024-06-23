import { motion } from "framer-motion";
import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible, AiOutlineClose } from "react-icons/ai";
import Spinner from "./Spinner";

const LoginModal = ({ onClick }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [user, setUser] = useState("");
	const [error, setError] = useState(null);
	const [showPassword, setShowPassword] = useState(false);
	const [isPending, setIsPending] = useState(false);

	const handleLogin = async () => {
		try {
			const response = await fetch(
				`https://scnetwebapi.azure-api.net/api/DeveloperTest/DeveloperTest/LoginUser`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"Ocp-Apim-Subscription-Key": process.env.REACT_APP_API_KEY,
					},
					body: JSON.stringify({
						username,
						password,
					}),
				}
			);

			// Basic validation
			if (username !== "DevUser") {
				setError("The username does not exist");
				return;
			}
			if (password !== "Test@123") {
				setError("Incorrect password");
				return;
			}

			if (!response.ok) {
				throw new Error("Login failed");
			}

			// Set user in local storage for user in NavBar component
			localStorage.setItem("username", username);
			setIsPending(true);

			// Manual delay to see the spinner
			setTimeout(() => {
				setUser(username);
				window.location.reload();
				setIsPending(false);
			}, 750);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className="bg-white px-5 py-2 rounded-lg shadow-xl absolute top-1/4 inset-0 mx-auto w-1/3 h-1/2 border-2 z-[99] flex justify-between">
			<div className="flex flex-col items-start justify-start w-full space-y-2">
				<div className="flex flex-col items-center w-full mb-2">
					<h2 className="text-2xl font-bold text-center">Login</h2>
					<p className="text-zinc-600 font-light text-center">
						Sign in with your account details
					</p>
				</div>
				<div className="relative flex flex-col justify-start w-full gap-0.5">
					<label
						htmlFor="username"
						className="font-medium text-sm text-zinc-600 "
					>
						Username
					</label>
					<input
						type="text"
						name="username"
						id="username"
						value={username}
						onChange={(e) => {
							setUsername(e.target.value);
							setError("");
						}}
						className="bg-white relative border px-2 py-1.5 outline-none rounded-md focus:border-red-500"
						placeholder="Enter your email address"
					/>
				</div>
				<div className="relative flex flex-col justify-start w-full gap-0.5 ">
					<label
						htmlFor="password"
						className="font-medium text-sm text-zinc-600 "
					>
						Password
					</label>
					<input
						type={showPassword ? "text" : "password"}
						name="password"
						id="password"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
							setError("");
						}}
						className="bg-white relative border px-2 py-1.5 outline-none rounded-md focus:border-red-500"
						placeholder="Enter your email address"
					/>
					{showPassword ? (
						<AiFillEye
							size={16}
							className="absolute right-2 top-8 cursor-pointer"
							onClick={() => setShowPassword((prev) => !prev)}
						/>
					) : (
						<AiFillEyeInvisible
							size={16}
							className="absolute right-2 top-8 cursor-pointer"
							onClick={() => setShowPassword((prev) => !prev)}
						/>
					)}
				</div>

				{error && <p className="font-semibold text-red-800 text-sm">{error}</p>}
				<div className="relative flex flex-col justify-start w-full">
					{isPending ? (
						<Spinner className="w-8" />
					) : (
						<button
							className="bg-red-500 border border-red-500 rounded-md text-zinc-50 mt-4 py-2 font-semibold hover:brightness-125 transition-all duration-300"
							onClick={handleLogin}
						>
							Login
						</button>
					)}
				</div>
			</div>
			<AiOutlineClose
				size={28}
				className="cursor-pointer mb-2 absolute top-5 right-5"
				onClick={onClick}
			/>
		</div>
	);
};

export default LoginModal;
