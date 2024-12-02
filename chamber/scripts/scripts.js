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
		
		newValue.push(`<img src="images/${member.image}" alt="${member.name}">
			<h3>${member.name}</h3>
			<p>${member.address}</p>
			<p>${member.phone}</p>
			<a href="${member.website}">Website</a>`);
		
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

fetchMembers(); // Initial call to display the members