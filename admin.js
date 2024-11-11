// admin.js

// Function to load events and notices
function loadEventsAndNotices() {
  // Load Events
  const eventList = JSON.parse(localStorage.getItem("events")) || [];
  const pastEventList = JSON.parse(localStorage.getItem("pastEvents")) || [];
  const eventListElement = document.getElementById("event-list");
  eventListElement.innerHTML = "";

  // Display upcoming events
  eventList.forEach((event, index) => {
    const eventItem = document.createElement("li");
    eventItem.className = "event-item";
    eventItem.innerHTML = `
      <span><strong>${event.name}</strong> - ${event.date}</span>
      <p>${event.description}</p>
      <button onclick="removeEvent(${index}, false)">Remove</button>
    `;
    eventListElement.appendChild(eventItem);
  });

  // Display past events
  pastEventList.forEach((event, index) => {
    const eventItem = document.createElement("li");
    eventItem.className = "event-item past-event";
    eventItem.innerHTML = `
      <span><strong>${event.name}</strong> - ${event.date}</span>
      <p>${event.description}</p>
      <button onclick="removeEvent(${index}, true)">Remove</button>
    `;
    eventListElement.appendChild(eventItem);
  });

  // Load Notices
  const noticeList = JSON.parse(localStorage.getItem("notices")) || [];
  const noticeListElement = document.getElementById("notice-list");
  noticeListElement.innerHTML = "";

  noticeList.forEach((notice, index) => {
    const noticeItem = document.createElement("li");
    noticeItem.className = "notice-item";
    noticeItem.innerHTML = `
      <p>${notice}</p>
      <button onclick="removeNotice(${index})">Remove</button>
    `;
    noticeListElement.appendChild(noticeItem);
  });
}

// Function to add a new event
function addEvent() {
  const eventName = document.getElementById("event-name").value;
  const eventDate = document.getElementById("event-date").value;
  const eventDescription = document.getElementById("event-description").value;
  const isPastEvent = document.getElementById("is-past-event").checked;

  if (eventName === "" || eventDate === "" || eventDescription === "") {
    alert("Please fill in all fields.");
    return;
  }

  const event = {
    name: eventName,
    date: eventDate,
    description: eventDescription
  };

  if (isPastEvent) {
    const pastEventList = JSON.parse(localStorage.getItem("pastEvents")) || [];
    pastEventList.push(event);
    localStorage.setItem("pastEvents", JSON.stringify(pastEventList));
  } else {
    const eventList = JSON.parse(localStorage.getItem("events")) || [];
    eventList.push(event);
    localStorage.setItem("events", JSON.stringify(eventList));
  }

  loadEventsAndNotices();
  clearForm();
}

// Function to add a new notice
function addNotice() {
  const noticeContent = document.getElementById("notice-content").value;

  if (noticeContent === "") {
    alert("Please enter the notice content.");
    return;
  }

  const noticeList = JSON.parse(localStorage.getItem("notices")) || [];
  noticeList.push(noticeContent);
  localStorage.setItem("notices", JSON.stringify(noticeList));

  loadEventsAndNotices();
  document.getElementById("notice-content").value = "";
}

// Function to remove an event
function removeEvent(index, isPast) {
  if (isPast) {
    const pastEventList = JSON.parse(localStorage.getItem("pastEvents")) || [];
    pastEventList.splice(index, 1);
    localStorage.setItem("pastEvents", JSON.stringify(pastEventList));
  } else {
    const eventList = JSON.parse(localStorage.getItem("events")) || [];
    eventList.splice(index, 1);
    localStorage.setItem("events", JSON.stringify(eventList));
  }
  loadEventsAndNotices();
}

// Function to remove a notice
function removeNotice(index) {
  const noticeList = JSON.parse(localStorage.getItem("notices")) || [];
  noticeList.splice(index, 1);
  localStorage.setItem("notices", JSON.stringify(noticeList));
  loadEventsAndNotices();
}

// Clear event form
function clearForm() {
  document.getElementById("event-name").value = "";
  document.getElementById("event-date").value = "";
  document.getElementById("event-description").value = "";
  document.getElementById("is-past-event").checked = false;
}

// Load events and notices when the page loads
document.addEventListener("DOMContentLoaded", loadEventsAndNotices);
