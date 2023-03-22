import { useEffect } from 'react';

export default function Redirect() {
	useEffect(() => {
		setTimeout(() => {
			window.location.href = 'https://www.sncf-connect.com/train/bons-plans';
		}, 10000);
	}, []);

	return <div>Vous allez être redirigé vers le site sncf.com...</div>;
}
