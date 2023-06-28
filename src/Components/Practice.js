import React, { useEffect, useState } from 'react';
import axios from 'axios';

const options = {
	method: 'GET',
	url: 'https://shazam.p.rapidapi.com/songs/list-recommendations',
	params: {
		key: '484129036',
		locale: 'en-US',
	},
	headers: {
		'X-RapidAPI-Key': '6d55b4d572msh59807e153f8bc08p15f2f7jsn57020d2e328d',
		'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
	},
};

const Practice = () => {
	const [shazamEvents, setShazamEvents] = useState([]);
	const fetchShazamEvents = async () => {
		const response = await axios.request(options);
		if (response.status === 200) {
			setShazamEvents(response.data.shazam_events);
		} else {
			console.log('Error fetching Shazam events:', response.status);
		}
	};
	// const handleClick = () => {
	// 	fetchShazamEvents();
	// };
	useEffect(() => {
		fetchShazamEvents();
	}, []);
	return (
		<div>
			{/* <button onClick={handleClick}>Fetch Shazam Events</button> */}
			<ul>
				{shazamEvents.map((shazamEvent) => (
					<li key={shazamEvent.track_id}>
						{shazamEvent.date} - {shazamEvent.time} - {shazamEvent.location}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Practice;
