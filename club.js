// Get references to DOM elements
const eventForm = document.querySelector('#event-creation form');
const eventNameInput = document.querySelector('#event-creation #event-name');
const eventDateInput = document.querySelector('#event-creation #event-date');
const eventTimeInput = document.querySelector('#event-creation #event-time');
const eventDescriptionInput = document.querySelector('#event-creation #event-description');

// Handle event creation form submission
eventForm.addEventListener('submit', (event) => {
	event.preventDefault(); // prevent default form submission behavior

	// Retrieve form values and store in object
	const eventObj = {
		name: eventNameInput.value,
		date: eventDateInput.value,
		time: eventTimeInput.value,
		description: eventDescriptionInput.value
	};

	// TODO: Send event object to server to create new event
});

// Handle event deletion form submission
const deleteButtons = document.querySelectorAll('#event-deletion button');
deleteButtons.forEach((button) => {
	button.addEventListener('click', (event) => {
		event.preventDefault(); // prevent default form submission behavior

		// Retrieve event ID from button data attribute
		const eventId = button.dataset.eventId;

		// TODO: Send event ID to server to delete event
	});
});

// Handle email and push notification form submission
const communicationForm = document.querySelector('#communication-module form');
const messageInput = document.querySelector('#communication-module #message');

communicationForm.addEventListener('submit', (event) => {
	event.preventDefault(); // prevent default form submission behavior

	// Retrieve form values and store in object
	const messageObj = {
		message: messageInput.value
	};

	// TODO: Send message object to server to send email or push notification
});
