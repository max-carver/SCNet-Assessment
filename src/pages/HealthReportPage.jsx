import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";

const HealthReportPage = () => {
	const [data, setData] = useState(null);
	const [filteredData, setFilteredData] = useState(null);
	const [selectedCorporate, setSelectedCorporate] = useState("");

	const fetchData = async () => {
		const endPoint =
			"https://scnetwebapi.azure-api.net/api/DeveloperTest/DeveloperTest/GetCorporateData";
		try {
			const response = await fetch(endPoint, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					"Ocp-Apim-Subscription-Key": process.env.REACT_APP_API_KEY,
				},
			});
			if (!response.ok) {
				throw new Error("Network Error");
			}
			const result = await response.json();
			setData(result);
			setFilteredData(result);
			console.log(result);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const handleSelectChange = (event) => {
		const value = event.target.value;
		setSelectedCorporate(value);
		filterData(value);
	};

	const filterData = (selectedValue) => {
		if (!data) return;
		if (selectedValue === "") {
			// Reset to show all data if no corporate name is selected
			setFilteredData(data);
		} else {
			const filtered = data.filter(
				(item) =>
					item.corporate_Name.toLowerCase() === selectedValue.toLowerCase()
			);
			setFilteredData(filtered);
		}
	};

	const renderTable = (data) => {
		// Use filteredData if available, otherwise use all data
		const displayData = filteredData || data;

		// Loading state
		if (!displayData)
			return (
				<div>
					<Spinner />
				</div>
			);

		return (
			<table className="w-full table-auto bg-zinc-50 shadow-md border border-zinc-400">
				<thead className="text-center">
					<tr className="border odd:bg-zinc-100">
						<th className="py-3 border">Corporate Name</th>
						<th className="border">Active BEEs</th>
						<th className="border">Active TCCs</th>
						<th className="border">Active Workman Comp</th>
						<th className="border">Expired BEEs</th>
						<th className="border">Expired TCCs</th>
						<th className="border">Expired Workman Comp</th>
						<th className="border"># of Vendors</th>
					</tr>
				</thead>
				<tbody className="text-center ">
					{displayData.map((item, index) => (
						<tr key={index}>
							<td className="py-2 border border-b-transparent">
								{item.corporate_Name}
							</td>
							<td className="border border-b-transparent">
								{item.active_bees}
							</td>
							<td className="border border-b-transparent">
								{item.active_tccs}
							</td>
							<td className="border border-b-transparent">
								{item.active_workman_comp}
							</td>
							<td className="border border-b-transparent">
								{item.expired_bees}
							</td>
							<td className="border border-b-transparent">
								{item.expired_tccs}
							</td>
							<td className="border border-b-transparent">
								{item.expired_workman_comp}
							</td>
							<td className="border border-b-transparent">
								{item.number_of_vendors}
							</td>
							{/* Render more data cells as needed */}
						</tr>
					))}
				</tbody>
			</table>
		);
	};

	const uniqueCorporates = data
		? [...new Set(data.map((item) => item.corporate_Name))]
		: [];

	return (
		<div className="px-4 md:px-12 lg:px-16 py-8 bg-zinc-100">
			<h1 className="text-3xl mb-8 text-center font-bold">Health Report</h1>
			<div className="my-4">
				<label htmlFor="corporateSelect" className="mr-2">
					Select Corporate:
				</label>
				<select
					id="corporateSelect"
					value={selectedCorporate}
					onChange={handleSelectChange}
					className="px-2 py-1 border border-gray-300 rounded"
				>
					<option value={selectedCorporate}>All Corporates</option>
					{uniqueCorporates.map((corporate, index) => (
						<option key={index} value={corporate}>
							{corporate}
						</option>
					))}
				</select>
			</div>
			{renderTable()}
		</div>
	);
};
export default HealthReportPage;
