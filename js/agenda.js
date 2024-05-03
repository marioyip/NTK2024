		// Define the events
		var events = [
			{
				title: "Lunch with Jane",
				start: new Date("2023-05-17T12:00:00"),
				end: new Date("2023-05-17T13:00:00")
			},
			{
				title: "Client Presentation",
				start: new Date("2023-05-18T14:00:00"),
				end: new Date("2023-05-18T16:00:00")
			},
			{
				title: "Product Demo",
				start: new Date("2023-05-18T15:00:00"),
				end: new Date("2023-05-18T16:00:00")
			},
			{
				title: "Project Status",
				start: new Date("2023-05-19T10:00:00"),
				end: new Date("2023-05-19T11:00:00")
			},
			{
				title: "Team Meeting",
				start: new Date("2023-05-19T14:00:00"),
				end: new Date("2023-05-19T15:00:00")
			},
			{
				title: "Product Review",
				start: new Date("2023-05-20T09:00:00"),
				end: new Date("2023-05-20T10:00:00")
			},
			{
				title: "Coffee with Sarah",
				start: new Date("2023-05-20T15:00:00"),
				end: new Date("2023-05-20T16:00:00")
            }
            
	];

	// Get the date range to display
	var startDate = new Date("2023-05-17T00:00:00");
	var endDate = new Date("2023-05-20T23:59:59");

	// Get the table cells and event containers
	var cells = document.querySelectorAll(".day");
	var containers = document.querySelectorAll(".event-container");

	// Loop through the table cells and populate them with the date
	for (var i = 0; i < cells.length; i++) {
		var date = new Date(startDate.getTime() + (i * 24 * 60 * 60 * 1000));
		if (date >= startDate && date <= endDate) {
			cells[i].textContent = date.getDate();
		}
	}

	// Loop through the events and add them to the calendar
	for (var i = 0; i < events.length; i++) {
		var event = events[i];
		if (event.start >= startDate && event.start <= endDate) {
			var dayIndex = (event.start.getDate() - startDate.getDate());
			var container = containers[dayIndex];
			var eventEl = document.createElement("div");
			eventEl.className = "event";
			eventEl.textContent = event.title;
			eventEl.addEventListener("click", function() {
				alert(event.title);
			});
			container.appendChild(eventEl);

			// Calculate the position and height of the event on the calendar
			var startMinutes = event.start.getHours() * 60 + event.start.getMinutes();
			var endMinutes = event.end.getHours() * 60 + event.end.getMinutes();
			var top = startMinutes * 0.5;
			var height = (endMinutes - startMinutes) * 0.5;
			eventEl.style.top = top + "px";
			eventEl.style.height = height + "px";

			// Highlight the current event if it is ongoing
			var now = new Date();
			if (now >= event.start && now <= event.end) {
				eventEl.classList.add("current-event");
			}
		}
	}

	// Highlight the current day
	var today = new Date();
	if (today >= startDate && today <= endDate) {
		var dayIndex = (today.getDate() - startDate.getDate());
		cells[dayIndex].classList.add("current-day");
	}