const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '04c31a4fa6mshfa53af35cbc7dfcp1419cejsn1723759a1bb3',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};



const getWeather = (city) => {
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
			// cloud_pct.innerHTML = response.cloud_pct
			temp.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			wind_degrees.innerHTML = response.wind_degrees
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset
		})
		.catch(err => console.error(err));

}

submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Mumbai")


// London Weather

const london = (city) => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=london', options)
		.then(response => response.json())
		.then((response) =>{ 
			console.log(response)
			min_temp_london.innerHTML = response.min_temp
			max_temp_london.innerHTML = response.max_temp
			temp_london.innerHTML = response.temp
		})
		.catch(err => console.error(err));
}

london("london")

// 

const kolkata = (city) => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata', options)
		.then(response => response.json())
		.then((response) =>{ 
			console.log(response)
			min_temp_kolkata.innerHTML = response.min_temp
			max_temp_kolkata.innerHTML = response.max_temp
			temp_kolkata.innerHTML = response.temp
		})
		.catch(err => console.error(err));
}

kolkata("kolkata")


// Paris Weather

const paris = (city) => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=paris', options)
		.then(response => response.json())
		.then((response) =>{ 
			console.log(response)
			min_temp_paris.innerHTML = response.min_temp
			max_temp_paris.innerHTML = response.max_temp
			temp_paris.innerHTML = response.temp
		})
		.catch(err => console.error(err));
}

paris("paris")

// Tokyo Weather

const tokyo = (city) => {
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=tokyo', options)
		.then(response => response.json())
		.then((response) =>{ 
			console.log(response)
			min_temp_tokyo.innerHTML = response.min_temp
			max_temp_tokyo.innerHTML = response.max_temp
			temp_tokyo.innerHTML = response.temp
		})
		.catch(err => console.error(err));
}

tokyo("tokyo")

