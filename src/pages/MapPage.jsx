import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Leaflet CSS
import L from "leaflet";
import iconImage from "../images/marker-icon.png"; // Path to your icon image

const provinces = [
	{
		name: "Gauteng",
		lat: -26.689,
		lng: 27.9,
		suppliers: "Suppliers: 10000",
		tenders: "Active Tenders: 2000",
		RFQ: "Active RFQ&apos;s: 5".replace("&apos;", "'"),
	},
	{
		name: "Western Cape",
		lat: -34.5249,
		lng: 20.2241,
		suppliers: "Suppliers: 9000",
		tenders: "Active Tenders: 1000",
		RFQ: "Active RFQ&apos;s: 15".replace("&apos;", "'"),
	},
	{
		name: "Kwazulu-Natal",
		lat: -29.9249,
		lng: 30.4241,
		suppliers: "Suppliers: 8000",
		tenders: "Active Tenders: 3000",
		RFQ: "Active RFQ&apos;s: 16".replace("&apos;", "'"),
	},
	{
		name: "Northern Cape",
		lat: -30.9249,
		lng: 21.4241,
		suppliers: "Suppliers: 8000",
		tenders: "Active Tenders: 3000",
		RFQ: "Active RFQ&apos;s: 16".replace("&apos;", "'"),
	},
	{
		name: "North West",
		lat: -27.549,
		lng: 25.341,
		suppliers: "Suppliers: 8000",
		tenders: "Active Tenders: 3000",
		RFQ: "Active RFQ&apos;s: 16".replace("&apos;", "'"),
	},
	{
		name: "Free State",
		lat: -29.549,
		lng: 26.541,
		suppliers: "Suppliers: 8000",
		tenders: "Active Tenders: 3000",
		RFQ: "Active RFQ&apos;s: 16".replace("&apos;", "'"),
	},
	{
		name: "Eastern West",
		lat: -33.249,
		lng: 26.541,
		suppliers: "Suppliers: 8000",
		tenders: "Active Tenders: 3000",
		RFQ: "Active RFQ&apos;s: 16".replace("&apos;", "'"),
	},
	{
		name: "Limpopo",
		lat: -24.649,
		lng: 29.041,
		suppliers: "Suppliers: 8000",
		tenders: "Active Tenders: 3000",
		RFQ: "Active RFQ&apos;s: 16".replace("&apos;", "'"),
	},
	{
		name: "Mpumalanga",
		lat: -26.949,
		lng: 30.041,
		suppliers: "Suppliers: 8000",
		tenders: "Active Tenders: 3000",
		RFQ: "Active RFQ&apos;s: 16".replace("&apos;", "'"),
	},

	// Add information for all provinces
];

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.prototype._getIconUrl = function (href) {
	var parts = (href || "").split("/");
	return !parts[0] && !parts[1]
		? this.options.imagePath +
				(this.options.iconUrl ||
					this.options.prefix +
						this.options.name +
						"." +
						this.options.extension)
		: href;
};

const customIcon = new L.Icon({
	iconUrl: iconImage,
	iconSize: [28, 26], // Adjust size as needed
	iconAnchor: [12.5, 41], // Anchor point for icon placement
});

const MapPage = () => {
	const [activeProvince, setActiveProvince] = useState(null);

	return (
		<div className="px-4 md:px-12 lg:px-16 w-full overflow-hidden py-8">
			<h1 className="text-3xl mb-8 text-center font-bold">
				South Africa Provinces
			</h1>

			<div>
				<MapContainer
					center={[-29.0739, 24.7128]}
					zoom={5}
					style={{
						height: "450px",
						width: "100%",
						marginLeft: "auto",
						marginRight: "auto",
						zIndex: -1,
						borderRadius: "16px",
					}}
				>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>

					{provinces.map((province) => (
						<Marker
							key={province.name}
							position={[province.lat, province.lng]}
							icon={customIcon}
							onClick={() => setActiveProvince(province)}
						>
							<Popup>
								<h3>{province.name}</h3>
								<p>{province.suppliers}</p>
								<p>{province.tenders}</p>
								<p>{province.RFQ}</p>
							</Popup>
						</Marker>
					))}

					{activeProvince && (
						<Popup
							position={activeProvince}
							onClose={() => setActiveProvince(null)}
						>
							{activeProvince.name} - {activeProvince.info}
						</Popup>
					)}
				</MapContainer>
			</div>
		</div>
	);
};

export default MapPage;
