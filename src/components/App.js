import React, { useState } from "react";
import Nav from "./Nav";
import './App.css'

import hogs from "../porkers_data";

function App() {
	const [allHogs, setHogs] = useState(hogs)
	console.log(allHogs);
	
	return (
		<div className="App">
			<Nav />

			<div className="hogs">
				{allHogs.map(hog => (
					<div className="hog">
						{hog.name}
						<img src={hog.image} width={100} height={80} />
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
