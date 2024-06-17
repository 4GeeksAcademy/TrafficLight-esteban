import React from "react";

//include images into your bundle

import { TrafficLight } from "./TrafficLight.jsx";


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<TrafficLight/>
		</div>
	);
};

export default Home;
