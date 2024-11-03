import React, { useState } from "react";
import Nav from "./Nav";
import './App.css'

import hogs from "../porkers_data";

function App() {
	const [allHogs, setHogs] = useState(hogs);
	// console.log(allHogs);
	const [selectedHog, setSelectedHog] = useState(null);
	const [showGreasedOnly, setShowGreasedOnly] = useState(false);
	// const filteredHogs = showGreasedOnly ? allHogs.filter(hog => hog.greased) : allHogs;
	const [sortOption, setSortOption] = useState("");
	const [hiddenHogs, setHiddenHogs] = useState([]);
	const [newHog, setNewHog] = useState({
		name: "",
		image: "",
		specialty: "",
		weight: "",
		greased: false,
		"highest medal achieved": ""
	});

	// Filter and sort hogs based on the user's selection
	let filteredHogs = showGreasedOnly 
		? allHogs.filter(hog => hog.greased && !hiddenHogs.includes(hog.name)) 
		: allHogs.filter(hog => !hiddenHogs.includes(hog.name));

	if (sortOption === "name") {
		filteredHogs = [...filteredHogs].sort((a, b) => a.name.localeCompare(b.name));
	} else if (sortOption === "weight") {
		filteredHogs = [...filteredHogs].sort((a, b) => a.weight - b.weight);
	}

	const hideHog = (hogName) => {
		setHiddenHogs([...hiddenHogs, hogName]);
	};

	// Function to handle form input changes for adding a new hog
	const handleInputChange = (e) => {
		const { name, value, type, checked } = e.target;
		setNewHog({
			...newHog,
			[name]: type === "checkbox" ? checked : value
		});
	};

	// Function to handle form submission for adding a new hog
	const handleAddHog = (e) => {
		e.preventDefault();
		setHogs([...allHogs, newHog]); // Add new hog to the allHogs array
		setNewHog({
			name: "",
			image: "",
			specialty: "",
			weight: "",
			greased: false,
			"highest medal achieved": ""
		}); // Reset form fields
	};

	return (
		<div className="App">
			<Nav />

			<div className="filter-controls">
				<button onClick={() => setShowGreasedOnly(!showGreasedOnly)}>
					{showGreasedOnly ? "Show All Hogs" : "Show Greased Hogs Only"}
				</button>
				</div>
					{/* Sort dropdown */}
			<div className="sort-controls">
				<label>Sort By: </label>
				<select onChange={(e) => setSortOption(e.target.value)} value={sortOption}>
					<option value="">Select</option>
					<option value="name">Name</option>
					<option value="weight">Weight</option>
				</select>
			</div>

			{/* Form to add a new hog */}
			<div className="add-hog-form">
				<h2>Add a New Hog</h2>
				<form onSubmit={handleAddHog}>
					<input
						type="text"
						name="name"
						placeholder="Name"
						value={newHog.name}
						onChange={handleInputChange}
					/>
					<input
						type="text"
						name="image"
						placeholder="Image URL"
						value={newHog.image}
						onChange={handleInputChange}
					/>
					<input
						type="text"
						name="specialty"
						placeholder="Specialty"
						value={newHog.specialty}
						onChange={handleInputChange}
					/>
					<input
						type="number"
						name="weight"
						placeholder="Weight"
						value={newHog.weight}
						onChange={handleInputChange}
					/>
					<label>
						Greased:
						<input
							type="checkbox"
							name="greased"
							checked={newHog.greased}
							onChange={handleInputChange}
						/>
					</label>
					<input
						type="text"
						name="highest medal achieved"
						placeholder="Highest Medal Achieved"
						value={newHog["highest medal achieved"]}
						onChange={handleInputChange}
					/>
					<button type="submit">Add Hog</button>
				</form>
			</div>
			<div className="hogs">
				{filteredHogs.map(hog => (
					<div 
						key={hog.name} 
						className="hog" 
						onClick={() => setSelectedHog(selectedHog === hog.name ? null : hog.name)} // `setSelectedHog` is used directly here
					>
						<h3>{hog.name}</h3>
						<img src={hog.image} alt={hog.name} width={100} height={80} />

						{/* Display additional details if this hog is selected */}
						{selectedHog === hog.name && (
							<div className="hog-details">
								<p><strong>Specialty:</strong> {hog.specialty}</p>
								<p><strong>Weight:</strong> {hog.weight}</p>
								<p><strong>Greased:</strong> {hog.greased ? "Yes" : "No"}</p>
								<p><strong>Highest Medal Achieved:</strong> {hog["highest medal achieved"]}</p>
								<button onClick={(e) => {
									e.stopPropagation(); // Prevents the click from toggling details
									hideHog(hog.name);
								}}>Hide Hog</button>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
}

export default App;