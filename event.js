// event.js
function loadContent() {
  const eventList = JSON.parse(localStorage.getItem("events")) || [];
  const pastEventList = JSON.parse(localStorage.getItem("pastEvents")) || [];
  const noticeList = JSON.parse(localStorage.getItem("notices")) || [];

  const eventListElement = document.getElementById("event-list");
  const pastEventListElement = document.getElementById("past-event-list");
  const noticeListElement = document.getElementById("notice-list");

  eventListElement.innerHTML = "";
  pastEventListElement.innerHTML = "";
  noticeListElement.innerHTML = "";

  // Display notices
  noticeList.forEach((notice) => {
    const noticeItem = document.createElement("li");
    noticeItem.className = "notice-item";
    noticeItem.innerHTML = `<p>${notice}</p>`;
    noticeListElement.appendChild(noticeItem);
  });

  // Display upcoming events
  eventList.forEach((event) => {
    const eventItem = document.createElement("li");
    eventItem.className = "event-item";
    eventItem.innerHTML = `
      <span><strong>${event.name}</strong> - ${event.date}</span>
      <p>${event.description}</p>
    `;
    eventListElement.appendChild(eventItem);
  });

  // Display past events
  pastEventList.forEach((event) => {
    const eventItem = document.createElement("li");
    eventItem.className = "event-item past-event";
    eventItem.innerHTML = `
      <span><strong>${event.name}</strong> - ${event.date}</span>
      <p>${event.description}</p>
    `;
    pastEventListElement.appendChild(eventItem);
  });
}

// Load content (notices, events) when the page loads
document.addEventListener("DOMContentLoaded", loadContent);
