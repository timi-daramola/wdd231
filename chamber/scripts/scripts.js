//select the DOM element.
const year = document.querySelector("#currentyear");
let lastModified = document.querySelector("#lastModified");

async function fetchMembers() {
	const response = await fetch('data/members.json');
	const members = await response.json();
	displayMembers(members);
}

const newValue = [];
function displayMembers(members) {
		const container = document.getElementById('members-container');
		members.forEach(member => {
		
		newValue.push(`<img src="images/${member.image}">
			<h3>${member.name}</h3>
			<p>${member.address}</p>
			<p>${member.phone}</p>
			<a href="">${member.website}</a>
			<p>${member.membership}</p>`);
		
	});
	for(let i=0; i<3; i++){
		const postElement = document.createElement('div');
		postElement.classList.add('member-list')
		const random = Math.floor(Math.random() * newValue.length);
		postElement.innerHTML = (random, newValue[random]);
		container.appendChild(postElement);
	}
}

function toggleBar() {
	var navBar = document.getElementsByClassName("navigation");
	if (navBar.style.display === "block") {
		navBar.style.display = "none";
	} else {
		navBar.style.display = "block";
	}
}

document.getElementById("myBtn").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

const API_KEY = '5f274f0f3d95c8849cc0b8254d08ea2a';
        const CITY = 'Lagos';  // Change this to the city you want
        const CURRENT_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;
        const FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${API_KEY}&units=metric`;

        // Function to fetch and display weather data
        async function getWeatherData() {
            try {
                // Fetch current weather data
                const currentResponse = await fetch(CURRENT_WEATHER_URL);
                const currentData = await currentResponse.json();
                
                // Fetch 3-day forecast
                const forecastResponse = await fetch(FORECAST_URL);
                const forecastData = await forecastResponse.json();

                // Get current weather details
                const currentTemp = currentData.main.temp;
                const currentDesc = currentData.weather[0].description;

                // Get 3-day forecast (every 8th entry for a 3-day forecast)
                const forecastList = forecastData.list.filter((item, index) => index % 8 === 0); // Every 8 hours (3 days)
                
                // Generate HTML content
                let weatherHTML = `
                    <h2>Current Weather in ${CITY}:</h2>
                    <p>Temperature: ${currentTemp}°C</p>
                    <p>Description: ${currentDesc.charAt(0).toUpperCase() + currentDesc.slice(1)}</p>
                    <div class="forecast">
                        <h3>3-Day Forecast:</h3>
                `;
                
                forecastList.forEach((forecast, index) => {
                    const date = new Date(forecast.dt * 1000);
                    const day = date.toLocaleDateString();
                    const temp = forecast.main.temp;
                    const description = forecast.weather[0].description;
                    weatherHTML += `
                        <div class="forecast-item">
                            <strong>Day ${index + 1} (${day}):</strong> ${temp}°C, ${description.charAt(0).toUpperCase() + description.slice(1)}
                        </div>
                    `;
                });

                // Add closing tag for forecast section
                weatherHTML += `</div>`;

                // Display weather data on the page
                document.getElementById('weatherContainer').innerHTML = weatherHTML;

            } catch (error) {
                document.getElementById('weatherContainer').innerHTML = "<p>Failed to load weather data. Please try again later.</p>";
                console.error("Error fetching weather data:", error);
            }
        }

        // Load weather data on page load
        

fetchMembers(); // Initial call to display the members
window.onload = getWeatherData;