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


const today = new Date();

year.innerHTML = `<span>${today.getFullYear()}</span>`;

lastModified.innerHTML = `<span class="highlight">Last Modification: ${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "short"
	}
).format(today)}</span>`;


// Fetch member data and display it
async function fetchMemberData() {
	try {
	  const response = await fetch('data/members.json');
	  const members = await response.json();
  
	  const membersContainer = document.getElementById('members-container');
	  members.forEach(member => {
		// Create a div for each member
		const memberCard = document.createElement('div');
		memberCard.classList.add('member-card');
  
		// Add the image
		const image = document.createElement('img');
		image.src = `images/${member.image}`; // Adjust path if needed
		image.alt = member.name;
		memberCard.appendChild(image);
  
		// Add the name
		const name = document.createElement('h3');
		name.textContent = member.name;
		memberCard.appendChild(name);
  
		// Add the address
		const address = document.createElement('p');
		address.textContent = `Address: ${member.address}`;
		memberCard.appendChild(address);
  
		// Add the phone number
		const phone = document.createElement('p');
		phone.textContent = `Phone: ${member.phone}`;
		memberCard.appendChild(phone);
  
		// Add the website link
		const website = document.createElement('p');
		const websiteLink = document.createElement('a');
		websiteLink.href = member.website;
		websiteLink.textContent = 'Visit Website';
		website.appendChild(websiteLink);
		memberCard.appendChild(website);
  
		// Add other info
		const otherInfo = document.createElement('p');
		otherInfo.textContent = `Info: ${member.other_info}`;
		memberCard.appendChild(otherInfo);
  
		// Append the card to the container
		membersContainer.appendChild(memberCard);
	  });
	} catch (error) {
	  console.error("Error fetching member data:", error);
	}
  }
  
  // Call the function to fetch and display member data
  fetchMemberData();
  