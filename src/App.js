import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import routing components
import HomePage from "./pages/HomePage";
import MapPage from "./pages/MapPage";
import HealthReportPage from "./pages/HealthReportPage";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/Footer";

const App = () => {
	const [user, setUser] = useState(null);

	// Gets user from local storage
	useEffect(() => {
		const storedUser = localStorage.getItem("username");
		if (storedUser) {
			setUser(storedUser);
		}
	}, []);

	return (
		<Router>
			<NavBar user={user} />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/map" element={<MapPage />} />
				<Route path="/health-report" element={<HealthReportPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
			<Footer />
		</Router>
	);
};

export default App;
