document.getElementById('timestamp').value = new Date().toISOString();
function openModal(id) {
    document.getElementById(id).style.display = "block";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

const params = new URLSearchParams(window.location.search);
document.getElementById('displayFirstName').textContent = params.get('first-name');
document.getElementById('displayLastName').textContent = params.get('last-name');
document.getElementById('displayEmail').textContent = params.get('email');
document.getElementById('displayPhone').textContent = params.get('phone');
document.getElementById('displayOrgName').textContent = params.get('business-name');
document.getElementById('displayMembershipLevel').textContent = params.get('membershipLevel');
document.getElementById('displayTimestamp').textContent = params.get('timestamp');