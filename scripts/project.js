//select the DOM element.
const year = document.querySelector("#currentyear");
let lastModified = document.querySelector("#lastModified");

const countryData = {
	area: "923,768 km²",
	population: "218,500,000",
	capital: "Abuja",
	languages: ["Yoruba, Hausa, Igbo"],
	currency: "Naira",
	timezone: "GMT+1",
	callingCode: "+234",
	internetTLD: ".ng"
  };

  // Function to display country information
  function displayCountryInfo(data) {
	const infoDiv = document.getElementById("countryInfo");
	infoDiv.innerHTML = `
	  <p><strong>Area:</strong> ${data.area}</p>
	  <p><strong>Population:</strong> ${data.population}</p>
	  <p><strong>Capital:</strong> ${data.capital}</p>
	  <p><strong>Languages:</strong> ${data.languages.join(", ")}</p>
	  <p><strong>Currency:</strong> ${data.currency}</p>
	  <p><strong>Timezone:</strong> ${data.timezone}</p>
	  <p><strong>Calling Code:</strong> ${data.callingCode}</p>
	  <p><strong>Internet TLD:</strong> ${data.internetTLD}</p>
	`;
  }

  // Display country information
  displayCountryInfo(countryData);



function calculateWindChill(temperature, windSpeed, unit = 'C') {
    if (unit === 'F') {
        temperature = (temperature - 32) * (5 / 9); // Convert Fahrenheit to Celsius
    }
    
    if (windSpeed < 4.8) { // Below 3 mph (4.8 km/h), the wind chill formula is not accurate
        return temperature;
    }

    let windChill = 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));

    if (unit === 'F') {
        windChill = (windChill * (9 / 5)) + 32; // Convert Celsius back to Fahrenheit
    }

    return windChill;
}

let temperature = 10; // Temperature in Celsius
let windSpeed = 4.8; // Wind speed in km/h
let windChillCelsius = calculateWindChill(temperature, windSpeed);
let final = windChillCelsius.toFixed(1);

console.log("Wind Chill (°C):", windChillCelsius);

window.onload = function diaplayWeatherInfo() {
	let weather = document.getElementById("weatherInfo");
	weather.innerHTML = `
	<p><strong>Temperature:</strong> ${temperature} °C</p>
	<p><strong>Condition:</strong> Partly Cloudy</p>
	<p><strong>Wind:</strong> ${windSpeed} km/h</p>
	<p><strong>Wind Chill:</strong> ${final} °C</p>
	`;
}


let windChillFahrenheit = calculateWindChill(temperature, windSpeed, 'F');
console.log("Wind Chill (°F):", windChillFahrenheit);





const today = new Date();

year.innerHTML = `<span>${today.getFullYear()}</span>`;

lastModified.innerHTML = `<span class="highlight">Last Modification: ${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "short"
	}
).format(today)}</span>`;