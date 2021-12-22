// JavaScript for the homepage example index.html
// Add a current year to the footer
window.logout = function () {
	fetch('/~/homepage/logout', { method: 'POST' });
	alert('Logged Out!')
	location.href = '/~/homepage/login'
}

let weather = {
	apiKey: "854c1ac9d772f88575f6eabd491f3870",
	fetchWeather: function (city) {
		fetch(
				"https://api.openweathermap.org/data/2.5/weather?q=" +
				city +
				"&units=metric&appid=" +
				this.apiKey
			)
			.then((response) => {
				if (!response.ok) {
					alert("No weather found.");
					throw new Error("No weather found.");
				}
				return response.json();
			})
			.then((data) => this.displayWeather(data));
	},
	displayWeather: function (data) {
		const { name } = data;
		const { icon, description } = data.weather[0];
		const { temp, humidity } = data.main;
		const { speed } = data.wind;
		document.querySelector(".city")
			.innerText = "Weather in " + name;
		document.querySelector(".icon")
			.src =
			"https://openweathermap.org/img/wn/" + icon + ".png";
		document.querySelector(".description")
			.innerText = description;
		document.querySelector(".temp")
			.innerText = temp + "°C";
		document.querySelector(".humidity")
			.innerText =
			"Humidity: " + humidity + "%";
		document.querySelector(".wind")
			.innerText =
			"Wind speed: " + speed + " km/h";
		document.querySelector(".weather")
			.classList.remove("loading");
		// document.body.style.backgroundImage =
		// 	"url('https://source.unsplash.com/1600x900/?" + name + "')";

		// this.weatherWidget(name);

	},
	search: function () {
		this.fetchWeather(document.querySelector(".search-bar")
			.value);
		wid.weatherWidget(document.querySelector(".search-bar")
			.value);
	},
};

let wid = {
	apiKey: "854c1ac9d772f88575f6eabd491f3870",
	weatherWidget: function (city) {
		fetch(
				"https://api.openweathermap.org/data/2.5/weather?q=" +
				city +
				"&units=metric&appid=" +
				this.apiKey
			)
			.then((response) => {
				if (!response.ok) {
					alert("No weather found.");
					throw new Error("No weather found.");
				}
				return response.json();
			})
			.then((data) => this.widget(data));
	},
	widget: function (data) {
		// let src = '//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/d3.min.js'
		const { id } = data;
		window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];
		window.myWidgetParam.push({ id: 11, cityid: id, appid: '854c1ac9d772f88575f6eabd491f3870', units: 'metric', containerid: 'openweathermap-widget-11', });
		var script = document.createElement('script');
		script.async = true;
		script.charset = "utf-8";
		script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(script, s);
	},
};

document.querySelector(".search button")
	.addEventListener("click", function () {
		weather.search();
	});

document
	.querySelector(".search-bar")
	.addEventListener("keyup", function (event) {
		if (event.key == "Enter") {
			weather.search();
		}
	});

weather.fetchWeather("Delhi");

// const username = 'username';
// const password = '1234';
async function signup(data) {
	const resp = await fetch('/~/homepage/signup', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data)
	})
	const ans = await resp.json();

	/* This is used to show the answer in the code block. 
	   Delete it when copied over to your code */
	show(ans);
}

// signup({ username, password });