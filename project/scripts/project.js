// Example JavaScript for interaction if needed (e.g., for handling search bar input)
// Placeholder functionality for the search feature
document.querySelector('.search-bar input').addEventListener('input', function(e) {
    const query = e.target.value.toLowerCase();
    console.log('Searching for:', query); // Placeholder: log search query
});


const year = document.querySelector("#currentyear");
let lastModified = document.querySelector("#lastModified");

const today = new Date();

year.innerHTML = `<span>${today.getFullYear()}</span>`;

lastModified.innerHTML = `<span class="highlight">Last Modification: ${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "short"
	}
).format(today)}</span>`;