/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			boxShadow: {
				navbar: "0 0 10px rgba(0, 0, 0, 0.5)",
			},
		},
	},
	plugins: [],
};
