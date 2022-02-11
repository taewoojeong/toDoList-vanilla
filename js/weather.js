const API_KEY = 'f039f20882434ed2726657b5d6201c0b';

function onGeoOk(position) {
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			const weather = document.querySelector('#weather span:first-child');
			weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃ ${data.name}`;
		});
}
function onGeoError() {
	// alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
