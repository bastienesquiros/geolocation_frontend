import { useEffect, useState } from 'react';

export default function Location() {
	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(async (position) => {
				const city = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`;
				const response = await fetch(city);
				const data = await response.json();
				const cityData = data.city;

				fetch('http://localhost:3000/users/save', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						lat: position.coords.latitude,
						long: position.coords.longitude,
						city: cityData,
						timestamp: new Date(),
					}),
				})
					.then((res) => res.json())
					.then((data) => {
						console.log(data);
					});
			});
		}
	}, []);
}
