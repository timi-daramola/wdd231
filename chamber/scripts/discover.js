const monthYearElement = document.getElementById("month-year");
const daysContainer = document.getElementById("days");
const prevMonthButton = document.getElementById("prev-month");
const nextMonthButton = document.getElementById("next-month");


document.addEventListener('DOMContentLoaded', function () {
    // Handle visitor message
    const visitorMessage = document.getElementById('visitor-message');
    const lastVisit = localStorage.getItem('lastVisit');

    const currentDate = new Date();
    const currentTime = currentDate.getTime(); // Current time in milliseconds

    let message = 'Welcome! Let us know if you have any questions.';

    if (lastVisit) {
        const lastVisitDate = new Date(Number(lastVisit)); // Convert to Date object
        const daysDifference = Math.floor((currentTime - lastVisitDate) / (1000 * 3600 * 24));

        if (daysDifference < 1) {
            message = 'Back so soon! Awesome!';
        } else if (daysDifference === 1) {
            message = 'You last visited 1 day ago.';
        } else if (daysDifference > 1) {
            message = `You last visited ${daysDifference} days ago.`;
        }
    }

    visitorMessage.textContent = message;
    localStorage.setItem('lastVisit', currentTime); // Store the current time for next visit

    // Implement lazy loading functionality (if needed, but 'loading="lazy"' does the job)
    const images = document.querySelectorAll('.lazy');
    images.forEach((img) => {
        img.addEventListener('load', () => {
            img.classList.add('loaded');
        });
    });
});

let currentDate = new Date();

// Function to render the calendar
function renderCalendar(date) {
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();

    // Set the month and year heading
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    monthYearElement.textContent = `${months[currentMonth]} ${currentYear}`;

    // Get the first day of the month
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);

    // Clear previous days
    daysContainer.innerHTML = "";

    // Render empty cells before the first day of the month
    for (let i = 0; i < firstDay.getDay(); i++) {
        const emptyCell = document.createElement("div");
        emptyCell.classList.add("day", "disabled");
        daysContainer.appendChild(emptyCell);
    }

    // Render all days of the month
    for (let i = 1; i <= lastDay.getDate(); i++) {
        const dayElement = document.createElement("div");
        dayElement.classList.add("day");
        dayElement.textContent = i;

        // Highlight today's date
        if (
            i === currentDate.getDate() &&
            currentMonth === currentDate.getMonth() &&
            currentYear === currentDate.getFullYear()
        ) {
            dayElement.classList.add("today");
        }

        daysContainer.appendChild(dayElement);
    }
}

// Add event listeners for month navigation buttons
prevMonthButton.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
});

nextMonthButton.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
});

// Initial render
renderCalendar(currentDate);
